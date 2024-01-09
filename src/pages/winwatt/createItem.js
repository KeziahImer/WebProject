import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

const Login = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const router = useRouter();

  const createItem = async () => {
    try {
      const response = await fetch('/api/items/createItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("authToken")
        },
        body: JSON.stringify({ title, description, price, image })
      })
      if (response.ok) {
        router.push('/winwatt')
      } else {
        alert("Mauvaises informations de création. Veuillez réessayer.");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Input type="title" label="Titre" placeholder="Entrez le titre" value={title} onChange={value => setTitle(value.target.value)} />
      <Input type="description" label="Description" placeholder="Entrez la description" value={description} onChange={value => setDescription(value.target.value)} />
      <Input type="price" label="Prix" placeholder="Entrez le prix" value={price} onChange={value => setPrice(value.target.value)} />
      <Input label="Image" placeholder="Entrez le lien de l'image" value={image} onChange={value => setImage(value.target.value)} />
      <Button color="primary" onClick={createItem} />
    </div>
  );
};

export default Login;
