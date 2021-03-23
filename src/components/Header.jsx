import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import gravatar from '../utils/gravatar'
import userIcon from '../assets/static/user-icon.png'
import PropTypes from 'prop-types'

const Header = (props) => {
	const { user } = props
	const hasUser = Object.keys(user).length > 0
	const handleLogout = () => {
		props.logoutRequest({})
	}
	return (
		<header className='header'>
			<Link to='/' className='header__logo'>
				<p className='header__logo--title'> Platzi<span>Video</span></p>
			</Link>
			<div className='header__menu'>
				<div className='header__menu--profile'>
					{(hasUser)
						? <img src={gravatar(user.email)} alt={user.email} />
						: <img src={userIcon} alt='user icon' />
					}
					<p> Perfil </p>
				</div>
				<ul>
					{hasUser && <li><Link to='/'> Cuenta </Link></li>}
					{(hasUser)
						? <li><Link to='/login' onClick={handleLogout}>
							Logout
						</Link></li>
						: <li><Link to='/login'>
							Login
						</Link></li>

					}
				</ul>
			</div>
		</header>
	)
}

Header.propTypes = {
	user: PropTypes.string,
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = {
	logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
