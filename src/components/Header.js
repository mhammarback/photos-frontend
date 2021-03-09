import React from 'react'

import { HeaderContainer, HeaderTitle, HeaderImage  } from '../lib/header-styles'
import Bird from'../assets/peace.png'

export const Header = () => {
	return (
		<HeaderContainer >
			<HeaderImage src={Bird} alt="animated cat" />
			<HeaderTitle>Bird watcher</HeaderTitle >
		</HeaderContainer >
	)
}