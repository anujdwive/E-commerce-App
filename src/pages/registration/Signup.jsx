/* eslint-disable react/no-unescaped-entities */
import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkValidation } from "../../firebase/Vailidate";
import myContext from "../../context/MyContext";
import { useState } from "react";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";
import { auth, fireDB, } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
// import { addDoc, collection } from "firebase/firestore";

const Signup = () => {

    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const [errorMassage, setErrorMassage] = useState(null)
    const navigate = useNavigate()
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const userInfo = {
        role: "user"
    }
    const handelButtonClick = () => {
        const massage = checkValidation(email.current.value, password.current.value)
        if (massage) {
            setErrorMassage(toast.error(massage));
        } else {
            errorMassage;
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                const userData = {
                    name: name.current.value,
                    email:auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    role: userInfo.role,
                    time: Timestamp.now(),
                    date: new Date().toLocaleString(
                        "en-US",
                        {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        }
                    )
                }
                console.log(user);
                console.log(userData);
                // create user Refrence
                const userRefrence = collection(fireDB, "userData")
                // Add User Detail
                addDoc(userRefrence, userData);

                toast.success("Signup Successfully");

                setLoading(false);
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoading(false);
                console.log(errorCode+errorMessage);
            });
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        ref={name}
                        type="text"
                        placeholder='Full Name'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        ref={email}
                        type="email"
                        placeholder='Email Address'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        ref={password}
                        type="password"
                        placeholder='Password'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                        onClick={handelButtonClick}
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;