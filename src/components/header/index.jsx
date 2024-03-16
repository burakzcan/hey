/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
	Button,
    Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	useStyleConfig,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Header = ({ lorem }) => {
	const styles = useStyleConfig('ProfileCard')

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{lorem}
			</MenuButton>
			<MenuList>
				<MenuItem>
                    <Text color={useColorModeValue('brandDark', 'brandLight')}>Lorem</Text>
                </MenuItem>
				<MenuItem>Create a Copy</MenuItem>
				<MenuItem>Mark as Draft</MenuItem>
				<MenuItem>Delete</MenuItem>
                <MenuDivider />
				<MenuItem>Attend a Workshop</MenuItem>
			</MenuList>
		</Menu>
	)
}

Header.propTypes = {
	lorem: PropTypes.any
}

Header.displayName = 'Header'

export default Header
