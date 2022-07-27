import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import DATA from '../data/data';
import Item from '../components/item/Item';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Home = () => {
  const [textInput, setTextInput] = useState('');

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // };

  ////////////////////////////////////
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  ////////////////////////////////////


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
        {showButton && (<div className={styles.scrollToTop} onClick={() => scrollToTop()}><KeyboardArrowUpIcon /></div>)}
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