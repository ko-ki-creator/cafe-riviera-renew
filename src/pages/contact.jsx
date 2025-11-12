import Footer from '@/components/Footer/Footer';
import Mobile from '@/components/Mobile/Mobile';
import PageHeading from '@/components/PageHeading/PageHeading';
import Reserve from '@/components/Reserve/Reserve';
import Head from 'next/head';
import React from 'react';
import styles from "../styles/Contact.module.css";
import Link from 'next/link';



export default function contact() {
    return (
        <>
            <Head>
                <title>Contact | Cafe Riviera</title>
            </Head>

            <main>
                <Mobile>
                    <section className={styles.contact}>
                        <PageHeading
                            title="Contact"
                            sub_ttl="お問い合わせ"
                        />
                        <form className={styles.form_wrapper}>
                            <div className={styles.form_group}>
                                <p className={styles.item}>お名前</p>
                                <label>
                                    <input
                                        type="text"
                                        name='name'
                                        className={styles.answer}
                                        placeholder='山田 太郎'
                                        required
                                    />
                                </label>
                            </div>

                            <div className={styles.form_group}>
                                <p className={styles.item}>電話番号</p>
                                <label>
                                    <input
                                        type="text"
                                        name='tel'
                                        className={styles.answer}
                                        placeholder='012-3456-7890'
                                        required
                                    />
                                </label>
                            </div>

                            <div className={styles.form_group}>
                                <p className={styles.item}>メールアドレス</p>
                                <label>
                                    <input
                                        type="text"
                                        name='mail'
                                        className={styles.answer}
                                        placeholder='example@caferiviera'
                                        required
                                    />
                                </label>
                            </div>

                            <div className={styles.form_group}>
                                <p className={styles.item}>お問い合わせ種別</p>
                                <label>
                                    <select
                                        type="text"
                                        name='select'
                                        className={styles.answer}
                                    >
                                        <option value="reserve">選択してください</option>
                                        <option value="reserve">予約に関して</option>
                                        <option value="reserve">採用</option>
                                        <option value="reserve">その他</option>
                                    </select>
                                </label>
                            </div>

                            <div className={styles.form_group}>
                                <p className={styles.item}>お問い合わせ内容</p>
                                <label>
                                    <textarea
                                        type="text"
                                        name='mail'
                                        className={styles.textarea}
                                        placeholder='お問い合わせ内容をご記載ください。'
                                        required
                                    />
                                </label>
                            </div>

                            <div className={styles.form_checkbox}>
                                <input
                                    type="checkbox"
                                    name='checkbox'
                                    className={styles.checkbox}
                                    required
                                />
                                <p className={styles.privacy_policy}>
                                    <Link href="/" className={styles.policy}>プライバシーポリシー</Link>に同意します。
                                </p>
                            </div>

                            <div className={styles.form_send}>
                                <button className={styles.btn}>送信する</button>
                            </div>

                        </form>
                    </section>
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </>
    )
}
