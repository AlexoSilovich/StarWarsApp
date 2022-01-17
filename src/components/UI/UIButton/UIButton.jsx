import propTypes from "prop-types";
import cn from "classnames"
import "../index.css"
import styles from "./UIButton.module.css";

const UIButton = ({
    text,
    onClick,
    disabled,
    theme='dark',
    classes
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}>
        {text}
    </button>
    );
};

UIButton.propTypes = {
    text: propTypes.string,
    onClick: propTypes.func,
    disabled: propTypes.bool,
    theme: propTypes.string,
    classes: propTypes.string,
};

export default UIButton;
