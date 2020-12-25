import React from 'react'
import { Container } from 'react-bootstrap'

import Section from '../Section'
import SectionHeader from '../SectionHeader'
import MenuTabs from './menuTabs'

const MenuTabsSection = (props) =>{
    return(
        <>
            <Section
            bg=""
            bgImage=""
            size="sm"
            >
                <Container fluid="md">
                <SectionHeader
                title="Menu"
                subtitle="Open Every Day: 9am - 9pm"
                textColor="dark" 
                className="text-center"
                />
                <MenuTabs />
                </Container>
            </Section>

        </>
    )
}

export default MenuTabsSection