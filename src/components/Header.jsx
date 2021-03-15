import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/static/user-icon.png'

const Header = () => (
	<header className='header'>
		<Link to='/' className='header__logo'>
			<p className='header__logo--title'> Platzi<span>Video</span></p>
		</Link>
		<div className='header__menu'>
			<div className='header__menu--profile'>
				<img src={userIcon} alt='user icon' />
				<p> Perfil </p>
			</div>
			<ul>
				<li><Link to='/'> Cuenta </Link></li>
				<li><Link to='/login'> Cerrar Sesión </Link></li>
			</ul>
		</div>
	</header>
)

export default Header
