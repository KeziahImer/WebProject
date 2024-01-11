import NavBar from '@/components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Item from '@/components/Item/Item';
import { useRouter } from 'next/router';
import styles from '@/styles/winwatt.module.css';

const WinWatt = () => {
  const [items, setItems] = useState([]);
  const [authToken, setAuthToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    setAuthToken(localStorage.getItem("authToken"));
    const fetchData = async () => {
      try {
        const response = await fetch('/api/items/getItems');
        const result = await response.json();
        setItems(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [items]);
  
  return (
      <div className={styles.wwBody} style={{ backgroundColor: '#171717' }}>
        <NavBar />
        <div className={styles.wwHeader}>
          <h1>Now You Can WinWatt</h1>
        </div>
        <div className={styles.wwTitle}>
            <h2>Tout les produits</h2>
        </div>
        <div className={styles.wwSection}>
          <p className={styles.wwP}>Selle</p>
        </div>
        <div className={styles.wwItem}>
            {items.map(item => {
              if (item.type === "Selle")
                return <Item item={item}/>
              }
            )}
        </div>
        <div className={styles.wwSection}>
          <p className={styles.wwP}>Pédale</p>
        </div>
        <div className={styles.wwItem}>
            {items.map(item => {
              if (item.type === "Pédale")
                return <Item item={item}/>
              }
            )}
      </div>
        <div className={styles.wwSection}>
          <p className={styles.wwP}>Potence</p>
        </div>
        <div className={styles.wwItem}>
            {items.map(item => {
              if (item.type === "Potence")
                return <Item item={item}/>
              }
            )}
        </div>
            {authToken && authToken !== '' && (
              <button style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => router.push('/winwatt/createItem')}>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
                Créer un nouvel élément
              </button>
            )}
    </div>
  );
};

export default WinWatt;
