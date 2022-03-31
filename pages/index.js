import { culinr } from '../data/culinr.js'
import Chef from '../components/Chefs/Chef.js'

const Index = ({ chefs }) => {
    const chefComponents = chefs.map( chef => {
        return <Chef key={chef.id} {...chef} />
    })
    return (
        <div>
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
