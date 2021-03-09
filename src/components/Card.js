import React from 'react'

import { CardContainer, CardDetails, AnimalImage  } from '../lib/card-styles'

export const Card = ({ name, date, imageUrl, index }) => {
	return ( 
		<CardContainer>
			<CardDetails>
				<p>{name}</p>

			</CardDetails>
			<AnimalImage src={imageUrl} alt="animal photo" />
		</CardContainer>
	)
}