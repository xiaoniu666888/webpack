(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.marsUtils = {}));
})(this, (function (exports) { 'use strict';

    const message = "Hello rollup";

    const foo = () => {
        console.log(message);
    };

    exports.foo = foo;

}));
