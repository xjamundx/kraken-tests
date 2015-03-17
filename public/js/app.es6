'use strict';


requirejs.config({
    paths: {
        react: 'react',
        'react-intl': 'react-intl'
    },
    shim: {
        react: {
            exports: 'React'
        },
        "react-globalizer": {
            deps: ["react"]
        },
        'react-intl': {
            deps: ['react-globalizer'],
            exports: 'ReactIntlMixin'
        }
    }
});

require(['react', 'react-intl'], function (React, ReactIntl) {

    var app = {
        initialize: function () {

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
