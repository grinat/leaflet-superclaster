var amd =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = L;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return __webpack_require__(4)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"/\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/kdbush/src/sort.js\n\nfunction sortKD(ids, coords, nodeSize, left, right, depth) {\n    if (right - left <= nodeSize) return;\n\n    const m = (left + right) >> 1;\n\n    sort_select(ids, coords, m, left, right, depth % 2);\n\n    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);\n    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);\n}\n\nfunction sort_select(ids, coords, k, left, right, inc) {\n\n    while (right > left) {\n        if (right - left > 600) {\n            const n = right - left + 1;\n            const m = k - left + 1;\n            const z = Math.log(n);\n            const s = 0.5 * Math.exp(2 * z / 3);\n            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);\n            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));\n            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));\n            sort_select(ids, coords, k, newLeft, newRight, inc);\n        }\n\n        const t = coords[2 * k + inc];\n        let i = left;\n        let j = right;\n\n        swapItem(ids, coords, left, k);\n        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);\n\n        while (i < j) {\n            swapItem(ids, coords, i, j);\n            i++;\n            j--;\n            while (coords[2 * i + inc] < t) i++;\n            while (coords[2 * j + inc] > t) j--;\n        }\n\n        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);\n        else {\n            j++;\n            swapItem(ids, coords, j, right);\n        }\n\n        if (j <= k) left = j + 1;\n        if (k <= j) right = j - 1;\n    }\n}\n\nfunction swapItem(ids, coords, i, j) {\n    swap(ids, i, j);\n    swap(coords, 2 * i, 2 * j);\n    swap(coords, 2 * i + 1, 2 * j + 1);\n}\n\nfunction swap(arr, i, j) {\n    const tmp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = tmp;\n}\n\n// CONCATENATED MODULE: ./node_modules/kdbush/src/range.js\n\nfunction range(ids, coords, minX, minY, maxX, maxY, nodeSize) {\n    const stack = [0, ids.length - 1, 0];\n    const result = [];\n    let x, y;\n\n    while (stack.length) {\n        const axis = stack.pop();\n        const right = stack.pop();\n        const left = stack.pop();\n\n        if (right - left <= nodeSize) {\n            for (let i = left; i <= right; i++) {\n                x = coords[2 * i];\n                y = coords[2 * i + 1];\n                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);\n            }\n            continue;\n        }\n\n        const m = Math.floor((left + right) / 2);\n\n        x = coords[2 * m];\n        y = coords[2 * m + 1];\n\n        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);\n\n        const nextAxis = (axis + 1) % 2;\n\n        if (axis === 0 ? minX <= x : minY <= y) {\n            stack.push(left);\n            stack.push(m - 1);\n            stack.push(nextAxis);\n        }\n        if (axis === 0 ? maxX >= x : maxY >= y) {\n            stack.push(m + 1);\n            stack.push(right);\n            stack.push(nextAxis);\n        }\n    }\n\n    return result;\n}\n\n// CONCATENATED MODULE: ./node_modules/kdbush/src/within.js\n\nfunction within(ids, coords, qx, qy, r, nodeSize) {\n    const stack = [0, ids.length - 1, 0];\n    const result = [];\n    const r2 = r * r;\n\n    while (stack.length) {\n        const axis = stack.pop();\n        const right = stack.pop();\n        const left = stack.pop();\n\n        if (right - left <= nodeSize) {\n            for (let i = left; i <= right; i++) {\n                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);\n            }\n            continue;\n        }\n\n        const m = Math.floor((left + right) / 2);\n\n        const x = coords[2 * m];\n        const y = coords[2 * m + 1];\n\n        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);\n\n        const nextAxis = (axis + 1) % 2;\n\n        if (axis === 0 ? qx - r <= x : qy - r <= y) {\n            stack.push(left);\n            stack.push(m - 1);\n            stack.push(nextAxis);\n        }\n        if (axis === 0 ? qx + r >= x : qy + r >= y) {\n            stack.push(m + 1);\n            stack.push(right);\n            stack.push(nextAxis);\n        }\n    }\n\n    return result;\n}\n\nfunction sqDist(ax, ay, bx, by) {\n    const dx = ax - bx;\n    const dy = ay - by;\n    return dx * dx + dy * dy;\n}\n\n// CONCATENATED MODULE: ./node_modules/kdbush/src/index.js\n\n\n\n\n\nconst defaultGetX = p => p[0];\nconst defaultGetY = p => p[1];\n\nclass src_KDBush {\n    constructor(points, getX = defaultGetX, getY = defaultGetY, nodeSize = 64, ArrayType = Float64Array) {\n        this.nodeSize = nodeSize;\n        this.points = points;\n\n        const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;\n\n        const ids = this.ids = new IndexArrayType(points.length);\n        const coords = this.coords = new ArrayType(points.length * 2);\n\n        for (let i = 0; i < points.length; i++) {\n            ids[i] = i;\n            coords[2 * i] = getX(points[i]);\n            coords[2 * i + 1] = getY(points[i]);\n        }\n\n        sortKD(ids, coords, nodeSize, 0, ids.length - 1, 0);\n    }\n\n    range(minX, minY, maxX, maxY) {\n        return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);\n    }\n\n    within(x, y, r) {\n        return within(this.ids, this.coords, x, y, r, this.nodeSize);\n    }\n}\n\n// CONCATENATED MODULE: ./node_modules/supercluster/index.js\n\n\n\nconst defaultOptions = {\n    minZoom: 0,   // min zoom to generate clusters on\n    maxZoom: 16,  // max zoom level to cluster the points on\n    radius: 40,   // cluster radius in pixels\n    extent: 512,  // tile extent (radius is calculated relative to it)\n    nodeSize: 64, // size of the KD-tree leaf node, affects performance\n    log: false,   // whether to log timing info\n\n    // a reduce function for calculating custom cluster properties\n    reduce: null, // (accumulated, props) => { accumulated.sum += props.sum; }\n\n    // properties to use for individual points when running the reducer\n    map: props => props // props => ({sum: props.my_value})\n};\n\nclass supercluster_Supercluster {\n    constructor(options) {\n        this.options = extend(Object.create(defaultOptions), options);\n        this.trees = new Array(this.options.maxZoom + 1);\n    }\n\n    load(points) {\n        const {log, minZoom, maxZoom, nodeSize} = this.options;\n\n        if (log) console.time('total time');\n\n        const timerId = `prepare ${  points.length  } points`;\n        if (log) console.time(timerId);\n\n        this.points = points;\n\n        // generate a cluster object for each point and index input points into a KD-tree\n        let clusters = [];\n        for (let i = 0; i < points.length; i++) {\n            if (!points[i].geometry) continue;\n            clusters.push(createPointCluster(points[i], i));\n        }\n        this.trees[maxZoom + 1] = new src_KDBush(clusters, supercluster_getX, supercluster_getY, nodeSize, Float32Array);\n\n        if (log) console.timeEnd(timerId);\n\n        // cluster points on max zoom, then cluster the results on previous zoom, etc.;\n        // results in a cluster hierarchy across zoom levels\n        for (let z = maxZoom; z >= minZoom; z--) {\n            const now = +Date.now();\n\n            // create a new set of clusters for the zoom and index them with a KD-tree\n            clusters = this._cluster(clusters, z);\n            this.trees[z] = new src_KDBush(clusters, supercluster_getX, supercluster_getY, nodeSize, Float32Array);\n\n            if (log) console.log('z%d: %d clusters in %dms', z, clusters.length, +Date.now() - now);\n        }\n\n        if (log) console.timeEnd('total time');\n\n        return this;\n    }\n\n    getClusters(bbox, zoom) {\n        let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;\n        const minLat = Math.max(-90, Math.min(90, bbox[1]));\n        let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;\n        const maxLat = Math.max(-90, Math.min(90, bbox[3]));\n\n        if (bbox[2] - bbox[0] >= 360) {\n            minLng = -180;\n            maxLng = 180;\n        } else if (minLng > maxLng) {\n            const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);\n            const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);\n            return easternHem.concat(westernHem);\n        }\n\n        const tree = this.trees[this._limitZoom(zoom)];\n        const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));\n        const clusters = [];\n        for (const id of ids) {\n            const c = tree.points[id];\n            clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);\n        }\n        return clusters;\n    }\n\n    getChildren(clusterId) {\n        const originId = clusterId >> 5;\n        const originZoom = clusterId % 32;\n        const errorMsg = 'No cluster with the specified id.';\n\n        const index = this.trees[originZoom];\n        if (!index) throw new Error(errorMsg);\n\n        const origin = index.points[originId];\n        if (!origin) throw new Error(errorMsg);\n\n        const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));\n        const ids = index.within(origin.x, origin.y, r);\n        const children = [];\n        for (const id of ids) {\n            const c = index.points[id];\n            if (c.parentId === clusterId) {\n                children.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);\n            }\n        }\n\n        if (children.length === 0) throw new Error(errorMsg);\n\n        return children;\n    }\n\n    getLeaves(clusterId, limit, offset) {\n        limit = limit || 10;\n        offset = offset || 0;\n\n        const leaves = [];\n        this._appendLeaves(leaves, clusterId, limit, offset, 0);\n\n        return leaves;\n    }\n\n    getTile(z, x, y) {\n        const tree = this.trees[this._limitZoom(z)];\n        const z2 = Math.pow(2, z);\n        const {extent, radius} = this.options;\n        const p = radius / extent;\n        const top = (y - p) / z2;\n        const bottom = (y + 1 + p) / z2;\n\n        const tile = {\n            features: []\n        };\n\n        this._addTileFeatures(\n            tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),\n            tree.points, x, y, z2, tile);\n\n        if (x === 0) {\n            this._addTileFeatures(\n                tree.range(1 - p / z2, top, 1, bottom),\n                tree.points, z2, y, z2, tile);\n        }\n        if (x === z2 - 1) {\n            this._addTileFeatures(\n                tree.range(0, top, p / z2, bottom),\n                tree.points, -1, y, z2, tile);\n        }\n\n        return tile.features.length ? tile : null;\n    }\n\n    getClusterExpansionZoom(clusterId) {\n        let clusterZoom = (clusterId % 32) - 1;\n        while (clusterZoom <= this.options.maxZoom) {\n            const children = this.getChildren(clusterId);\n            clusterZoom++;\n            if (children.length !== 1) break;\n            clusterId = children[0].properties.cluster_id;\n        }\n        return clusterZoom;\n    }\n\n    _appendLeaves(result, clusterId, limit, offset, skipped) {\n        const children = this.getChildren(clusterId);\n\n        for (const child of children) {\n            const props = child.properties;\n\n            if (props && props.cluster) {\n                if (skipped + props.point_count <= offset) {\n                    // skip the whole cluster\n                    skipped += props.point_count;\n                } else {\n                    // enter the cluster\n                    skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);\n                    // exit the cluster\n                }\n            } else if (skipped < offset) {\n                // skip a single point\n                skipped++;\n            } else {\n                // add a single point\n                result.push(child);\n            }\n            if (result.length === limit) break;\n        }\n\n        return skipped;\n    }\n\n    _addTileFeatures(ids, points, x, y, z2, tile) {\n        for (const i of ids) {\n            const c = points[i];\n            const f = {\n                type: 1,\n                geometry: [[\n                    Math.round(this.options.extent * (c.x * z2 - x)),\n                    Math.round(this.options.extent * (c.y * z2 - y))\n                ]],\n                tags: c.numPoints ? getClusterProperties(c) : this.points[c.index].properties\n            };\n            const id = c.numPoints ? c.id : this.points[c.index].id;\n            if (id !== undefined) {\n                f.id = id;\n            }\n            tile.features.push(f);\n        }\n    }\n\n    _limitZoom(z) {\n        return Math.max(this.options.minZoom, Math.min(z, this.options.maxZoom + 1));\n    }\n\n    _cluster(points, zoom) {\n        const clusters = [];\n        const {radius, extent, reduce} = this.options;\n        const r = radius / (extent * Math.pow(2, zoom));\n\n        // loop through each point\n        for (let i = 0; i < points.length; i++) {\n            const p = points[i];\n            // if we've already visited the point at this zoom level, skip it\n            if (p.zoom <= zoom) continue;\n            p.zoom = zoom;\n\n            // find all nearby points\n            const tree = this.trees[zoom + 1];\n            const neighborIds = tree.within(p.x, p.y, r);\n\n            let numPoints = p.numPoints || 1;\n            let wx = p.x * numPoints;\n            let wy = p.y * numPoints;\n\n            const clusterProperties = reduce ? this._map(p, true) : null;\n\n            // encode both zoom and point index on which the cluster originated\n            const id = (i << 5) + (zoom + 1);\n\n            for (const neighborId of neighborIds) {\n                const b = tree.points[neighborId];\n                // filter out neighbors that are already processed\n                if (b.zoom <= zoom) continue;\n                b.zoom = zoom; // save the zoom (so it doesn't get processed twice)\n\n                const numPoints2 = b.numPoints || 1;\n                wx += b.x * numPoints2; // accumulate coordinates for calculating weighted center\n                wy += b.y * numPoints2;\n\n                numPoints += numPoints2;\n                b.parentId = id;\n\n                if (reduce) {\n                    reduce(clusterProperties, this._map(b));\n                }\n            }\n\n            if (numPoints === 1) {\n                clusters.push(p);\n            } else {\n                p.parentId = id;\n                clusters.push(createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));\n            }\n        }\n\n        return clusters;\n    }\n\n    _map(point, clone) {\n        if (point.numPoints) {\n            return clone ? extend({}, point.properties) : point.properties;\n        }\n        const original = this.points[point.index].properties;\n        const result = this.options.map(original);\n        return clone && result === original ? extend({}, result) : result;\n    }\n}\n\nfunction createCluster(x, y, id, numPoints, properties) {\n    return {\n        x, // weighted cluster center\n        y,\n        zoom: Infinity, // the last zoom the cluster was processed at\n        id, // encodes index of the first child of the cluster and its zoom level\n        parentId: -1, // parent cluster id\n        numPoints,\n        properties\n    };\n}\n\nfunction createPointCluster(p, id) {\n    const [x, y] = p.geometry.coordinates;\n    return {\n        x: lngX(x), // projected point coordinates\n        y: latY(y),\n        zoom: Infinity, // the last zoom the point was processed at\n        index: id, // index of the source feature in the original input array,\n        parentId: -1 // parent cluster id\n    };\n}\n\nfunction getClusterJSON(cluster) {\n    return {\n        type: 'Feature',\n        id: cluster.id,\n        properties: getClusterProperties(cluster),\n        geometry: {\n            type: 'Point',\n            coordinates: [xLng(cluster.x), yLat(cluster.y)]\n        }\n    };\n}\n\nfunction getClusterProperties(cluster) {\n    const count = cluster.numPoints;\n    const abbrev =\n        count >= 10000 ? `${Math.round(count / 1000)  }k` :\n        count >= 1000 ? `${Math.round(count / 100) / 10  }k` : count;\n    return extend(extend({}, cluster.properties), {\n        cluster: true,\n        cluster_id: cluster.id,\n        point_count: count,\n        point_count_abbreviated: abbrev\n    });\n}\n\n// longitude/latitude to spherical mercator in [0..1] range\nfunction lngX(lng) {\n    return lng / 360 + 0.5;\n}\nfunction latY(lat) {\n    const sin = Math.sin(lat * Math.PI / 180);\n    const y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);\n    return y < 0 ? 0 : y > 1 ? 1 : y;\n}\n\n// spherical mercator to longitude/latitude\nfunction xLng(x) {\n    return (x - 0.5) * 360;\n}\nfunction yLat(y) {\n    const y2 = (180 - y * 360) * Math.PI / 180;\n    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;\n}\n\nfunction extend(dest, src) {\n    for (const id in src) dest[id] = src[id];\n    return dest;\n}\n\nfunction supercluster_getX(p) {\n    return p.x;\n}\nfunction supercluster_getY(p) {\n    return p.y;\n}\n\n// CONCATENATED MODULE: ./src/SuperclusterWorker.js\n\n\nlet cluster = null\nlet lastLoadedFeatures = null\nlet childPointsIdsMap = {}\nlet clusterHashMap = {}\n\nself.onmessage = ({data}) => {\n  if (data.options.log) {\n    console.group(data.action)\n    console.time(data.action)\n    console.log('workerdata', data)\n  }\n\n  switch (data.action) {\n    case 'loadFeatures':\n      loadFeatures(data.data, data.options)\n      break\n    case 'clusteringData':\n      clusteringData(data.data, data.options)\n      break\n    case 'expansionZoom':\n      expansionZoom(data.data)\n      break\n    case 'pointsInCluster':\n      pointsInCluster(data.data)\n      break\n  }\n\n  if (data.options.log) {\n    console.timeEnd(data.action)\n    console.groupEnd(data.action)\n  }\n}\n\nfunction pointsInCluster({clusterId}) {\n  const features = cluster.getLeaves(clusterId, Infinity)\n\n  sendMessage('pointsInCluster', {\n    features,\n    clusterId\n  })\n}\n\nfunction expansionZoom({clusterId, latlng}) {\n  const zoom = cluster.getClusterExpansionZoom(clusterId)\n  sendMessage('expansionZoom', {\n    latlng,\n    zoom,\n    clusterId\n  })\n}\n\n/**\n * @link https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/\n * @param str\n * @returns {number}\n */\nfunction getHashOfString(str) {\n  let hash = 0\n  let i\n  let chr\n  if (str.length === 0) return hash\n  for (i = 0; i < str.length; i++) {\n    chr   = str.charCodeAt(i)\n    hash  = ((hash << 5) - hash) + chr\n    hash |= 0 // Convert to 32bit integer\n  }\n  return hash\n}\n\nfunction sendMessage (action, data = {}) {\n  data.action = action\n  postMessage(data)\n}\n\nfunction clusteringData({keptPointIds = [], bbox, zoom}, {log, bboxIncreasePer, appendChildIdsToCluster, optimizeRedraw}) {\n  if (!cluster) {\n    return\n  }\n\n  // зап  юг вост север\n  const [w, s, e, n] = bbox\n\n  let ewLen = (e - w) * bboxIncreasePer\n  if (ewLen < 0) ewLen = ewLen * -1\n  let nsLen = (n - s) * bboxIncreasePer\n  if (nsLen < 0) nsLen = nsLen * -1\n\n  const increasedBbox = [\n    w - ewLen,\n    s - nsLen,\n    e + ewLen,\n    n + nsLen\n  ]\n\n  const features = cluster.getClusters(increasedBbox, zoom)\n  const hasKeptPoints = keptPointIds.length > 0\n  const grabChild = appendChildIdsToCluster || optimizeRedraw\n\n  const fLen = features.length\n  const ids = []\n  for (let i = 0; i < fLen; i++) {\n    features[i].properties.composite_id = features[i].properties.cluster_id\n\n    if (features[i].properties.cluster && grabChild === true) {\n      childPointsIdsMap[features[i].properties.cluster_id] = childPointsIdsMap[features[i].properties.cluster_id] || getChildPointsIds(features[i].properties.cluster_id)\n      const childIds = childPointsIdsMap[features[i].properties.cluster_id]\n\n      if (appendChildIdsToCluster === true) {\n        features[i].properties.childIds = childIds\n      }\n\n      if (optimizeRedraw === true) {\n        clusterHashMap[features[i].properties.composite_id] = features[i].properties.composite_id || getHashOfString(\n          childIds.sort().join(';')\n        ).toString()\n        features[i].properties.composite_id = clusterHashMap[features[i].properties.composite_id]\n      }\n\n      if (hasKeptPoints === true) {\n        // TODO to for\n        keptPointIds.forEach(id => {\n          if (childIds.indexOf(id) > -1) {\n            features[i].properties.point_count--\n          }\n        })\n      }\n    }\n\n    if (features[i].properties.id) {\n      ids.push(features[i].properties.id)\n    }\n  }\n\n  if (grabChild) {\n    // TODO to for\n    keptPointIds.forEach(id => {\n      if (ids.indexOf(id) === -1 && lastLoadedFeatures) {\n        // find point and return as feature\n        const len = lastLoadedFeatures.length\n        for (let i = 0; i < len; i++) {\n          if (lastLoadedFeatures[i].properties.id === id) {\n            features.push(lastLoadedFeatures[i])\n            break\n          }\n        }\n      }\n    })\n  }\n\n  log && console.log('single markers ids', ids, 'keptPointIds', keptPointIds)\n\n  sendMessage('clusteringData', {\n    features,\n    zoom,\n    bbox\n  })\n}\n\nfunction getChildPointsIds(clusterId) {\n  if (childPointsIdsMap[clusterId]) {\n    return childPointsIdsMap[clusterId]\n  }\n\n  const ids = []\n\n  const stack = [clusterId]\n  while (stack.length) {\n    const id = stack.pop()\n    const childs = cluster.getChildren(id)\n\n    childs.forEach(children => {\n      if (children.properties.cluster) {\n        stack.push(children.properties.cluster_id)\n      } else {\n        ids.push(children.properties.id)\n      }\n    })\n  }\n\n  childPointsIdsMap[clusterId] = ids\n\n  return childPointsIdsMap[clusterId]\n}\n\nfunction loadFeatures({features = []}, {supercluster}) {\n  cluster = new supercluster_Supercluster(supercluster)\n  cluster.load(features)\n  lastLoadedFeatures = features\n  childPointsIdsMap = {}\n  clusterHashMap = {}\n  sendMessage('load')\n}\n\n\n\n/***/ })\n/******/ ]);\n//# sourceMappingURL=4e13ba28892cefcf9d26.worker.js.map", __webpack_require__.p + "4e13ba28892cefcf9d26.worker.js");
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperclusterGroup", function() { return SuperclusterGroup; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuperclusterWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _SuperclusterWorker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SuperclusterWorker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _supercluster_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _supercluster_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supercluster_scss__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

 // import SuperclusterWorker from 'worker-loader!./SuperclusterWorker'
