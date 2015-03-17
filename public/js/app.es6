'use strict';


requirejs.config({
    paths: {
        react: '/components/react/react'
    }
});


require(['react'], function (React) {

    var app = {
        initialize: function () {
            // Your code here
            var Test = React.createClass({
                render: function() {
                    return (<div>
                        Non localized react content here
                    </div>);
                }
            });

            React.render(<Test />, document.getElementById('ReactContent'));

        }
    };

    app.initialize();

});
