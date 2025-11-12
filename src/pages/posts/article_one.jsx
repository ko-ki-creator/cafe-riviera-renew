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
                <title>リヴィエラ特製抹茶ラテが登場しました！</title>
            </Head>

            <main>
                <Mobile>
                    <ArticleCard
                        date="2025/10/8"
                        category="New Topics"
                        title="リヴィエラ特製抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しください"
                        text="リヴィエラ特製抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しくださいリヴィエラ特製抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しくださいリヴィエラ特製抹茶ラテが登場しました！クリーミーでリッチな味わいをぜひお試しください"
                        images="/images/news/Matcha_latte.jpeg"
                    />
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </React.Fragment>
    );
}