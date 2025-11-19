import InputField from "../components/inputField";
import { useState } from "react";
// import { useConsumeProviderApi } from "../services/hooks/useProviderApi";
// import { login } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import useValidUser from "../services/hooks/useValidUser";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const { isValid } = useValidUser(email, password);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error
    setLoginError(null);

    // Basic validation
    if (!email || !password) {
      setLoginError("Please enter both email and password");
      return;
    }

    if (isValid) {
      console.log("Login successful!");
      let currentUser = { email, password };

      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("/dashboard");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="paths_container">
          <div className="logo-middle">
            <img src="/v7-logo(no txt).png" alt="v7-logo" />
          </div>
          <div className="path path_one"></div>
          <div className="path path_two"></div>
          <div className="path path_three"></div>
          <div className="path path_four"></div>
          <div className="icon icon_1">
            <i className="fa-solid fa-table-cells-large"></i>
          </div>
          <div className="icon icon_1_1">
            <i className="fa-regular fa-gear"></i>
          </div>
          <div className="icon icon_2">
            <i className="fa-light fa-retweet"></i>
          </div>
          <div className="icon icon_2_1">
            <i className="fa-regular fa-triangle-exclamation"></i>
          </div>

          <div className="icon icon_3">
            <i className="fa-solid fa-house-user"></i>
          </div>
          <div className="icon icon_3_1">
            <i className="fa-regular fa-wrench"></i>
          </div>
          <div className="icon icon_4">
            <i className="fa-regular fa-tractor"></i>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="right-section_container">
          <div className="login-container">
            {/* Logo Header */}
            <div className="logo-header">
              <img src="/factoryIcon.png" alt="Logo" className="logo" />
              <span>mes</span>
            </div>

            {/* Login Form */}
            <form className="login-form" onSubmit={handleSubmit}>
              {/* Email Field */}
              <InputField type="email" userState={setEmail} user={email} />

              <InputField
                type="password"
                userState={setPassword}
                user={password}
              />

              {/* Login Button */}
              <button
                // disabled={!email || !password}
                // onClick={(e) => {
                //   e.preventDefault();
                //   console.log(email, password);
                // }}
                type="submit"
                className="login-button">
                Login
              </button>
              {loginError && (
                <div className="error-message" style={{ color: "red" }}>
                  {loginError}
                </div>
              )}
              <div className="logo-footer">
                <img src="/v7-small-logo.png" alt="Logo" className="logo" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
