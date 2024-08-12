import Image from 'next/image';
import { FC } from 'react';

const Contactpage: FC = () => {
  return (
    <div>
      <header className="relative pb-24 bg-sky-800 sm:pb-32">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative z-10">
          <nav className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8" aria-label="Global">
            <div className="flex items-center justify-between w-full lg:w-auto">
              
            
            </div>
            
          </nav>
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
               
               
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
          <p className="mt-6 text-xl text-cyan-100 max-w-3xl">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
        </div>
      </header>

      <main>
        <div className="bg-white">
          <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">Get in touch</h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">Collaborate</h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>support@example.com</dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>+1 (555) 123-4567</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">Press</h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>support@example.com</dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>+1 (555) 123-4567</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-warm-gray-900">Join our team</h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>support@example.com</dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>+1 (555) 123-4567</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contactpage;
