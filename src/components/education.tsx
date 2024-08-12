'use client'
import Image from 'next/image'
import React from 'react'
import EducationEntry from './educationentry'

const degreeList = [
    {
        logoUrl: '#', // Replace with actual image URL
        instituteName: 'PUNJAB GROUP OF COLLEGE',
        degree: 'Pre-engineering',
        duration: '2019 - 2022',
        points: ['pgc'], // Points should be an array of strings
    },
    {
        logoUrl: '#', // Replace with actual image URL
        instituteName: 'PUNJAB GROUP OF COLLEGE',
        degree: 'Pre-engineering',
        duration: '2019 - 2022',
        points: ['pgc'], // Points should be an array of strings
    }
]

export default function Education() {
    return (
        <div className='bg-slate-500'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex w-full h-screen p-8 '>
                    <div className='pl-5 pt-5'>
                        <Image src={'/education.svg'} alt='education' height={'1000'} width={'1000'} objectFit='cover' />
                    </div>
                    <div className='h-full w-full flex flex-col justify-center items-center space-y-28'>
                        <h1 className='text-3xl text-slate-800 uppercase tracking-wider font-medium '>Education</h1>

                        <h3 className='text-2xl text-slate-700'>
                            Education is key to success
                        </h3>
                    </div>
                </div>
                <div className='flex flex-col'> {/* Use flex-col for vertical layout */}
                <EducationEntry
    logoUrl="/path/to/iiit-logo.png" 
    instituteName="National University of Science and technology Islamabad"
    degree="B.E in Electrical Engineering"
    duration="2016-2020"
    points={[
      "Studied basic electrical engineering",
      "Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",   

      "Was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",   

    ]}
  />
  <EducationEntry
    logoUrl="/path/to/iiit-logo.png" 
    instituteName="Punjab Group of college"
    degree="intermediate"
    duration="2016-2020"
    points={[
      "Studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      "Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",   

      "Was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",   

    ]}
  />
                </div>
            </div>
        </div>
    )
}
