import React,{ useState }from 'react'
import { Signin } from './Signin';
import { Signup } from './Signup';

export const Login = () => {


    const [login, setLogin] = useState(true);

    const createAccount = () => {
        setLogin(false);
    };

    const authenticate = () => {
        setLogin(true);
    };

    return (
        <div>
            {login && <Signin onCreateAccount={createAccount}/>}
            {!login && <Signup onAuthenticate={authenticate}/>}
        </div>
    );
};

