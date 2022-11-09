import { Link} from "react-router-dom";
import "./footer.css";

export default function Footer() {
  const user = true;
  return (
    <div className="bottom">
      <div className="bottomLeft">
        <i className="bottomIcon fab fa-facebook-square"></i>
        <i className="bottomIcon fab fa-instagram-square"></i>
        <i className="bottomIcon fab fa-pinterest-square"></i>
        <i className="bottomIcon fab fa-twitter-square"></i>
      </div>
      <div className="terms">
        <p><b>Copyright © 2022 "Crazy Ink". All rights reserved.</b> This websiter is solely meant to present the ideas and views of discrete nature. Refer to our terms and condition for full information.</p>
      </div>
      <div className="quickLinks">
        <a href="">Latest</a>
        <a href="">Popular</a>
        <a href="">Most Read</a>
        <a href="">Categories</a>
        <a href="./contact">Contact Us</a>
      </div>
    </div>
  );
}