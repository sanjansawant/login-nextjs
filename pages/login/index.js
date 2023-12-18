import LoginForm from "@/components/login/LoginForm";
import { useRouter } from "next/router";
import Head from "next/head";
const LoginPage = () => {
  const router = useRouter();
  const addLoginData = async (enteredLoginData) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(enteredLoginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      router.push("/user");
    }
  };

  return (
    <>
      <Head>
        <title>Login page</title>
      </Head>
      <LoginForm addLoginData={addLoginData} />
    </>
  );
};

export default LoginPage;
