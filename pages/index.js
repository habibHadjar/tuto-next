import { culinr } from '../data/culinr.js'

const Index = ({ chefs }) => {
    const chefsDiv = chefs.map((chef) => {
        return <div key={chef.id}>{chef.name}</div>
    })
    return (
        <div>
            {chefsDiv}
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
