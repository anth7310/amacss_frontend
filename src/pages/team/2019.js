import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Team from '@sections/Team';
import Footer from '@sections/Footer';

import {
    EXECUTIVE_TEAM, ACADEMICS_TEAM, FINANCE_TEAM, TECH_TEAM, EVENTS_TEAM, MARKETING_TEAM, FIRST_YEAR_TEAM
} from '../../data/teams_data_2019'

var items = {
    "Executive Team": EXECUTIVE_TEAM,
    "Academics Team": ACADEMICS_TEAM,
    "Finance Team": FINANCE_TEAM,
    "Technology Team": TECH_TEAM,
    "Events Team": EVENTS_TEAM,
    "Marketing Team": MARKETING_TEAM,
    "First Year Representatives": FIRST_YEAR_TEAM
}

const year = 2019;

const TeamPage = () => (
    <Layout>
        <Navbar/>
        <Team items={items} year={year}/>
        <Footer/>
    </Layout>
);

export default TeamPage;
