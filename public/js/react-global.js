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
