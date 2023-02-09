import Head from '@/components/Head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head/>
      <Header />
      <Main/>
      <Footer />
    </>
  )
}

