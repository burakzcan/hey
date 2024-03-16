import React from 'react'
import PropTypes from 'prop-types'

import ToggleTheme from '../components/ToggleTheme'
import Header from '../components/header'
import { Container, Box } from '@chakra-ui/react'

function App({ app }) {
	return (
		<Box py="0.5rem">
			<Container maxW={'1200px'}>
				<Header lorem={'lorem'} />
				<ToggleTheme />
			</Container>
		</Box>
	)
}

App.propTypes = {
	app: PropTypes.any
}

App.displayName = 'App'

export default App
