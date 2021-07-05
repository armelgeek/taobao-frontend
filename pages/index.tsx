import Head from 'next/head'
import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/index'
import FileUpload from '../components/FileUpload';
export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    return () => {
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Ceci est la page d'accueil</title>
      </Head>
     
    </div>

  )
}
