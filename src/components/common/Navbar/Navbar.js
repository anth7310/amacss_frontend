import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';
import { ReactComponent as AMACSSLogo } from '@images/logos/amacss_logo.svg';
import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';
import ExternalLink from '@common/ExternalLink';
import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import FacebookIcon from '@static/icons/facebook.svg';
import styled from 'styled-components';

const NAV_ITEMS = ['About', 'Brands', 'Team', 'FAQ'];
const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/amacss-utsc',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/amacss_utsc/',
  },
  {
    icon: FacebookIcon,
    link: 'https://facebook.com/AMACSSUTSC',
  },
];

class Navbar extends Component {

  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
        <SocialIcons>
          {SOCIAL.map(({ icon, link }) => (
            <ExternalLink href={link}>
              <img src={icon} alt="link"/>
            </ExternalLink>
          ))}
        </SocialIcons>
      </Scrollspy>
    </NavListWrapper>
  );


  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <AMACSSLogo/>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon/>
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

export default Navbar;