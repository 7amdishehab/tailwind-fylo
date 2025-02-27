function TestimonialBox({desc,image,position,name}) {
  return (
    <div className="text-white bg-[#21293c] rounded-[10px] p-[20px] shadow-[5px_5px_1px_5px_#1c202c] hover:scale-[1.01]">
      <p className="font-normal text-sm leading-5 mb-[20px]">{desc}</p>
      <div className="flex justify-start items-center gap-[20px]">
        <img src={`/src/assets/images/${image}`} alt="testimonials-img" className="w-[50px] h-[50px] rounded-full object-contain"/>
        <div>
          <strong className="text-primary">{name}</strong>
          <p className="font-normal text-[14px]">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialBox
