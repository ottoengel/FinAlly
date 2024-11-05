import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { userId } = await auth();
  //SE NÃO TIVER LOGADO REDIRECIONAR PARA A PAGE DE LOGIN
  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
};

export default Dashboard;
