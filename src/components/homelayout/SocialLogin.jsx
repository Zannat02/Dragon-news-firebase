import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, useLocation } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const SocialLogin = () => {

    const { signInWithGoogle, signInWithGithub } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(location.state?.from ? location.state.from : "/");
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    const handleGithubLogin = () => {
        toast("Github login is coming soon!");
    }

    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className="space-y-3">
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full btn-secondary'> <FcGoogle size={24} /> Login with Google</button>
                <button onClick={handleGithubLogin} className='btn w-full btn-outline btn-primary'> <FaGithub size={24} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;