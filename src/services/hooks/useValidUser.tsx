import { useState, useEffect } from "react";

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  id: number;
}

function useValidUser(email: string, password: string) {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        console.log(response);
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();

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
      user.password.toLowerCase() === password.toLowerCase(),
  );

  return { isValid, isLoading, error };
}

export default useValidUser;
