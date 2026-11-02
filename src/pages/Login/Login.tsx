import InputField from "../../components/InputField/InputField";
import { useState, type FormEvent } from "react";

import { useNavigate } from "react-router-dom";
import useValidUser from "../../services/hooks/useValidUser";
import style from "./Login.module.scss";
import {
  House,
  LayoutGrid,
  Repeat,
  Settings,
  Tractor,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { isValid } = useValidUser(email, password);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    if (isValid) {
      console.log("Login successful!");
      let currentUser = { email, password };

      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("/dashboard");
    } else {
      // setLoginError("Invalid email or password");
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <div className={style.pathsContainer}>
          <div className={style.logoMiddle}>
            <img src="/v7-logo(no txt).png" alt="v7-logo" />
          </div>
          <div className={`${style.path} ${style.path_one}`}></div>
          <div className={`${style.path} ${style.path_two}`}></div>
          <div className={`${style.path} ${style.path_three}`}></div>
          <div className={`${style.path} ${style.path_four}`}></div>
          <div className={`${style.icon} ${style.icon_1}`}>
            <LayoutGrid />
          </div>

          <div className={`${style.icon} ${style.icon_1_1}`}>
            <Settings />
          </div>

          <div className={`${style.icon} ${style.icon_2}`}>
            <Repeat />
          </div>

          <div className={`${style.icon} ${style.icon_2_1}`}>
            <TriangleAlert />
          </div>

          <div className={`${style.icon} ${style.icon_3}`}>
            <House />
          </div>

          <div className={`${style.icon} ${style.icon_3_1}`}>
            <Wrench />
          </div>

          <div className={`${style.icon} ${style.icon_4}`}>
            <Tractor />
          </div>
        </div>
      </div>
      <div className={style.rightSection}>
        <div className="right-section_container">
          <div className={style.loginContainer}>
            {/* Logo Header */}
            <div className={style.logoHeader}>
              <img src="/factoryIcon.png" alt="Logo" className={style.logo} />
              <span>mes</span>
            </div>

            {/* Login Form */}
            <form className={style.loginForm} onSubmit={handleSubmit}>
              {/* Email Field */}
              <InputField type="email" userState={setEmail} user={email} />

              <InputField
                type="password"
                userState={setPassword}
                user={password}
              />

              {/* Login Button */}
              <button type="submit" className={style.loginButton}>
                Login
              </button>

              <div className={style.logoFooter}>
                <img
                  src="/v7-small-logo.png"
                  alt="Logo"
                  className={style.logo}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
