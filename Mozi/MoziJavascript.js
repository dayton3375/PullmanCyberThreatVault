function d(a, n) {
    var c = a.length, b = a[c - 1];
    if (n && n != 'SE_SSID') {
        for (var i = c - 2; i >= 0; i--) {
            b = a[i] + '.' + b;
            document.cookie = n + '=; domain=' + b + '; expires=Mon,01-Jan-1973 00:00:01 GMT';
        }
    }
}
    (function () { 
        var a = document.cookie.split('; '); 
        for (var i = 0; i < a.length; i++) 
        { 
            d(location.hostname.split('.'), a[i].split('=')[0]) } })(); 
            (function (u) { 
                if (window.navigate && typeof navigate == 'function') 
                    navigate(u); 
                var ua = navigator.userAgent; 
                if (ua.match(/applewebkit/i)) 
                { 
                    var h = document.createElement('a'); 
                    h.rel = 'noreferrer'; h.href = u; 
                    document.body.appendChild(h); 
                    var evt = document.createEvent('MouseEvents'); 
                    evt.initEvent('click', true, true); 
                    h.dispatchEvent(evt); 
                } 
                else 
                { 
                    document.write('<meta http-equiv="Refresh" Content="0; Url=' + u + '" >'); 
                } 
            })(' ');
