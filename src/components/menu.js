import * as React from "react"
import { Flex, Spacer, Box, Button, Heading, Text, HStack } from "@chakra-ui/react"
// mport Image from "gatsby-image";
import { Image } from "@chakra-ui/react"

import { useStaticQuery, graphql, Link } from "gatsby"
import styled from '@emotion/styled';
import logo from '../images/logo_filled.png';

const NavList = styled.ul`
display: flex;
list-style-type: none;
padding: 0 12px;

`
const Menu = ({isHome}) => {
  const data = useStaticQuery(
    graphql`
    query {
    wpMenu {
      name
      menuItems {
        nodes {
          label
          url
          databaseId
          connectedNode {
            node {
              ... on WpContentNode {
                uri
              }
            }
          }
        }
      }
    }
    fnG: file(relativePath: { eq: "gin.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

`
);

const wpMenu = data.wpMenu;
console.log('sada', data)
if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null;

return(
  <Flex boxShadow="sm" zIndex="2" pos="fixed" top="0"  w="100%" bgColor={!isHome ? 'white': ''} color={!isHome ? 'black': 'white'} px={8} py={2}>
<Box >

  <Image src={logo}  boxSize="70px"/>
  {/* <Image src={data.fnG.childImageSharp.fluid} /> */}
</Box>
<Spacer />
<Box>

  <NavList>
    {wpMenu.menuItems.nodes.map((menuItem, i) => {
      const path = menuItem?.connnectedNode?.node?. uri ?? menuItem.url

      const itemId = "menu-item-" + menuItem.databaseId

      return (
        <li
          id={itemId}
          key={i + menuItem.url}
          css={{paddingLeft: '16px'}}

        >
          <Link
            to={path}
            >
            <Text>{menuItem.label} </Text>
            </Link>
          </li>
      )
    })}
  </NavList>
</Box>
</Flex>
)
}

export default Menu;
