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

				<Carousel title='My list'>
					{this.props.myList.map (
						item => <CarouselItem
							key={shortid.generate()}
							{...item}
							isList
						/>
					)}
				</Carousel>

				{Object.keys(this.props.videos).map(name => (
					<Carousel title={name} key={shortid.generate()}>
						{(this.props.videos[name].length === 0)
							? <Spinner animation='border' variant='light'/>
							: this.props.videos[name].map( item => (
								<CarouselItem
									key={shortid.generate()}
									{...item}
								/>
							))
						}
					</Carousel>
				))}
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	videos: state.videos,
	myList: state.myList,
})

export default connect(mapStateToProps, null)(Home)
