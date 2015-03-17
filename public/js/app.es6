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

/**
 * This is following Aria's example here: https://github.com/aredridel/womp/blob/new-content-and-react/public/js/app.jsx
 *
 * Much hard coding is going on. Need to fix. Such wow.
 */

var userLang = 'en-US'; // or de-DE

require(['react', 'react-intl', '../'+userLang+'/_languagepack.js'], function (React, ReactIntl) {

    var app = {
        initialize: function () {

            // By requiring /en-US/_languagepack, it defines _languagepack with {en-US: {...}}.
            require(['_languagepack'], function(languagePack) {

                var context = {
                    locales: [userLang],
                    messages: languagePack[userLang]['index.properties']
                };

                var Test = React.createClass({

                    // integrate yahoo's react-intl stuff
                    mixins: [ReactIntlMixin],

                    render: function() {
                        console.log(this);
                        return (<div>
                            <p>{this.formatMessage(this.getIntlMessage('greeting'), {
                                      name: "World"
                                  })}</p>

                        </div>);
                    }
                });

                // react-intl depends on knowing some context from _languagepack
                React.render(
                    <Test {...context} />,
                    document.getElementById('ReactContent')
                );
            });
        }
    };

    app.initialize();
});
