"use client"
import {useEffect, useState} from "react";
import {Models} from "appwrite";
import appwriteService from "@/appwrite/config";
import  Avatar from "./Avatar"
import { Box, HStack, Text, VStack} from "@chakra-ui/react";
import Link from "next/link";


const ProfileCard = () => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
    useEffect(() => {
        (async () => {
            const userData = await appwriteService.getCurrentUser()
            if (userData) {
                setUser(userData)
            }
        })()
    },[])


    return(
user && (
    <HStack >
        <HStack >
            <Box >
                <Avatar img={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} />
            </Box>
            <Box >
                <Text >{user.name}</Text>
                <Box className="text-[12px] p-0.5 inline-block rounded-md bg-gradient-to-tr from-primary to-secondary">
                    <button className="px-2 rounded-md font-bold bg-white">FREE</button>
                </Box>
            </Box>
        </HStack>
        <HStack>
            <Box>
                <Text>Display Name</Text>
                <Text>{user.name}</Text>
            </Box>
            <Box className="relative w-full">
                <Text >Email Id</Text>
                <Text >{user.email}</Text>
            </Box>
            <Box className="relative w-full">
                <Text >Phone Number</Text>
                <Text>999-888-7777</Text>
            </Box>
            <Box className="relative w-full">
                <Text >Password</Text>
                <Text >********</Text>
            </Box>
        </HStack>
        <Box >
            <Link
                href={"/logout"}

            >
                Logout
            </Link>
        </Box>
    </HStack>
)
    )
}

export default ProfileCard