import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AluraCommons'
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelationsBoxWrapper'
import { useState } from 'react'

function ProfileSideBar(props){
  return(
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}/>
      <p style={{paddingTop:'14px'}}>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />  
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const user = "juststudies"
  
  const [communities, setCommunities] = useState([{
    id: '4564654a56sd65',
    title: 'Alurakut',
    image: 'http://placehold.it/300x300'
  }])

  const followers = [
    "adorilson",
    "Soldy",
    "adahra",
    "capelobo",
    "janimachado",
    "lordguido",
  ]

  async function handleSubmit(e){
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const community = {
      id:new Date().toISOString,
      title: dataForm.get('title'),
      image: dataForm.get('image')
    }
    setCommunities([...communities, community]);
  }
    
  return(
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={user}/>          
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que deseja fazer?</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas favoritas ({followers.length})
            </h2>
            <ul>
              {followers.map(item=>{
                return(
                  <li key={item}>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades({communities.length})
            </h2>
            <ul>
              {communities.map(item=>{
                return(
                  <li key={item.id}>
                    <a href="#">
                      <img src={`${item.image}`} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </>
  )
}
