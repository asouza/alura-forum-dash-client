import React, { Component } from 'react';

export default class TopicVisulization extends Component {
	render(){
		const topics = this.props.data.map( topic => <tr>{topic.days}</tr>);
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