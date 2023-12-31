import '../globals.css'
import type {Metadata} from 'next'
import {Josefin_Sans} from 'next/font/google'
import Chakra from "@/app/components/Chakra";

const josefinSans = Josefin_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={josefinSans.className}>
        <Chakra>
            {children}
        </Chakra>
        </body>
        </html>
    )
}
