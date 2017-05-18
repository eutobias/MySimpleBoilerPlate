// Libs
import React from "react";

// Components
import SimpleStatelessComponent from './SimpleStatelessComponent';

//CSS
require("../scss/test");

export default class App extends React.Component {
	render() {
		return (
			<div className="hello-world" style={{textAlign: 'center'}}>
        <h1>Hello World, im a app container</h1>

        <SimpleStatelessComponent />
      </div>);
	}
}
