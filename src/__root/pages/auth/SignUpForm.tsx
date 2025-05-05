import { useCheckBackendIsWorking} from "@/hooks/useSignUp";
import validationSchema from "@/utils/validations/signUpFormValidations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [isPasswordSeen , setIsPasswordSeen] = useState(false);
  const [isConfirmPasswordSeen , setIsConfirmPasswordSeen] = useState(false);

  const {data ,refetch } = useCheckBackendIsWorking()

  const handleSubmit = async (values: typeof initialValues) => {
    // mutate(values);]
  


    console.log("Form values:", values);

    // Optionally re-check backend status
    const result = await refetch();
    console.log("Backend re-checked:", result.data);
  
    
  };
  useEffect(() => {
    console.log("Backend response:", data);
  }
, [data]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 ">
        <div className="w-full   p-8">
          <h1 className="text-3xl font-extrabold text-center text-white mb-6">
            Create Your Account
          </h1>

          <div className="mb-5">
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-300">
              First Name
            </label>
            <Field
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-300">
              Last Name
            </label>
            <Field
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className=" relative mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <Field
              name="password"
              type={isPasswordSeen ? "text":"password"}
              placeholder="Create a password"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
         {isPasswordSeen ? <FaRegEye onClick={()=>setIsPasswordSeen(false)} className="absolute right-4 top-[40%] translate-y-1/2 cursor-pointer" size={20}/> :    <FaRegEyeSlash onClick={()=>setIsPasswordSeen(true)} className="absolute right-4 top-[40%] translate-y-1/2 cursor-pointer" size={20}/>
          }  
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-1"
            />

          </div>

          <div className="mb-6 relative">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type={isConfirmPasswordSeen ? "text":"password"}
              placeholder="Confirm your password"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
                     {isConfirmPasswordSeen ? <FaRegEye onClick={()=>setIsConfirmPasswordSeen(false)} className="absolute right-4 top-[40%] translate-y-1/2 cursor-pointer" size={20}/> :    <FaRegEyeSlash onClick={()=>setIsConfirmPasswordSeen(true)} className="absolute right-4 top-[40%] translate-y-1/2 cursor-pointer" size={20}/>
          } 
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold text-lg transition-colors duration-300"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-500 hover:underline">
              Log In
            </a>
            </p>
            {data?  <p className="text-green-500">Backend is working</p> : <p className="text-red-500">Backend is not working</p>}
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
