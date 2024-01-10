import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const router = useRouter();
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <nav style={{...navBarStyle, backgroundColor: scrolling ? '#000' : 'transparent'}}>
            <div style={logoStyle}>
                <img src="./gdLogo.png" alt="Logo" style={{width: "10%"}}/>
            </div>
            <ul style={navListStyle}>
                <li style={{ marginRight: '20px' }} onClick={() => navigateTo('/Geremie')}>
                    Geremie Degeilh
                </li>
                <li style={{ marginRight: '20px' }} onClick={() => navigateTo('/winwatt')}>
                    WinWatt
                </li>
                <li style={{ marginRight: '20px' }} onClick={() => navigateTo('/veloclandestin')}>
                    Vélo Clandestin
                </li>
            </ul>
        </nav>
    );
};

const navBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Pour assurer que la barre de navigation est au-dessus du reste du contenu
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
    transition: 'background-color 0.3s ease-out',
};

const logoStyle = {
    marginRight: '10px',
};

const navListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
};

export default NavBar;
