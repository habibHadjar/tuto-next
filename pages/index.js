import Head from 'next/head'
import Section from '../components/Section/Section.server'

const Index = () => {
  return (
    <>
      <Head>
        <title>Culinr - Welcome to Digital Gastronomy</title>
        <meta name='description' content='Iconic dishes of the most creative Chefs converted into digital artworks (NFTs) in unique editions. Sealed forever by the blockchain technology.' />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Section />
    </>
  )
}

export default Index
