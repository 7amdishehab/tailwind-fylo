function Productive() {
  return (
    <section>
      <div className="container con py-[100px] grid grid-cols-1 md:grid-cols-2 gap-[40px] justify-between items-center text-center md:text-start">
        <div>
          <img 
            src="/src/assets/images/illustration-stay-productive.png" 
            alt="productive" 
            className="animate-upDown"
          />
        </div>
        <div className="text-white">
          <h3 className="text-[30px] font-semibold mb-[15px]">Stay productive,<br />whenever you are</h3>
          <p className="mb-[15px] font-normal text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi quo ratione quam tempora laudantium id adipisci perferendis? Sunt, quia sit quaerat iusto facilis ut in delectus doloribus culpa laboriosam?
          </p>
          <p className="mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi quo ratione quam tempora laudantium id adipisci perferendis? Sunt, quia sit quaerat iusto facilis ut in delectus doloribus culpa laboriosam?
          </p>
          <a href="/" className="mx-auto md:mx-0 text-primary hover:text-sec border-b-1 pb-[5px] flex items-center gap-[15px] w-fit transition-colors duration-200">see how fylo works
            <img src="/src/assets/images/icon-arrow.svg" alt="arror" 
            className="animate-moveRight  w-[20px] h-[20px] object-contain"/></a>
        </div>
      </div>
    </section>
  )
}
export default Productive
