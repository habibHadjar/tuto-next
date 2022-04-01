import { culinr } from '../data/culinr.js'
import Chef from '../components/Chefs/Chef.js'
import Head from 'next/head'


const Index = ({ chefs }) => {
    const chefComponents = chefs.map( chef => {
        return <Chef key={chef.id} {...chef} />
    })
    return (
        <div>
            <Head>
                <title>Culinr - Welcome to Digital Gastronomy</title>
                <meta  name='description' content='Iconic dishes of the most creative Chefs converted into digital artworks (NFTs) in unique editions. Sealed forever by the blockchain technology.' />
                <link rel="icon" href="/favicon.png" />
            </Head>
            {chefComponents}
        </div>
    )
}

export async function getStaticProps() {
    // Filters out the dishes that are not revealed (online) yet
    culinr.chefs.forEach(chef => {
        chef.dishes = chef.dishes.filter(dish => dish.isOnline)
    })
    return {
        props: culinr
    }
}

export default Index
