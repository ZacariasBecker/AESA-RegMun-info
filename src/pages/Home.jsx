import React from 'react';

import styles from './styles.module.css';

import DATA from '../data/data';

import Item from '../components/item/Item';

const Home = () => {

  // function handleString(text) {
  //   text = text.toLowerCase();
  //   text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
  //   text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
  //   text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
  //   text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
  //   text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
  //   text = text.replace(new RegExp('[ç]', 'gi'), 'c');
  //   return text;
  // }

  return (
    <div className={styles.container}>
      {DATA.map(item => {
        return (
          <Item props={item} />
        );
      })}
    </div>
  );
};

export default Home;