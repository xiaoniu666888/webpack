var marsUtils = (function (exports) {
    'use strict';

    const message = "Hello rollup";

    const foo = () => {
        console.log(message);
    };

    exports.foo = foo;

    return exports;

})({});
