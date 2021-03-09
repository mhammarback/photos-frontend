import React from 'react'

import { HeaderContainer, HeaderTitle  } from '../lib/header-styles'
import Cat from'../assets/cat'

export const Header = () => {
	return (
		<HeaderContainer >
		  <HeaderTitle >My favorite photos</HeaderTitle >
			<HeaderImage src={Cat} alt="animated cat" />
		</HeaderContainer >
	)
}