import React from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const LoginSocialMedia = () => (
	<section className="login__social-media">
		<div>
			<img src={googleIcon} alt='google icon'/> Inicia sesión con Google
		</div>
		<div>
			<img src={twitterIcon} alt='twitter icon'/> Inicia sesión con Twitter
		</div>
		<p className="login__social-media--register">
			No tienes ninguna cuenta <Link to='/register'>Regístrate</Link>
		</p>
	</section>
)

export default LoginSocialMedia
