"use server";
import axios from "axios";

export async function loginAction(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return null;
  }
  const response = await axios.get(
    `https://stndev.rmu.ac.th/authen/check-login.php?authen_username=${username}&authen_password=${password}&authen_system=CCAUTHEN&authen_token=8b4721998e0d2e108ebb8f304c75637e`
  );
  const statusCode = response.data.statusCode;

  if (statusCode === 200) {
    const profile = response.data.profile;
    console.log(profile);
  }
}
