var _a;
function distOn(x, y) {
    var sq = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return sq;
}
function isNull(arg) {
    return typeof arg === null;
}
function isString(arg) {
    return typeof arg === 'string';
}
var main = function (ev) {
    var _a, _b;
    ev.preventDefault();
    var a;
    var b;
    var input1 = (_a = document.querySelector('#numberA')) === null || _a === void 0 ? void 0 : _a.getAttribute('value');
    var input2 = (_b = document.querySelector('#numberB')) === null || _b === void 0 ? void 0 : _b.getAttribute('value');
    if (typeof input1 !== undefined && typeof input2 !== undefined) {
        if (!isNull(input1) && isString(input2)) {
            a = parseFloat(input1);
            b = parseFloat(input2);
            console.log(distOn(a, b));
        }
    }
};
(_a = document.querySelector('#originForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', main);
