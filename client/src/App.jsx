import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.jsx';
import Slider from './components/slider/Slider.jsx';

function App() {

  return (
    <Container fluid>
      <Header />

      <Slider />  
    </Container>
  )
}

export default App
