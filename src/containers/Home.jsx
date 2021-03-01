import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

class Home extends React.Component {
	render() {
		return (
			<Container>
				<Header />
				<Search />

				<Carousel title='milista'>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>

					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
				</Carousel>

				<Carousel title='mi lista'>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>

					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
					<CarouselItem
						title='In the Dark'
						year={2009}
						contentRating='16+'
						duration={164}
						cover='http://dummyimage.com/800x600.png/99118E/ffffff'
					/>
				</Carousel>
				<Footer />
			</Container>
		)
	}
}

export default Home
