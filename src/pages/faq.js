import React from "react";
import FaqPage from '../components/PageComponents/Faq/FaqPage'
import Layout from "../components/layout";
import SEO from "../components/seo";

const FAQ = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />

    <FaqPage />
  </Layout>
);

export default FAQ;
