import * as React from "react"
import { Flex, Spacer, Box, Button, Heading, Center, Container, Text, Grid, GridItem, Image, Stack, Badge,StarIcon } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";
import styled from '@emotion/styled';
import Layout from '../components/layout'
//import Product from "../components/product"
//import UniversalLink from "./UniversalLink"


// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${props => props.image}');
  background-position: center;
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;

`;

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
  const {wpPage} = useStaticQuery(
    graphql`
    query{
      wpPage(slug: {eq: "home"}) {
  id
  featuredImage {
    node {
      caption
      sourceUrl
    }
  }
}
    }
    `
  );
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

<Layout>
<Flex bg='gray.100' h="100%" direction="column">
  <HeroBox  w="100%" h="95vh" image={wpPage.featuredImage.node.sourceUrl} color="white">
  <Center flexDir="column" border="solid 2px" borderColor="white" p={4} borderRadius="md">
    <Heading as="h1" size="4xl" pb={4} fontSize="8rem" fontWeight="medium">銀河湯</Heading>
    <Text fontSize="2xl">明日への夢と希望のために、銀河釉と創造力の冒険</Text>
  </Center>
  </HeroBox>

<Grid
  h="90vh"
  templeteRows="repeat(3, 1fr)"
  templateColumns={['repeat(1, 1fr)', 'repeat(11, 1fr)', 'repeat(11, 1fr)']}
  gap={4}
>
<GridItem rowSpan={3} colSpan={5} bg="gray.200" >
<Container   h="90%" my={6} css={{backgroundImage: `url('${wpPage.featuredImage.node.sourceUrl}')`}}>

   </Container>
</GridItem>
<GridItem colSpan={6} >
  <Center flexDir="column" bgColor="blue.200" w="100%" h="100%">
    <Heading>
      Artwork collect
    </Heading>
    <Text>
      sdfesdwefefw
    </Text>
  </Center>
</GridItem>
<GridItem colSpan={3} rowSpan={2} bg="gray.400" css={{backgroundImage: `url('${wpPage.featuredImage.node.sourceUrl}')`}}>

</GridItem>
<GridItem colSpan={3} rowSpan={2} bg="gray.400" css={{backgroundImage: `url('${wpPage.featuredImage.node.sourceUrl}')`}}>

</GridItem>
</Grid>

<Flex px={4} direction="column">
<Heading>
  Updates

</Heading>

<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={property.imageUrl} alt={property.imageAlt} />

    <Box p="6" bgColor="white">
      <Box d="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {property.beds} beds &bull; {property.baths} baths
        </Box>
      </Box>

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {property.title}
      </Box>

      <Box>
        {property.formattedPrice}
        <Box as="span" color="gray.600" fontSize="sm">
          / wk
        </Box>
      </Box>

      <Box d="flex" mt="2" alignItems="center">

        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {property.reviewCount} reviews
        </Box>
      </Box>
    </Box>
  </Box>
</Flex>


{/*For this i will try no picture but instead a sticky heading a scroll to see times see reference pic*/}
<Flex  h="700px"  direction="column" p={4}>
  <Heading>
    2020年玉峰窯年間スケジュール
  </Heading>

  <Stack spacing={8} p={8}>
    <Feature
      title="6月10日〜16日"
      desc="藤沢 さいか屋 彩の工芸展「ブルーの世界」"
    />
    <Feature
      title="6月16日〜28日"
      desc="広島 三越 アートサロン"
    />
    <Feature
      title="6月16日〜28日"
      desc="広島 三越 アートサロン"
    />
    <Feature
      title="6月16日〜28日"
      desc="広島 三越 アートサロン"
    />
  </Stack>
</Flex>



</Flex>

</Layout>
  )
}

export default IndexPage
