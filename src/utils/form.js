var form = {
    isNumber: isNumber, //判断是否是数字
    isInt: isInt, // 判断是否为整数
    isEmail: isEmail, // 判断是否为邮箱
    isMobileNum: isMobileNum,  //判断是否为手机号
    trim: trim,  // 去掉字符串两端的空格
    cTim: cTim,  // 去掉字符中间的空格
    isDate: isDate,  // 判断日期类型是否为YYYY-MM-DD格式的类型 
    isDateTime: isDateTime,  // 判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型  
    isTime: isTime,  // 判断日期类型是否为hh:mm:ss格式的类型  
    isLetter: isLetter,  // 判断是否为英文字母
    isInteger: isInteger,  // 判断是否为整数
    isPositiveNum: isPositiveNum,  // 判断是否为正整数
    isDouble: isDouble,  // 判断输入的字符是否为双精度  
    isChinese: isChinese,  // 判断输入的字符是否为中文 
    isURL: isURL,  // 判断URL是否正确  
    isIdNum: isIdNum,  // 身份号码证验证 
    isUserName: isUserName,  // 用户名验证

};

form.form = form;
module.exports = form;

/** 
* [isNumber 判断是否是数字] 
* @param {[type]} val [description] 
* @return {Boolean} [description] 
*/
function isNumber(val) {
    var regex = /^[\d|.]+$/;
    return regex.test(val);
}

/** 
* [isInt 判断是否为整数] 
* @param {[type]} val [description] 
* @return {Boolean} [description] 
*/
function isInt(val) {
    var regex = /^\d+$/;
    return regex.test(val);
}

/** 
* [isEmail 判断是否为邮箱] 
* @param {[type]} val [description] 
* @return {Boolean} [description] 
*/
function isEmail(val) {
    var regex = /^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/;
    return regex.test(email);
}

/** 
* [isMobileNum 判断是否为手机号] 
* @param {[type]} val [description] 
* @return {Boolean} [description] 
*/
function isMobileNum(val) {
    var regex = /^[1][0-9][0-9]{9}$/;
    return regex.test(tel);
}

// 去掉字符串两端的空格  
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 去除字符串中间空格  
function cTim(str) {
    return str.replace(/\s/g, '');
}

// 判断日期类型是否为YYYY-MM-DD格式的类型  
function isDate(str) {
    if (str != null && str.length != 0) {
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
        var r = str.match(reg);
        if (r != null) {
            return true;
        }
    }
    return false;
}

// 判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型  
function isDateTime(str) {
    if (str != null && str.length != 0) {
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if (r != null) {
            return true;
        }
    }
    return false;
}


// 判断日期类型是否为hh:mm:ss格式的类型  
function isTime(str) {
    if (str != null && str.length != 0) {
        reg = /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/
        if (reg.test(str)) {
            return true;// 请将“日期”改成你需要验证的属性名称!  
        }
    }
    return false;
}

// 判断输入的字符是否为英文字母  
function isLetter(str) {
    if (str != null && str.length != 0) {
        reg = /^[a-zA-Z]+$/;
        if (reg.test(str)) {
            return true;// 请将“英文字母类型”改成你需要验证的属性名称!  
        }
    }
    return false;
}

// 判断输入的字符是否为整数  
function isInteger(str) {
    if (str != null && str.length != 0) {
        reg = /^[-+]?\d*$/;
        if (reg.test(str)) {
            return true; 
        }
    }
    return false;
}

// 是否正整数  
function isPositiveNum(str) {
    if (str != null && str.length != 0) {
        var reg = /^\d+$/;
        if (reg.test(str)) {
            return true;// 请将“整数类型”要换成你要验证的那个属性名称！  
        }
    }
    return false;
}

// 判断输入的字符是否为双精度  
function isDouble(str) {
    if (str != null && str.length != 0) {
        reg = /^[-\+]?\d+(\.\d+)?$/;
        if (reg.test(str)) {
            return true;// 请将“双精度类型”要换成你要验证的那个属性名称！  
        }
    }
    return false;
}


// 判断输入的字符是否为中文  
function isChinese(str) {
    if (str != null && str.length != 0) {
        reg = /^[\u0391-\uFFE5]+$/;
        if (reg.test(str)) {
            return true;// 请将“字符串类型”要换成你要验证的那个属性名称！  
        }
    }
    return false;
}


// 判断URL是否正确  
function isURL(str) {

    if (str != null && str.length != 0) {

        var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
            + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' // ftp的user@  
            + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184  
            + '|' // 允许IP和DOMAIN（域名）  
            + '([0-9a-z_!~*\'()-]+.)*' // 域名- www.  
            + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名  
            + '[a-z]{2,6})' // first level domain- .com or .museum  
            + '(:[0-9]{1,4})?' // 端口- :80  
            + '((/?)|' // a slash isn't required if there is no file name  
            + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
        var re = new RegExp(strRegex);
        // re.test()  
        if (re.test(str)) {
            return true;
        }
    }
    return false;

}


// 身份证验证  
function isIdNum(str) {
    if (str == null || str.length == 0) {
        return false;
    }

    var City = {
        11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ",
        31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ",
        43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ",
        61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 "
    }
    var iSum = 0
    var info = ""
    if (!/^\d{17}(\d|x)$/i.test(str))
        return false;
    str = str.replace(/x$/i, "a");
    if (City[parseInt(str.substr(0, 2))] == null) {
        alert("Error:非法地区");
        return false;
    }
    sBirthday = str.substr(6, 4) + "-" + Number(str.substr(10, 2)) + "-" + Number(str.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"))
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
        alert("Error:非法生日");
        return false;
    }
    for (var i = 17; i >= 0; i--)
        iSum += (Math.pow(2, i) % 11) * parseInt(str.charAt(17 - i), 11)
    if (iSum % 11 != 1) {
        alert("Error:非法证号");
        return false;
    }
    returnCity[parseInt(str.substr(0, 2))] + "," + sBirthday + "," + (str.substr(16, 1) % 2 ? "男" : "女")
}

// 判断字符由字母和数字、下划线、点号组成。且开头的只能是下划线和字母  
function isUserName(str) {

    if (str != null && str.length != 0) {

        var reg = /^([a-zA-z_]{1})([\w]*)$/g;

        if (reg.test(str)) {
            return true;// 请将“字符串类型”要换成你要验证的那个属性名称！  
        }
    }
    return false;

}