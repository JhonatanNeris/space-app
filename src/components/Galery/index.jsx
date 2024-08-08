import React from 'react'
import Title from '../Title'
import Tags from './Tags'
import styled from 'styled-components'
import Populars from './Populars'

import Image from './Image'

const GaleryContainer = styled.div`
  display: flex;
  gap: 24px;
`

const MainSection = styled.section`
  flex-grow: 1;
`

const ImagesContainer = styled.section`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 24px;
`

const Galery = ({photos = [], selectPhoto, onToogleFavorite, setTags, tags}) => {

  console.log(photos)

  return (
    <>
      <Tags setTags={setTags} selectedTag={tags}></Tags>
      <GaleryContainer>
        <MainSection>
          <Title alignment="center">Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map(photo => <Image key={photo.id} photo={photo} selectPhoto={selectPhoto} onToogleFavorite={onToogleFavorite} ></Image>)}
          </ImagesContainer>
        </MainSection>
        <Populars/>
      </GaleryContainer>
    </>
  )
}

export default Galery