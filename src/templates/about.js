import React from "react"
//import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Flex, Spacer, Box, Button, Heading, Center, Container, Text, SimpleGrid, Image, Stack, Badge,StarIcon } from "@chakra-ui/react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"
import Layout from "../components/layout"


const About = () => {

  const {wpPage} = useStaticQuery(graphql`
    {
      wpPage(slug: {eq: "profile"}) {
        id
        title
        content
      }
    }
  `)

console.log('qp',wpPage)



  return(
    <Layout>
      <Container css={{paddingTop: '100px'}}>
<Heading> About </Heading>
      <Accordion>
  <AccordionItem>
    <AccordionButton>
      <Box flex="1" textAlign="left">
        Section 1 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <AccordionButton>
      <Box flex="1" textAlign="left">
        Section 2 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Container>


    </Layout>

  )



}

export default About;
