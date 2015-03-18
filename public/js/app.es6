/**
 * This is following Aria's example here: https://github.com/aredridel/womp/blob/new-content-and-react/public/js/app.jsx
 *
 * Much hard coding is going on. Need to fix. Such wow.
 */

import React from 'react';
import ReactIntlMixin from 'react-intl';
import languagePack from '_languagepack';

let userLang = 'en-US';

let context = {
    locales: [userLang],
    messages: languagePack[userLang]['index.properties']
};

let Test = React.createClass({

    // integrate yahoo's react-intl stuff
    mixins: [ReactIntlMixin],

    render: function() {
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
