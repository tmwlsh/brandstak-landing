import React, { useState, useRef } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import DotPattern from "../../svgs/dot-pattern.svg";

const ListContent = () => {

  const contentBlockListRef = useRef();
  const [activeListItem, setActiveListItem] = useState(0);

  const handleChangeListItem = (event, newIndex) => {
    setActiveListItem(newIndex)
  }

  return (
    <div className={styles.listContent} id="key-benefits">
      <DotPattern />
      <Container size="large">
        <h3>Lifestyle &amp; retail use cases</h3>
        <div className={styles.listContentInner}>
          <div ref={contentBlockListRef} className={styles.listContentLeft}>
            {[
              {
                content: '1 Understand levels of market demand for products at a SKU level',
                image: 'IMAGE_HERE'
              },
              {
                content: '2 Understand levels of market demand for products at a SKU level',
                image: 'IMAGE_HERE'
              },
              {
                content: '3 Understand levels of market demand for products at a SKU level',
                image: 'IMAGE_HERE'
              },
              {
                content: '4 Understand levels of market demand for products at a SKU level',
                image: 'IMAGE_HERE'
              },
              {
                content: '5 Understand levels of market demand for products at a SKU level',
                image: 'IMAGE_HERE'
              },
              {
                content: '6 Understand levels of market demand for products at a SKU level',
                image: 'IMAGE_HERE'
              }
            ].map((contentItem, contentItemIndex) => {
              const contentBlockStyles = [styles.listContentBlock, contentItemIndex === activeListItem ? styles['active'] : styles['inactive']];
              return (
                <div
                  key={contentItemIndex}
                  className={contentBlockStyles.join(" ")}
                >
                  <div className={styles.listContentBlockImage} />
                  <p>{contentItem.content}</p>
                  {/* <img src={contentItem.image} /> */}
                </div>
              )
            })}
          </div>
          <div className={styles.listContentRight}>
            <ul>
              {[
                'Demand Sensing',
                'Customer Journey Analytics',
                'Social Media Analytics',
                'Inventory Management',
                'Geospatial Analytics',
                'Programmatical Attribution'
              ].map((listItem, listItemIndex) => {
                const contentBlockStyles = [styles.listText, listItemIndex === activeListItem ? styles['active'] : styles['inactive']];
                return (
                  <li
                    className={contentBlockStyles.join(" ")}
                    key={listItemIndex}
                    onClick={e => handleChangeListItem(e, listItemIndex)}
                  >
                    {listItem}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ListContent;
