import React from "react";
import * as styles from "./styles.module.scss";
import Container from "../container";
import googleImage from "../../images/partners/google.png";
import commerceImage from "../../images/partners/commerce.png";
import contentImage from "../../images/partners/content.png";
import fitImage from "../../images/partners/fit.png";
import fluentImage from "../../images/partners/fluent.png";
import lookerImage from "../../images/partners/looker.png";
import DotPattern from "../../svgs/dot-pattern.svg";
const partnerData = [
  { name: "google", logo: googleImage, link: "https://cloud.google.com/" },
  { name: "commerce", logo: commerceImage, link: "https://commercetools.com/" },
  { name: "fluent", logo: fluentImage, link: "https://fluentcommerce.com/" },
  { name: "fit", logo: fitImage, link: "https://www.fitanalytics.com/" },
  {
    name: "content",
    logo: contentImage,
    link: "https://www.contentstack.com/",
  },
  { name: "looker", logo: lookerImage, link: "https://www.looker.com/" },
];

const staticPartnerData = [
  {
    title: "needs title",
    paragraph: `BrandStak – a new AI / ML and advanced data management platform
  designed for the Affordable Luxury retail sector is pleased to
  announce two new strategic partnerships with key composable commerce
  platforms Commercetools and Fluent Commerce.`,
  },
  {
    title: "From our Founder",
    paragraph: ` Ajay Khaitan, CEO and serial investor in Brands, and the technology
that supports them, said “By providing deep insights into the key
assets of a retail business (Products, Customers, Locations and Store
Fronts) BrandStak demonstrates the value of Fluent’s OMS, constantly
identifying new opportunities to exploit the power of Fluent Commerce
within a client organisation”.`,
  },
  {
    title: "What our partners say",
    paragraph: ` Commercetools Head of Partnerships EMEA said “BrandStak will allow us
  to reduce the cost, risk and time to market of implementations,
  providing deep insights into how we create value for our customers”.
  James Waterhouse, CTO at Brandstak added “our Meta-Event real time
  analytics platform will provides triggers to Commerctools, maximising
  the deployment of multiple commerce routings and journeys”.
  
  Fluent Commerce Head of Sales EMEA said “by proving out the benefits
  our products bring and clearly demonstrating the ROI, BrandStak will
  make a significant contribution to both conversion and project
  delivery. The simplified integration and speed to market that
  BrandStak offers over a traditional implementation approach will allow
  our clients to indent, prove and realise benefits much faster than
  ever before”.`,
  },
];

const Partners = () => {
  return (
    <div className={styles.partnersWrap} id="contact">
      <h3>
        <span>brandstak</span>Partners
      </h3>
      <Container size="medium">
        <DotPattern />
        {staticPartnerData.map((item) => (
          <StatementInner key={item.title} item={item} />
        ))}
      </Container>
      <Container size="medium">
        <div className={styles.flexWrap}>
          {partnerData.map((partner) => {
            return (
              <a
                className={styles.partnerImage}
                key={partner.name}
                href={partner.link}
                target="_blank"
              >
                <img alt={`${partner.name} logo`} src={partner?.logo} />
              </a>
            );
          })}
        </div>
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

export default Partners;
