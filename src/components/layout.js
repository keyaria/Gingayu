import * as React from "react"
import { Flex }  from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import Menu from "./menu"

const Layout = ({children}) => {
return(
  <ChakraProvider>

<Menu />

{children}
<Flex bg='black' h="200px"  >
 footer
</Flex>
    </ChakraProvider>
)




}

export default Layout;
