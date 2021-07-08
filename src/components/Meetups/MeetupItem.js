import { useContext } from 'react'

// CSS
import classes from './MeetupItem.module.css'

// Component
import Card from '../ui/Card'

// Context
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props){

    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoritesStatusHandler(){
        if (itemIsFavorite){
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props. description,
                image: props.image,
                address: props.address
            })
        }
    }

    return <li className={classes.item}>

        <Card>

            <div className={classes.image} >
                <image src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address} </address>
                <p>{props.description} </p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove' : 'To Favorites' } </button>
            </div>

        </Card>
    </li>
}

export default MeetupItem;