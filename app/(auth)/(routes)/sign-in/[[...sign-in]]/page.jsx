import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image src="/file-transfer.jpg" alt="file-transfer" fill />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="flex items-center gap-2 text-white" href="/">
              <Image src="/logo.svg" height={35} width={35} alt="logo " />
              <span className="font-extrabold">File-Share</span>
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to File Sharing App 🗃️
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Your secure and user-friendly platform for uploading, saving, and
              sharing files effortlessly. Experience seamless file management
              with our intuitive interface, designed to keep your files
              accessible and organized.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <Image src="/logo.svg" height={35} width={35} alt="logo " />
                <span className="sr-only">Home</span>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to File Sharing App 🗃️
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Your secure and user-friendly platform for uploading, saving,
                and sharing files effortlessly. Experience seamless file
                management with our intuitive interface, designed to keep your
                files accessible and organized.
              </p>
            </div>

            <SignIn path="/sign-in" />
          </div>
        </main>
      </div>
    </section>
  );
}
