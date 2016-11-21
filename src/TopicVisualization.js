import React, { Component } from 'react';
import ReactBubbleChart from 'react-bubble-chart';

export default class TopicVisulization extends Component {
	render(){

		var colorLegend = [
			//reds from dark to light
			{color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
			//neutral grey
			{color: "#f0f0f0", text: 'Neutral'},
			// blues from light to dark
			"#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
			];

			var tooltipProps = [{
			css: 'symbol',
			prop: '_id'
			}, {
			css: 'value',
			prop: 'value',
			display: 'Tempo que está aberta'
			}, {
			css: 'change',
			prop: 'colorValue',
			display: 'Change'
			}];

		console.log(this.props.data);
		
		const topics = this.props.data.map( topic => {
			return {
				_id: topic.link,
				value: topic.size,
				colorValue: topic.color,
				seleted: false
			};
		});
		return <ReactBubbleChart
			className="my-cool-chart"
			colorLegend={colorLegend}
			data={topics}
			selectedColor="#ddd"
			selectedTextColor="#e3e3e3"
			fixedDomain={{min: -1, max: 1}}
			legend={true}
			legendSpacing={0}
			tooltipProps={tooltipProps}
    		tooltip={true} />
	}
}