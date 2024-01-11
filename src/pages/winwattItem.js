import NavBar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '@/styles/winwattItem.module.css';
const WinWattItem = () => {
    const router = useRouter();
    const { item } = router.query;

    const currentItem = item ? JSON.parse(item) : null;

    return (
        <div className={styles.wwiBody}>
            <div className={styles.wwiNav}>
                <NavBar />
            </div>
            <div className={styles.wwiContent}>
                <div className={styles.wwiImage}>
                    {currentItem && (
                        <>
                            <img src={currentItem.image} alt={currentItem.title} width={600} height={318} />
                        </>
                    )}
                </div>
                <div className={styles.wwiInfo}>
                    {currentItem && (
                        <>
                            <h2 style={{fontSize: "50px"}}>{currentItem.title}</h2>
                            <p style={{color: "#989898"}}>{currentItem.description}</p>
                            <h2 style={{fontFamily: "Armata"}}>{currentItem.price}€</h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WinWattItem;