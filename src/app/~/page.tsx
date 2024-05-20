import { signOut } from "~/auth";

export default function ProtectedPage() {
  return (
    <div>
      <h1>You are logged in!</h1>
      <form>
        <button
          formAction={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
}
