import { React, useEffect } from 'react'
import '../styles/myapp.css'
import Nav from '../components/Nav'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div>
      <Head>
        <title>my website</title>
      </Head>
      <Nav />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </div>
  )

}
