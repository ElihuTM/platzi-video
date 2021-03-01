import React from 'react'
import PropTypes from 'prop-types'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem = (props) => (
	<div className='carousel-item'>
		<img
			className='carousel-item__img'
			src={props.cover}
			alt={props.title}
		/>
		<div className='carousel-item__details'>
			<div>
				<img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
				<img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
			</div>
			<p className='carousel-item__details--title'> {props.title} </p>
			<p className='carousel-item__details--subtitle'>
				{`${props.year} ${props.contentRating} ${props.duration}`}
			</p>
		</div>
	</div>
)

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
}

export default CarouselItem
