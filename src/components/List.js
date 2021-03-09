import React, { useEffect, useState } from 'react'

import { Card } from './Card' 
import { ListContainer } from '../lib/list-styles'

const URL = ''

export const List = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setAnimals(json)
      })
  }, [])

  return (
    <>
      <p>Latest pictures</p>
      <ListContainer>
        {animals.map((animal, index) => (
          <Card key={animal._id} index={index} {...animal} />
        ))}
      </ListContainer>
    </>
  )
}

