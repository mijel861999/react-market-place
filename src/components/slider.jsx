import React from 'react'
import styled from 'styled-components'

const ScSliderContainer = styled.section`
  
`

const ScTitleContainer = styled.span`

`

const ScTitle = styled.span`

`

const ScList = styled.span``

const Slider = ({ title, extraItem, items, height }) => {
  return (
    <ScSliderContainer height={height}>
      <ScTitleContainer>
        <ScTitle>
          { title }
        </ScTitle>
        { extraItem }
      </ScTitleContainer>
      <ScList>
        {
          items.map(item => 
            item.content
          )
        }
      </ScList>
    </ScSliderContainer>
  )
}

export default Slider

