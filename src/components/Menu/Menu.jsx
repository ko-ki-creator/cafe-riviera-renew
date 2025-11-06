import React from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';

export default function Menu() {
    return (
        <>
            <section className={styles.menu} id='menu'>
                <h2 className="ttl">Menu</h2>
                <p>
                    カフェ・リヴィエラのメニューは、季節ごとに変わるこだわりの料理とドリンクを取り揃えています。
                    <br />
                    すべての料理は、厳選された食材を使用し、手作りで提供しています。
                </p>

                <div className={styles.content}>
                    <h3 className="ttl">- Drink Menu -</h3>

                    <div className={styles.menu_list}>
                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/drink1.png"
                                alt="リヴィエラスムージー"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>リヴィエラスムージー</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/drink2.png"
                                alt="自家製レモネード"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>自家製レモネード</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/drink3.png"
                                alt="オーガニックティーセレクション"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>オーガニック<br />ティーセレクション</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/drink4.png"
                                alt="ハンドドリップコーヒー"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>ハンドドリップコーヒー</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/drink5.png"
                                alt="季節限定スムージー"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>季節限定スムージー</p>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <h3 className="ttl">- Food Menu -</h3>

                    <div className={styles.menu_list}>
                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food1.png"
                                alt="リヴィエラ特製モーニングセット"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>リヴィエラ特製<br />モーニングセット</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food2.png"
                                alt="自家製ベーグルサンド"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>自家製<br />ベーグルサンド</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food3.png"
                                alt="オーガニックサラダボウル"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>オーガニック<br />サラダボウル</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food4.png"
                                alt="リヴィエラ特製フレンチトースト"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>リヴィエラ特製<br />フレンチトースト</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food5.png"
                                alt="クラシックシーザーサラダ"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>クラシック<br />シーザーサラダ</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food6.png"
                                alt="本日のスープ"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>本日のスープ</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food7.png"
                                alt="季節のパスタ"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>季節のパスタ</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food8.png"
                                alt="ハーブチキンのグリル"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>ハーブチキンのグリル</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food9.png"
                                alt="リヴィエラ特製ハンバーグ"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>リヴィエラ特製<br />ハンバーグ</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food10.png"
                                alt="カフェ・リヴィエラスペシャルカレー"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>カフェ・リヴィエラ<br />スペシャルカレー</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food11.png"
                                alt="季節のデザートプレート"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>季節のデザートプレート</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food12.png"
                                alt="リヴィエラ特製スイーツ"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>リヴィエラ特製スイーツ</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food13.png"
                                alt="バターチキンカレー"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>バターチキンカレー</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food14.png"
                                alt="自家製ミートパイ"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>自家製ミートパイ</p>
                        </div>

                        <div className={styles.menu_item}>
                            <Image
                                className={styles.menu_img}
                                src="/images/menu/food15.png"
                                alt="シグネチャーアフタヌーンティーセット"
                                width={162}
                                height={162}
                            />
                            <p className={styles.menu_name}>シグネチャー<br />アフタヌーンティー<br />セット</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}