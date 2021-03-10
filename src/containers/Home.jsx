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
		this.API = 'http://localhost:3000/initalState'
		this.state = {
			videos: {
				mylist: [],
				originals: [],
				trends: [],
			},
		}
	}

	componentDidMount() {
		fetch(this.API)
			.then(response => response.json())
			.then(data => this.setState({
				videos: data,
			}))
	}

	render() {
		return (
			<Container>
				<Header />
				<Search />

				<Carousel title='my list'>
					{this.state.videos.mylist.map(item =>
					<CarouselItem key={shortid.generate()} {...item}/>
					)}
				</Carousel>

				<Carousel title='originals'>
					{this.state.videos.originals.map(item =>
					<CarouselItem key={shortid.generate()} {...item}/>
					)}
				</Carousel>

				<Carousel title='trends'>
					{this.state.videos.trends.map(item =>
					<CarouselItem key={shortid.generate()} {...item}/>
					)}
				</Carousel>
				<Footer />
			</Container>
		)
	}
}

export default Home
