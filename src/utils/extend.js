/**
 * [ES5 类继承方法,兼容低版本IE]
 * @param  {[type]} subClass   [子类]
 * @param  {[type]} superClass [父类]
 * @return {[type]}            [子类的原型]
 */
function extend(subClass, superClass) {
    var o = function () { };
    o.prototype = superClass.prototype;
    subClass.prototype = new o();
    subClass.prototype.constructor = subClass;
    subClass.superClass = superClass.prototype;
    if (superClass.prototype.constructor === Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
    return subClass.prototype;
}