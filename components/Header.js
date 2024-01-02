import Link from 'next/link';
import MailIcon from '../components/MailIcon';
import { useRef } from 'react';

export default function Header({ name }) {

  const myRef = useRef(null);

  function decryptEmail() {
    console.log('!')
    console.log('ref', myRef)
    // let coded = "MQ8bWRnW8IUZQ4b4@AU84k.WZU"
    // let key = "jgfRCNHIoaLGrpJP2EiWd7bl9mzAMwhts0Z8T6Qeqxy14YBOSkDU5vFc3unXKV"
    // let shift = coded.length
    // let link = ""
    // for (let i = 0; i < coded.length; i++) {
    //   if (key.indexOf(coded.charAt(i)) == -1) {
    //     let ltr = coded.charAt(i)
    //     link += (ltr)
    //   }
    //   else {
    //     let ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
    //     link += (key.charAt(ltr))
    //   }
    // }
    // myRef.current.write("<a href='mailto:" + link + "'>" + link + "</a>")
  }

  return (
    <header className="w-full z-10 sticky inset-x-0 top-0 bg-white backdrop-blur-lg bg-opacity-80">
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
          <div className="pl-5 pr-5 " onClick={() => decryptEmail()} ref={myRef}>
            <MailIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
