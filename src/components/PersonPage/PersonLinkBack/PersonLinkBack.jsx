import {Link, useNavigate } from 'react-router-dom'
import iconBack from './img/turn-left.png'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
    const history = useNavigate()

    const handleGoBack = e => {
        history(-1)
        
    }

    return (
        <a href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={iconBack} alt="back" />
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack