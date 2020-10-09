# Mobile Phone Link Unified Interface
tel:, sms: link unified interface

problem
```html
<a href="sms:01022223333?body=text message">android</a>
<a href="sms:01022223333;body=text message">old iOS</a>
<a href="sms:01022223333&body=text message">new iOS</a>
```

need require.js
```javascript
require(['mplui'], function(mplui) {
	var tel = document.getElementById('tel');
	tel.href = mplui.tel('010-2222-3333');
	
	var cell = document.getElementById('sms');
	sms.href = mplui.sms('010-2222-3333', 'your message');
});
```

with jQuery
```html
<a href="#" class="tel" data-number="010-2222-3333">call</a>
<a href="#" class="sms" data-number="010-2222-3333" data-text="your message">sms</a>
<a href="#" class="sms this is iOS bug" data-number="010-2222-3333" data-text="href ignored in safari. always call.">010-2222-3333</a>
```
```javascript
require(['jquery', 'mplui'], function($, mplui) {
	$('a.tel').each(mplui.$tel);
	$('a.sms').each(mplui.$sms);
});
```

test page : https://crucifyer.github.io/mplui/
