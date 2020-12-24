import React from "react";
import GalleryPage from '../components/PageComponents/Gallery/GalleryPage'
import Layout from "../components/layout";
import SEO from "../components/seo";

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
      <GalleryPage />
  </Layout>
);

export default Gallery;
