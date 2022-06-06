# Mobile Phone Link Unified Interface
tel:, sms: link unified interface

problem
```html
<a href="sms:01022223333?body=text message">android</a>
<a href="sms:01022223333;body=text message">old iOS</a>
<a href="sms:01022223333&body=text message">new iOS</a>
```

usage
```javascript
let tel = document.getElementById('tel');
tel.href = mplui.tel('010-2222-3333');

let cell = document.getElementById('sms');
sms.href = mplui.sms('010-2222-3333', 'your message');
```

with require.js
```javascript
require(['mplui'], function(mplui) {
	let tel = document.getElementById('tel');
	tel.href = mplui.tel('010-2222-3333');

	let cell = document.getElementById('sms');
	sms.href = mplui.sms('010-2222-3333', 'your message');
});
```

use attribute
```html
<a href="#" class="tel" data-number="010-2222-3333">call</a>
<a href="#" class="sms" data-number="010-2222-3333" data-text="your message">sms</a>
<a href="#" class="sms this is old iOS bug" data-number="010-2222-3333" data-text="href ignored in old safari. always call.">010-2222-3333</a>
```
```javascript
mplui.tel(document.querySelectorAll('.tel'));

mplui.sms(document.querySelectorAll('.sms'));
```

test page : https://crucifyer.github.io/mplui/
