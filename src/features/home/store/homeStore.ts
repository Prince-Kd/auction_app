import {create} from 'zustand'
import { getUser } from '../../../storage/localStorage'

interface homeStoreInterface {
    user: storedUserInterface | null;
    fetchUser: () => Promise<any>
}

interface storedUserInterface {
    username: string,
    email: string,
    user_status: string,
}

const useHomeStore = create<homeStoreInterface>()((set) => ({
    user: null,
    fetchUser: async() => {
        let user = await getUser();
        set({user: user});
    },
    
}))

export {useHomeStore}