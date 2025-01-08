import { createClient } from "@/utils/supabase/server";
import UserDashboard from "./user-dashboard";

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return <UserDashboard user={user} />;
}
