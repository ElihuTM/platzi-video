import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFavorite, deleteFavorite } from '../actions'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const deleteIcon='https://static.platzi.com' +
	'/media/public/uploads/' +
	'remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png'


const CarouselItem = (props) => {
	const {
		id, isList, cover, title, year, contentRating, duration
	} = props

	const handleSetFavorite = () => {
		props.setFavorite({
			id,
			cover,
			title,
			year,
			contentRating,
			duration,
		})
	}

	const handleDeleteFavorite = (itemId) => {
		props.deleteFavorite(itemId)
	}

	return (
		<div className='carousel-item'>
			<img
				className='carousel-item__img'
				src={cover}
				alt={title}
			/>
			<div className='carousel-item__details'>
				<div>
					<Link to={`/player/${id}`}>
						<img
							className='carousel-item__details--img'
							src={playIcon}
							alt='Play Icon'
						/>
					</Link>
					{ isList ?
						<img
							className='carousel-item__details--img'
							src={deleteIcon}
							alt='Delete Icon'
							onClick={() => handleDeleteFavorite(id)}
						/>
						: <img
							className='carousel-item__details--img'
							src={plusIcon}
							alt='Plus Icon'
							onClick={handleSetFavorite}
						/>
					}
				</div>
				<p className='carousel-item__details--title'> {title} </p>
				<p className='carousel-item__details--subtitle'>
					{`${year} ${contentRating} ${duration}`}
				</p>
			</div>
		</div>
	)
}

CarouselItem.propTypes = {
	id: PropTypes.number,
	isList: PropTypes.bool,
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
}

const mapDispacheToProps = {
	setFavorite,
	deleteFavorite,
}

export default connect(null, mapDispacheToProps)(CarouselItem)
