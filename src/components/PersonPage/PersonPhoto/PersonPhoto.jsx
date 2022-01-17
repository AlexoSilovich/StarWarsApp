import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions'
import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favoriteFill.svg'
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({
    personId,
    personPhoto,
    personName,
    personFavorite,
    setPersonFavorite
    }) => {
    const dispatch = useDispatch()

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
            [personId]: {
                name: personName,
                img: personPhoto
            }
        }))
        setPersonFavorite(true)
        }
    }

    return (
        <>
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName} />
            <img 
            className={styles.favorite}
            src={personFavorite ? iconFavoriteFill : iconFavorite} 
            alt="add to favorite"
            onClick={dispatchFavoritePeople}
        />
        </div>
        </>
    )
}


PersonPhoto.propTypes = {
    personId: propTypes.string,
    personPhoto: propTypes.string,
    personName: propTypes.string,
    personFavorite: propTypes.bool,
    setPersonFavorite: propTypes.func
}

export default PersonPhoto