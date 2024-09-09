"use server";
import axios from "axios";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return null;
  }
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_AUTHEN_API}?authen_username=${username}&authen_password=${password}&authen_system=${process.env.NEXT_PUBLIC_AUTHEN_SYSTEM}&authen_token=${process.env.NEXT_PUBLIC_AUTHEN_TOKEN}`
  );
  const statusCode = response.data.statusCode;

  if (statusCode === 200) {
    const profile = response.data.profile;
    console.log(profile);
    redirect("/profile");
  } else {
    redirect("/sign-up");
  }
}
export async function showAction() {
  return "hello";
}
