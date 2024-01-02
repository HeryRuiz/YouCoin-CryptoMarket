import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import "./styles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__socials">
            <a href="https://twitter.com/home" target="_blank">
              <IconBrandTwitter className="footer-icon" />
            </a>
            <a href="https://discord.com" target="_blank">
              <IconBrandDiscord className="footer-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <IconBrandFacebook className="footer-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <IconBrandYoutube className="footer-icon" />
            </a>
          </div>
          <div className="footer-content__text">
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
