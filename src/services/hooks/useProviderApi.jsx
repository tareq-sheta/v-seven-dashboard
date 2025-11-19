import { useState, createContext, useContext } from "react";

const ProviderApiContext = createContext();
export function useProviderApi({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <ProviderApiContext.Provider
      value={{ userData, setUserData, loading, setLoading, error, setError }}>
      {children}
    </ProviderApiContext.Provider>
  );
}
export function useConsumeProviderApi() {
  if (!ProviderApiContext) {
    throw new Error(
      "useConsumeProviderApi must be used within a ProviderApiContext"
    );
  }
  return useContext(ProviderApiContext);
}
// export { useProviderApi, useConsumeProviderApi };
