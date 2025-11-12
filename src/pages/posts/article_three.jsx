import React from 'react';
import styles from "../../styles/ArticlePage.module.css";
import Head from 'next/head';
import Mobile from '@/components/Mobile/Mobile';
import Reserve from '@/components/Reserve/Reserve';
import Footer from '@/components/Footer/Footer';
import ArticleCard from '@/components/ArticleCard/ArticleCard';

export default function Article() {
    return (
        <React.Fragment>
            <Head>
                <title>営業時間延長のお知らせ</title>
            </Head>

            <main>
                <Mobile>
                    <ArticleCard
                        date="2025/10/2"
                        category="New Topics"
                        title="営業時間延長のお知らせ"
                        text="11月から平日の営業時間が延長され、夜22時まで営業いたします。 お仕事帰りにぜひお立ち寄りください。"
                        images="/images/news/open.jpeg"
                    />
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </React.Fragment>
    );
}