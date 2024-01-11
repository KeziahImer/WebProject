// createItem.module.js

import React, { useState } from 'react';
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from 'next/router';
import styles from '@/styles/createItem.module.css';

const CreateItem = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const types = ["Selle", "Pédale", "Potence"];
    const router = useRouter();

    const create = async () => {
        try {
            const response = await fetch('/api/items/createItem', {
                method: 'POST',
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
        <div className={styles.container}>
            <div className={styles.inputcontainer}>
                <label>Titre</label>
                <Input type="title" placeholder="Entrer le titre" value={title} onChange={value => setTitle(value.target.value)} />
            </div>
            <div className={styles.inputcontainer}>
                <label>Description</label>
                <Input type="description" placeholder="Entrer la description" value={description} onChange={value => setDescription(value.target.value)} />
            </div>
            <div className={styles.selectcontainer}>
                <label>Sélectionner le type</label>
                <Select onChange={value => setType(types[value.target.value[value.target.value.length - 1]])}>
                    {types.map(item => (
                        <SelectItem key={item}>{item}</SelectItem>
                    ))}
                </Select>
            </div>
            <div className={styles.inputcontainer}>
                <label>Prix</label>
                <Input type="price" placeholder="Entrer le prix" value={price} onChange={value => setPrice(value.target.value)} />
            </div>
            <div className={styles.inputcontainer}>
                <label>Image</label>
                <Input placeholder="Entrer le lien de l'image" value={image} onChange={value => setImage(value.target.value)} />
            </div>
            <div className={styles.buttoncontainer}>
                <Button color="primary" onClick={create}>Créer</Button>
            </div>
        </div>
    );
};

export default CreateItem;
