import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Box, Heading, Text,Flex } from "@chakra-ui/react"

const Product = ({ product, path }) => {
    console.log('dsffsd', product)
    const imageFixed = product.name ? product.image.localFile.childImageSharp.fixed : ''
    return (
        <Flex className="woocommerce-product" justify="center" pb={8}>
            <Link className="woocommerce-product__link" to={path}>
                <Image fixed={imageFixed} style={{ width: 350, height: 400 }} />
                <Heading as="h4" size="l" fontWeight="medium">{product.name}</Heading>

                <Flex className="woocommerce-product__price-wrapper">
                    <Text fontSize="sm" className={product.onSale ? `onsale` : ""} >
                        Price: {product.regularPrice}
                    </Text>
                    <Text fontSize="sm">
                        {product.onSale ? (
                            <>
                                <span>Sale: </span>
                                {product.salePrice}
                            </>
                        ) : (
                                ""
                            )}
                    </Text>
                </Flex>
            </Link>
        </Flex>
    )
}

export default Product;
