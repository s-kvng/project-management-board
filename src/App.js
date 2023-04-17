
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import styled , {createGlobalStyle} from 'styled-components';
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import Link from './components/Links/Link';

function App() {

  const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  `;
  

  const AppWrapper = styled.div`
  
  text-align: center;
  `;

  return (
    <>
    
    <GlobalStyle />

    <BrowserRouter >
    <AppWrapper>
      <Header />
      <Link />

      <Routes>

        <Route path="/" element={<Board />} />
      
        <Route path="/backlog" element={<Backlog />} />

      </Routes>
      
    </AppWrapper>
    </BrowserRouter>
      
    </>
    
  );
}

export default App;