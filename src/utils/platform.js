var _plarform;

function init() {
    if (_plarform) return;
    var ua = window.navigator.userAgent;
    _plarform = {
        isWeixin: (ua.match(/micromessenger/i) != null),
        isQQ: (ua.match(/QQ\//i) != null),
        isWeibo: (ua.toLowerCase().match(/WeiBo/i) == "weibo"),
        isAlipay: (ua.match(/AlipayClient|AliApp/i) != null) && (!(ua.toLowerCase().match(/WeiBo/i) == "weibo")),
        isYDbus: (ua.match(/ydbus/i) != null),
        isIOS: /(iphone)|(ipad)/ig.test(ua),
        isAndroid: /android/ig.test(ua)
    }
}
function plarform() {
    init();
    return Object.assign({}, _plarform);
}
plarform.plarform = plarform;

module.exports = plarform;