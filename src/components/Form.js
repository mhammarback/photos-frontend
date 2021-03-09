import React, { useState, useRef } from 'react'

import { FormContainer, Input, Label, Button, Container } from '../lib/form-styles'

const API_URL = ''

export const Form = () => {
	const fileInput = useRef()
	const [name, setName] = useState()

	const handleSubmit = (event) => {
		event.preventDefault()
	
	const formData = new FormData()
	formData.append('image', fileInput.current.files[0])
	formData.append('name', name)

	fetch(API_URL, {
		method: 'POST', 
		body: formData
	})
	  .then((res) => res.json())
		.then((json) => {
			window.location.reload()
		})
  }	

	return (
		<Container>
		<FormContainer onSubmit={handleSubmit}> 
		  <Label htmlFor="animal name">
				Name:
				<Input type="text" value={name} onChange={(event) => setName(event.target.value)} id="animal-name" required /> 
			</Label>
			<Label htmlFor="animal-image">
				Image:
				<Input type="file" ref={fileInput} id="animal-image" required />
			</Label>

			<Button type="submit">ADD</Button>
		</FormContainer>
		</Container>
	)
}