import React from 'react'
import styled from 'styled-components/macro'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { List } from './components/List'

export const App = () => {
  return (
    <Container>
      <Header />
      <Form />
      <List />
    </Container>
  )
}

const Container = styled.main`
  background: #f0e4d7; 
  max-width: 900px;
`
