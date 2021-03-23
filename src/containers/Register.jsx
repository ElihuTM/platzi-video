import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from 'react-router-dom'

class Register extends React.Component {
	render() {
		return (
			<section className="register">
				<section className="register__container">
					<h2>Regístrate</h2>
					<RegisterForm {...this.props}/>
					<Link to='/login'>
						Iniciar sesión
					</ Link>
				</section>
			</section>
		)
	}
}

export default Register
