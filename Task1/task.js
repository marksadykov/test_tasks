function Class() {}
Class.extend = function (desc) {
    return function (el, options) {
        desc.constructor.apply(this, [el, options]);
        this.find = desc.find;
        this.extend = (extended) => {
            extended.constructor.bind(this);
            this.handleEvent = extended.handleEvent;
            this.toggle = extended.toggle;
        }
    };
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

const menu = document.getElementById('menu');
const ddd = new Widget(menu, 'kek');
console.log(ddd);
console.log(ddd.find('a.js-ctrl'));

/** @class Dropdown */
/** @extends Widget */
var Dropdown = Widget.extend(/** @lends Dropdown.prototype */{
    constructor: function () {
        Widget.apply(this, arguments);
        this.find('.js-ctrl').addEventListener('click', this);
    },

    handleEvent: function (evt) {
        this.toggle();
    },

    toggle: function () {
        const menu = this.find('.js-menu');
        menu.classList.toggle('collapsed');
    }
});

//Используем
// const menu = document.getElementById('menu');
const dd = new Dropdown(menu);

export default dd;



