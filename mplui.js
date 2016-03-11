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
				return 'tel:' + tel;
			},
			$tel: function() {
				this.href = mplui.tel($(this).text());
			},
			sms: function(sms, body) {
				var res = 'sms:' + sms;
				if(body) res += s + 'body=' + body;
				return res;
			},
			$sms: function() {
				this.href = mplui.sms($(this).text(), $(this).data('text'));
			}
		};

	return mplui;
});