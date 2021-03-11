import React from 'react'
import Form from 'react-bootstrap/Form'

const LoginForm = () => (
	<Form className="login__form">
		<input className="login__form--input" type="text" placeholder="Correo"/>
		<input className="login__form--input" type="password" placeholder="Contraseña"/>
		<button className="login__form--button">Iniciar sesión</button>
		<div className="login__form--remember-me">
			<label>
				<input
					type="checkbox"
					id="cbox1"
					value="first_checkbox"
				/> Recuérdame
			</label>
			<a href="/">Olvidé mi contraseña</a>
		</div>
	</Form>

)

export default LoginForm
