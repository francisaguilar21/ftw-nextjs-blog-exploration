import Navbar from '@ftw/components/navbar';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next/types';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Francis&apos Tech World Site</title>
        <meta name='description' content='Generated by create next app' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>

      <Navbar></Navbar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
