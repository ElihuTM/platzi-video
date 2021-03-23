import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'

const RegisterForm = (props) => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	})

	const handleInput = event => {
		setForm(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		props.registerRequest(form)
		props.history.push('/')
	}

	return (
		<form className="register__form" onSubmit={handleSubmit}>
			<input
				name='name'
				className="register__form--input"
				type="text"
				placeholder="Nombre"
				onChange={handleInput}
			/>
			<input
				name='email'
				className="register__form--input"
				type="text"
				placeholder="Correo"
				onChange={handleInput}
			/>
			<input
				name='password'
				className="register__form--input"
				type="password"
				placeholder="Contraseña"
				onChange={handleInput}
			/>
			<button className="register__form--button">Registrarme</button>
		</form>
	)
}

const mapDispatchToProps = {
	registerRequest,
}

export default connect(null,mapDispatchToProps)(RegisterForm)
