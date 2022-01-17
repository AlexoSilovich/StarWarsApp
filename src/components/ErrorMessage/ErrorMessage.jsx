import UIVideo from '@ui/UIVideo'
import video from './video/han-solo.mp4'
import styles from './ErrorMessage.module.css'

const ErrorMessame = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side of the force has won.<br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>

            <UIVideo 
                src={video} 
                classes={styles.video}
                playbackRate={1} 
            />
        </>
    )
}

export default ErrorMessame