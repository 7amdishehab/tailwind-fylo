import { useState } from "react"
import FeatureBox from "./FeatureBox";

function Features() {
  const [items] = useState([
    {
      "icon": "icon-access-anywhere.svg",
      "title": "Access your files anywhere",
      "desc": "Access your files from anywhere in the world with just an internet connection."
  },
  {
      "icon": "icon-collaboration.svg",
      "title": "Real-time collaboration",
      "desc": "Work with your team in real time, no matter where you are, with seamless updates."
  },
  {
      "icon": "icon-any-file.svg",
      "title": "Store any type of files",
      "desc": "Securely store and organize all types of files with unlimited storage options."
  },
  {
      "icon": "icon-collaboration.svg",
      "title": "Effortless teamwork",
      "desc": "Collaborate efficiently with built-in sharing and editing tools for your team."
  }
  ])
  return (
  <section className="bg-[#191F2B]">
    <div className="container con pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] justify-center items-center">
        {items.map((item)=>(
          <FeatureBox 
            key={item.title} 
            title={item.title} 
            icon={item.icon} 
            desc={item.desc}/>
        ))}
      </div>
    </div>
  </section>
  )
}
export default Features
