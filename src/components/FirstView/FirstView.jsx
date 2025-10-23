import React, { useEffect, useRef, useState } from 'react'
import styles from "./FirstView.module.css";

export default function FirstView() {

    const playlist = [
        "/images/fv/movie_01.mp4",
        "/images/fv/movie_02.mp4",
        "/images/fv/movie_03.mp4",
        "/images/fv/movie_04.mp4",
        "/images/fv/movie_05.mp4",
        "/images/fv/movie_06.mp4",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const videoRef = useRef(null);

    const handleNextVideo = () => {
        setIsFading(true);
        setTimeout(() => {
            const nextIndex = (currentVideoIndex + 1) % playlist.length;
            setCurrentVideoIndex(nextIndex);

            setIsFading(false);
        })
    };

    useEffect(() => {
        const timerId = setTimeout(handleNextVideo, 6000);
        return () => {
            clearTimeout(timerId);
        };
    }, [currentVideoIndex]);

    return (
        <>
            <section className={styles.first_view}>
                <video
                    className={`${styles.fv_movie} ${isFading ? styles.fv_movie_fade_out : styles.fv_movie_fade_in}`}
                    autoPlay
                    playsInline
                    muted
                    key={currentVideoIndex}
                    ref={videoRef}
                >
                    <source
                        src={playlist[currentVideoIndex]}
                        type='video/mp4'
                    />
                    お使いのブラウザは動画の再生をサポートしていません。
                </video>
                <div className={styles.fv_ttl}>
                    <h2>Cafe Riviera</h2>
                    <p>東京のカフェ & バー</p>
                </div>
            </section>
        </>
    )
}
