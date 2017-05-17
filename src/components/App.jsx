import React from 'react';
import OutroComponente from './OutroComponente';
import Test from './Test';

require("../scss/test");

export default class App extends React.Component {
	render() {
		return (
			<div className="hello-world" style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <OutroComponente />
      </div>);
	}
}
