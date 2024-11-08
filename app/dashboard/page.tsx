import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "../_components/navbar";

const Dashboard = async () => {
  const { userId } = await auth();
  //SE NÃO TIVER LOGADO REDIRECIONAR PARA A PAGE DE LOGIN
  if (!userId) {
    redirect("/login");
  }

  return <NavBar />;
};

export default Dashboard;
