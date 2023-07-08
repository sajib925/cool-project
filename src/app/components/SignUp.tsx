import {Box, Button, Input, Text, VStack} from "@chakra-ui/react";
import {useRouter} from "next/router";
import useAuth from "@/context/useAuth";
import appwriteService from "@/appwrite/config";
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


type FormValues = {
    name: string,
    email: string,
    password: string
}
const SignUp = () => {
    // const router = useRouter()
    const {setAuthStatus} = useAuth()

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
        resolver: yupResolver(schema)
    })

    const {register, handleSubmit,formState,reset} = form
    const {errors} = formState
const onSubmit = (data: FormValues) => {
        appwriteService.createUserAccount(data)
    console.log(data)
    reset()

}
    return (
        <Box>
            <VStack alignItems={"center"}> 
                <Text>Sign Up</Text>
                <VStack>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack gap={"24px"}>
                        <VStack alignItems={"stretch"}>
                            <Text>Your Name</Text>
                            <Input placeholder={"Your Name"} type={"text"} {...register("name")} />
                            <Text color={"red.600"}>{errors.name?.message}</Text>
                        </VStack>
                        <VStack alignItems={"stretch"}>
                            <Text>Your Email</Text>
                            <Input placeholder={"Your Email"} type={"email"} {...register("email")}/>
                            <Text color={"red.600"}>{errors.email?.message}</Text>
                        </VStack>
                        <VStack alignItems={"stretch"}>
                            <Text>Password</Text>
                            <Input placeholder={"Password"} type={"password"} {...register("password")}/>
                            <Text color={"red.600"}>{errors.password?.message}</Text>
                        </VStack>
                            <Button type={"submit"}>Sign Up</Button>
                        </VStack>
                    </form>
                </VStack>
            </VStack>
        </Box>
    )
}

export default SignUp