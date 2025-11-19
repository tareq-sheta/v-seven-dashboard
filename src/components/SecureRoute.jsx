import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useValidUser from "../services/hooks/useValidUser";

function SecureRoute({ children }) {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Safely handle missing currentUser
  const email = currentUser?.email || "";
  const password = currentUser?.password || "";

  const { isValid, isLoading, error } = useValidUser(email, password);
  console.log(isValid);
  useEffect(() => {
    if (!isLoading) {
      // Only check after loading completes
      if (!currentUser || error || !isValid) {
        navigate("/login");
      }
    }
  }, [currentUser, isValid, isLoading, error, navigate]);

  // Show loading state while validating
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (currentUser && isValid) {
    return children;
  }

  // Return null while redirecting
  return null;
}

export default SecureRoute;
