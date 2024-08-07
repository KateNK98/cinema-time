import { useAuthContext } from '../../contexts/AuthContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';


export default function Header() {
  const {isAuthenticated} = useAuthContext();

  return (
    <Navbar id="navbar"  className={styles['navbar']} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className={styles['navbar_text']}>CinemaTime</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles['navigation-link']} to="/">Home</Link>
            <Link className={styles['navigation-link']} to="/movies">Movies</Link>
            <Link className={styles['navigation-link']} to="/series">Series</Link>
          </Nav>
          <Nav>
            {isAuthenticated
              ? (<div id='user'  className={styles['navigation-profil']}>
                  <Link className={styles['navigation-link-profil']} to="/movies/create">Create movies</Link>
                  <Link className={styles['navigation-link-profil']} to="/series/create">Create series</Link>
                  <Link className={styles['navigation-link']} to="/logout">Logout</Link>
                </div>)
              : (<div id='guest'  className={styles['navigation-profil']}>
                  <Link className={styles['navigation-link']} to="/login">Login</Link>
                  <Link className={styles['navigation-link']} to="/register">Register</Link>
                </div>) 
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Link } from 'react-router-dom';

// import styles from './Header.module.css';

// export default function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">CinemaTime</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//         {/* <Nav.Link className={styles['navigation-nav']}
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           > */}
//             <Link className={styles['navigation-link']} to="/">Home</Link>
//           {/* </Nav.Link> */}
//           {/* <Nav.Link className={styles['navigation-nav']}> */}
//             <Link className={styles['navigation-link']} to="/movies">Movies</Link>
//             {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           {/* </Nav.Link> */}
//           {/* <Nav.Link className={styles['navigation-nav']}> */}
//             <Link className={styles['navigation-link']} to="/series">Series</Link>
//           {/* </Nav.Link> */}
//           <span className={styles['navigation-user']}>
//             <div id='user'  className={styles['navigation-profil']}>
//               {/* <Nav.Link className={styles['navigation-nav']}> */}
//                 <Link className={styles['navigation-link']} to="/create-movies-or-series">Create movies ot series</Link>
//               {/* </Nav.Link> */}
//               {/* <Nav.Link className={styles['navigation-nav']}> */}
//                 <Link className={styles['navigation-link']} to="/logout">Logout</Link>
//               {/* </Nav.Link> */}
//             </div>
//             <div id='guest'  className={styles['navigation-profil']}>
//               {/* <Nav.Link className={styles['navigation-nav']}> */}
//                 <Link className={styles['navigation-link']} to="/login">Login</Link>
//               {/* </Nav.Link> */}
//               {/* <Nav.Link className={styles['navigation-nav']}> */}
//                 <Link className={styles['navigation-link']} to="/register">Register</Link>
//               {/* </Nav.Link> */}
//             </div>
//           </span>
//           {/* <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }