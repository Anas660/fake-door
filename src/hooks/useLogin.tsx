// basic login function

const validCredentials = {
  email: "test@example.com",
  password: "password123",
};

export const useLogin = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Email & Pass", email, password);
    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      console.log("Valid");
    } else {
      console.log("Invalid");
    }
  };

  return {
    handleLogin,
  };
};
