import conf from "@/conf/config";
import {Client, Account, ID} from "appwrite";

type CreateUserAccount = {
    email: string,
    password: string,
    name: string
}

type LoginUserAccount = {
    email: string,
    password: string
}

const appwriteClient = new Client()

appwriteClient.setEndpoint("https://cloud.appwrite.io/v1").setProject("64a78fd1c15869c8d485")

export const account = new Account(appwriteClient)

export class AppwriteService {
    public async createUserAccount({email, password, name}: CreateUserAccount) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error: any) {
            throw error
        }
    }

    async login({email, password}: LoginUserAccount) {
        try {
            return await account.createEmailSession(email, password)
        } catch (error: any) {
            throw error
        }
    }

    async isLoggedIn(): Promise<Boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data)
        } catch (error: any) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return account.get()
        } catch (error: any) {
            console.log("get current user error" + error)
        }
    }

    async loggedOut() {
        try {
            return await account.deleteSession("current")
        } catch (error: any) {
            console.log("Log Out Error" + error)
        }
    }
}

const appwriteService = new AppwriteService
export default appwriteService
