import React, { Component } from 'react';

export default class TopicVisulization extends Component {
	render(){
		console.log(this.props.data);
		const topics = this.props.data.map( topic => <tr key={topic.link}><td>{topic.days}</td></tr>);
		return (
			<table>
				<tr>
					<td>dias</td>
				</tr>
				{topics}
			</table>
		);
	}
}