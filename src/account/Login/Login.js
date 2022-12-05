import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { TbLetterM } from 'react-icons/tb';
import Home from '../../pages/Home/Home';
import Create from '../Create/Create';

const Login = () => {
    const { googleSignIn, user, uid } = useContext(AuthContext)
    const handleClick = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
                // 
            }).catch((error) => {
                console.error(error)

            });
    }
    return (
        <div className='p-10'>
            {
                user && user.uid ?
                    <Create></Create>
                    :
                    <div className='w-full h-72  my-3 flex flex-col justify-center items-center place-items-center'>
                        <h2 className='text-xl font-bold flex'>Create <TbLetterM className='text-primary'></TbLetterM> Account</h2>
                        <h2 className='font-extrabold text-primary text-9xl'><TbLetterM></TbLetterM></h2>
                        <button onClick={() => handleClick()} className="btn btn-outline btn-warning w-64"><FcGoogle className='px-1 w-6'></FcGoogle><span className='text-primary'>login with google</span></button>
                    </div>

            }
        </div >
    );
};

export default Login;