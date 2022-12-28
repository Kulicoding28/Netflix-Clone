import React from "react";
import Index from "../components/Index";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Index />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpComing} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Tranding" fetchURL={requests.requestTranding} />
      <Row rowID="4" title="TopRated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
