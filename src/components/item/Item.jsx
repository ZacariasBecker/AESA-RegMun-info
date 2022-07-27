import React from 'react';
import styles from './styles.module.css';

const Item = ({ props }) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.sigMun}>
          <p>[{props.sigla}]</p>
          <p>{props.municipio}</p>
        </div>
        <p>{props.regional}</p>
      </div>
    </div>
  );
};

export default Item;