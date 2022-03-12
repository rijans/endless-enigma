import React from 'react';
import styles from '../app.module.css'

function Footer(props) {
    const a = 1;
    console.log('11');
    console.log('22');
    console.log('33');
    return (
        <div className={styles.footer}>
            <div className={styles['footer-content']}>
                Copyright © 2022 React Enigma
            </div>
        </div>
    );
}

export default Footer;