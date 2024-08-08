import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import GlobalStyles from './components/GlobalStyles'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Banner from './components/Banner'
import Bannerbackground from './assets/banner.png'
import Galery from './components/Galery'

import fotos from './fotos.json'
import ModalZoom from './components/ModalZoom'

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`

const AppContainer = styled.div`
  width:1440px;
  max-width:100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GaleryContent = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
`

function App() {

  const [photos, setPhotos] = useState(fotos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [tags, setTags] = useState(0)
  const [search, setSearch] = useState("")

  const onToogleFavorite = (photoSelected) => {
    if (photoSelected.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }

    setPhotos(photos.map((photo) => {
      return {
        ...photo,
        favorite: photo.id === photoSelected.id ? !photoSelected.favorite : photo.favorite
      }
    }))

  }

  useEffect(() => {
    console.log(tags, search)
    let filteredPhotos = fotos;

    if (tags || search) {
      console.log("Escolhi uma tag ou pesquisei", tags)

      if (tags) {
        filteredPhotos = filteredPhotos.filter((photo) => {
          return photo.tagId === tags
        })
      }

      if(search){
        filteredPhotos = filteredPhotos.filter(photo => photo.titulo.toLowerCase().includes(search.toLowerCase()))
      }

      setPhotos(filteredPhotos)
    } else {
      setPhotos(filteredPhotos)
    }



  }, [tags, search])

  return (
    <>
      <BackgroundGradient>
        <GlobalStyles />
        <AppContainer>
          <Header setSearch={setSearch} search={search} />
          <MainContainer>
            <SideBar />
            <GaleryContent>
              <Banner
                text="A galeria mais completa de fotos do espaço"
                backgroundImage={Bannerbackground}
              />
              <Galery
                photos={photos}
                selectPhoto={photo => setSelectedPhoto(photo)}
                onToogleFavorite={onToogleFavorite}
                setTags={setTags}
                tags={tags}
              />
            </GaleryContent>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          photo={selectedPhoto}
          onToogleFavorite={onToogleFavorite}
          onClose={() => setSelectedPhoto(null)}
        />
      </BackgroundGradient>
    </>
  )
}

export default App
