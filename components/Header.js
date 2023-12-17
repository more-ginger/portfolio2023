import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="w-full sticky inset-x-0 top-0 bg-white backdrop-blur-lg bg-opacity-80">
      <div className="pt-5 pb-5 w-full flex">
        <div className="flex w-1/2">
          <div className="flex-none pl-5 pr-5">
            <Link href="/">Read</Link>
          </div>
          <div className="flex-none pl-5 pr-5">
            <Link href="/browse">
              Browse
            </Link>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="pl-5 pr-5">
            <p>
              Mail
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
