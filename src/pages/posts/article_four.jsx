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
                <title>冬限定のホットチョコレートが登場！濃厚なチョコレートの味わいをお楽しみください。</title>
            </Head>

            <main>
                <Mobile>
                    <ArticleCard
                        date="2025/9/29"
                        category="Limited Menu"
                        title="冬限定のホットチョコレートが登場！濃厚なチョコレートの味わいをお楽しみください。"
                        text="冬限定のホットチョコレートが登場！濃厚なチョコレートの味わいをお楽しみください。"
                        images="/images/news/chocolate.jpeg"
                    />
                    <Reserve />
                    <Footer />
                </Mobile>
            </main>
        </React.Fragment>
    );
}