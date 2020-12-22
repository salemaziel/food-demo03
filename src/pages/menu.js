import React from "react";
import MenuPage from '../components/PageComponents/Menu/MenuPage'
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const Menu = () => (
  <Layout>
    <SEO title="Menu" />

    <MenuPage />
  </Layout>
);

export default Menu;
