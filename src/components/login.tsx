import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";

const login = ({ setLogin }: { setLogin: any }) => {
  return (
    <section className="login">
      <div className="login-card">
        <div className="login-title">
          <h1>Organizador Financiero</h1>
        </div>
        <div className="login-logo">
          <RiMoneyDollarCircleFill />
        </div>
        <div className="login-btn" onClick={() => setLogin(false)}>
          <BsGoogle />
          <p>Acceder</p>
        </div>
      </div>
      <div className="login-footer">
        <footer>
          <section className="footer-container">
            <h3>By Alan Arriaga</h3>
            <div className="options">
              <a href="https://github.com/A14Narriaga" target="blank">
                <AiFillGithub />
              </a>
              <a href="https://a14narriaga.netlify.app/" target="blank">
                <FaUserCircle />
              </a>
              <a href="https://twitter.com/A14Narriaga" target="blank">
                <AiOutlineTwitter />
              </a>
            </div>
          </section>
        </footer>
      </div>
    </section>
  );
};

export default login;
