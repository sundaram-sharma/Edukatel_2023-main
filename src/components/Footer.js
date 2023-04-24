import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>
        Edukatel<span>India</span>
      </h3>
      <p className="footer-links">
        <a href="#" className="link-1">
          Home
        </a>
        <a href="/blog">Blog</a>
        <a href="#">Pricing</a>
        <a href="/about">About</a>
        <a href="/faq">Faq</a>
        <a href="/contact">Contact</a>
      </p>
      <p className="footer-company-name">Copyright © 2023 Edukatel. All Right Reserved.</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p>
          <span>Near Sai mandir lane,  Jwalapur</span> Haridwar, Uttarakhand 249407, India
        </p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>+91 6396 720 724</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p>
          <a href="mailto:support@edukatel.com">support@edukatel.com</a>
        </p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <div className="aboutUsLink">
          <span><a href="/">About our company</a></span>
        </div>
        Edukatel connects students with passionate educators, 
        providing quality education to thousands across the country.
      </p>
      <div className="footer-icons">
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </div>
  </footer>
</>
  );
};

export default Footer;
