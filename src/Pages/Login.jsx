// Login and Signup page

import AuthLeft from "../components/Auth/AuthLeft";
import AuthForm from "../components/Auth/AuthForm";

function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left illustration section */}
      <AuthLeft />

      {/* Right form section */}
      <AuthForm />

    </div>
  );
}

export default Login;