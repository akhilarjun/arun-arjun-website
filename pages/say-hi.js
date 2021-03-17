import Head from "next/head";
import sayhiStyles from "../styles/SayHi.module.css";

const SayHi = () => {
  return (
    <div>
      <Head>
        <title>Say Hi! | Arun Arjun</title>
      </Head>
      <div className={sayhiStyles.contact}>
        <div>
          <h1>Reach out to me</h1>
          <div className={sayhiStyles.big_words}>
            <a contact-mail data-cursor-interact="true" className="highlight">
              arunarjun035@gmail.com
            </a>
          </div>
          <div className={sayhiStyles.icons_row}>
            <div className={sayhiStyles.icon}>
              <a
                href="https://www.linkedin.com/in/arun-arjun-180622197/"
                target="_blank"
              >
                <img
                  src="img/linkedin-3-128.png"
                  alt=""
                  data-cursor-interact="true"
                />
              </a>
            </div>
            <div className={sayhiStyles.icon}>
              <a href="https://www.instagram.com/arunarjun_/" target="_blank">
                <img
                  src="img/instagram-128.png"
                  alt=""
                  data-cursor-interact="true"
                />
              </a>
            </div>
            <div className={sayhiStyles.icon}>
              <a
                href="https://www.facebook.com/parappuratharun/"
                target="_blank"
              >
                <img
                  src="img/facebook-128.png"
                  alt=""
                  data-cursor-interact="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayHi;
