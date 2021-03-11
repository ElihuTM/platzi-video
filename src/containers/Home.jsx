import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'
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
			<Container>
				<Header />
				<Search />

				{Object.keys(this.state.videos).map(name =>
				<Carousel title={name} key={shortid.generate()}>
					{this.state.videos[name].map(item =>
					<CarouselItem key={shortid.generate()} {...item}/>
					)}
				</Carousel>
				)}

				<Footer />
			</Container>
		)
	}
}

export default Home
