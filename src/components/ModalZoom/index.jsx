import React from 'react'
import Image from '../Galery/Image'
import styled from 'styled-components';
import ButtonIcon from '../ButtonIcon';

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Dialog = styled.dialog`
    position: absolute;
    /* top: 294px; */
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
    @media (max-width: 1200px){
        width: 85vw;
        
    }
`

const ModalZoom = ({ photo, onClose, onToogleFavorite }) => {

    return (
        <>
            {photo && <>
                <Overlay >
                    <Dialog open={!!photo} onClose={onClose}>
                        <Image photo={photo} expandida={true} onToogleFavorite={onToogleFavorite} />
                        <form method="dialog">
                            <ButtonIcon formMethod="dialog">
                                <img src="/icones/fechar.png" alt="Icone de fechar" />
                            </ButtonIcon>
                        </form>
                    </Dialog>
                </Overlay >
            </>}
        </>
    )
}

export default ModalZoom