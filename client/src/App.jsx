import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.jsx';
import VideoHome from './components/homeVideo/VideoHome.jsx';

function App() {

  return (
    <Container className='fluid'>
      <Header />

      <VideoHome />  
    </Container>
  )
}

export default App
