import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("")

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    }
    else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  
    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          
            setUser({ ...user, displayName: name, photoURL: photo });
           
            navigate("/");
          });
      })
      .catch(error => {
           toast.error(error.message);
      });
  }


  return (
    <div className='flex justify-center min-h-screen items-center px-4 py-10'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-xl md:text-2xl text-center px-4'>Register your account</h2>
        <form onSubmit={handleRegister} className="card-body px-4 md:px-8">
          <fieldset className="fieldset">

            {/* name */}
            <label className="label">Name</label>
            <input type="text" name='name' className="input w-full" placeholder="name" required />

            {nameError && <p className='text-xs text-error'>{nameError}</p>}

            {/* photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" name='photo' className="input w-full" placeholder="photo URL" required />




            {/* email */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input w-full" placeholder="Email" required />

            {/* password */}

            <label className="label">Password</label>
            <input type="password" name='password' className="input w-full" placeholder="Password" required />

            <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
            <p className='font-semibold text-center pt-5 text-sm md:text-base'>Already Have An Account ? <Link className='text-secondary underline' to='/auth/login'>Login</Link> </p>
          </fieldset>
        </form>
      </div>
    </div>

  );
};

export default Register;