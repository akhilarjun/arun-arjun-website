import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const NUMBER_OF_STARS = 100;
  const stars = [...Array(NUMBER_OF_STARS)];
  let i = 0;
  while (i < NUMBER_OF_STARS) stars[i++] = i;
  return (
    <>
      <Head>
        <title>Arun Arjun</title>
        <script src="./js/tilt-init-custom.js"></script>
      </Head>
      <div className={styles.stars_banner}>
        <div className={styles.wrapper} data-tilt>
          <div className={styles.stars}>
            {stars.map((star) => (
              <div className={styles.star} key={star.toString()}></div>
            ))}
          </div>
        </div>
        <div className={styles.name}>
          I'm looking for my next opportunity to make a change.
          <br />
          The{" "}
          <div className="highlight" data-cursor-interact="true">
            digital
          </div>{" "}
          way.
        </div>
      </div>
    </>
  );
}
