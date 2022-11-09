import "./footer.css";

export default function Footer() {
  return (
    <div className="bottom">
      <div className="bottomLeft">
        <i className="bottomIcon fab fa-facebook-square"></i>
        <i className="bottomIcon fab fa-instagram-square"></i>
        <i className="bottomIcon fab fa-pinterest-square"></i>
        <i className="bottomIcon fab fa-twitter-square"></i>
      </div>
      <div className="terms">
        <p>Copyright © 2022 "WeBlog". All rights reserved.</p>
      </div>
      <div className="quickLinks">
        <a href="/">Latest</a>
        <a href="./home">Popular</a>
        <a href="/">Most Read</a>
        <a href="./contact">Contact Us</a>
      </div>
    </div>
  );
}
