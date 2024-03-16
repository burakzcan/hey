import { extendTheme } from '@chakra-ui/react'

const heyTheme = extendTheme({
	initialColorMode: 'system',
	useSystemColorMode: false,
	colors: {
		brandDark: '#333',
		brandLight: '#ddd'
	}
})



export default heyTheme
