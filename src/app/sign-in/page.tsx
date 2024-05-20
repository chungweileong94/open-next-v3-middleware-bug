import { redirect } from "next/navigation";
import { signIn } from "~/auth";

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const url = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });
        redirect("/~");
      }}
    >
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <button>Sign In</button>
    </form>
  );
}
