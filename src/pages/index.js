import * as React from "react"
import { Flex, Spacer, Box, Button, Heading, Center, Container, Text, Grid, GridItem, Image, Stack, Badge,StarIcon } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'

import Layout from '../components/layout'
//import Product from "../components/product"
//import UniversalLink from "./UniversalLink"
import logo from '../images/L1280311.jpg';
import cupStir from '../images/cup_stir.jpg';
import cup from '../images/DSCF0273.jpg'
import potBook from '../images/DSCF0089.jpg'
import Card from '../components/card'
import LeftCard from '../components/leftCard'
// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "limelight",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const HeroBox = styled(Center)`
  background-position: center;
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;


`;

const OriginBox = styled(Flex)`

background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
line-height: 2;

 :before & {
  content: '';
position: absolute;
top: 0;
left: 0;
display: block;
background: rgba(0, 0, 0, 0.5);
width: 100%;
height: 100%;
}

`;
const DiagonalFlex = styled(Flex)`

position: relative;
background: purple;
  clip-path: polygon(0 0%, 100% 29%, 100% 100%, 0 100%);

  padding: 10rem 20%;

`;

//background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${props => props.image}');

// data

// const App = () => {
//   return (
//     <ChakraProvider>
//
//     </ChakraProvider>
//   )
// }
// markup
const IndexPage = () => {
//   const {data} = useStaticQuery(
//     graphql`
//     query{
//       data(slug: {eq: "home"}) {
//   id
//   featuredImage {
//     node {
//       caption
//       sourceUrl
//     }
//   }
// }
//     }
//     `
//   );
//
const {wpPage} = useStaticQuery(graphql`
  {
    wpPage(slug: {eq: "home"}) {
      id
      isFrontPage
      featuredImage {
        node {
          sourceUrl
        }
      }
      title
    }
  }
`)
  const property = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};
  function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest} bgColor="white">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

  const basePath = 'localhost:8000'
  //const { basePath, previousPage, nextPage } = pageInfo;

  console.log(wpPage)
  return (

<Layout isHome={true} styles={pageStyles} css={pageStyles} >
<Flex  h="100%" direction="column" fontFamily="Montserrat">
  <HeroBox  w="100%" h="100vh" /* image={wpPage.featuredImage.node.sourceUrl} */ backgroundImage={`url('${cupStir}')`} color="white">
  <Center flexDir="column" p={4} borderRadius="md">
    <Heading as="h1" size="4xl" pb={4} fontSize="8rem" fontWeight="medium">銀河湯</Heading>
    <Text fontSize="2xl">明日への夢と希望のために、銀河釉と創造力の冒険</Text>
  </Center>
  </HeroBox>

<OriginBox w="100%" h="120vh" backgroundImage={`url('${cup}')`}>




<Center w="50%" h="100%" flexDirection="column" px="80px">

<Box bg="rgba(0, 0, 0, 0.1)"  p="20px">
<Heading  color="blue.800" size="2xl">
  Origin
</Heading>

<Text py="10px">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum. Consectetur adipiscing elit pellentesque habitant morbi tristique. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Diam maecenas sed enim ut sem viverra. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sit amet commodo nulla facilisi nullam vehicula. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque sit amet porttitor eget dolor morbi non arcu. Amet nisl purus in mollis nunc sed id semper risus. Tristique nulla aliquet enim tortor at auctor urna. Natoque penatibus et magnis dis.
</Text>

<Text>
Pharetra convallis posuere morbi leo urna molestie at elementum eu. Quis vel eros donec ac odio tempor orci dapibus. Nec feugiat in fermentum posuere urna nec. Non nisi est sit amet. Ut etiam sit amet nisl purus in mollis nunc sed. Nec feugiat nisl pretium fusce. Nec ultrices dui sapien eget mi proin sed. Enim facilisis gravida neque convallis a cras. Sem integer vitae justo eget magna fermentum iaculis. Quis varius quam quisque id diam vel quam. Velit egestas dui id ornare. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
</Text>
</Box>
</Center>

</OriginBox>

<Flex h="120vh" pt="100px" >
<Image w="50%" h="100%" bg="gray.200"  objectFit="cover" src={potBook} alt="Gingayu" zIndex="3">
</Image>

<Center w="50%" h="100%" flexDirection="column" px="50px" lineHeight="2" pb="10px">

<Heading  color="blue.800" size="2xl">
  The Process
</Heading>

<Text py="10px">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar elementum. Consectetur adipiscing elit pellentesque habitant morbi tristique. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Diam maecenas sed enim ut sem viverra. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sit amet commodo nulla facilisi nullam vehicula. Vivamus at augue eget arcu dictum varius duis at consectetur. Pellentesque sit amet porttitor eget dolor morbi non arcu. Amet nisl purus in mollis nunc sed id semper risus. Tristique nulla aliquet enim tortor at auctor urna. Natoque penatibus et magnis dis.
</Text>

<Text>
Pharetra convallis posuere morbi leo urna molestie at elementum eu. Quis vel eros donec ac odio tempor orci dapibus. Nec feugiat in fermentum posuere urna nec. Non nisi est sit amet. Ut etiam sit amet nisl purus in mollis nunc sed. Nec feugiat nisl pretium fusce. Nec ultrices dui sapien eget mi proin sed. Enim facilisis gravida neque convallis a cras. Sem integer vitae justo eget magna fermentum iaculis. Quis varius quam quisque id diam vel quam. Velit egestas dui id ornare. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
</Text>
</Center>
</Flex>

<Box h="120vh" bg="#f3f2ff" position="relative">
<Box bg="linear-gradient(to bottom left, rgba(255, 255, 255, 0) 50%, #f3f2ff 50.5%) no-repeat top left/100% 100%" h="200px"  w="100%" top="-200px" position="absolute" zIndex="2"/>

  <Center flexDirection="column" mt="100px">
  <Heading  color="blue.800" size="2xl">
    Galaxy Craft House
  </Heading>
  <Heading  color="blue.800" size="sm" fontWeight="300">
    The Future
  </Heading>
  </Center>

</Box>

<Center h="100%" w="100%" flexDirection="column" mb="30px">
<Heading  color="blue.800" size="2xl">
  Contact Us
</Heading>
<Flex>
<Card/>
<Card/>
</Flex>
</Center>

<Center flexDirection="column" >
<Heading  color="blue.800" size="2xl">
  Posts
</Heading>

<Flex p="30px">
<LeftCard />
<LeftCard style={{marginLeft: "20px"}} />
  <LeftCard />

</Flex>

<Text> Read More </Text>

</Center>







</Flex>

</Layout>
  )
}

export default IndexPage
