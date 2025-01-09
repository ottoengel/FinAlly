import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

const LoginPage = async () => {
  const { userId } = await auth();

  //REDIRECIONA A PAGINA AO FAZER LOGIN
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="grid h-full grid-cols-1 sm:grid-cols-2">
      {/* ESQUERDA */}
      <div className="order-2 mx-auto flex h-full max-w-[550px] flex-col gap-8 p-8 sm:order-1 sm:justify-center">
        <Link href="/">
          <Image
            src="/fin-logo.svg"
            alt="FinAlly"
            width={173}
            height={39}
            className="mb-8"
          />
        </Link>
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A FinAlly é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      {/* DIREITA */}
      <div className="relative order-1 h-full w-full sm:order-2">
        <Image
          src="/logimg.png"
          alt="Faça seu login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
