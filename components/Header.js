import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="w-full sticky inset-x-0 top-0 bg-blue-500">
      <div className="pt-5 pb-5 w-full flex bg-blue-100">
        <div className="flex w-1/2 bg-blue-200">
          <div className="flex-none pl-5 pr-5">
            <Link href="/">Read</Link>
          </div>
          <div className="flex-none pl-5 pr-5">
            <Link href="/browse">
              Browse
            </Link>
          </div>
        </div>
        <div className="flex w-1/2 justify-end bg-blue-600">
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
