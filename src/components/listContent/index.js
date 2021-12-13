import React, { useState, useRef } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import DotPattern from "../../svgs/dot-pattern.svg";

import Image1 from "../../images/demand-sensing.png";
import Image2 from "../../images/inventory-management.png";
import Image3 from "../../images/journey-analytics.png";
import Image4 from "../../images/social-media.png";
import Image5 from "../../images/geospatial-analytics.png";
import Image6 from "../../images/programmatic-attribution.png";

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
                content: 'Identify demand for products across all consumer touch points',
                image: Image1
              },
              {
                content: 'Maximize demand servicing for consumers with lower levels of inventory',
                image: Image2
              },
              {
                content: 'Understand, map and influence brand consumer journeys throughout the site',
                image: Image3
              },
              {
                content: 'Drive footfall, increase clicks and engender loyalty through social media',
                image: Image4
              },
              {
                content: 'Maximize operating leverage through a better-quality store estate',
                image: Image5
              },
              {
                content: 'Identify the “value add” each store delivers to sales across all channels',
                image: Image5
              }
            ].map((contentItem, contentItemIndex) => {
              const contentBlockStyles = [styles.listContentBlock, contentItemIndex === activeListItem ? styles['active'] : styles['inactive']];
              return (
                <div
                  key={contentItemIndex}
                  className={contentBlockStyles.join(" ")}
                >
                  <img src={contentItem.image} />
                  <p>{contentItem.content}</p>
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
