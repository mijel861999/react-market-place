import React from 'react'
import styled from 'styled-components'

import Slider from '../components/slider'

const ScMain = styled.main`
  width: 100%;
  height: 100vh;
`

const pillItems = [
  {
    id: 1,
    content: <span>Item 1</span>
  },
  {
    id: 2,
    content: <span>Item 2</span>
  },
  {
    id: 3,
    content: <span>Item 3</span>
  }
]

const Main = () => {
  return (
    <ScMain>
      <Slider
        items={pillItems}
        title='Categorías'
      />
    </ScMain>
  )
}

export default Main

