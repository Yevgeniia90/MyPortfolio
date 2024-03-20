import "./style.css";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://www.instagram.com/jenny_and_my_mind?igsh=cGR0eHN1NWlpdng3" target="blank"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/Yevgeniia90"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 Ivanova Evgeniia</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;