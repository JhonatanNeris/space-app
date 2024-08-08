import React from 'react'
import styled from 'styled-components'
import ItemNavigation from './ItemNavigation'

const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    /* text-decoration: none; */
    width: 212px;
`

const SideBar = () => {
  return (
    <aside>
        <nav>
            <ListStyled>
                <ItemNavigation activeIcon="/icones/home-ativo.png" inactiveIcon="/icones/home-inativo.png" active>
                    Início
                </ItemNavigation>
                <ItemNavigation activeIcon="/icones/mais-vistas-ativo.png" inactiveIcon="/icones/mais-vistas-inativo.png">
                    Mais vistas
                </ItemNavigation>
                <ItemNavigation activeIcon="/icones/mais-curtidas-ativo.png" inactiveIcon="/icones/mais-curtidas-inativo.png">
                    Mais curtidas
                </ItemNavigation>
                <ItemNavigation activeIcon="/icones/novas-ativo.png" inactiveIcon="/icones/novas-inativo.png">
                    Novas
                </ItemNavigation>
                <ItemNavigation activeIcon="/icones/surpreenda-me-ativo.png" inactiveIcon="/icones/surpreenda-me-inativo.png">
                    Surpreenda-me
                </ItemNavigation>
            </ListStyled>
        </nav>
    </aside>
  )
}

export default SideBar