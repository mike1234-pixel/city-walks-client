import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { GiWalkingBoot } from "react-icons/gi";
import FooterLink from "./FooterLink";
import FooterCol from "./FooterCol";
import "./Footer.css";

const Footer = () => {

  return (
    <MDBFooter className='font-small pt-4 mt-4 footer'>
      <MDBContainer className='text-left'>
        <MDBRow>
          <MDBCol md='3'>
            <h5 className='title'>
              City Walks... <GiWalkingBoot />
            </h5>
            <p>
              City Walks is a website that publishes illustrated guided walks,
              with routes, maps and local attractions to explore.
            </p>
          </MDBCol>
          <MDBCol md='3' className='offset-md-3 footer-site-links'>
            <FooterCol title='Site Links'>
              <FooterLink path='/' title='Home' />
              <FooterLink path='/cities' title='Cities' />
              <FooterLink path='/walks' title='Walks' />
              <FooterLink path='/about' title='About' />
              <FooterLink path='/sights' title='Sights' />
            </FooterCol>
          </MDBCol>
          <MDBCol md='3' className='footer-extra-links'>
            <FooterCol title='Extra Links'>
              <FooterLink path='/admin' title='Admin Portal' />
              <FooterLink path='/privacy' title='Privacy Policy' />
            </FooterCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
          <a
            href='https://github.com/mike1234-pixel'
            target='_blank'
            className='footer-github-link'
          >
            Michael Tandy
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
