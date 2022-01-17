import propTypes from 'prop-types'
import cn from 'classnames'
import styles from './UIVideo.module.css'
import { useEffect, useRef } from 'react'

const UIVideo = ({src, playbackRate, classes}) => {
    const videoRef = useRef(null)
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, [])

    return (
        <video
            loop
            autoPlay
            muted
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src} />
        </video>
    )
}

UIVideo.propTypes = {
    src: propTypes.string,
    playbackRate: propTypes.number,
    classes: propTypes.string
}

export default UIVideo