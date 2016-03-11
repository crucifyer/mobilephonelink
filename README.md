# mobilephonelink
tel:, sms: link unified interface

need require.js
```javascript
require(['mplui'], function(mplui) {
	var tel = document.getElementById('#tel');
	tel.href = mplui.tel('010-2222-3333');
	
	var cell = document.getElementById('#sms');
	sms.href = mplui.sms('010-2222-3333', 'your message');
});
```

with jQuery
```html
<a href="#" class="tel">010-2222-3333</a>
<a href="#" class="sms" data-text="your message">010-2222-3333</a>
```
```javascript
require(['jquery', 'mplui'], function($, mplui) {
	$('a.tel').each(mplui.$tel);
	$('a.sms').each(mplui.sms);
});
```
