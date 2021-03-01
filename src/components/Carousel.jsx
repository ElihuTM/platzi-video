import React from 'react'

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

export default Carousel
