import Footer from '@/components/Footer/Footer';
import Mobile from '@/components/Mobile/Mobile';
import News from '@/components/News/News';
import Reserve from '@/components/Reserve/Reserve';
import React from 'react';
import styles from '@/styles/NewsPage.module.css';
import Head from 'next/head';
import NewsCard from '@/components/NewsCard/NewsCard';
import PageHeading from '@/components/PageHeading/PageHeading';

export default function NewsPage() {
    return (
        <>

            <Head>
                <title>News | Cafe Riviera</title>
            </Head>

            <main>
                <Mobile>
                    <section className={styles.news}>
                        <PageHeading />
                        <div className={styles.container}>
                            <NewsCard
                                // url={}
                                date="2025/10/8"
                                category="New Topics"
                                title="リヴィエラ特製抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しください。"
                            />
                            <NewsCard
                                // url={}
                                date="2025/10/5"
                                category="Event"
                                title="ハロウィン特別イベントを開催！カボチャを使ったスイーツやドリンクが楽しめるこの機会をお見逃しなく。"
                            />
                            <NewsCard
                                // url={}
                                date="2025/10/2"
                                category="New Topics"
                                title="営業時間延長のお知らせ"
                            />
                            <NewsCard
                                // url={}
                                date="2025/9/29"
                                category="Limited Menu"
                                title="冬限定のホットチョコレートが登場！濃厚なチョコレートの味わいをお楽しみください。"
                            />
                            <NewsCard
                                // url={}
                                date="2025/9/26"
                                category="Special Course"
                                title="12月24日・25日にクリスマス特別コースをご用意しました。予約はお早めに！"
                            />
                        </div>
                    </section>
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </>
    )
}