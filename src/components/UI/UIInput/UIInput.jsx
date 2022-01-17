import propTypes from 'prop-types'
import cn from 'classnames'
import icon from './img/cancel.svg'
import '../index.css'
import styles from './UIInput.module.css'

const UIInput = ({
    value,
    handelInputChange,
    placeholder,
    classes
}) => {
    return (
        <div className={cn(styles.wrapper__input, classes)}>
            <input 
                type="search" 
                value={value} 
                onChange={(e) => handelInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                onClick={() => value && handelInputChange('')}
                src={icon}
                className={cn(styles.clear)}
                alt="Clear"
            />
        </div>
    )
}


UIInput.propTypes = {
    value: propTypes.string,
    handleInputChange: propTypes.func,
    placeholder: propTypes.string,
    classes: propTypes.string
}

export default UIInput