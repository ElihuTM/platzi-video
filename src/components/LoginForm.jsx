import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '../actions'
import Form from 'react-bootstrap/Form'

const LoginForm = (props) => {
	const [form, setValues] = useState({
		email: '',
		password: '',
	})

	const handleInput = event => {
		setValues(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = event => {
		event.preventDefault()
		props.loginRequest(form)
		props.history.push('/')
	}

	return (
		<Form className="login__form" onSubmit={handleSubmit}>
			<input
				name='email'
				className="login__form--input"
				type="text"
				placeholder="Correo"
				required
				onChange={handleInput}
			/>
			<input
				name='password'
				className="login__form--input"
				type="password"
				placeholder="Contraseña"
				required
				onChange={handleInput}
			/>
			<button className="login__form--button">Iniciar sesión</button>
			<div className="login__form--remember-me">
				<label>
					<input
						type="checkbox"
						id="cbox1"
						value="first_checkbox"
					/> Recuérdame
				</label>
				<Link to="/">Olvidé mi contraseña</Link>
			</div>
		</Form>
	)
}

const mapDispatchToProps = {
	loginRequest,
}
export default connect(null, mapDispatchToProps)(LoginForm)
