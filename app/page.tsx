import Image from "next/image";
import Link from "next/link";
import { IungooLogo } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

const links = [
  {
    href: "/",
    text: "Bounties",
  },
  {
    href: "/",
    text: "Hackathons",
  },
  {
    href: "/",
    text: "Airdrops",
  },
  {
    href: "/",
    text: "New Projects",
  },
  {
    href: "/",
    text: "NFT Mint",
  },
  {
    href: "/",
    text: "Grants",
  },
];

function Navbar() {
  return (
    <nav className="bg-[#050505] ">
      <div className="max-w-[90%] mx-auto py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="." width={176} height={50} />
        </Link>
        <ul className="text-white flex gap-10">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="uppercase">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-white text-black px-5 py-3 rounded-3xl">
          Join our Community
        </button>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="h-screen lg:h-[calc(100vh-350px)] bg-black bg-[url(/hero-bg.svg)] bg-contain bg-top bg-no-repeat relative">
      <div className="max-w-[90%] mx-auto pt-44">
        <div className="max-w-[45%]">
          <h1 className="text-white text-7xl">
            Looks like you beat the crowd!
          </h1>
          <p className="text-white max-w-[45%] my-5 text-lg mt-10">
            Discover and explore opportunities across 100 Blockchains.
          </p>
          <button className="bg-white text-black px-5 py-3 rounded-3xl">
            Join the Waitlist
          </button>
        </div>
        <Image
          src={"/astronaught.svg"}
          width={350}
          height={420}
          alt="Astronaught"
          className="absolute lg:bottom-0 lg:right-[20%]"
        />
      </div>
    </header>
  );
}
