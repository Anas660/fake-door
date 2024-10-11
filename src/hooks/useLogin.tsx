const validCredentials = {
  email: "fakedoor@challenge.com",
  password: "password123",
};

export const useLogin = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Email & Pass", email, password);
    console.log("check", validCredentials.email, validCredentials.password);
    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      localStorage.setItem("user", JSON.stringify({ email }));
    } else {
      console.log("Invalid credentials");
    }
  };

  return {
    handleLogin,
  };
};
