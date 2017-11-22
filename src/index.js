import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Template from './Template'
import App from './App'

export default function (locals, callback) {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Template>
      <App />
    </Template>
    , locals.assets)
  callback(null, html)
}
