import { useEffect, useRef, useState } from "react"

function Header() {
  const headerRef = useRef();
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0"
      }else{
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "40px 0"

      }
    });
  },[]);
  const [links] = useState(["features","team","signin"]);
  return (
    <header 
      ref={headerRef} 
      className="p-[40px] fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container con flex items-center justify-between gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
        <img src="./src/assets/images/logo.svg" alt="Logo-img" className="w-25"/>
        </a>
        <nav>
          <ul className="flex gap-[10px] justify-center items-center">
            {links.map((link)=> (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`} className="text-white hover:text-primary opacity-80 hover:opacity-100 hover:bg-blue-950 p-[5px_20px] rounded-full hover:transition-opacity duration-300">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
