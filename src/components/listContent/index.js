import React, { useState, useRef } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const ListContent = () => {

  const contentBlockListRef = useRef();
  const [activeListItem, setActiveListItem] = useState(1);

  const changeListItem = (e) => {
    console.log('====================================');
    const listArray = Array.from(e.target.parentNode.children);
    const blocksArray = Array.from(contentBlockListRef.current.children);
    const targetBlockIndex = listArray.indexOf(e.target);
    console.log(blocksArray[targetBlockIndex].classList);
  }

  return (
    <div className={styles.listContent}>
      <Container size="large">
        <h3>Lifestyle &amp; retail use cases</h3>
        <div className={styles.listContentInner}>
          <div ref={contentBlockListRef} className={styles.listContentLeft}>
            <div className={styles.listContentBlock}>
              <div className={styles.listContentBlockImage} />
              <p>1 Understand levels of market demand for products at a SKU level</p>
            </div>
            <div className={styles.listContentBlock}>
              <div className={styles.listContentBlockImage} />
              <p>2 Understand levels of market demand for products at a SKU level</p>
            </div>
            <div className={styles.listContentBlock}>
              <div className={styles.listContentBlockImage} />
              <p>3 Understand levels of market demand for products at a SKU level</p>
            </div>
            <div className={styles.listContentBlock}>
              <div className={styles.listContentBlockImage} />
              <p>4 Understand levels of market demand for products at a SKU level</p>
            </div>
            <div className={styles.listContentBlock}>
              <div className={styles.listContentBlockImage} />
              <p>5 Understand levels of market demand for products at a SKU level</p>
            </div>
            <div className={styles.listContentBlock}>
              <div className={styles.listContentBlockImage} />
              <p>6 Understand levels of market demand for products at a SKU level</p>
            </div>
          </div>
          <div className={styles.listContentRight}>
            <ul>
              <li onClick={e => changeListItem(e)}>Demand Sensing</li>
              <li onClick={e => changeListItem(e)}>Customer Journey Analytics</li>
              <li onClick={e => changeListItem(e)}>Social Media Analytics</li>
              <li onClick={e => changeListItem(e)}>Inventory Management</li>
              <li onClick={e => changeListItem(e)}>Geospatial Analytics</li>
              <li onClick={e => changeListItem(e)}>Programmatical Attribution</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ListContent;
