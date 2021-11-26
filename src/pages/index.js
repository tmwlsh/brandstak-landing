import * as React from "react";
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout";
import ImageContent from "../components/imageContent";
import ImageContentTwo from "../components/imageContentTwo";
import StatsBlock from "../components/statsBlock";
import Journey from "../components/journey";
import Statement from "../components/statement";
import ListContent from "../components/listContent";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Fade><ImageContent /></Fade>
        <Fade><StatsBlock /></Fade>
        <Fade><ImageContentTwo /></Fade>
        <Fade><ListContent /></Fade>
        <Fade><Journey /></Fade>
        <Fade><Statement /></Fade>
      </Layout>
    </main>
  )
}

export default IndexPage;
