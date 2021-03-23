import React from 'react'
import PropTypes from 'prop-types'

const Carousel = ({children, title}) => (
	<section className='category'>
		<h3 className='category__title'> {title} </h3>
		<div className='carousel'>
			<div className='carousel__container'>
				{children}
			</div>
		</div>
	</section>
)

Carousel.propTypes = {
	title: PropTypes.string,
}

export default Carousel
