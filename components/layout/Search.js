import React from 'react';
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.inputSearch}>
        <div className={styles.icon}>ABC</div>
        <input className={styles.searchBar} placeholder="Search Ingredient" />
      </div>
      <div className={styles.inputSearch}>
        <div className={styles.icon}>ABC</div>
        <input className={styles.searchBar} placeholder="Search Ingredient" />
      </div>
    </div>
  );
}

export default Search;
