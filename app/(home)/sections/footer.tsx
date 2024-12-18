import Image from "next/image";

const Footer = () => {
  return (
    <footer className="overflow-x-clip bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container justify-center md:mx-auto md:pl-[10px]">
        <div className="relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full before:bg-[linear-gradient(to_right,#CCFFCC,#8BC462,#008000)] before:blur before:content-['']">
          <Image
            src="/minlogo.svg"
            alt="FinAlly logo"
            height={40}
            width={40}
            className="relative"
          />
        </div>
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <a href="#about">Sobre</a>
          <a href="#features">Features</a>
          <a href="#price">Preço</a>
        </nav>
        <p className="mt-6">&copy; 2024 FinAlly, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
