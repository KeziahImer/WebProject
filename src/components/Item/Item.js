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
    border: '0px solid #ddd',
    padding: '16px',
    margin: '16px',
    borderRadius: '40px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '165px',
    height: "150px",
    dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    background: "linear-gradient(249deg, #3D3D3D 57.39%, #212121 137.7%)",
  };

  const titleStyle = {
    fontSize: '1rem',
    fontWeight: 300,
    marginBottom: '8px',
    color: '#FFFFFF',
  };

  const titleStyle2 = {
    fontSize: '1rem',
    fontWeight: 200,
    marginBottom: '8px',
    color: '#ADADAD',
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
      <img src={item.image} alt={item.title} width={150} height={80} />
      <h2 style={titleStyle}>{item.title}</h2>
      {/*<p style={descriptionStyle}>{item.description}</p>*/}
      {/*<p style={priceStyle}>Price: {item.price}</p>*/}
      <p style={titleStyle2}>Voir plus </p>
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