function Class() {}
Class.extend = function (desc) {
    const current = function () {
        desc.constructor.apply(this, arguments);
    }
    current.prototype = Object.create(this.prototype);

    for (let key in desc) {
        if(key !== 'constructor') {
            current.prototype[key] = desc[key];
        }
    }

    current.__proto__ = Class;
    return current;
};

/** @class Widget */
const Widget = Class.extend(/** @lends Widget.prototype */{
    constructor: function (el, options) {
        this.el = el;
        this.options = options;
    },

    find: function (selector) {
        return this.el.querySelector(selector);
    }
});

/** @class Dropdown */
/** @extends Widget */
const Dropdown = Widget.extend(/** @lends Dropdown.prototype */{
    constructor: function () {
        Widget.apply(this, arguments);
        this.find('.js-ctrl').addEventListener('click', () => {
            this.handleEvent();
        });
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
const menu = document.getElementById('menu');
const dd = new Dropdown(menu);

//Тесты
console.log('dd is Class:', dd instanceof Class);
console.log('dd is Widget:', dd instanceof Widget);
console.log('dd is Dropdown:', dd instanceof Dropdown);

export default dd;



