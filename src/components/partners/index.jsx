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
    title: "BrandStak",
    paragraph: `A new, easy-to-implement and cost-effective AI / ML -based data unification, analytics and tech integration platform, designed for augmented decisioning in the consumer and retail sector – is pleased to announce two new strategic partnerships. BrandStak has been incubated by the Emerisque Group, a specialist global investor in mid-cap consumer and retail brands.`,
  },
  {
    title: "From the press",
    paragraph: `ShopTalk UK 2022, an event that unites the European consumer and retail ecosystem at the most senior levels, marks the beginning of strategic partnerships between BrandStak and commercetools as well as Fluent Commerce. `,
  },
  {
    title: "From our founder",
    paragraph: `Ajay Khaitan, Founder of BrandStak and a serial investor in consumer and retail brands and “data-tech”, said, “By providing decisioning insights into the key assets of a retail business (Products, Customers, Distribution Channels and the Environment), BrandStak demonstrates the value of fluentcommerce’s OMS, constantly identifying new opportunities to exploit its power within a client’s business ecosystem.”`,
    paragraph2: `James Waterhouse, CTO at BrandStak, added: “our Meta-Event real-time analytics platform will provide triggers to commercetools, that will optimise multi-mode commerce routings and journeys to enhance customer satisfaction and conversions.”`,
    linkTitle1: "London Loves Tech",
    link1: "https://londonlovestech.com/new-partnerships-for-brandstak-io/",
    linkTitle2: "London Business",
    link2:
      "https://www.londonbusinessnews.com/brandstak-announces-partnerships-with-commercetools-and-fluent-commerce/",
    linkTitle3: "London Business",
    link3:
      "https://londonbusinessjournal.co.uk/2022/06/09/new-partnerships-for-brandstak-io/",
  },
  {
    title: "What our partners say",
    paragraph: `Commercetool’s Dirk Weckerlei, VP Global Partnerships at commercetools said, “BrandStak will allow us to reduce our cost, risk and time to market in respect of implementations, providing deep insights into how we create value for our customers.”`,
    paragraph2: `Fluent Commerce, Jamie Cairns CSO said “Brandstak will make a significant contribution to both conversion and project delivery for our clients.
    The simplified integration and speed to market that Brandstak offers, over a traditional implementation approach will allow clients to realise the benefits and ROI much faster than before.”`,
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
      <p>
        {item.paragraph}
        <br />
        <br />
        {item.paragraph2}
        <br />
        <br />
        <span className="press-links">
          {item.link1 && "Links from the press:"}
          <span className="link-group">
            {item.link1 && (
              <a href={item.link1} target="_blank">
                {item.linkTitle1}
              </a>
            )}
            {item.link2 && (
              <a href={item.link2} target="_blank">
                {item.linkTitle2}
              </a>
            )}
            {item.link3 && (
              <a href={item.link3} target="_blank">
                {item.linkTitle3}
              </a>
            )}
          </span>
        </span>
      </p>
    </div>
  );
};

export default Partners;
