import React from 'react';
import styles from "./Feature.module.css";
import Image from 'next/image';

export default function Feature() {
    return (
        <>
            <div>
                <section className={styles.feature}>
                    <h2 className="ttl">Feature</h2>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h3 className={styles.feature_ttl}>新鮮な素材</h3>
                            <div className={styles.gallery}>
                                <Image
                                    className={styles.gallery_item}
                                    src="/images/feature/material.svg"
                                    alt='material'
                                    width={108}
                                    height={48}
                                />
                                <div className={styles.gallery_group}>
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/material_1.jpeg"
                                        alt='新鮮な素材が取れる畑'
                                        width={280}
                                        height={280}
                                    />
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/material_2.jpeg"
                                        alt='新鮮な素材が取れる畑'
                                        width={280}
                                        height={280}
                                    />
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/material_3.jpeg"
                                        alt='新鮮な素材が取れる畑'
                                        width={280}
                                        height={280}
                                    />
                                </div>
                            </div>
                            <p>
                                カフェ・リヴィエラでは、地元の農家から直送される新鮮な食材を使用しています。どのメニューにも、素材本来の味を活かした調理法を取り入れています。
                            </p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.feature_ttl}>自家焙煎コーヒー</h3>
                            <div className={styles.gallery}>
                                <Image
                                    className={styles.gallery_item}
                                    src="/images/feature/coffee.svg"
                                    alt='coffee'
                                    width={108}
                                    height={48}
                                />
                                <div className={styles.gallery_group}>
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/coffee1.jpeg"
                                        alt='コーヒーを淹れてる時'
                                        width={280}
                                        height={280}
                                    />
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/coffee2.jpeg"
                                        alt='コーヒー豆'
                                        width={280}
                                        height={280}
                                    />
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/coffee3.jpeg"
                                        alt='カフェオレ'
                                        width={280}
                                        height={280}
                                    />
                                </div>
                            </div>
                            <p>
                                コーヒー豆は自家焙煎で、最もフレッシュな状態で提供します。豊かな香りと深い味わいを追求し、訪れるたびに新しい発見があります。
                            </p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.feature_ttl}>温かみのあるスペース</h3>
                            <div className={styles.gallery}>
                                <Image
                                    className={styles.gallery_item}
                                    src="/images/feature/space.svg"
                                    alt='space'
                                    width={108}
                                    height={48}
                                />
                                <div className={styles.gallery_group}>
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/space1.jpeg"
                                        alt='店内空間'
                                        width={280}
                                        height={280}
                                    />
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/space2.jpeg"
                                        alt='準備されるドリンク'
                                        width={280}
                                        height={280}
                                    />
                                    <Image
                                        className={styles.item}
                                        src="/images/feature/space3.jpeg"
                                        alt='談笑するお客さん'
                                        width={280}
                                        height={280}
                                    />
                                </div>
                            </div>
                            <p>
                                コーヒー豆は自家焙煎で、最もフレッシュな状態で提供します。豊かな香りと深い味わいを追求し、訪れるたびに新しい発見があります。
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}