import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const TheTeam = () => {
  return (
    <div className={styles.theTeam} id="the-team">
      <Container size="medium">
        <h3>meet the team <span>brandstak</span></h3>
        <div className={styles.theTeamInner}>
          <ul className={styles.teamList}>
            <li>
              <div className={styles.teamImage} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
            <li>
              <div className={styles.teamImage} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
            <li>
              <div className={styles.teamImage} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
            <li>
              <div className={styles.teamImage} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare augue, at maximus magna. Nunc consequat lorem a pretium bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel sem vel ante gravida hendrerit vulputate non odio. Fusce in nunc mollis, placerat velit ut, pellentesque felis.</p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default TheTeam;
