import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Instagram, Facebook, Twitter, Youtube, Tiktok, Person, Search, Bag, Envelope } from 'react-bootstrap-icons';
import grif from './griff.jpg';

const TopMenu = () => (
    <div className="bg-image img-fluid w-100" id="image">
      <Container fluid className="py-3">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="justify-content-start">
            <Nav>
              <Nav.Link href="#">Links</Nav.Link>
              <Nav.Link href="#">Gift Cards</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#" className="p-2"><Instagram/></Nav.Link>
            <Nav.Link href="#" className="p-2"><Facebook/></Nav.Link>
            <Nav.Link href="#" className="p-2"><Youtube/></Nav.Link>
            <Nav.Link href="#" className="p-2"><Twitter/></Nav.Link>
            <Nav.Link href="#" className="p-2"><Tiktok/></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

      <Container fluid className="py-3">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link><h1><strong>GRYFFIN</strong></h1></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav.Link href="#" className="p-2"><strong>SHOWS</strong></Nav.Link>
              <Nav.Link href="#" className="p-2"><strong>MERCH</strong></Nav.Link>
              <Nav.Link href="#" className="p-2"><strong>MUSIC</strong></Nav.Link>
              <Nav.Link href="#" className="p-2"><strong>CONTACT</strong></Nav.Link>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#" className="p-2"><Person/></Nav.Link>
              <Nav.Link href="#" className="p-2"><Search/></Nav.Link>
              <Nav.Link href="#" className="p-2"><Bag/></Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
</div>
);

const MainImage = () => (
    <Row className="justify-content-md-center pt-3" id="image">
      <Col md="auto">
        <Image fluid src={grif}/>
      </Col>
    </Row>
);

const BottomMenu = () => (
    <div id="bgcol">
      <footer className="footer mt-auto py-3">
        <Container>
          <Row id="line">
            <h5>ALIVE ALBUM COMING SOON ALIVE ALBUM COMING SOON ALIVE ALBUM COMING SOON ALIVE ALBUM COMING SOON</h5>
          </Row>
        </Container>

        <div className="container" id="bottomMenu">
          <ul className="nav justify-content-center">
            <li className="p-3">
              GRYFFAM
              <div>Join the fam and stay up to date on all</div>
              <div>things Gryffin</div>
              <input type="text" placeholder="Enter your email"/>
              <div className="btn btn-dark"><Envelope/></div>
              <hr/>
              <div className="p-4"><Instagram/><Facebook/><Youtube/><Twitter/><Tiktok/></div>
            </li>

            <li className="p-3">
              <div>MERCH</div>
              <hr/>
              Collections
              <div>Jerseys</div>
              <div>Shop All</div>
              <div>Gift Cards</div>
            </li>

            <li className="p-3">
              HELP
              <hr/>
              <div>FAQs</div>
              <div>Control</div>
            </li>

            <li className="p-3">
              POLICIES
              <hr/>
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Refund Policy</div>
              <div>Shipping Policy</div>

            </li>

          </ul>
        </div>

      </footer>
    </div>
);

const Gryff = () => (
    <div className="d-flex flex-column min-vh-100">
      <TopMenu />
      <MainImage />
      <BottomMenu/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gryff />);