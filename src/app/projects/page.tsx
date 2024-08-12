
import ProjectCard from '@/components/projects'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='bg-slate-200'>
     <div className='flex sm:flex-row flex-col w-full h-screen p-8 '>
                    <div className='pl-5 pt-5'>
                        <Image src={'/projects_image.svg'} alt='projects' height={'1000'} width={'1000'} objectFit='cover' />
                    </div>
                    <div className='h-full w-full flex flex-col justify-center items-center space-y-10'>
                        <h1 className='text-3xl text-slate-800 uppercase tracking-wider font-medium '>Projects</h1>

                        <h3 className='text-xl text-slate-700 px-8'>
                            My projects makes use of vast variety of latest technology tools. My best experience is to create web developments projects using MERN STACK & NEXTJS and deploy them as well.
                        </h3>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 place-content-center place-items-center p-8 gap-12"> {/* Or adjust layout as needed */}
  <ProjectCard
    title="Amazon Clone"
    description="This project is made on base on learn different tools and state of nextjs in practical life"
    technologies={["NextJS", "MongoDB", "Firebase", "SCSS", "TypeScript"]}
    visitWebsiteLink="amazonclonebymuhammadishaq.verce.app" // Add if available
    //sourceCodeLink="https://..." // Add if available
  />

  <ProjectCard
    title="imdb clone"
    description="clone of imdb is used for to see movie list trending list,with proper authentication and much more.."
    technologies={["NextJS", "Pure Tailwind css", "Firebase", "NextAuth", "TypeScript"]}
    visitWebsiteLink="imdbclone.vercel.app" // Add if available
    // sourceCodeLink="https://..." // Add if available
  />
  <ProjectCard
    title="Amazon Clone"
    description="This project is made on base on learn different tools and state of nextjs in practical life"
    technologies={["NextJS", "MongoDB", "Firebase", "SCSS", "TypeScript"]}
    visitWebsiteLink="amazonclonebymuhammadishaq.verce.app" // Add if available
    //sourceCodeLink="https://..." // Add if available
  />

  <ProjectCard
    title="imdb clone"
    description="clone of imdb is used for to see movie list trending list and much more.."
    technologies={["NextJS", "Pure Tailwind css", "Firebase", "NextAuth", "TypeScript"]}
    visitWebsiteLink="imdbclone.vercel.app" // Add if available
    // sourceCodeLink="https://..." // Add if available
  />
</div>

    </div>
  )
}
