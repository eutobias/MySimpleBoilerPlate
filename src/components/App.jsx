import React from 'react';
import OutroComponente from './OutroComponente';

export default class App extends React.Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h1>Hello World</h1>
				<OutroComponente /> 
			</div>);
	}
}