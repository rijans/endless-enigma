import React from 'react';
import styles from '../app.module.css'

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles['footer-content']}>
                Copyright © 2022 React Enigma
            </div>
        </div>
    );
}

export default Footer;