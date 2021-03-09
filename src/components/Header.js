import React from 'react'

import { HeaderContainer, HeaderTitle, HeaderImage  } from '../lib/header-styles'
import Cat from'../assets/cat.png'

export const Header = () => {
	return (
		<HeaderContainer >
			<HeaderImage src={Cat} alt="animated cat" />
			<HeaderTitle >My favorite photos</HeaderTitle >
		</HeaderContainer >
	)
}