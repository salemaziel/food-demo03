import React from "react";
import ContactPage from '../components/PageComponents/Contact/ContactPage'
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <ContactPage />
  </Layout>
);

export default Contact;
