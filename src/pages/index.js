import * as React from "react";
import Layout from "../components/layout";
import ImageContent from "../components/imageContent";
import ImageContentTwo from "../components/imageContentTwo";
import StatsBlock from "../components/statsBlock";
import Journey from "../components/journey";
import Statement from "../components/statement";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <ImageContent />
        <StatsBlock />
        <ImageContentTwo />
        <Journey />
        <Statement />
      </Layout>
    </main>
  )
}

export default IndexPage;
