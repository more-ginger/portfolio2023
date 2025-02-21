import Link from 'next/link';
import MailIcon from '../components/MailIcon';


export default function Header({ name }) {



  return (
    (<header className="w-full z-10 sticky inset-x-0 top-0 bg-[#efedea] dark:bg-opacity-80 dark:bg-gray-900">
      <div className="pt-5 pb-5 w-full flex">
        <div className="flex w-2/3">
          <div className="flex-none pl-5 pr-1">
            <Link className="no-underline" href="/">
              Browse
            </Link>
          </div>
          <div className="flex-none pl-5 pr-1">
            <Link className="no-underline" href="https://xyz.francescamorini.com/">
              Archive
            </Link>
          </div>
          <div className="flex-none pl-5 pr-1">
            <Link className="no-underline" href="/articles">Journal</Link>
          </div>
        </div>
        <div className="flex w-1/3 justify-end">
          <div className="pl-5 pr-5 ">
            <a href="mailto:%66%72%61%6e%63%65%73%63%61%31%6d%6f%72%69%6e%69%40%67%6d%61%69%6c%2e%63%6f%6d"><MailIcon /></a>
          </div>
        </div>
      </div>
    </header>)
  );
}
