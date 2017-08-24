import React from 'react';
import FunctionComponent from './FunctionComponent';
import Data from '../data/info';

require("../scss/main");

export default class App extends React.Component {
	render() {
		return (
			<div className="hello-world" style={{ textAlign: 'center' }}>
				<h1>Hello World</h1>
				<FunctionComponent data={Data} />
			</div>
		);
	}
}
