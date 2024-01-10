import React, { useEffect, useState } from 'react';
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from 'next/router';

const UpdateItem = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const types = ["Selle", "Pédale", "Potence"];
  const router = useRouter();
  const { item } = router.query;

  useEffect(() => {
    const parsedItem = JSON.parse(item);
    setId(parsedItem.id)
    setTitle(parsedItem.title);
    setDescription(parsedItem.description);
    setPrice(parsedItem.price);
    setImage(parsedItem.image);
  }, []);

  const update = async () => {
    try {
      console.log(item.id)
      const response = await fetch(`/api/items/updateItem/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("authToken")
        },
        body: JSON.stringify({ title, description, type, price, image })
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
      <Select label="Sélectionner le type" onChange={value => setType(types[value.target.value[value.target.value.length - 1]])}>
        {["Selle", "Pédale", "Potence"].map(item => {
          return (
            <SelectItem>
              {item}
            </SelectItem>
          )
        })}
      </Select>
      <Input type="price" label="Prix" placeholder="Entrez le prix" value={price} onChange={value => setPrice(value.target.value)} />
      <Input label="Image" placeholder="Entrez le lien de l'image" value={image} onChange={value => setImage(value.target.value)} />
      <Button color="primary" onClick={update} />
    </div>
  );
};

export default UpdateItem;
