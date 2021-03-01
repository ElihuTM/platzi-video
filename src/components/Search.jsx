import React from 'react'
import FormControl from 'react-bootstrap/FormControl'

const Search = () => (
	<section className='search'>
		<h2 className='search__title'> ¿Qué quieres ver hoy? </h2>
		<FormControl
			placeholder='Buscar...'
			type='text'
			className='search__input'
		/>
	</section>
)

export default Search
