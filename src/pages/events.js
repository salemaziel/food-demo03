import React from "react";
import EventsPage from '../components/PageComponents/Events/EventsPage'
import Layout from "../components/layout";
import SEO from "../components/seo";

const Events = () => (
  <Layout>
    <SEO title="Events" />
      <EventsPage />
  </Layout>
);

export default Events;
