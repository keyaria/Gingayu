import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { Flex, Box , Text, Heading, Button, SimpleGrid, Stack, Input, InputGroup, InputRightElement, InputLeftElement, useNumberInput} from "@chakra-ui/react"

//import SEO from "../components/seo"
import AddToCartButton from "../components/addToButton"

//export const query = graphql`
//   query($id: String!) {
//       wpProduct(id: { eq: $id }) {
//         ... on WpSimpleProduct {
//           id
//           name
//           description
//           image {
//             sourceUrl
//           }
//           attributes {
//             nodes {
//               name
//             }
//           }
//           price
//           onSale
//           slug
//           status
//           regularPrice
//           salePrice
//           image {
//             localFile{
//             childImageSharp {
//               fixed(width: 500) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//         }
//       }
//   }
// `

const ProductDetail = ({ id, name, price, description }) => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    min: 1,
  })
  const inc = getIncrementButtonProps()
 const dec = getDecrementButtonProps()
 const input = getInputProps({ isReadOnly: true })

  return (
    <Stack spacing={2} className="woocommerce-product__detail" display py={4}>
      <Heading className="woocommerce-product__name" color="gray.700" fontWeight="medium" css={{textTransform: 'uppercase'}} >{name}</Heading>
      <Text className="woocommerce-product__price" color="gray.600" pb="24px">{price}</Text>
      <Stack spacing={6}>
  <InputGroup>
    <InputLeftElement

      color="gray.300"
      fontSize="1.2em"
      children={<Button{...dec}> - </Button>}
    />
    <Input placeholder="Quantity"  {...input}/>
    <InputRightElement children={<Button {...inc}> + </Button>} />
  </InputGroup>

  <AddToCartButton product={{ id, name, price }} >
  ADD TO CART
</AddToCartButton>
</Stack>


    </Stack>
  )
}

const Product = (data) => {
  console.log('sdff', data.data)
  let product;
  console.log('werewr', product)
  //<SEO title={product.name} />
  useEffect(() => {
    product = dat.data.wpProduct
  }, [])
  return (
    <Layout>
    {product && (
      <SimpleGrid columns={2} px={6} gap="6">
      <Box className="woocommerce-product__wrapper" h="100%">
        <Image fixed={product.image.localFile.childImageSharp.fixed} style={{ width: 600, height: 600 }} />
      </Box>
      <Stack spacing={8} m={12} >
      <ProductDetail
        id={product.id}
        description={product.description}
        price={product.regularPrice}
        name={product.name}
      />
      <div>
      <Heading as="h4" size="sm" color="gray.700">PRODUCT DETAILS:</Heading>
      <div className="woocommerce-product__description"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      </div>
      </Stack>
      </SimpleGrid>
    )}
    </Layout>
  )
}

export default Product
