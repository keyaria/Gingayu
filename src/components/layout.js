import * as React from "react"
import { Flex }  from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import Menu from "./menu"

const Layout = ({children, isHome}) => {
  console.log('isHome', isHome)
return(
  <ChakraProvider>

<Menu isHome={isHome}/>

{children}
<Flex bg="#f3f2ff" h="200px"  >
 footer
</Flex>
    </ChakraProvider>
)




}

export default Layout;
