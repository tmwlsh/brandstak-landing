import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import Staff1 from "../../images/staff-1.jpg";
import Staff2 from "../../images/staff-2.jpg";
import Staff3 from "../../images/staff-3.jpg";
import Staff4 from "../../images/staff-4.jpg";

const TheTeam = () => {
  return (
    <div className={styles.theTeam} id="the-team">
      <Container size="medium">
        <h3><span>brandstak</span> meet the team</h3>
        <div className={styles.theTeamInner}>
          <ul className={styles.teamList}>
            <li>
              <img className={styles.teamImage} src={Staff4} alt="Ajay Khaitan Team Photo" />
              <div className={styles.teamContent}>
                <h4>Ajay Khaitan | Founder and CEO</h4>
                <p>Visionary entrepreneur and cornerstone investor with 30+ years’ experience leading operations and investments backed by the Khaitan Family Office. Managed individual branded businesses with retail revenues of over $1bn and investments aggregating ~$2bn (including 11 acquisitions and 8 start-ups) in Asia, Europe and North America. Deep focus on transnational and trans-channel development of Lifestyle Vertical brands through leveraging technology / data.</p>
              </div>
            </li>
            <li>
              <img className={styles.teamImage} src={Staff1} alt="James Waterhouse Team Photo" />
              <div className={styles.teamContent}>
                <h4>James Waterhouse | Co-Founder and CTO</h4>
                <p>Head of EMEA for Epicor Software up until the sale to Apax Partners. Launched Managed Services and SaaS product businesses as part of the management team of this $1bn ERP player. Cofounded KeyedIn alongside Lauri and George Klaus - now backed by Arrowroot Capital. Founded and sold several AI / ML focused start-ups. Technology Partner for UK PE groups in £150m-£750m retail, distribution, logistics and B2B environments. Recognized expert in the implementation of data science to support business objectives.</p>
              </div>
            </li>
            <li>
              <img className={styles.teamImage} src={Staff3} alt="Angus Scrimgeour Team Photo" />
              <div className={styles.teamContent}>
                <h4>Angus Scrimgeour | Co-Founder and Chairman</h4>
                <p>Internationally-recognized multilateral and commercial banking, investment management and financial services revisioning expertise, often with the deployment of technology as an integral part of the transformational processes. Integral to Emerisque’s investing activities in tech/ data for ~20 years. Background: World Bank / MIGA, The Corporation of Lloyd’s, Citibank.</p>
              </div>
            </li>
            <li>
              <img className={styles.teamImage} src={Staff2} alt="Staff Member Team Photo" />
              <div className={styles.teamContent}>
                <h4>Dr. Tim Drye | Chief Data Scientist</h4>
                <p>Head of Applied Statistics at Cambridge University, Theoretical Statistical Physicist background, “Data IQ” Data Scientist of the Year recipient. Expert in AI and Machine Learning with a proven commercial track record across retail, aviation, government, charitable and enterprise organisations. Predictive model development for activities including Marketing, Operations and Supply Chain.</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default TheTeam;
