import React from 'react';
import styles from "../../styles/ArticlePage.module.css"
import Head from 'next/head';
import Mobile from '@/components/Mobile/Mobile';
import Reserve from '@/components/Reserve/Reserve';
import Footer from '@/components/Footer/Footer';
import ArticleCard from '@/components/ArticleCard/ArticleCard';

export default function Article() {
    return (
        <React.Fragment>
            <Head>
                <title>ハロウィン特別イベントを開催！</title>
            </Head>

            <main>
                <Mobile>
                    <ArticleCard
                        date="2025/10/5"
                        category="Event"
                        title="ハロウィン特別イベントを開催！"
                        text="カボチャを使ったスイーツやドリンクが楽しめるこの機会をお見逃しなく。"
                        images="/images/news/halloween.jpeg"
                    />
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </React.Fragment>
    );
}