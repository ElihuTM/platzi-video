import React from 'react'
import LoginForm from '../components/LoginForm'
import LoginSocialMedia from '../components/LoginSocialMedia'

class Login extends React.Component {
	render() {
		return (
			<section className="login">
				<section className="login__container">
					<h2>Inicia sesión</h2>
					<LoginForm {...this.props}/>
					<LoginSocialMedia />
				</section>
			</section>
		)
	}
}

export default Login
