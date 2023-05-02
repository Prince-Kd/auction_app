interface loginInterface{
    email: string;
    password: string;
}

interface signupInterface{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    password: string;
}

export {loginInterface, signupInterface}