/* vim: set expandtab tabstop=4 shiftwidth=4: */
// +--------------------------------------------------------+
// | Copyright : Song Hyo-Jin <shj at xenosi.de>            |
// +--------------------------------------------------------+
// | Mobile Phone Link Unified Interface                    |
// +--------------------------------------------------------+
// | License : MIT                                          |
// +--------------------------------------------------------+
//
// $Id: mplui.js, 2016. 3. 11. crucify Exp $

define(function() {
	var s = (function() {
			if(/OS (\d+)_\d+_\d+ like Mac OS X/.test(navigator.userAgent)) {
				return RegExp.$1 > '7' ? '&' : ';';
			} else {
				return '?';
			}
		})(),
		mplui = {
			tel: function(tel) {
				return 'tel:' + tel.replace(/[^\d]+/g, '');
			},
			$tel: function() {
				this.href = mplui.tel($(this).data('number'));
			},
			sms: function(sms, body) {
				var res = 'sms:' + sms.replace(/[^\d]+/g, '');
				if(body) res += s + 'body=' + body;
				return res;
			},
			$sms: function() {
				this.href = mplui.sms($(this).data('number'), $(this).data('text'));
			}
		};

	return mplui;
});