import React from 'react';
import styles from "./Access.module.css";

export default function Access() {
    return (
        <>
            <section className={styles.access} id='access'>
                <h2 className='ttl'>Access</h2>
                <div className={styles.content}>
                    <p className={styles.text}>カフェ・リヴィエラは、東京都新宿区に位置し、アクセスも便利です。最寄り駅から徒歩5分、専用駐車場もご用意していますので、お車でのご来店も可能です。</p>
                    <iframe
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51839.97791333796!2d139.6679976078225!3d35.701651582150596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2059b7fd4b%3A0xec61c68fe232efd2!2z5p2x5Lqs6YO95paw5a6_5Yy6!5e0!3m2!1sja!2sjp!4v1761363695934!5m2!1sja!2sjp"
                        fill
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </>
    )
}