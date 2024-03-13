import { AstroIcon, BootstrapIcon, CSSIcon } from "@/assets/svg/icons"

const Tools = () => {
  const frontendIcons = [<AstroIcon />, <BootstrapIcon />, <CSSIcon />]
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          Tools and Skills.
        </h2>
        <div className='circlePosition w-[600px] h-[100px] bg-[#c56bb2] rounded-[100%] absolute z-[-1] translate-x-[35%] blur-[100px]'></div>
        <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400'>
          This are the main tools that I know and Use.
        </p>
      </div>
      <div className="w-[400px] h-[400px]">
        <div className="flex flex-col justify-center items-center">
          <h3>Frontend Tools</h3>
          <div className="isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
            <div className="flex flex-row flex-wrap justify-center items-center gap-3">
              {
                frontendIcons.map((icon, index) => (
                  <div key={index} className="w-[100px]">
                    {icon}
                  </div>
                ))
              }
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Tools
