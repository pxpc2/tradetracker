import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function UserDashboard({ user }) {
  const supabase = createClient();
  if (!user?.email) {
    return redirect("/login");
  }
  return (
    <div>
      <h1>Dashboard for user {user.email}</h1>
    </div>
  );
}
