function Class(
) {this.kek = 'lll'; }
Class.extend = function (desc) {
    // this.prototype = desc;
    // console.log(desc);

    console.log(this);
    for (let key in desc) {
        this[String(key)] = desc[key];
    }
    for (let key in this) {
        console.log(key, desc[key]);
    }
    console.log(this);
    return this;
};

/** @class Widget */
var Widget = Class.extend(/** @lends Widget.prototype */{
    constructor: function (el, options) {
        this.el = el;
        this.options = options;
    },

    find: function (selector) {
        return this.el.querySelector(selector);
    },
});

/** @class Dropdown */
/** @extends Widget */
var Dropdown = Widget.extend(/** @lends Dropdown.prototype */{
    constructor: function () {
        Widget.apply(this, arguments);
        this.find('.js-ctrl').addEventListener('click', this.handleEvent);
    },

    handleEvent: function (evt) {
        this.toggle();
    },

    toggle: function () {
        var menu = this.find('.js-menu');
        menu.classList.toggle('collapsed');
    }
});

//Используем
const menu = document.getElementById('menu');
const dd = new Dropdown();
for(let prop in dd) {
    console.log(prop);
}

dd.constructor(menu, 'j');
console.log(dd);
console.log(dd.find('a.js-menu'));
console.log(dd.toggle());

console.log('dd is Class:', dd instanceof Class);
console.log('dd is Widget:', dd instanceof Widget);
console.log('dd is Dropdown:', dd instanceof Dropdown);

export default dd;



