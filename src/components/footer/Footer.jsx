import React from 'react';

import styles from './styles.module.css';

import aesa_logo from '../../data/aesa_logo.png';
import governo_logo from '../../data/governo_logo.png';

import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logos}>
          <a href="https://paraiba.pb.gov.br/">
            <img src={governo_logo} alt="Governo Logo" />
          </a>
          <a href="http://www.aesa.pb.gov.br/aesa-website/">
            <img src={aesa_logo} alt="Aesa Logo" />
          </a>

        </div>
        <p>AV. DUARTE DA SILVEIRA, S/N, ANEXO AO DER - TORRE, JOÃO PESSOA/PB - CEP: 58013-280</p>
      </div>

      <div className={styles.gitbar}>
        <a href="https://github.com/ZacariasBecker/AESA-RegMun-info">
          <GitHubIcon className={styles.gitIcon} />
          <p>git</p><span>hub</span>
        </a>
      </div>


    </div>

  );
};

export default Footer;