function Class() {}
Class.extend = function (desc) {
    return function (el, options) {
        desc.constructor.apply(this, [el, options]);
        this.find = desc.find;
        this.extend = function (extended) {
            extended.constructor.bind(this);
            this.handleEvent = extended.handleEvent;
            this.toggle = extended.toggle;
            return this;
        }
    };

    // return {
    //     extend: (extended) =>  function (menu){
    //         this.menu = menu;
    //         desc.constructor.apply(this, [menu, 'options']);
    //         this.find =  desc.find;
    //         extended.constructor.bind(this);
    //         this.handleEvent = extended.handleEvent;
    //         this.toggle = extended.toggle;
    //     }
    // };
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
const dd = new Widget(menu);
console.log(dd);

/** @class Dropdown */
/** @extends Widget */
// var Dropdown = Widget.extend(/** @lends Dropdown.prototype */{
//     constructor: function () {
//         Widget.apply(this, arguments);
//         this.find('.js-ctrl').addEventListener('click', this.handleEvent);
//     },
//
//     handleEvent: function (evt) {
//         this.toggle();
//     },
//
//     toggle: function () {
//         var menu = this.find('.js-menu');
//         menu.classList.toggle('collapsed');
//     }
// });

//Используем
// const menu = document.getElementById('menu');
// const dd = new Dropdown(menu);

console.log('dd is Class:', dd instanceof Class);
console.log('dd is Widget:', dd instanceof Widget);
// console.log('dd is Dropdown:', dd instanceof Dropdown);

export default dd;



