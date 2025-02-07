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
import {
  UserIcon,
  JobHunt,
  Airdrops,
  NFTMint,
  PenIcon,
  BoltIcon,
} from "@/lib/icons";

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
      <div className="max-w-[85%] mx-auto pt-20 lg:pt-44">
        <div className="max-w-full lg:max-w-[45%]">
          <h1 className="text-white text-5xl lg:text-7xl">
            Looks like you beat the crowd!
          </h1>
          <p className="text-white max-w-full lg:max-w-[45%] my-5 text-lg mt-5 lg:mt-10">
            Discover and explore opportunities across 100 Blockchains.
          </p>
          <button className="bg-white text-black px-5 py-3 rounded-3xl">
            Join the Waitlist
          </button>
        </div>
        <Image
          src={"/astronaught.svg"}
          width={250}
          height={300}
          alt="Astronaught"
          className="absolute bottom-0 right-0 lg:right-[15%] lg:w-[350px] lg:h-[420px] lg:bottom-0"
        />
      </div>
    </header>
  );
}

function Services() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl text-center">What We Offer</h2>
        <p className="text-white text-center my-4 lg:max-w-[50%] mx-auto">
          Iungoo simplifies your Web3 journey by aggregating and categorizing
          all opportunities in one place
        </p>
        <div className="flex items-center justify-between mt-32">
          <div>
            <UserIcon />
            <h3 className="text-2xl text-white mt-2">Bounties & Hackathons</h3>
            <p className="my-4 text-[#BDBDBD] ">
              Earn rewards by contributing to blockchain projects.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Solve real-world challenges
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Contribute to projects
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Join vibrant communities
              </li>
            </ul>
          </div>
          <Image
            alt="Screen Image"
            src="/screen.svg"
            width={430}
            height={463}
          />
        </div>
        <div className="flex items-center lg:flex-row-reverse justify-between mt-36">
          <div>
            <PenIcon />
            <h3 className="text-2xl text-white mt-2">
              New Projects & Job Listings
            </h3>
            <p className="my-4 text-[#BDBDBD] ">
              Find credible job listings and avoid scams.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Explore new projects
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Discover latest jobs
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Create your coding ambiance effortlessly
              </li>
            </ul>
          </div>
          <JobHunt />
        </div>
        <div className="flex items-center justify-between mt-36">
          <div>
            <PenIcon />
            <h3 className="text-2xl text-white mt-2">Airdrops</h3>
            <p className="my-4 text-[#BDBDBD] ">
              Stay informed about the latest airdrop dates.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Discover Airdrops
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Explore Trending Airdrops
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Find Upcoming Airdrops
              </li>
            </ul>
          </div>
          <Airdrops />
        </div>
        <div className="flex items-center lg:flex-row-reverse justify-between mt-36">
          <div>
            <PenIcon />
            <h3 className="text-2xl text-white mt-2">NFT Mint Calendar</h3>
            <p className="my-4 text-[#BDBDBD] ">
              Stay informed about the latest NFT mint dates.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Upcoming NFT Mints.
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Trending NFT projects.
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Whitelist Collabs & Giveaways.
              </li>
            </ul>
          </div>
          <NFTMint />
        </div>
        <div className="flex items-center justify-between mt-36">
          <div>
            <BoltIcon />
            <h3 className="text-2xl text-white mt-2">
              Blockchains & DAOs Directory
            </h3>
            <p className="my-4 text-[#BDBDBD] ">
              Your one-stop shop for blockchain and DAO information.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Blockchain directory
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                DAO explorer
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Blockchain resources
              </li>
            </ul>
          </div>
          <Image alt="Screen Image" src="/cubes.svg" width={530} height={563} />
        </div>
        <div className="flex items-center lg:flex-row-reverse justify-between mt-56">
          <div>
            <PenIcon />
            <h3 className="text-2xl text-white mt-2">IRL Events</h3>
            <p className="my-4 text-[#BDBDBD] ">
              Stay up-to-date with the latest events near you.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Upcoming events
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Free pass & exclusive events
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Connect with like-minded individuals
              </li>
            </ul>
          </div>
          <Image
            alt="Screen Image"
            src="/events.svg"
            width={530}
            height={563}
          />
        </div>
        <div className="flex items-center justify-between mt-56">
          <div>
            <BoltIcon />
            <h3 className="text-2xl text-white mt-2">Ambassador Programs</h3>
            <p className="my-4 text-[#BDBDBD] ">
              Find and join ambassador programs for Web3 brands.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Build & grow communities.
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Create awareness on your socials.
              </li>
              <li className="flex items-center gap-2 text-[#BDBDBD]">
                <Image src="/checkmark.svg" width={20} height={20} alt="" />
                Get rewarded by gaining experience.
              </li>
            </ul>
          </div>
          <Image
            alt="Screen Image"
            src="/calendar.svg"
            width={530}
            height={563}
          />
        </div>
      </div>
    </section>
  );
}
