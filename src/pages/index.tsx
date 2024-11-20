import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  donate,
  logo,
  qrCode,
  sectionOne,
  sectionOneOne,
  sectionTwo,
  sectionTwoTwo,
  sectionTwoThree,
  sectionThree,
  mobileSection1,
  mobileSection2,
  mobileSection3,
  mobileSection4,
  mobileSection5,
} from "@/utils/constants/images";
import { backArrow, close } from "@/utils/constants/icons";

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white w-full">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <header className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-56 pt-6 md:pt-10">
        <nav className="flex items-center justify-between">
          <Image
            src={logo}
            alt="Sistema FIEP Logo"
            className="w-auto md:h-12 h-auto"
          />

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#2B5AA9] focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#doacao"
              className="text-[#2B5AA9] text-sm md:text-base hover:text-[#75a5ee] transition-colors"
            >
              FAÇA A SUA DOAÇÃO
            </Link>
            <Link
              href="#campanha"
              className="text-[#2B5AA9] text-sm md:text-base hover:text-[#75a5ee] transition-colors"
            >
              CAMPANHA
            </Link>
            <Link
              href="#compartilhe"
              className="text-[#2B5AA9] text-sm md:text-base hover:text-[#75a5ee] transition-colors"
            >
              COMPARTILHE
            </Link>
          </div>
        </nav>
      </header>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#014899] shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex flex-col space-y-4">
          <div className="flex justify-between">
            <Image
              src={backArrow}
              alt="Sistema FIEP Logo"
              width={30}
              height={30}
              className="filter brightness-0 invert"
            />
            <Image
              src={logo}
              width={80}
              height={80}
              alt="Sistema FIEP Logo"
              className="filter brightness-0 invert"
            />
            <button onClick={() => setMenuOpen(false)}>
              <Image
                src={close}
                alt="Sistema FIEP Logo"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
            </button>
          </div>
          <div className="border-b border-[#75a5ee] py-1" />
          <a
            href="#doacao"
            className="text-white text-base pt-1"
            onClick={() => setMenuOpen(false)}
          >
            Faça a sua doação
            <div className="border-b border-[#1d355d] mt-2" />
          </a>
          <a
            href="#campanha"
            className="text-white text-base pt-1"
            onClick={() => setMenuOpen(false)}
          >
            Campanha
            <div className="border-b border-[#1d355d] mt-2" />
          </a>
          <a
            href="#compartilhe"
            className="text-white text-base pt-1"
            onClick={() => setMenuOpen(false)}
          >
            Compartilhe
            <div className="border-b border-[#1d355d] mt-2" />
          </a>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main className="py-6 sm:py-8 md:py-12 w-full flex flex-col items-center">
        <section id="doacao" className="w-full flex flex-col items-center">
          {isMobile ? (
            <>
              <Image src={mobileSection1} alt="Ilustração de pessoas unidas" />
              <Image
                src={qrCode}
                alt="QR Code"
                width={340}
                className="-mt-14"
              />
            </>
          ) : (
            <>
              <Image
                src={sectionOne}
                alt="Ilustração de pessoas unidas"
                className="w-full max-w-[90%] md:max-w-[70%] h-auto"
                priority
              />
              <div className="relative w-full max-w-[90%] md:max-w-[70%]">
                <Image
                  src={qrCode}
                  alt="QR Code"
                  className="absolute top-[-50px] sm:top-[-100px] right-[10%] sm:right-[20%] w-[30vw] sm:w-[20vw] md:w-[15vw] h-auto"
                />
              </div>
            </>
          )}
        </section>
        <section id="campanha" className="w-full flex flex-col items-center">
          {isMobile ? (
            <Image
              src={mobileSection2}
              alt="Texto que descreve a necessidade da doação"
              className="mt-10"
            />
          ) : (
            <>
              <Image
                src={sectionOneOne}
                alt="Texto que descreve a necessidade da doação"
                className="w-full max-w-[90%] md:max-w-[70%] h-auto"
              />
              <div className="relative w-full max-w-[90%] md:max-w-[70%]">
                <Image
                  src={donate}
                  alt="Quatro imagens com pessoas reais em atividade doação"
                  className="absolute top-[20px] sm:top-[40px] right-[10%] sm:right-[20%] w-[35vw] sm:w-[24vw] md:w-[20vw] h-auto"
                />
              </div>
            </>
          )}

          {isMobile ? (
            <>
              <Image
                src={mobileSection3}
                alt="Quatro imagens com pessoas reais em atividade doação"
                className="mt-10"
              />
              <Image
                src={mobileSection4}
                alt="Informações sobre como doar para a campanha"
                className="mt-10"
              />
            </>
          ) : (
            <>
              <Image
                src={sectionTwo}
                alt="Texto descrevendo que a FIEP está junto desde o início"
                className="w-full max-w-[90%] md:max-w-[70%] h-auto"
              />
              <Image
                src={sectionTwoTwo}
                alt="Texto descrevendo as prioridades da campanha"
                className="w-full max-w-[90%] md:max-w-[70%] h-auto"
              />
              <Image
                src={sectionTwoThree}
                alt="Imagem demonstrando doações reais que chegam ao total de mais de 36 toneladas"
                className="w-full max-w-[90%] md:max-w-[70%] h-auto"
                priority
              />
            </>
          )}
        </section>
        <section id="compartilhe" className="w-full flex flex-col items-center">
          {isMobile ? (
            <Image
              src={mobileSection5}
              alt="Informações de como compartilhar a campanha"
            />
          ) : (
            <Image
              src={sectionThree}
              alt="Informações de como compartilhar a campanha"
              className="w-full max-w-[90%] md:max-w-[70%] h-auto"
            />
          )}
        </section>
      </main>
    </div>
  );
}
