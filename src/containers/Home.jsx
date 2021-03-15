import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import shortid from 'shortid'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			videos: {
				mylist: [],
				originals: [],
				trends: [],
			},
		}
	}

	async componentDidMount() {
		const response = await fetch(process.env.REACT_APP_FAKE_API)
		const data = await response.json()

		this.setState({
			videos: data,
		})
	}

	render() {
		return (
			<React.Fragment>
				<Search />
				{Object.keys(this.state.videos).map(name =>
				<Carousel title={name} key={shortid.generate()}>
					{(name !== 'mylist' && this.state.videos[name].length === 0)
						? <Spinner animation='border' variant='light'/>
						: this.state.videos[name].map(item =>
						<CarouselItem key={shortid.generate()} {...item}/>)
					}
				</Carousel>
				)}
			</React.Fragment>
		)
	}
}

export default Home
