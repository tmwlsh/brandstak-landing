import React, { useState } from "react";
import Container from "../container";
import * as styles from "./styles.module.scss";
import DotPattern from "../../svgs/dot-pattern.svg";

const statmentStaticData = [
  {
    title: "Our Differentiators",
    paragraph:
      "Integrating best-of-breed SaaS based solutions requires significant technical as well as sector knowledge; it is becoming increasingly complex and expensive for a mid market brand to match the customer experience of their larger competitors in a market where consumer expectations evolve at pace.",
  },
  {
    title: "Our Mission",
    paragraph:
      "Democratize access to next generation data and systems by making full platform composable commerce / MACH accessible and affordable for the mid market lifestyle sector. BrandStak will make your existing platform MACH-ready at a cost you can afford, saving you many times its cost as you adopt future technologies and driving significant value add along the way.",
  },
  {
    title: "Our Value",
    paragraph: `Presenting a single point of integration and a single version of the truth for the real-time performance management of products, locations, sites and consumer engagement. Solving key business issues - catalog management, real-time pricing, inventory utilization &#8211 alongside the ability to track and react to market signals.`,
  },
];

const Statement = () => {
  return (
    <div className={styles.statement} id="mission-statement">
      <DotPattern />
      <Container size="medium">
        {statmentStaticData.map((item) => {
          return <StatementInner item={item} key={item.title} />;
        })}
      </Container>
    </div>
  );
};

const StatementInner = ({ item }) => {
  return (
    <div className={styles.statementBlock}>
      <h4>{item.title}</h4>
      <p>{item.paragraph}</p>
    </div>
  );
};

export default Statement;
