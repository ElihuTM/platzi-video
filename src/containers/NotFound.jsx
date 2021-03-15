import React from 'react'
import { Link } from 'react-router-dom'

class NotFound extends React.Component {
	render() {
		return (
			<div className='not-found'>
				<h1>Error 404 Not Found</h1>
				<Link to='/'>
					home
				</Link>
			</div>
		)
	}
}

export default NotFound
