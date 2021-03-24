import React from "react"
import { LinkBox, Box, Heading, Text, Image, VStack } from "@chakra-ui/react"

import Layout from "../components/layout"





const BlogPage = () => {

  // const { basePath, previousPage, nextPage } = pageInfo;
  //
  // const previousPageLink = previousPage != '' ? basePath + (previousPage == 1 ? '/' : previousPage) : '';
  // const nextPageLink = nextPage != 0 ? basePath + nextPage : '';
const data = [
  {
    title: 'blech',
    date: 'adasd',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
  },
  {
    title: '2020年玉峰窯年間スケジュール',
    date: 'adasd',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
  },
  {
    title: 'blech',
    date: 'adasd',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
  },
  {
    title: 'blech',
    date: 'adasd',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
  },
]

return(
  <Layout>
<VStack spacing={32}>
{data.map((item) => (
  <LinkBox display="flex" justifyContent="space-between" maxWidth="80vw" width="100%" href={ item.title} role="group" >
    <Box _hover={{ boxShadow: ' 10px 5px 5px red' }}
    _groupHover={{ color: 'blue' }} >
      <Heading as="h1" size="3xl" _hover={{boxShadow: 'xs', color: 'blue.500'}}>  {item.title} </Heading>
      <Text> {item.date} </Text>
    </Box>
    <Image src={item.image} maxHeight="160px" minWidth="305px" ml="10vw" order="1"/>
  </LinkBox>


))}


</VStack>
</Layout>

)
}




export default BlogPage
