import woofSvg from './svg/woof1.svg';
import ellipseSvg from './svg/ellipse2.svg';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-background-500 py-4 font-bold text-black border-b-4 border-line-500">
      <div className="flex items-center justify-between ml-6 mr-6">
        <div className="flex items-center">
          <a href="/" className="text-2xl">
            woof.
          </a>
          <div className="absolute top-1 left-32 w-20 h-20">
            <Image src={ellipseSvg} alt="Ellipse Logo" />
          </div>
          <div className="relative z-10 left-3">
            <Image src={woofSvg} alt="Woof Logo" />
          </div>
        </div>
        <div className="ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border-b-4 border-black"
          />
        </div>
      </div>
      <ul className="flex items-center space-x-8 ml-6 mt-2">
        <li>
          <a
            href="/all"
            className="hover:text-line-500 hover:after:block hover:after:h-1 hover:after:bg-line-500"
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/news"
            className="hover:text-news-500 hover:after:block hover:after:h-1 hover:after:bg-news-500 "
          >
            News
          </a>
        </li>
        <li>
          <a
            href="/opinion"
            className="hover:text-opinion-500 hover:after:block hover:after:h-1 hover:after:bg-opinion-500 "
          >
            Opinion
          </a>
        </li>
        <li>
          <a
            href="/arts"
            className="hover:text-arts-500 hover:after:block hover:after:h-1 hover:after:bg-arts-500 "
          >
            Arts
          </a>
        </li>
        <li>
          <a
            href="/sports"
            className="hover:text-sports-500 hover:after:block hover:after:h-1 hover:after:bg-sports-500 "
          >
            Sports
          </a>
        </li>
        <li>
          <a
            href="/misc"
            className="hover:text-misc-500 hover:after:block hover:after:h-1 hover:after:bg-misc-500 "
          >
            Misc.
          </a>
        </li>
        <li>
          <a
            href="/troubleshooting"
            className="hover:text-troubleshooting-500 hover:after:block hover:after:h-1 hover:after:bg-troubleshooting-500 "
          >
            Troubleshooting
          </a>
        </li>
      </ul>
    </nav>
  );
}
