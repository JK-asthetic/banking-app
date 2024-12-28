"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { exportPages } from "next/dist/export/worker";
import { parseStringify } from "../utils";

export const signIn = async (userData: signInProps) => {
  try {
    const supabase = await createClient();

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });

    if (error) {
      redirect("/sign-in");
    }
    // Optionally revalidate cache or perform additional actions
    return parseStringify(user);
  } catch (error) {
    redirect("/sign-in");
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const supabase = await createClient();

    const { data: user, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: {
          first_name: userData.firstName,
          last_name: userData.lastName,
        }},
    });

    if (error) {
      console.error("Sign-up error:", error.message);
      return { success: false, message: error.message };
    }
    console.log(user);
    return user;
  } catch (error) {
    console.error("Unhandled error during sign-up:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
};

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/sign-in");
}
