/* vim: set expandtab tabstop=4 shiftwidth=4: */
// +--------------------------------------------------------+
// | Copyright : Song Hyo-Jin <shj at xenosi.de>            |
// +--------------------------------------------------------+
// | Mobile Phone Link Unified Interface                    |
// +--------------------------------------------------------+
// | License : MIT                                          |
// +--------------------------------------------------------+
//
// $Id: mplui.js, 2022. 6. 6. crucify Exp $

(function() {
	let s = /OS (\d+)_\d+(?:_\d+)? like Mac OS X/.test(navigator.userAgent) ? (RegExp.$1 * 1 > 7 ? '&' : ';') : '?';
	function tel(o) {
		if(typeof(o) == 'string') {
			return 'tel:' + o.replace(/[^\d]+/g, '');
		}
		if(o.forEach) {
			o.forEach(b => { tel(b); });
			return;
		}
		o.href = tel(o.getAttribute('data-number'));
	}

	function sms(o, body) {
		if(typeof(o) == 'string') {
			let res = 'sms:' + o.replace(/[^\d]+/g, '');
			if(body) res += s + 'body=' + body;
			return res;
		}
		if(o.forEach) {
			o.forEach(b => { sms(b); });
			return;
		}
		o.href = sms(o.getAttribute('data-number'), o.getAttribute('data-text'));
	}

	let mplui = {
		tel: tel,
		sms: sms,
	};

	if(window.define) {
		define(() => mplui);
	} else {
		window.mplui = mplui;
	}
})();