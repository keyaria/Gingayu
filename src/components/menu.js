import * as React from "react"
import { Flex, Spacer, Box, Button, Heading, Text, HStack } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from '@emotion/styled';

const NavList = styled.ul`
display: flex;
list-style-type: none;
padding: 0 12px;

`
const Menu = () => {
  const { wpMenu } = useStaticQuery(
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
  }
`
);

if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null;

return(
  <Flex boxShadow="sm" zIndex="2" pos="fixed" top="0"  w="100%" bgColor="white" color="black" px={8} py={8}>
<Box >
  <Heading size="md">GINGAYU</Heading>
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
