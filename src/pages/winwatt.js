import NavBar from '@/components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Item from '@/components/Item/Item';
import { useRouter } from 'next/router';

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
    <div>
      {/* <NavBar /> */}
      <h1>WinWatt</h1>
      {items.map(item => {
        if (item.type == "Selle")
          return <Item item={item}/>
        }
      )}
      {items.map(item => {
        if (item.type == "Pédale")
          return <Item item={item}/>
        }
      )}
      {items.map(item => {
        if (item.type == "Potence")
          return <Item item={item}/>
        }
      )}
      {authToken && authToken != '' && (
        <button style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => router.push('/winwatt/createItem')}>
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
          Créer un nouvel élément
        </button>
      )}
    </div>
  );
};

export default WinWatt;
