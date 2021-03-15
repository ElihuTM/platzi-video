import React from 'react'
import RegisterForm from '../components/RegisterForm'

class Register extends React.Component {
	render() {
		return (
			<section className="register">
				<section className="register__container">
					<h2>Regístrate</h2>
					<RegisterForm/>
					<a href="">Iniciar sesión</a>
				</section>
			</section>
		)
	}
}

export default Register
