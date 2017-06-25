var router = require('koa-router')(),
	utils = require('../utils/resJSON'),
	dt = require('./data');

router.prefix('/tdmap');

function setPixel(radius, center) {
	var r = Math.random() * radius;
	var angle = Math.random() * 360;
	var x = center.x + Math.sin(angle * Math.PI / 180) * r;
	var y = center.y + Math.cos(angle * Math.PI / 180) * r;

	return {
		lng: x.toFixed(6),
		lat: y.toFixed(6)
	}
}

function getPxies(radius, center, count) {
	var arr = [];
	for (let i = 0; i < count; i++) {
		arr.push(setPixel(radius, center));
	}
	return arr;
}
router.post('/tile', function* (next) {
	let body = Object.assign(utils);
	body.data = [];

	let params = this.request.body;
	params.forEach((item) => {
		let temp = dt.find((a) => {
			return a.x == item.x && a.y == item.y && item.zoom == a.zoom;
		})
		if (temp) {
			let data = [];
			if (temp.data&&temp.data.length > 0) {
				data = temp.data;
			} else {
				//模拟
				// data = getPxies(0.0001, {
				// 	x: temp.lng,
				// 	y: temp.lat,
				// }, 100)
			}
			body.data.push({
				x: temp.x,
				y: temp.y,
				zoom: temp.zoom,
				data: data
			});
		}

	});



	this.body = body;
});

router.post('/bar', function* (next) {
	let body = Object.assign(utils);
	body.data = {
		name: "mrhu"
	};
	this.set('header', {
		'Content-Length': 1024,
		'Content-Type': 'text/plain;charset=utf8'
	});
	this.body = body;
});

module.exports = router;