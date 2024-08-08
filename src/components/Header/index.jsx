import React from 'react'
import styled from 'styled-components'
import InputText from '../InputText'

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items:center;
    img{
      max-width:212px;
    }
`


const Header = ({setSearch, search}) => {
  return (
    <HeaderStyled>
        <img src="/imagens/logo.png" alt="Logo do space-app" />
        <InputText setSearch={setSearch} search={search} />
    </HeaderStyled>
  )
}

export default Header