import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Template from './components/Template'
import App from './components/App'

export default function (locals, callback) {

    const html = ReactDOMServer.renderToStaticMarkup(
        <Template>
            <App />
        </Template>
        , locals.assets)
    callback(null, html)
}