function Landing() {
  return (
  <section className="bg-[#1c2230]">
    <div className="container con el-center flex-col py-[100px]">
    <div className="w-[750px] max-w-full mt-[70px]">
      <img src="/src/assets/images/landing-img.png" alt="landing-img" className="w-full h-fit mb-[20px]"/>
    </div>
      <div className="text-white text-center">
        <h1 className="font-semibold text-[30px] md:text-[40px] mb-[20px]">All your files in one secure location,
          <br />
          Accessible any ware.
        </h1>
        <p className="font-normal text-md px-[15px] md:w-[600px] max-w-full mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non quis asperiores. Impedit consequatur repellendus culpa, maiores nobis deserunt necessitatibus. Vel quisquam distinctio odio sed accusantium minima odit facilis libero.</p>
      </div>
      <a href="#features" className="btn w-[200px] h-[60px] rounded-[30px] el-center">Get Started</a>
    </div>
    <div>
      <img src="/src/assets/images/bg-curvy-desktop.svg" 
      alt="img" 
      className="w-full h-fit"
      />
    </div>
  </section>
  )
}

export default Landing
