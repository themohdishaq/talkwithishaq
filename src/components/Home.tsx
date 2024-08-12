"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { MaskContainer } from "./ui/svg-mask-effect";

import { TracingBeam } from "./ui/tracing-beam";
import { inter } from '@/fonts/font'; // Make sure this path is correct
import { GlobeDemo } from "./globe";
import { NameLogo } from "./NameLogo";

export function HomePage() {
  return (

    <div className="w-full h-max bg-slate-950">
    <TracingBeam className="max-w-7xl mx-auto sm:px-6">
      <div className="max-w-full mx-auto antialiased sm:pt-4 relative grid sm:grid-cols-2">
        <div>
            <NameLogo/>
        </div>
        <div>
        <GlobeDemo/>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 p-4">
  <div className="flex flex-col justify-center">


    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
            <div className="flex flex-col justify-center items-center p-6">
            <h1 className="text-gray-400 text-2xl font-semibold uppercase mb-4">Who Am I?</h1>
            <p className="max-w-4xl mx-auto text-slate-300 text-center text-lg font-medium">
              Hover to me to get about Muhammad Ishaq
            </p>
          </div>
          
        }
        className="h-[40rem] "
      >
        <p className="text-sm leading-10 px-5 flex-wrap text-white bg-transparent">
        My name is Muhammad Ishaq, and I come from the picturesque valley of Choarbat in the <span className="text-red-500">Siachen Sector</span>, District Ghanche, Gilgit-Baltistan, Pakistan. I completed my matriculation in Skardu before moving to Rawalpindi for my FSc at Punjab Group of Colleges. Currently, I am pursuing my studies at the National University of Sciences and Technology <span className="text-red-500">NUST</span>, Islamabad, in the School of Electrical Engineering and Computer Science (SEECS).
        I am a dedicated professional with a passion for working on end-to-end products. My goal is to develop sustainable and scalable systems that drive meaningful social and technical impact. My journey reflects a commitment to leveraging my skills and knowledge to create innovative solutions that address real-world challenges.
        </p>
      </MaskContainer>
    </div>


  </div>
  <div className="flex items-center justify-center">
    <Image
      src={'/feelingProud.svg'}
      alt="man"
      height={500}
      width={500} 
      className="object-cover"
    />
  </div>
</div>

    </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
