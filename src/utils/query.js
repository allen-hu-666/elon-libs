function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

var querys;

var query = {
    get: function (key, force) {
        if (!!force || !querys)
            querys = getQueryString();
        return querys[key];
    },
    getAll: function (force) {
        console.log("更新了2")
        if (!!force || !querys)
            querys = getQueryString();
        return Object.assign({}, querys);
    }
}

query.query = query;
module.exports = query;