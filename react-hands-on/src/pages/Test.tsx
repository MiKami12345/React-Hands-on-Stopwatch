import React from 'react'
import styled from 'styled-components'

const Test = () => {
  const StyledBox = styled.div`
    width: 40%;
    height: 40%;
    color: #ffea00;
    background-color: #4c03f4;
    margin-top: 20px;
  `

  return (
    <div>
      Test
      <StyledBox>イエローテキスト</StyledBox>
    </div>
  )
}

export default Test