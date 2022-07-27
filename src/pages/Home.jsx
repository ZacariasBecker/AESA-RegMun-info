import React, { useState } from 'react';

import styles from './styles.module.css';

import DATA from '../data/data';

import Item from '../components/item/Item';

const Home = () => {

  const [textInput, setTextInput] = useState('');

  function handleString(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[ç]', 'gi'), 'c');
    return text;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input type="text" onChange={e => setTextInput(handleString(e.target.value))} className={styles.textInput} placeholder="município" />
        {DATA.filter(item => handleString(item.municipio.toLowerCase()).includes(textInput)).map(item => {
          return (
            <Item props={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;