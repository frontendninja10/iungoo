"use client";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const logos = [
  { src: "/carousel-logos/eth.svg", text: "Ethereun", alt: "Ethereum logo" },
  { src: "/carousel-logos/btc.svg", text: "Bitcoin", alt: "Bitcoin logo" },
  { src: "/carousel-logos/sol.svg", text: "Solana", alt: "Solana logo" },
  { src: "/carousel-logos/sui.svg", text: "Sui", alt: "Sui logo" },
  { src: "/carousel-logos/base.svg", text: "Base", alt: "Base logo" },
  { src: "/carousel-logos/arb.svg", text: "Arbitrum", alt: "Arbitrum logo" },
  { src: "/carousel-logos/ava.svg", text: "Avalanche", alt: "Avalanche logo" },
  { src: "/carousel-logos/opt.svg", text: "Optimism", alt: "Optimism logo" },
  { src: "/carousel-logos/lisk.svg", text: "Lisk", alt: "Lisk logo" },
  { src: "/carousel-logos/sei.svg", text: "Sei", alt: "SEI logo" },
  { src: "/carousel-logos/tron.svg", text: "Tron", alt: "Tron logo" },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Header />
      <Carousel
        plugins={[AutoScroll({ active: true })]}
        className="py-28 bg-black"
      >
        <CarouselContent className="md:-ml-4">
          {Array.from({ length: logos.length }, (_, i) => (
            <CarouselItem
              key={i}
              className="lg:ml-14 self-center flex items-center"
            >
              <Image
                src={logos[i].src}
                alt={logos[i].alt}
                width={60}
                height={60}
                className="mr-4"
              />
              <p className="uppercase text-xl font-semibold text-white">
                {logos[i].text}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Services />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-[#050505] ">
      <div className="max-w-[85%] mx-auto py-4 flex justify-between items-center">
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
      <div className="max-w-[85%] mx-auto pt-44">
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
          className="absolute lg:bottom-0 lg:right-[15%]"
        />
      </div>
    </header>
  );
}

function Services() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white">What We Offer</h2>
        <p className="text-white">
          Iungoo simplifies your Web3 journey by aggregating and categorizing
          all opportunities in one place
        </p>
        <div>
          <div>
            <h3>Bounties & Hackathons</h3>
            <ul>
              <li>Solve real-world challenges</li>
              <li>Contribute to projects</li>
              <li>Join vibrant communities</li>
            </ul>
          </div>
          <Image
            alt="Screen Image"
            src="/screen.svg"
            width={530}
            height={563}
          />
        </div>
      </div>
    </section>
  );
}
