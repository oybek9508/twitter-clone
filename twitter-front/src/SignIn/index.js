import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";

function Register(props) {
  const { setUser } = props;
  const [currentPage, setCurrentPage] = useState(SIGNIN);
  return (
    <div>
      {currentPage === SIGNIN ? (
        <SignIn onPageChange={setCurrentPage} setUser={setUser} />
      ) : (
        <SignUp onPageChange={setCurrentPage} setUser={setUser} />
      )}
    </div>
  );
}

export default Register;
