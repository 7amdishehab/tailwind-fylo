import TestimonialBox from "./TestimonialBox"
import { useState } from "react"

function Testimonials() {
  const [testData] = useState([
    {
      id: 1,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae repudiandae provident maxime deserunt soluta iste nostrum nam aut reiciendis unde, et deleniti. Fugit pariatur totam, voluptatem doloremque possimus exercitationem",
      image: "profile-1.jpg",
      position: "founder and ceo",
      name: "Hamdi"
    },
    {
      id: 2,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae repudiandae provident maxime deserunt soluta iste nostrum nam aut reiciendis unde, et deleniti. Fugit pariatur totam, voluptatem doloremque possimus exercitationem",
      image: "profile-2.jpg",
      position: "it manager",
      name: "ahmed"
    },
    {
      id: 3,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae repudiandae provident maxime deserunt soluta iste nostrum nam aut reiciendis unde, et deleniti. Fugit pariatur totam, voluptatem doloremque possimus exercitationem",
      image: "profile-3.jpg",
      position: "full stack developer",
      name: "Menna"
    },
  ])
  return (
    <section className="bg-[#1D2230] pt-[100px] pb-[250px]">
      <div className="container con relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src={`/src/assets/images/bg-quotes.png`} alt="qoute" className="" />
        </div>
        <div className="z-40 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {testData.map((item)=>(
            <TestimonialBox key={item.id} desc={item.desc} image={item.image} position={item.position} name={item.name}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
