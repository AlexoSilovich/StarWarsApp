import { useState, useEffect } from 'react';
import propTypes from 'prop-types'
import { makeConcCurrentRequest } from '@utils/network';
import styles from './PersonFilms.module.css'

const PersonFilms = ({personFilms}) => {
    const [filmsName, setFilmsName] = useState([])
    
    useEffect(() => {
        (async () => {
            const films = personFilms
            const response = await makeConcCurrentRequest(films)

            setFilmsName(response)
        })()
    })

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
            {filmsName
                .sort((a, z) => a.episode_id - z.episode_id)
                .map(({title, episode_id}) => 
                    <li className={styles.list__item} key={episode_id}>
                        <span className={styles.item__episode}>Episode {episode_id}</span>
                        <span className={styles.item__colon}>:</span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}


PersonFilms.propTypes = {
    personFilms: propTypes.array
}

export default PersonFilms