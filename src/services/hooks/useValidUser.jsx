import { useState, useEffect } from "react";

function useValidUser(email, password) {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await fetch(
        //   "https://jsonplaceholder.typicode.com/users"
        // );
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        // let user = data.users.find((user) => user.email === email);

        setAllUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const isValid = allUsers.some(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password.toLowerCase() === password.toLowerCase()
  );

  return { isValid, isLoading, error };
}

export default useValidUser;
