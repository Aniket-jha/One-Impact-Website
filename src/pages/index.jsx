import React from "react";
import { client } from "../../lib/client";
import ShowcaseDark from "./showcase/showcase-dark";

const Home = ({banners}) => {
  return (
    <>
      <ShowcaseDark banners={banners}/>
    </>
  );
};

export const getServerSideProps= async () => {
  const query = '*[_type == "homeBanners"] | order(releaseDate asc) | order(_createdAt asc)';
  const banners = await client.fetch(query);

  return{
    props:{banners}
  }
}

export default Home;
