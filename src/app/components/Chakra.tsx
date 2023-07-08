"use client"
import { ChakraProvider } from '@chakra-ui/react'
import {Children} from "react";

function Chakra({children }: {children: React.ReactNode}) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}

export default Chakra;