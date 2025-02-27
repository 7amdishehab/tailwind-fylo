function FeatureBox({icon, desc, title}) {
  return (
    <div className="text-white el-center flex-col text-center">
      <img 
        src={`./src/assets/images/${icon}`} 
        alt="icon-img" 
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-md">{desc}</p>
    </div>
  )
}

export default FeatureBox
