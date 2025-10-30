import Footer from '@/components/Footer/Footer';
import Mobile from '@/components/Mobile/Mobile';
import News from '@/components/News/News';
import Reserve from '@/components/Reserve/Reserve';
import React from 'react';
import styles from '@/styles/News.module.css';
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
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                        </div>
                    </section>
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </>
    )
}