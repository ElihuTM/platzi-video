import React from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import Spinner from 'react-bootstrap/Spinner'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Search />
				{Object.keys(this.props.videos).map(name =>
				<Carousel title={name} key={shortid.generate()}>
					{(name !== 'myList' && this.props.videos[name].length === 0)
						? <Spinner animation='border' variant='light'/>
						: this.props.videos[name].map( item =>
						<CarouselItem
							key={shortid.generate()}
							{...item}
							isList={name === 'myList'}
						/>)
					}
				</Carousel>
				)}
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	videos: state.videos,
})

export default connect(mapStateToProps, null)(Home)
