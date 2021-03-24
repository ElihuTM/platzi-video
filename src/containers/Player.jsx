import React from 'react'
import { connect } from 'react-redux'
import { getVideoSource, resetVideoSource } from '../actions'
import NotFound from './NotFound'

class Player extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			hasPlaying: false,
			id: this.props.match.params,
		}
	}

	async componentDidMount() {
		await this.props.getVideoSource(this.state.id)
		this.setState(prevState => ({
			...prevState,
			hasPlaying: Object.keys(this.props.playing).length > 0,
		}))
	}

	goBack() {
		this.props.resetVideoSource()
		this.props.history.goBack()
	}

	render() {
		return this.state.hasPlaying ? (
			<div className='player'>
				<video controls autoPlay>
					<source
						src={this.props.playing.source}
						type='video/mp4'
					/>
				</video>
				<div className='player-back'>
					<button type='button' onClick={this.goBack.bind(this)}>
						return
					</button>
				</div>
			</div>
		) : <NotFound/>
	}
}

const mapStateToProps = state => ({
	playing: state.playing,
})

const mapDispatchToProps = {
	getVideoSource,
	resetVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
