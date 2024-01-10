import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background-color: #EDEDED;
    padding: 20px;
    border-radius: 60px 0 0 0;
    margin: 0 auto;
    height: 450px;
    max-width: 800px;
    font-family: "Roboto", sans-serif;
    position: relative;
    
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
`;

const Input = styled.input`
    padding: 8px;
    border-radius: 90px;
    border: 0 solid #999;
    margin-bottom: 30px;
    margin-top: 7px;
    width: 100%;
    margin-right: 20px;
    font-family: "Roboto", sans-serif;
`;

const Select = styled.select`
    padding: 8px;
    border-radius: 90px;
    border: 0 solid #999;
    margin-top: 7px;
    margin-bottom: 10px;
    width: 100%;
`;

const Label = styled.label`
    margin-left: 10px;
    margin-right: 410px;
`;

const TextArea = styled.textarea`
    padding: 8px;
    border-radius: 30px;
    margin-top: 7px;
    border: 0 solid #999;
    margin-bottom: 10px;
    width: 100%;
`;

const GradientButton = styled.button`
  border-radius: 90px;
  background: linear-gradient(98deg, #29CBEF 10.93%, #069BDB 89.36%);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const BodyContainer = styled.div`
  overflow-x: hidden;
`;


const Form = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        // e.preventDefault();
        console.log('CLIC');
        try {
            await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nom: formData.nom,
                    prenom: formData.prenom,
                    email: formData.email,
                    telephone: formData.telephone,
                    sujet: formData.sujet,
                    description: formData.description
                })
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <BodyContainer>
        <StyledContainer>
            <Label>
                <label>Nom</label>
            </Label>
            <Label>
                <label>Prénom</label>
            </Label>
            <RowWrapper>
                <Input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                <Input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
            </RowWrapper>
            <Label>
                <label>Téléphone</label>
            </Label>
            <Label>
                <label>Email</label>
            </Label>
            <RowWrapper>
                <Input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </RowWrapper>
            <Label>
                <label>Sujet</label>
            </Label>
            <Select name="sujet" value={formData.sujet} onChange={handleChange}>
                <option value="">-- Choisissez un sujet --</option>
                <option value="Consultation">Option 1</option>
                <option value="Information">Option 2</option>
                <option value="Retour">Option 3</option>
            </Select>
            <Label>
                <label>Description</label>
            </Label>
            <TextArea
                name="description"
                rows="8"
                value={formData.description}
                onChange={handleChange}
                placeholder=""
            />
            <GradientButton type="submit" onClick={handleSubmit}>Envoyer</GradientButton>
        </StyledContainer>
        </BodyContainer>
    );
};

export default Form;
