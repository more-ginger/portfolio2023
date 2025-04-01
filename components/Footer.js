import Link from 'next/link';
import Logo from '../components/Logo';

export default function Footer({ }) {
  return (
    <footer className="footer max-w-3xl m-auto fixed inset-x-0 bottom-0 bg-[#efedea] py-4 md:py-0 dark:bg-gray-900">
      <div className="py-1 md:pt-5 md:pb-5 w-full flex">
        <div className="flex justify-evenly w-full">
          <div className="w-full md:w-1/2 flex items-center">
            <p className="pl-5 pr-2 text-sm">
              FM
            </p>
            <div className="w-5">
              <Logo className="w-[18px] static"/>
            </div>
            <Link className="no-underline"  href="/impressum">
              <div className="ml-2 text-sm">Impressum</div>
            </Link>
          </div>

          <div className="w-1/2 flex items-center place-content-end pr-5 md:pr-0">
            <div className="cursor-pointer">
              <Link className="no-underline"  href="/about">
              <div className="about md:mr-8 text-right dark:border-white">About</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
