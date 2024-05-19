import Link from 'next/link';
import Constant from '../_utils/Constant';

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-64px)] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="font-extrabold text-primary">Upload, Save </span>
            and easily
            <span className="font-extrabold text-primary"> Share </span>
            your files in one place
          </h1>

          <p className="mt-4 text-gray-500 sm:text-xl/relaxed">
            {Constant.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primaryHover focus:outline-none focus:ring active:bg-primary sm:w-auto"
              href="/upload"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto dark:bg-white"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
