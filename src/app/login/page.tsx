// Đảm bảo KHÔNG có "use client" ở đầu file này!
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LoginCard } from "@/components/login-card";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return <LoginCard />;
}
