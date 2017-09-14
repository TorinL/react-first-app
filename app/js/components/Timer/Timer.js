import React from 'react';

import { TimerHeader } from './TimerHeader';
import TimerButton from './TimerButton';



export default class Timer extends React.Component {
	constructor() {
		super()
		this.state = {
			time: 0,
			isStarted: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		this.timer = setInterval(
			() => this.startTimer(), 
			1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	startTimer() {
		this.setState(prevState => ({
			time: prevState.time += 1,
		}))
		this.setState({
			isStarted: true
		})
	}

	endTimer() {
		clearInterval(this.timer)
		this.setState({
			isStarted: false
		})
	}

	handleClick() {
		this.state.isStarted ? 
			this.endTimer() : 
			this.timer = setInterval(
			() => this.startTimer(), 
			1000)
	}

	render() {
		return(
			<div>
				<TimerHeader time={this.state.time} />
				<TimerButton handleClick={this.handleClick} isStarted={this.state.isStarted}/>
			</div>
		)
	}


}