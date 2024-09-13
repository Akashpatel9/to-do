import { useDispatch } from "react-redux";
import { login } from "../store/action";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

function Signin() {
  const dispatch = useDispatch();

  const loginG = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <button
        onClick={() => dispatch(login())}
        className="px-6 py-2 rounded-xl border-2 capitalize"
      >
        sign-in
      </button>

      <button
        onClick={() =>loginG() }
        className="px-6 py-2 rounded-xl border-2 capitalize"
      >
        sign-in-with-google
      </button>



      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
      ;
    </div>
  );
}

export default Signin;
