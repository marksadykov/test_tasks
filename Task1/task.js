function Class() {}
Class.extend = function (desc) {
    console.log(desc);
    return class {
        _el;
        _options;
        constructor(el, options) {
            this._el = el;
            this._options = options;
        }

        find(selector) {
            desc.find(selector);
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
const widget = new Widget(menu, 'kek');
console.log(widget.find('a.js-ctrl'));

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
const menu = document.getElementById('menu');
const dd = new Dropdown(menu, 'kek');

export default widget;



