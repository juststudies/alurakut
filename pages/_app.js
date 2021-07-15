import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {AlurakutStyles} from '../src/lib/AluraCommons'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: url('https://a-static.besthdwallpaper.com/asus-rog-republic-of-gamers-pixel-city-de-8-bits-papel-de-parede-1366x768-63784_46.jpg') no-repeat;
    background-size: cover;
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
