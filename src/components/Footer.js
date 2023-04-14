import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Edukatel</h1>
          <p>Connecting students and teachers</p>
        </div>
        <div>
          <a href="https://www.facebook.com/edukatelofficial">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/edukatel/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="https://twitter.com/edukatel">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="https://www.linkedin.com/company/edukatel/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Column 1</h4>
          <a href="/">Option 1</a>
          <a href="/">Option 2</a>
          <a href="/">Option 3</a>
          <a href="/">Option 4</a>
        </div>
        <div>
          <h4>Column 2</h4>
          <a href="/">Option 1</a>
          <a href="/">Option 2</a>
          <a href="/">Option 3</a>
          <a href="/">Option 4</a>
        </div>
        <div>
          <h4>Column 3</h4>
          <a href="/">Option 1</a>
          <a href="/">Option 2</a>
          <a href="/">Option 3</a>
          <a href="/">Option 4</a>
        </div>
        <div>
          <h4>Column 4</h4>
          <a href="/">Option 1</a>
          <a href="/">Option 2</a>
          <a href="/">Option 3</a>
          <a href="/">Option 4</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
