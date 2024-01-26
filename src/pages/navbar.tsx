export default function NavBar() {
  {/*Have to update Search bar to have the present page's name between Search and ... */}

  return <nav className=" bg-background-500 py-4 font-bold text-black border-b-4 border-line-500" >
    <div className="nav flex items-center ml-4 mr-4 ">
      <a href="/" className="text-2xl  ">Wolf</a>
      <ul className="flex items-center md:space-x-8 ml-10 ">
        <li>
          <a href="/all"
             className="hover:text-line-500 hover:after:block hover:after:h-1 hover:after:bg-line-500">All</a>
        </li>
        <li>
          <a href="/news"
             className="hover:text-news-500 hover:after:block hover:after:h-1 hover:after:bg-news-500 ">News</a>
        </li>
        <li>
          <a href="/opinion"
             className="hover:text-opinion-500 hover:after:block hover:after:h-1 hover:after:bg-opinion-500 ">Opinion</a>
        </li>
        <li>
          <a href="/arts"
             className="hover:text-arts-500 hover:after:block hover:after:h-1 hover:after:bg-arts-500 ">Arts</a>
        </li>
        <li>
          <a href="/sports"
             className="hover:text-sports-500 hover:after:block hover:after:h-1 hover:after:bg-sports-500 ">Sports</a>
        </li>
        <li>
          <a href="/misc"
             className="hover:text-misc-500 hover:after:block hover:after:h-1 hover:after:bg-misc-500 ">Misc.</a>
        </li>
        <li>
          <a href="/troubleshooting"
             className="hover:text-troubleshooting-500 hover:after:block hover:after:h-1 hover:after:bg-troubleshooting-500 ">Troubleshooting</a>
        </li>
      </ul>
      <div className="ml-auto">
        <input type="text" placeholder="Search..." className="p-2 border-b-4 border-black"/>
      </div>
    </div>
  </nav>
}