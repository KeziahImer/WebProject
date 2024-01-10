import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Item = ({ item }) => {

  const router = useRouter();
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    setAuthToken(localStorage.getItem("authToken"));
  }, []);

  const deleteItem = async itemId => {
    console.log(itemId)
    try {
      const response = await fetch(`/api/items/deleteItem/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + authToken
        },
      })
      if (response.ok) {

      }
    } catch (error) {
      console.log(error)
    }
  }

  const itemStyle = {
    border: '1px solid #ddd',
    padding: '16px',
    margin: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '8px',
    color: '#333',
  };

  const descriptionStyle = {
    marginBottom: '8px',
    color: '#555',
  };

  const priceStyle = {
    fontWeight: 'bold',
    color: '#28a745',
  };

  return (
    <div style={itemStyle}>
      <h2 style={titleStyle}>{item.title}</h2>
      <p style={descriptionStyle}>{item.description}</p>
      <p style={priceStyle}>Price: {item.price}</p>
      <img src={item.image} alt={item.title} width={300} height={200} />
      {authToken && authToken != '' && (
        <>
          <button style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => {
             router.push({
              pathname: '/winwatt/updateItem',
              query: { item: JSON.stringify(item) },
            });
          }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => deleteItem(item.id)}>
            <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
          </button>
        </>
      )}
    </div>
  );
};

export default Item;