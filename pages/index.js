import { culinr } from '../data/culinr.js'

const Index = (props) => {
    const chefs = props.chefs.map((chef) => {
        return <div key={chef.id}>{chef.name}</div>
    })
    return (
        <div>
            {chefs}
        </div>
    )
}

/**
 * Get static props data from json file located at ../data/culinr.json
 */

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
