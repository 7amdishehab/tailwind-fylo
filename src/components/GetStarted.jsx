function GetStarted() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="container absolute p-[20px] md:p-0">
        <div className="bg-[#21293C] flex flex-col items-center justify-center gap-[20px] p-[20px] md:p-[40px] w-fit rounded-[10px] text-center text-white mx-auto shadow-[0px_7px_3px_4px_#1D2230]">
          <h1 className="text-[28px] font-semibold">get early access today</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Quisquam assumenda praesentium reprehenderit et quos quasi veritatis!</p>
          <form className="grid grid-cols-1 md:grid-cols-3 md:gap-[20px]" action="#">
            <input className="col-span-2 mb-[15px] md:mb-0 bg-white p-[5px_20px] rounded-full text-sec border-none outline-none" type="email" name="email" placeholder="email@gmail.com"/>
            <button className="btn capitalize p-[5px_20px] rounded-full">get started for free</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
