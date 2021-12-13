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
              <img className={styles.teamImage} src={Staff1} alt="Staff Member Team Photo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
            <li>
              <img className={styles.teamImage} src={Staff2} alt="Staff Member Team Photo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
            <li>
              <img className={styles.teamImage} src={Staff3} alt="Staff Member Team Photo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
            <li>
              <img className={styles.teamImage} src={Staff4} alt="Staff Member Team Photo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default TheTeam;
