import React from 'react';
import Image from "next/image";
import styles from "../styles/gd.module.css";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel";
import Form from "./Form";
const Geremie = () => {
    return (
        <div>
            <Navbar/>
            <div style={{width: '90vw', height: '100vh'}}>
                <Image src="/Background.png" alt="Background" layout="fill" objectFit="cover"/>
            </div>
            <div className={styles.gdTitle}>
                <h1 style={{fontSize: "4.4rem", fontFamily: "Roboto"}}>Geremie Degeilh</h1>
            </div>
            <div className={styles.gdInfo}>
                <div className={styles.gdCarou}>
                    <Carousel/>
                </div>
                <p className={styles.gdText}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Hac ita persuasione reducti intra moenia bellatores obseratis undique portarum aditibus,
                    propugnaculis insistebant et pinnis, congesta undique saxa telaque habentes in promptu, ut si quis
                    se proripuisset interius, multitudine missilium sterneretur et lapidum.
                    <br/>
                    <br/>
                    Ergo ego senator inimicus, si ita vultis, homini, amicus esse, sicut semper fui, rei publicae debeo.
                    Quid? si ipsas inimicitias, depono rei publicae causa, quis me tandem iure reprehendet, praesertim
                    cum ego omnium meorum consiliorum atque factorum exempla semper ex summorum hominum consiliis atque
                    factis mihi censuerim petenda.
                    <br/>
                    <br/>
                    Tu autem, Fanni, quod mihi tantum tribui dicis quantum ego nec adgnosco nec postulo, facis amice;
                    sed,
                    ut mihi videris, non recte iudicas de Catone; aut enim nemo, quod quidem magis credo, aut si
                    quisquam,
                    ille sapiens fuit. Quo modo, ut alia omittam, mortem filii tulit! memineram Paulum, videram Galum,
                    sed
                    hi in pueris, Cato in perfecto et spectato viro
                    <br/>
                    <br/>
                    Ergo ego senator inimicus, si ita vultis, homini, amicus esse, sicut semper fui, rei publicae debeo.
                    Quid? si ipsas inimicitias, depono rei publicae causa, quis me tandem iure reprehendet, praesertim
                    cum ego omnium meorum consiliorum atque factorum exempla semper ex summorum hominum consiliis atque
                    factis mihi censuerim petenda.
                </p>
            </div>
            <div className={styles.gdFooter}>
                <div className={styles.gdFooterTitle}>
                    <h1 style={{fontSize: "4.4rem", fontFamily: "Roboto"}}>Me Contacter</h1>
                </div>
                <div className={styles.gdFooterInfoBlock}>
                    <div className={styles.gdFooterInfoForm}>
                        <Form/>
                    </div>
                    <div className={styles.gdFooterInfoText}>
                        <h2>Adresse</h2>
                        <p>19 Av. Gallieni,<br/><br/>09200 Saint-Girons</p>
                        <h2>Informations pratiques</h2>

                        <p>geremie.degeilh@gmail.com<br/><br/>+33 6 86 26 26 39</p>
                        <div className={styles.gdFooterInfoSocial}>
                            <a href="https://www.linkedin.com/in/g%C3%A9r%C3%A9mie-degeilh-ab717176/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="./facebook.svg"
                                    alt="Description de l'image"
                                    style={{
                                        width: '70px',
                                    }}
                                    onClick={""}
                                />
                            </a>
                            <a href="https://www.instagram.com/geremie_degeilh_bikefit/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="./insta.svg"
                                    alt="Description de l'image"
                                    style={{
                                        width: '70px',
                                    }}
                                    onClick={""}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Geremie;
