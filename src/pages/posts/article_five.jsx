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
                <title>12月24日・25日にクリスマス特別コースをご用意しました。</title>
            </Head>

            <main>
                <Mobile>
                    <ArticleCard
                        date="2025/9/29"
                        category="Special Course"
                        title="12月24日・25日にクリスマス特別コースをご用意しました。"
                        text="12月24日・25日にクリスマス特別コースをご用意しました。予約はお早めに！"
                        images="/images/news/xmas.jpeg"
                    />
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </React.Fragment>
    );
}