import { AuthError } from "next-auth";

export async function localAuth(email: string, password: string) {
  try {
    const res = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const errorMsg = await res.json();

      console.log(errorMsg);
      throw new AuthError('GoogleProvider' , {provider:errorMsg.error});
      return null;
    }
    const user = await res.json();

    return {
      id: user.id,
      name: user.username,
      email: user.email,
      image: user.image,
      token: user.access_token,
      Refresh_Token: user.refresh_token,
      expireIn: user.expiresIn,
    };
  } catch (error) {
    console.log(error);
  }
}
