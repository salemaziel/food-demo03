import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Pic from '../../images/carne-asada-tacos.jpg'
import Nav from 'react-bootstrap/Nav'

import Section1Menu from '../PageComponents/Menu/Section1Menu'
import Section2Menu from '../PageComponents/Menu/Section2Menu'
import Section3MainMenu from '../PageComponents/Menu/Section3MainMenu'
import Section4Dessert from '../PageComponents/Menu/Section4Dessert'

import menuTabsStyle from './menuTabs.module.css'

const MenuTabs = (props) => {
    return(
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first"
            tabClassName=""
            >
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column " >
        <Nav.Item className="">
          <Nav.Link eventKey="first" className={menuTabsStyle.Tab}>Appetizers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" className={menuTabsStyle.Tab}>Breakfast</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third" className={menuTabsStyle.Tab}>Lunch &amp; Dinner</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth" className={menuTabsStyle.Tab}>Dessert &amp; Drinks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth" className={menuTabsStyle.Tab}>Specials</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <Container>
                <Row className="justify-content-center text-left">
                    <Col>

            <Section1Menu />
            </Col>
            </Row>
            <Row>
                <Col>
                <span
                  className="uk-button-primary uk-button-large uk-button btn-lg btn-block"
                  data-glf-cuid="8e7c87fd-2ed0-44b4-9886-8626e340905e"
                  data-glf-ruid="d3afdc87-1713-43aa-bd55-854fdf812f01"
                >
                  {" "}
                  Order Online
                </span>
                </Col>
            </Row>
            </Container>
            
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Container>
                <Row className="justify-content-center text-left">
                    <Col>

            <Section2Menu />

            </Col>
            </Row>
            <Row>
                <Col>
                <span
                  className="uk-button-primary uk-button-large uk-button btn-lg btn-block"
                  data-glf-cuid="8e7c87fd-2ed0-44b4-9886-8626e340905e"
                  data-glf-ruid="d3afdc87-1713-43aa-bd55-854fdf812f01"
                >
                  {" "}
                  Order Online
                </span>
                </Col>
            </Row>
            </Container></Tab.Pane>
            <Tab.Pane eventKey="third">
            <Container>
                <Row className="justify-content-center text-left">
                    <Col>

                    <Section3MainMenu />
                                </Col>
            </Row>
            <Row>
                <Col>
                <span
                  className="uk-button-primary uk-button-large uk-button btn-lg btn-block"
                  data-glf-cuid="8e7c87fd-2ed0-44b4-9886-8626e340905e"
                  data-glf-ruid="d3afdc87-1713-43aa-bd55-854fdf812f01"
                >
                  {" "}
                  Order Online
                </span>
                </Col>
            </Row>
            </Container>
            
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
            <Container>
                <Row className="justify-content-center text-left">
                    <Col>

                    <Section4Dessert />

            </Col>
            </Row>
            <Row>
                <Col>
                <span
                  className="uk-button-primary uk-button-large uk-button btn-lg btn-block"
                  data-glf-cuid="8e7c87fd-2ed0-44b4-9886-8626e340905e"
                  data-glf-ruid="d3afdc87-1713-43aa-bd55-854fdf812f01"
                >
                  {" "}
                  Order Online
                </span>
                </Col>
            </Row>
            </Container>
            
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
            <Container>
                <Row className="justify-content-center text-left">
                    <Col>

            <Section1Menu />
            </Col>
            </Row>
            <Row>
                <Col>
                <span
                  className="uk-button-primary uk-button-large uk-button btn-lg btn-block"
                  data-glf-cuid="8e7c87fd-2ed0-44b4-9886-8626e340905e"
                  data-glf-ruid="d3afdc87-1713-43aa-bd55-854fdf812f01"
                >
                  {" "}
                  Order Online
                </span>
                </Col>
            </Row>
            </Container>
            
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </>
    )
}

export default MenuTabs