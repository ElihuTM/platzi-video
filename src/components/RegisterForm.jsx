import React from 'react'

const RegisterForm = () => (
	<form className="register__form">
		<input className="register__form--input" type="text" placeholder="Nombre"/>
		<input className="register__form--input" type="text" placeholder="Correo"/>
		<input className="register__form--input" type="password" placeholder="Contraseña"/>
		<button className="register__form--button">Registrarme</button>
	</form>
)

export default RegisterForm
