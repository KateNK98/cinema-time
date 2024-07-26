import{Routes, Route} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.jsx';


function App() {

  return (
    <>
    <header>
    <Header />
    </header>
    
    <Container className='container-fluid'>
            <main id="main-content">
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </main>
    </Container>
    </>
  )
}

export default App
