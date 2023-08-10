import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { BsGrid3X3GapFill, BsSearch, BsFacebook } from "react-icons/bs";
import { FaFacebookF,FaStopwatch,FaTwitter,FaTelegram,FaYoutube } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GrNotification,GrShare } from "react-icons/gr";
import { MdOutlinePayment, MdEmail } from "react-icons/md";
import { TbMathXDivideY2,TbWorld} from "react-icons/tb";
import { IoDiamondSharp } from "react-icons/io5";
import { BiSolidFlag } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import NavLogo from "~/components/NavLogo";
import FotterCard from "~/components/FotterCard";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-row justify-between bg-gray-500 p-3 px-2 py-1">
          <NavLogo />
          <div>
            <button>
              <BsSearch />
            </button>
            <button className="pl-4 pr-3">
              <GrNotification />
            </button>

            <button className="b-2  rounded-full bg-blue-300 px-3 py-1 pl-4">
              Sign Up
            </button>
          </div>
        </div>

        <div className="h-80 bg-blue-600 align-middle">
          <div className="bg-red-400 border 3 h-40 flex-row">
          <p>ReZuSa</p>
          <p>Get your console at low</p>
          <p>Hey let's exchange happiness</p>

          </div>
          
        </div>
        <p className="bg-slate-400 p-3 text-3xl font-semibold">Popular</p>
        <div className="flex flex-row mt-2">
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
          <div className="h-20 w-20 bg-red-300 mr-3 border-2 rounded-md"></div>
         
        </div>
        <p>
            <a href="">View all</a>
          </p>
        <div className="bg-[#4f2f57]">
          <p className="m-3 text-xl font-bold">Why top up games on ReZuSa?</p>
          <p className="m-3">
            Millions of gamers count on Codashop every month for a seamless
            purchase experience when buying game credits or vouchers – No
            registration or log-in is required, and purchases are added to your
            game account instantly! Top-up your game credit now!
          </p>

          <FotterCard
            title="Easy and Fast"
            description="It only takes a few seconds to complete a purchase on Codashop."
          />
          <FotterCard
            title="Instant Delivery"
            description="When you top-up on Codashop, your purchase is delivered directly to your game account as soon as your payment is complete."
          />
          <FotterCard
            title="Convenient Payment Methods"
            description="To ensure your convenience, we have partnered with the most popular providers in Bangladesh."
          />
          <FotterCard
            title="Customer Support"
            description="Our friendly customer support team is always available to assist you. Contact us!"
          />
          <FotterCard
            title="Exciting Promotions"
            description="Keep a lookout for the best deals for your favourite games with Codashop promotions."
          />
        </div>
        <div className=" bg-yellow-300 p-4 ">
          <div className="b-b-black flex  flex-row justify-evenly mb-2">
            <div>
              <p>Need Help</p>
              <div className="flex flex-row border rounded-md border-sky-500 bg-yellow-500">
              <button className="pr-1">< FiMessageCircle /></button>
              <p className="pr-1">Contact Support</p>
              <button> <GrShare /></button>

              </div>
              
            </div>
            <div>
              <p>Country</p>
              <div className="flex flex-row border rounded-md border-sky-500 bg-yellow-500">
                <button className="pr-1"><BiSolidFlag /> </button>
                <p className="pr-1">Bangladesh</p>
                <button><TbWorld /></button>
              </div>
            </div>
          </div>
          <p>Stay updated with us:</p>
          <div className="pt-2 ">
            <button className="pr-1">
              <FaFacebookF />
            </button>
            <button className="pr-1">
              <FaTwitter />
            </button>
            <button className="pr-1">
              <MdEmail />
            </button>
            <button className="pr-1">
              <FaYoutube />
            </button>
            <button>
              <FaTelegram />
            </button>
          </div>
        </div>
        <div className="flex justify-center bg-white pb-2 pt-2">
          <div className="justify-">
            <p className="pb-2 pl-14">Copy ReZuSa payments</p>
            <div className="flex">
              <p>Marketing & Partnerships.</p> <p>For Game Publishers</p>
              <p>Terms & Conditions.</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
