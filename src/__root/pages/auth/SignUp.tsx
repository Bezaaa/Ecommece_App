import { SignUpImage } from "@/assets"
import SignUpForm from "./SignUpForm"


const SignUp = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="  flex-1/4 h-screen">
        <img src={SignUpImage} alt="Sign up" className="object-cover h-full"/>
      </div>
      <div className="flex-1/6">
      <SignUpForm />

      </div>
    </div>
  )
}

export default SignUp
