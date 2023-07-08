import { useState } from "react";
import axios from "axios";
export default function AuthPage() {
  const [authType, setAuthType] = useState("login");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const base_uri = `http://localhost:8000/api/v1/auth/${authType}`;
  const [password, setPassword] = useState("");
  const isLogin = authType === "login";
  const isRegister = authType === "register";
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const fetching = await axios.post(base_uri, {
        email,
        password,
      });
      console.log(fetching)
    } else {
      const fetching = await axios.post(base_uri, {
        userName,
        email,
        password,
      });
      console.log(fetching.user)
    }

  };
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center text-white  bg-gray-900 rounded-lg p-10">
      {isRegister && (
        <>
          <form
            onSubmit={ handleSubmit}
            className="flex items-center justify-center flex-col gap-5 "
          >
            <input
              type="text"
              placeholder="eg:Rick"
              className="w-[60vw] max-w-[400px] text-black p-3 
                outline-none border-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="eg:Rick@xyz.com"
              className="w-[60vw] max-w-[400px] text-black p-3 
              outline-none border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="w-[60vw] max-w-[400px] text-black p-3 
              outline-none border-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="py-2 px-3 border hover:bg-[#096c86] border-black rounded-lg "
            >
              Sign Up
            </button>
          </form>
          <div className="text-white flex gap-2">
            <p>Already have a account?</p>
            <span
              className="underline hover:text-[#096c86]"
              onClick={() => setAuthType("login")}
            >
              Login
            </span>
          </div>
        </>
      )}
      {isLogin && (
        <>
          <form
            onSubmit={ handleSubmit}
            className="flex items-center justify-center flex-col gap-5"
          >
            <input
              type="email"
              placeholder="eg:Rick@xyz.com"
              className="w-[60vw] max-w-[400px] text-black p-3 
              outline-none border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="w-[60vw] max-w-[400px] text-black p-3 
              outline-none border-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="py-2 px-3 border hover:bg-[#096c86] border-black rounded-lg "
            >
              Login
            </button>
          </form>
          <div className="text-white flex gap-2 	">
            <p>No account?</p>
            <span
              className="underline hover:text-[#096c86]"
              onClick={() => setAuthType("register")}
            >
              Register
            </span>
          </div>
        </>
      )}
    </div>
  );
}
