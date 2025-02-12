"use client";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  UserIcon,
  JobHunt,
  Airdrops,
  NFTMint,
  PenIcon,
  BoltIcon,
  TwitterIcon,
  DiscordIcon,
  CheckMark,
} from "@/lib/icons";
import { useState, FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { IungooLogo } from "@/components/icons";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const logos = [
  { src: "/carousel-logos/eth.svg", text: "Ethereum", alt: "Ethereum logo" },
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
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#050505]">
      <Navbar />
      <Header open={open} setOpen={setOpen} />
      <Carousel
        plugins={[AutoScroll({ active: true })]}
        className="py-28 bg-black"
      >
        <CarouselContent className="lg:-ml-4">
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
      <CallToAction setOpen={setOpen} />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-[#050505] border-none">
      <div className="max-w-[85%] mx-auto py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="." width={176} height={50} />
        </Link>
        <ul className="text-white gap-10 hidden lg:flex">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="uppercase">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-white text-black px-5 py-3 rounded-3xl hidden lg:block">
          Join our Community
        </button>
      </div>
    </nav>
  );
}

function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ firstName: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          first_name: formData.firstName,
          email: formData.email,
        },
      ]);

      if (error) {
        throw error;
      }

      setStep(2);
      setTimeout(() => setStep(3), 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setStep(1);
    setFormData({ firstName: "", email: "" });
  };

  return (
    <header className="h-[700px] lg:h-[calc(100vh-300px)] bg-black bg-[url(/hero-bg.svg)] bg-contain bg-top bg-no-repeat relative border-none">
      <div className="max-w-[85%] mx-auto pt-20 lg:pt-44">
        <div className="max-w-full lg:max-w-[45%]">
          <h1 className="text-white text-5xl lg:text-7xl">
            Looks like you beat the crowd!
          </h1>
          <p className="text-white max-w-full lg:max-w-[85%] my-5 text-lg mt-5 lg:mt-10">
            Discover and explore opportunities across 100 Blockchains.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black px-5 py-3 rounded-3xl"
          >
            Join the Waitlist
          </button>
        </div>
        <Image
          src={"/astronaught.svg"}
          width={250}
          height={300}
          alt="Astronaught"
          className="absolute bottom-0 mx-auto lg:right-[15%] lg:mx-0 lg:w-[350px] lg:h-[420px] lg:bottom-0"
        />
      </div>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-[90%] lg:max-w-md lg:py-20 bg-zinc-950 text-white border-zinc-800">
          {step === 1 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-center font-semibold">
                  Join Our Waitlist
                </DialogTitle>
                <DialogDescription className="text-center text-zinc-400">
                  Be the first to know when we launch
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your first name"
                  className="bg-transparent border-zinc-800 focus:border-white transition-colors"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                />
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-transparent border-zinc-800 focus:border-white transition-colors"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </Button>
              </form>
            </>
          )}

          {step === 2 && (
            <div className="text-center py-6 space-y-4">
              <CheckMark className="w-24 h-24 mx-auto" />
              <DialogTitle className="text-2xl">Success!</DialogTitle>
              <p className="text-zinc-400">
                You have been added to the waitlist.
              </p>
              <p className="text-zinc-400">
                Check your email to see more information
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <DialogTitle className="text-xl">
                You have joined the waitlist.
              </DialogTitle>
              <div className="flex flex-col gap-3 items-center">
                <div className="flex items-center gap-2">
                  <p className="text-zinc-400 text-xl">Follow us on</p>
                  <Link href="https://x.com/iungooxyz">
                    <TwitterIcon className="w-[40px] h-[40px]" />
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-zinc-400 text-xl">Join us on</p>
                  <Link href="https://discord.gg/9wGbpMxC">
                    <DiscordIcon className="w-[41px] h-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
}

function Services() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-3xl text-center">What We Offer</h2>
        <p className="text-white text-center my-4 lg:max-w-[50%] mx-auto">
          Iungoo simplifies your Web3 journey by aggregating and categorizing
          all opportunities in one place
        </p>
        <div className="flex-col lg:flex lg:flex-row items-center justify-between mt-20 lg:mt-32">
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
            width={300} // Default width for mobile
            height={320} // Default height for mobile
            className="w-[260px] h-[280px] lg:w-[430px] lg:h-[463px] mx-auto lg:mx-0"
          />
        </div>
        <div className="flex-col lg:flex items-center lg:flex-row-reverse justify-between mt-20 lg:mt-32">
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
          <JobHunt className="w-[280px] h-[300px] lg:w-[430px] lg:h-[463px] mx-auto lg:mx-0" />
        </div>
        <div className="flex-col lg:flex lg:flex-row items-center justify-between mt-20 lg:mt-32">
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
          <Airdrops className="w-[280px] h-[300px] lg:w-[430px] lg:h-[463px] mx-auto lg:mx-0" />
        </div>
        <div className="flex-col lg:flex items-center lg:flex-row-reverse justify-between mt-20 lg:mt-32">
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
          <NFTMint className="w-[280px] h-[300px] lg:w-[430px] lg:h-[463px] mx-auto lg:mx-0" />
        </div>
        <div className="flex-col lg:flex lg:flex-row items-center justify-between mt-20 lg:mt-32">
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
          <Image
            alt="Screen Image"
            src="/cubes.svg"
            width={530}
            height={563}
            className="w-[300px] h-[320px] lg:w-[430px] lg:h-[463px] mx-auto lg:mx-0"
          />
        </div>
        <div className="flex-col lg:flex items-center lg:flex-row-reverse justify-between mt-20 lg:mt-32">
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
            className="w-[300px] h-[320px] lg:w-[430px] lg:h-[463px] mx-auto lg:mx-0"
          />
        </div>
        <div className="flex-col lg:flex lg:flex-row items-center justify-between mt-20 lg:mt-32">
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
            className="w-[300px] h-[320px] lg:w-[430px] lg:h-[463px] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}

function CallToAction({ setOpen }: { setOpen: (value: boolean) => void }) {
  return (
    <section className="flex justify-center flex-col text-center gap-10 lg:py-36">
      <h2 className="text-white text-4xl">
        Ready to explore endless Web3 possibilities?
      </h2>
      <div className="flex gap-4 self-center">
        <Button
          asChild
          variant="outline"
          className="rounded-3xl bg-transparent text-white"
        >
          <Link href="https://discord.gg/9wGbpMxC">
            Be part of our Community
          </Link>
        </Button>
        <Button
          onClick={() => setOpen(true)}
          className="rounded-3xl bg-white text-black hover:text-black hover:bg-white"
        >
          Join the waitlist
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-[1px] border-[#E0E0E0] flex justify-center lg:py-14">
      <div className="flex gap-4 items-center">
        <IungooLogo className="text-white h-14 w-20" />
        <p className="text-white">Built with ❤️ by Iungoo</p>
      </div>
    </footer>
  );
}
