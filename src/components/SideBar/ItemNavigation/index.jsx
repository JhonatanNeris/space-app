import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.li`
font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9'};
    display: flex;
    align-items: center;
    gap: 22px;
    font-family: ${ props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
`

const ItemNavigation = ({active = false, children, activeIcon, inactiveIcon}) => {
  return (
    <StyledItem $active={active}>
        <img src={active ? activeIcon : inactiveIcon} alt="Ícone do item de navegação" />
        {children}
    </StyledItem>
  )
}

export default ItemNavigation