/**
 * This is a hack to address react-intl's assumption of window.React.
 * Source: https://github.com/yahoo/react-intl/issues/4#issuecomment-75747028
 */

(function (window) {
    var r;

    if (typeof requirejs !== "undefined") {
        r = requirejs;
    } else if (typeof require !== "undefined") {
        r = require;
    } else {
        throw "RequireJS is not loaded!";
    }

    window.React = r.s.contexts["_"].defined.react;
})(this);
