import React from 'react'
import styles from "./About.module.css";
import Image from 'next/image';

export default function About() {
    return (
        <>
            <section className={styles.about}>
                <h2 className="ttl">About</h2>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <p>
                            カフェ・リヴィエラは、都会の喧騒から離れ、穏やかな時間を提供する場所です。<br /><br />
                            木の温もりを感じるインテリアと、ナチュラルな色合いでまとめられた店内は、訪れるすべての人に心の平穏をもたらします。
                        </p>
                        <div className={styles.video_slide}>
                            <video
                                className={styles.slide_movie}
                                autoPlay
                                playsInline
                                muted
                            >
                                <source
                                    src="/images/about/movie_1.mp4"
                                    type='video/mp4'
                                />
                                お使いのブラウザは動画の再生をサポートしていません。
                            </video>
                            <video
                                className={styles.slide_movie}
                                autoPlay
                                playsInline
                                muted
                            >
                                <source
                                    src="/images/about/movie_2.mp4"
                                    type='video/mp4'
                                />
                                お使いのブラウザは動画の再生をサポートしていません。
                            </video>
                            <video
                                className={styles.slide_movie}
                                autoPlay
                                playsInline
                                muted
                            >
                                <source
                                    src="/images/about/movie_3.mp4"
                                    type='video/mp4'
                                />
                                お使いのブラウザは動画の再生をサポートしていません。
                            </video>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <p>
                            私たちは、素材にこだわり、シンプルでありながら豊かな味わいを大切にした料理を提供しています。<br /><br />
                            コーヒーはオーガニックの豆を使用し、バリスタが一杯一杯丁寧に淹れています。
                        </p>
                        <div className={styles.video_slide}>
                            <video
                                className={styles.slide_movie}
                                autoPlay
                                playsInline
                                muted
                            >
                                <source
                                    src="/images/about/movie_4.mp4"
                                    type='video/mp4'
                                />
                                お使いのブラウザは動画の再生をサポートしていません。
                            </video>
                            <video
                                className={styles.slide_movie}
                                autoPlay
                                playsInline
                                muted
                            >
                                <source
                                    src="/images/about/movie_5.mp4"
                                    type='video/mp4'
                                />
                                お使いのブラウザは動画の再生をサポートしていません。
                            </video>
                            <video
                                className={styles.slide_movie}
                                autoPlay
                                playsInline
                                muted
                            >
                                <source
                                    src="/images/about/movie_6.mp4"
                                    type='video/mp4'
                                />
                                お使いのブラウザは動画の再生をサポートしていません。
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
