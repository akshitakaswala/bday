import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/card";
import Link from "next/link";
import { useRouter } from 'next/router';
import Banner from "@/components/banner";

const inter = Inter({ subsets: ["latin"] });


const index = () => {
    const router = useRouter();
    const handleOnBannerBtnClick = () => {
        console.log("button");
        router.push('/favorite');
    }
    return (
        <>
            <Head>
                <title>Happy Birthday!!!</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.backToHomeLink}>
                    <Link href="/">⬅ Back to home</Link>{" "}
                </div>
                <h1 className={styles.title}>

                    It's wonderful to have memories of <br></br>
                    someone special in your life. <br></br>
                    Those memories often hold deep <br></br>
                    meaning and can bring warmth and joy <br></br>
                    even when that person isn't present.
                </h1>
                <Banner
                    buttonText="My Favorite"
                    handleOnClick={handleOnBannerBtnClick}
                />
                <div className={styles.youImage}>
                    <Image src="/static/1.png" width={600} height={400} />
                </div>

                <div className={styles.cardLayout} style={{ marginTop: "150px", marginRight: "100px" }}>
                    <Card name="To the funniest, funkiest, most fabulous person I know: Happy birthday!" imgUrl="/images/2.jpg" href="/favorite" className={styles.card} />
                    <Card name="Your friendship is a gift I treasure every day." imgUrl="/images/4.jpg" href="/favorite" className={styles.card} />
                    <Card name="Happy birthday to someone who enriches my life in more ways than I can count." imgUrl="/images/3.jpg" href="/favorite" className={styles.card} />
                    <Card name="Cheers to another year of shared memories and unwavering support." imgUrl="/images/10.jpg" href="/favorite" className={styles.card} />
                    <Card name="Age is just a number!" imgUrl="/images/7.jpg" href="/favorite" className={styles.card} />
                    <Card name="May your birthday cake be as sweet as you are. Happy  Birthday!" imgUrl="/images/6.jpg" href="/favorite" className={styles.card} />
                </div>
            </main>
        </>
    );
}


export default index;