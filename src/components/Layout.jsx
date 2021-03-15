import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => (
	<Container className='App'>
		<Header />
		{children}
		<Footer />
	</Container>
)

export default Layout
