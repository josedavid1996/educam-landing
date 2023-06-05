import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

// import '../assets/fonts/dm-sans/dm-sans.css'
import '../styles/index.css'

import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useLoadTheme from '../hooks/useLoadTheme'
import Navbar from '../components/layout/Navbar'

import { ApolloProvider } from '@apollo/client'
import client from '../apollo'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Servicio para cargar el theme desde el LocalStorage
  useLoadTheme()

  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 1000
      // once: false,
    })
  }, [])

  return (
    <main>
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ApolloProvider>
    </main>
  )
}

export default MyApp
