import React from "react"
//import Layout from "../components/layout"
import Product from "../components/product"
//import Pagination from "../components/paginations"
//import SEO from "../components/seo"

import { Flex, Spacer, Box, Button, Heading, Center, Container, Text, SimpleGrid, Image, Stack, Badge,StarIcon } from "@chakra-ui/react"

import Layout from "../components/layout"

const Archive = ({ pageContext: { products, pageInfo } }) => {
    const { basePath, previousPage, nextPage } = pageInfo;

    const previousPageLink = previousPage != '' ? basePath + (previousPage == 1 ? '/' : previousPage) : '';
    const nextPageLink = nextPage != 0 ? basePath + nextPage : '';
// <SEO title="Products" />
    return (
        <Layout>

<Flex  py={16} px={24} justify="center" direction="column">
<Heading color="gray.800" size="xl" pb={10} px={8} pt={10} fontWeight="medium">

ALL ITEMS

</Heading>
            <SimpleGrid className="woocommerce__product-archive-wrapper" columns={3} >
                {products.map(product => (
                    <Product key={product.id} product={product} path={basePath + product.slug} />
                ))}
            </SimpleGrid>
</Flex>
        </Layout>
    )
}
//             <Pagination previousPage={previousPageLink} nextPage={nextPageLink} />

export default Archive
