import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraCommons'
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelationsBoxWrapper'

function ProfileSideBar(props){
  return(
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`}/>
    </Box>
  )
}

export default function Home() {
  const user = "juststudies"
  const followers = [
    "adorilson",
    "Soldy",
    "adahra",
    "capelobo",
    "janimachado",
    "lordguido",
    "Octavio-Pedro",
    "halleflima",
    "BrandontMitchell"
  ]
    
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
        </div>

      </MainGrid>
    </>
  )
}