// eslint-disable-next-line import/default



var SuperclusterGroup = leaflet__WEBPACK_IMPORTED_MODULE_0__["SuperclusterGroup"] = leaflet__WEBPACK_IMPORTED_MODULE_0__["FeatureGroup"].extend({
  options: {
    clusterIconFunc: null,
    pointIconFunc: null,
    optimizeRedraw: true,
    appendChildIdsToCluster: false,
    showClustersOnMaxZoom: true,
    showedSubClusterMultiplier: 2,
    showMarkersBeforeMaxZoom: 1,
    bboxIncreasePer: 0,
    moveToLastKept: false,
    moveToLastKeptBoundsMultiplier: 0.3,
    clusterzIndexOffset: 1000,
    pointzIndexOffset: 8000,
    maxMarkersInClusterOnOnePoint: 250,
    animated: false,
    spiderfyDistanceMultiplier: 0.8,
    log: false,
    legsStyle: {
      weight: 1,
      color: '#707070'
    },
    supercluster: {
      radius: 60,
      extent: 180,
      minZoom: null,
      maxZoom: null,
      log: false
    }
  },
  _geoJsonLayer: null,
  _worker: null,
  _map: null,
  _keptPointIds: [],
  _initWorker: function _initWorker() {
    var _this = this;

    this._worker = new _SuperclusterWorker__WEBPACK_IMPORTED_MODULE_1___default.a();

    this._worker.onmessage = function (d) {
      return _this._onWorkerMessage(d);
    };

    this._worker.onerror = function (e) {
      return _this.fire('error', e);
    };
  },
  _createGeoJsonLayer: function _createGeoJsonLayer() {
    var _this2 = this;

    this._geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__["geoJson"](null, {
      pointToLayer: function pointToLayer(feature, latlng) {
        return leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"](latlng, {
          zIndexOffset: feature.properties.cluster ? _this2.options.clusterzIndexOffset : _this2.options.pointzIndexOffset,
          icon: feature.properties.cluster ? _this2.options.clusterIconFunc(feature, latlng) : _this2.options.pointIconFunc(feature, latlng)
        });
      }
    });

    this._geoJsonLayer.on('click', this._geoJsonClick, this);

    this._geoJsonLayer.on('layerremove', function (_ref) {
      var layer = _ref.layer;

      _this2._checkAndUnKeepPoint(layer);
    });

    this._geoJsonLayer.on('popupclose', function (_ref2) {
      var layer = _ref2.layer;

      _this2._checkAndUnKeepPoint(layer);
    });

    this._geoJsonLayer.on('popupopen', function (_ref3) {
      var layer = _ref3.layer;

      _this2._checkAndKeepPoint(layer);
    });

    if (this.options.animated === true) {
      this._geoJsonLayer.on('layeradd', function (_ref4) {
        var layer = _ref4.layer;

        _this2._addClassToIcon(layer, 'animate-add');
      });
    }
  },
  _deleteLayerFromGeoJsonLayer: function _deleteLayerFromGeoJsonLayer(l) {
    this._recursiveRemoveAllOpenedClusterLayer(l);

    this._geoJsonLayer.removeLayer(l);
  },
  _geoJsonClick: function _geoJsonClick(_ref5) {
    var latlng = _ref5.latlng,
        layer = _ref5.layer;

    if (layer.feature.properties.cluster) {
      // on cluster click
      var isMaxZoom = this._map.getZoom() >= this._map.getMaxZoom();

      var clusterId = layer.feature.properties.cluster_id;
      var clusterOpened = !!layer._openedClusterLayer;

      if (clusterOpened) {
        this._closeCluster(layer);
      } else if (isMaxZoom === true) {
        this._sendMessage('pointsInCluster', {
          clusterId: clusterId
        });
      } else {
        this._sendMessage('expansionZoom', {
          clusterId: clusterId,
          latlng: latlng
        });
      }
    } else {
      this._onPointClick(null, layer);
    }
  },

  /**
   * @param parentLayer - exist if click by marker in subcluster
   * @param layer - marker layer
   * @private
   */
  _onPointClick: function _onPointClick(parentLayer, layer) {
    this.fire('point.click', {
      parentLayer: parentLayer,
      layer: layer
    });
  },
  _zoomEnd: function _zoomEnd() {
    this._clusteringData();
  },
  _moveEnd: function _moveEnd() {
    this._clusteringData();
  },
  _clusteringData: function _clusteringData() {
    var bounds = this._map.getBounds();

    var bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];

    var zoom = this._map.getZoom();

    this._sendMessage('clusteringData', {
      zoom: zoom,
      bbox: bbox,
      keptPointIds: this._keptPointIds
    });
  },
  _sendMessage: function _sendMessage(action) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var message = {
      action: action,
      data: data,
      options: {
        bboxIncreasePer: this.options.bboxIncreasePer,
        optimizeRedraw: this.options.optimizeRedraw,
        supercluster: this.options.supercluster,
        log: this.options.log
      }
    };

    this._worker.postMessage(message);
  },
  loadGeoJsonData: function loadGeoJsonData(featuresOrFutureCollection) {
    var features = [];

    if (Array.isArray(featuresOrFutureCollection)) {
      features = featuresOrFutureCollection;
    } else {
      features = featuresOrFutureCollection.features;
    }

    this._sendMessage('loadFeatures', {
      features: features
    });
  },
  _checkAndKeepPoint: function _checkAndKeepPoint(layer) {
    if (layer instanceof leaflet__WEBPACK_IMPORTED_MODULE_0__["Marker"] && !layer.feature.properties.subCluster) {
      this.keepPoint(layer.feature.properties.id);
    }
  },
  _checkAndUnKeepPoint: function _checkAndUnKeepPoint(layer) {
    if (layer instanceof leaflet__WEBPACK_IMPORTED_MODULE_0__["Marker"] && !layer.feature.properties.subCluster) {
      this.unKeepPoint(layer.feature.properties.id);
    }
  },
  keepPoint: function keepPoint(id) {
    if (this._keptPointIds.indexOf(id) > -1) {
      return;
    }

    this.options.log && console.log('keepPoint', id);

    this._keptPointIds.push(id);

    if (!this.options.optimizeRedraw) {
      console.warn('keepPoint worked only if optimizeRedraw=true');
    }
  },
  unKeepPoint: function unKeepPoint(id) {
    if (this._keptPointIds.length > 0) {
      this.options.log && console.log('unKeepPoint', id);
      this._keptPointIds = this._keptPointIds.filter(function (v) {
        return v !== id;
      }); // if we click on point is kept
      // if we minimize zoom, kep point remove from cluster
      // we need recalc cluster for get correct cluster size

      this._clusteringData();
    }
  },
  moveToLastKept: function moveToLastKept() {
    this.options.log && console.log('move to last');

    var layers = this._geoJsonLayer.getLayers();

    var lastId = this._keptPointIds[this._keptPointIds.length - 1];

    if (!lastId) {
      return;
    }

    var layer = layers.find(function (l) {
      return l.feature.properties.id === lastId;
    });

    if (!layer) {
      return;
    }

    var _this$_getDistanceFro = this._getDistanceFromMapCenter(),
        distMin = _this$_getDistanceFro.distMin;

    var bounds = leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"](layer.getLatLng().toBounds(distMin * this.options.moveToLastKeptBoundsMultiplier));

    var lastInView = this._map.getBounds().contains(bounds);

    if (!lastInView) {
      this._map.setView(bounds.getCenter());
    }
  },
  _onWorkerMessage: function _onWorkerMessage(_ref6) {
    var data = _ref6.data;

    if (this.options.log) {
      console.group(data.action);
      console.time(data.action);
      console.log('workerdata', data);
    }

    switch (data.action) {
      case 'clusteringData':
        this._drawItems(data.features, data.zoom);

        break;

      case 'load':
        this._clusteringData(data);

        break;

      case 'expansionZoom':
        this._expansionZoom(data);

        break;

      case 'pointsInCluster':
        this._openCluster(data);

        break;
    }

    if (this.options.log) {
      console.timeEnd(data.action);
      console.groupEnd(data.action);
    }
  },
  _expansionZoom: function _expansionZoom(_ref7) {
    var latlng = _ref7.latlng,
        zoom = _ref7.zoom;

    this._map.setView(latlng, zoom);
  },
  _drawItems: function _drawItems(features, zoom) {
    var _this3 = this;

    var currentZoom = this._map.getZoom();

    if (currentZoom !== zoom) {
      // skip redraw data if user fast change zoom
      return;
    }

    var layers = this._geoJsonLayer.getLayers();

    var len = layers.length;

    if (this.options.optimizeRedraw === false || len === 0) {
      // for remove all clusters and subclusters
      layers.forEach(function (l) {
        _this3._deleteLayerFromGeoJsonLayer(l);
      });

      this._geoJsonLayer.addData(features);
    } else {
      var addMarkerFeaturesMap = {};
      var addClustersFeaturesMap = {}; // create new features map

      var gLen = features.length;

      for (var i = 0; i < gLen; i++) {
        if (features[i].properties.cluster) {
          addClustersFeaturesMap[features[i].properties.composite_id] = features[i];
        } else {
          addMarkerFeaturesMap[features[i].properties.id] = features[i];
        }
      } // remove or update


      var lLen = layers.length;

      for (var _i = 0; _i < lLen; _i++) {
        var l = layers[_i];

        if (l.feature.properties.cluster) {
          this._removeOrUpdateLayer(l, addClustersFeaturesMap, 'composite_id');
        } else {
          this._removeOrUpdateLayer(l, addMarkerFeaturesMap, 'id');
        }
      } // add clusters


      this._geoJsonLayer.addData(Object.values(addClustersFeaturesMap)); // add markers to map


      this._geoJsonLayer.addData(Object.values(addMarkerFeaturesMap));
    }

    this.options.moveToLastKept && this.moveToLastKept();
    this.fire('draw', {
      layer: this._geoJsonLayer
    });
  },
  _removeOrUpdateLayer: function _removeOrUpdateLayer(l, featureIdMap, propKey) {
    var id = l.feature.properties[propKey];

    if (featureIdMap[id]) {
      // update marker pos
      l.setLatLng(new leaflet__WEBPACK_IMPORTED_MODULE_0__["LatLng"](featureIdMap[id].geometry.coordinates[1], featureIdMap[id].geometry.coordinates[0]));

      if (l.feature.properties.cluster && l.feature.properties.point_count !== featureIdMap[id].properties.point_count) {
        // update feature info
        l.feature = featureIdMap[id]; // update icon with count

        l.setIcon(this.options.clusterIconFunc(l.feature));
      } else {
        // update feature info
        l.feature = featureIdMap[id];
      } // remove marker from featureMap


      delete featureIdMap[id];
      this.fire('layer.updated', {
        layer: l
      });
      this.options.animated && this._addClassToIcon(l, 'animate-move');

      this._updateMarkersInOpenedClusterLayer(l);
    } else {
      // layer not exist in featureMap
      this._deleteLayerFromGeoJsonLayer(l);
    }
  },
  _clusterIconFunc: function _clusterIconFunc(feature) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_0__["DivIcon"]({
      className: 'supercluster',
      html: "<div class=\"cluster-icon\">".concat(feature.properties.point_count, "</div>"),
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });
  },
  _pointIconFunc: function _pointIconFunc() {
    return new leaflet__WEBPACK_IMPORTED_MODULE_0__["DivIcon"]({
      className: 'supercluster',
      html: '<div class="point-icon"><div class="pulsate"></div></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });
  },

  /**
   * @override
   */
  initialize: function initialize() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var opt in options) {
      if (this.options.hasOwnProperty(opt)) {
        if (this.options[opt] instanceof Object) {
          this.options[opt] = Object.assign(this.options[opt], options[opt]);
        } else {
          this.options[opt] = options[opt];
        }
      }
    }

    this.options.clusterIconFunc = this.options.clusterIconFunc || this._clusterIconFunc;
    this.options.pointIconFunc = this.options.pointIconFunc || this._pointIconFunc;

    this._initWorker();
  },

  /**
   * @override
   */
  onAdd: function onAdd(map) {
    this._map = map;

    if (!this.options.supercluster.maxZoom) {
      this.options.supercluster.maxZoom = this._map.getMaxZoom();

      if (!this.options.showClustersOnMaxZoom) {
        this.options.supercluster.maxZoom = this._map.getMaxZoom() - this.options.showMarkersBeforeMaxZoom;
      }
    }

    if (!this.options.supercluster.minZoom) {
      this.options.supercluster.minZoom = this._map.getMinZoom();
    }

    this._createGeoJsonLayer();

    this._geoJsonLayer.addTo(this._map);

    this._map.on('zoomend', this._zoomEnd, this);

    this._map.on('moveend', this._moveEnd, this);

    this._clusteringData();
  },

  /**
   * @override
   */
  onRemove: function onRemove(map) {
    map.off('zoomend', this._zoomEnd, this);
    map.off('moveend', this._moveEnd, this);

    this._geoJsonLayer.clearLayers();
  },
  _updateMarkersInOpenedClusterLayer: function _updateMarkersInOpenedClusterLayer(layer) {
    if (!layer._openedClusterLayer) {
      return;
    } // refresh all markers


    var clusterId = layer.feature.properties.cluster_id;

    this._sendMessage('pointsInCluster', {
      clusterId: clusterId
    });
  },
  _closeCluster: function _closeCluster(layer) {
    this._recursiveRemoveAllOpenedClusterLayer(layer);

    this._removeClassFromIcon(layer, 'opened');
  },
  _updateMarkersInCluster: function _updateMarkersInCluster(parentLayer, features, legs) {
    // create map from exist features
    var featureIdMap = {};
    var len = features.length;

    for (var i = 0; i < len; i++) {
      featureIdMap[features[i].properties.id] = features[i];
    } // update or remove marker positions


    var subLayers = parentLayer._openedClusterLayer.getLayers();

    var subLen = subLayers.length;

    for (var _i2 = 0; _i2 < subLen; _i2++) {
      var l = subLayers[_i2];
      var id = l.feature.properties.id;

      if (featureIdMap[id]) {
        l.setLatLng(new leaflet__WEBPACK_IMPORTED_MODULE_0__["LatLng"](featureIdMap[id].geometry.coordinates[1], featureIdMap[id].geometry.coordinates[0]));
        l.feature = featureIdMap[id];
        this.fire('layer.updated', {
          layer: l
        }); // try to update data in subcluster

        if (l._openedClusterLayer && l.feature.properties.features) {
          // create spiral or subcluster in subcluster
          var _this$_segmentFeature = this._segmentFeaturesForLayer(l, l.feature.properties.features),
              segmentalFeatures = _this$_segmentFeature.segmentalFeatures,
              _legs = _this$_segmentFeature.legs;

          this._updateMarkersInCluster(l, segmentalFeatures, _legs);
        } else {
          // if in new markers not segments - remove
          this._recursiveRemoveAllOpenedClusterLayer(l); // mark as closed


          this._removeClassFromIcon(l, 'opened');
        } // if marker updated - remove from map


        delete featureIdMap[id];
      } else {
        this._recursiveRemoveAllOpenedClusterLayer(l);

        parentLayer._openedClusterLayer.removeLayer(l);
      }
    } // insert markers which not exist in subLayers


    var featuresForCreate = Object.values(featureIdMap);

    parentLayer._openedClusterLayer.addData([].concat(_toConsumableArray(featuresForCreate), _toConsumableArray(legs)));
  },
  _createMarkersInCluster: function _createMarkersInCluster(parentLayer, features, legs) {
    var _this4 = this;

    parentLayer._openedClusterLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__["geoJson"]([].concat(_toConsumableArray(features), _toConsumableArray(legs)), {
      pointToLayer: function pointToLayer(feature, latlng) {
        if (feature.properties.subCluster) {
          return leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"](latlng, {
            zIndexOffset: _this4.options.clusterzIndexOffset,
            icon: _this4.options.clusterIconFunc(feature, latlng)
          });
        }

        return leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"](latlng, {
          zIndexOffset: _this4.options.pointzIndexOffset,
          icon: _this4.options.pointIconFunc(feature, latlng)
        });
      },
      // we draw line from cluster center to point set style for that
      style: this.options.legsStyle
    }).addTo(this._map);

    parentLayer._openedClusterLayer.on('click', function (_ref8) {
      var layer = _ref8.layer;

      // detect is a point
      if (layer instanceof leaflet__WEBPACK_IMPORTED_MODULE_0__["Marker"]) {
        if (layer.feature.properties.subCluster) {
          _this4._toggleSubCluster(layer);
        } else {
          _this4._onPointClick(parentLayer, layer);
        }
      } // else it could be path to points

    });
  },
  _recursiveRemoveAllOpenedClusterLayer: function _recursiveRemoveAllOpenedClusterLayer(l) {
    var _this5 = this;

    if (l._openedClusterLayer) {
      var layers = l._openedClusterLayer.getLayers();

      layers.forEach(function (subL) {
        _this5._recursiveRemoveAllOpenedClusterLayer(subL);

        l._openedClusterLayer.removeLayer(subL);
      });

      this._map.removeLayer(l._openedClusterLayer);

      l._openedClusterLayer = null;
    }
  },
  _toggleSubCluster: function _toggleSubCluster(layer) {
    if (layer._openedClusterLayer) {
      this._closeSubCluster(layer);
    } else {
      this._openSubCluster(layer, layer.feature.properties.features);
    }
  },
  _openCluster: function _openCluster(_ref9) {
    var clusterId = _ref9.clusterId,
        features = _ref9.features;

    var layers = this._geoJsonLayer.getLayers();

    var parentLayer = layers.find(function (l) {
      return l.feature.properties.cluster_id === clusterId;
    });

    if (!parentLayer) {
      return;
    }

    var _this$_segmentFeature2 = this._segmentFeaturesForLayer(parentLayer, features),
        segmentalFeatures = _this$_segmentFeature2.segmentalFeatures,
        legs = _this$_segmentFeature2.legs;

    if (parentLayer._openedClusterLayer) {
      this._updateMarkersInCluster(parentLayer, segmentalFeatures, legs);
    } else {
      this._createMarkersInCluster(parentLayer, segmentalFeatures, legs);
    }

    this._addClassToIcon(parentLayer, 'opened');
  },
  _closeSubCluster: function _closeSubCluster(parentLayer) {
    if (!parentLayer._openedClusterLayer) {
      return;
    }

    this._map.removeLayer(parentLayer._openedClusterLayer);

    parentLayer._openedClusterLayer = null;

    this._removeClassFromIcon(parentLayer, 'opened');
  },
  _openSubCluster: function _openSubCluster(parentLayer, features) {
    var _this$_segmentFeature3 = this._segmentFeaturesForLayer(parentLayer, features),
        segmentalFeatures = _this$_segmentFeature3.segmentalFeatures,
        legs = _this$_segmentFeature3.legs;

    if (parentLayer._openedClusterLayer) {
      this._updateMarkersInCluster(parentLayer, segmentalFeatures, legs);
    } else {
      this._createMarkersInCluster(parentLayer, segmentalFeatures, legs);
    }

    this._addClassToIcon(parentLayer, 'opened');
  },
  _getDistanceFromMapCenter: function _getDistanceFromMapCenter() {
    var center = this._map.getCenter();

    var bounds = this._map.getBounds();

    var centerEast = leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"](center.lat, bounds.getEast());
    var distCenterToEast = center.distanceTo(centerEast);
    var centerNorth = leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"](bounds.getNorth(), center.lng);
    var distCenterToNorth = center.distanceTo(centerNorth);
    var distMin = distCenterToEast > distCenterToNorth ? distCenterToNorth : distCenterToEast;
    this.options.log && console.log({
      distCenterToEast: distCenterToEast,
      distCenterToNorth: distCenterToNorth,
      distMin: distMin
    });
    return {
      distCenterToEast: distCenterToEast,
      distCenterToNorth: distCenterToNorth,
      distMin: distMin
    };
  },
  _segmentFeaturesForLayer: function _segmentFeaturesForLayer(parentLayer, features) {
    var parentCenter = parentLayer.getLatLng();

    var segmentalFeatures = this._segmentFeatures(features, parentCenter);

    var legs = this._getLegsForMarkersInCluster(parentCenter, segmentalFeatures);

    return {
      segmentalFeatures: segmentalFeatures,
      legs: legs
    };
  },
  _segmentFeatures: function _segmentFeatures(features, parentCenter) {
    // we need to align data by id sor saving order
    // and prevent popup rotate
    features.sort(function (a, b) {
      if (a.properties.id > b.properties.id) {
        return 1;
      }

      if (a.properties.id < b.properties.id) {
        return -1;
      }

      return 0;
    });
    var len = features.length;
    var maxMarkersInClusterOnOnePoint = this.options.maxMarkersInClusterOnOnePoint;
    var subClusterCount = Math.ceil(len / maxMarkersInClusterOnOnePoint);

    if (len <= maxMarkersInClusterOnOnePoint) {
      return this._createSpiral(features, parentCenter);
    } // build points for subcluster


    var subClusters = [];

    for (var i = 0; i < subClusterCount; i++) {
      var featuresInSubCluster = features.slice(i * maxMarkersInClusterOnOnePoint, (i + 1) * maxMarkersInClusterOnOnePoint);
      subClusters.push({
        type: 'Feature',
        properties: {
          id: "sub_".concat(i),
          subCluster: true,
          point_count: featuresInSubCluster.length,
          features: featuresInSubCluster
        },
        geometry: {
          type: 'Point',
          coordinates: []
        }
      });
    }

    return this._createSpiral(subClusters, parentCenter, true);
  },
  _createSpiral: function _createSpiral(features, parentCenter) {
    var isSubCluster = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var spiralLengthFactor = 5;
    var spiderfyDistanceMultiplier = this.options.spiderfyDistanceMultiplier * (isSubCluster ? this.options.showedSubClusterMultiplier : 1);
    var spiralFootSeparation = 28;
    var spiralLengthStart = 11;

    var centerPt = this._map.latLngToLayerPoint(parentCenter);

    var pi2 = Math.PI * 2;
    var count = features.length;
    var separation = spiderfyDistanceMultiplier * spiralFootSeparation;
    var lengthFactor = spiderfyDistanceMultiplier * spiralLengthFactor * pi2;
    var legLength = spiderfyDistanceMultiplier * spiralLengthStart;
    var angle = 0;
    var i;
    var p;
    var coords;
    var newFeatures = []; // Higher index, closer position to cluster center.

    for (i = count; i >= 0; i--) {
      // Skip the first position, so that we are already farther from center and we avoid
      // being under the default cluster icon (especially important for Circle Markers).
      if (i < count) {
        p = new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round();
        coords = this._map.layerPointToLatLng(p);
        features[i].geometry.coordinates = [coords.lng, coords.lat];
        newFeatures.push(features[i]);
      }

      angle += separation / legLength + i * 0.0005;
      legLength += lengthFactor / angle;
    }

    return newFeatures;
  },
  _getLegsForMarkersInCluster: function _getLegsForMarkersInCluster(parentCenter, features) {
    var parentCenterGeometry = [parentCenter.lng, parentCenter.lat];
    var legs = [];
    var len = features.length;

    for (var i = 0; i < len; i++) {
      legs.push({
        type: 'LineString',
        coordinates: [features[i].geometry.coordinates, parentCenterGeometry]
      });
    }

    return legs;
  },
  _addClassToIcon: function _addClassToIcon(l, name) {
    if (l._icon && l._icon.classList) {
      l._icon.classList.add(name);
    }
  },
  _removeClassFromIcon: function _removeClassFromIcon(l, name) {
    if (l._icon && l._icon.classList) {
      l._icon.classList.remove(name);
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=leaflet-superclaster.js.map