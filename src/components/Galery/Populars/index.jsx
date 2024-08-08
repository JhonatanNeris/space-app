import Title from '../../Title'
import styled from 'styled-components';

//recuperando fotos
import fotos from './fotos-populares.json'


const PhotosContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populars = () => {
  return (
    <section>
      <Title $alinhamento='center'>Populares</Title>
      <PhotosContainer>
        {fotos.map(foto => <Image key={foto.id} src={foto.path} alt={foto.alt} />)}
      </PhotosContainer>
      <Button>Ver mais</Button>
    </section>
  )
}

export default Populars