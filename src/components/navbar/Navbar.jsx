import React from 'react';

import styles from './styles.module.css';


import logo from '../../data/aesa_logo.png';

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a href="http://www.aesa.pb.gov.br/aesa-website/">
          <img src={logo} alt="Logo" />
        </a>
        <p>
          Regional e Município info
        </p>
      </div>
    </div>
  );
};

export default Navbar;