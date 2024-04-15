import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/coffee-store.module.css";
import Image from "next/image";
import cls from "classnames";


const Favorite = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>My Favorite</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/you">⬅ Back to memories</Link>{" "}
            {/* Leftwards Arrow ←ALT + 27 (hold the ALT button pressed and type the numbers 2 and 7)   */}
          </div>
          <div className={styles.nameWrapper}>
            <p className={styles.name}></p>
          </div>

          <Image
            src={"/images/12.jpg"}
            width={600}
            height={360}
            className={styles.storeImg}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <p className={styles.text}>Happy Birthday...!!!🎁🎂</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
