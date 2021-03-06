import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';


const Team = ({items}) => (
    <StaticQuery
        query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
        render={data => (
            <Section id="team">
                <Container style={{position: 'relative'}}>
                    <h1>The Team 2020-2021</h1>
                    {Object.entries(items).map(([teamName, teamObj]) => {
                        return (
                        <div>
                            <br/><br/>
                            <h2>{teamName}</h2>
                            <TeamGrid>
                                {teamObj.map(({name, image, role, linkedin}) => {
                                    const img = data.allFile.edges.find(
                                        ({node}) => node.relativePath === image,
                                    ).node;
        
                                    return (
                                        <div>
                                            <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                            alt={name}/></ExternalLink>
                                            <Title>{name}</Title>
                                            <Subtitle>{role}</Subtitle>
                                        </div>
                                    );
                                })}
                            </TeamGrid>
                        </div>
                        )
                    })}
                </Container>
            </Section>
        )}
    />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-template-rows: min-content;
  grid-gap: 25px;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
