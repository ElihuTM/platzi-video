import React from 'react'
import userIcon from '../assets/static/user-icon.png'

const Header = () => (
	<header className='header'>
		<h1 className='header__logo'> Platzi<span>Video</span></h1>
		<div className='header__menu'>
			<div className='header__menu--profile'>
				<img src={userIcon} alt='user icon' />
				<p> Perfil </p>
			</div>
			<ul>
				<li><a href='/'> Cuenta </a></li>
				<li><a href='/login'> Cerrar Sesión </a></li>
			</ul>
		</div>
	</header>
)

export default Header
