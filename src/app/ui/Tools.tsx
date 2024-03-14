import { BackendIcons, FrontendIcons, LearningIcons, TestAndToolsIcons } from "./ToolsIcons"


const Tools = () => {
  const cards = [{ title: 'Frontend', payload: <FrontendIcons /> }, { title: 'Backend', payload: <BackendIcons /> }, { title: 'Testing and Tools', payload: <TestAndToolsIcons /> }, { title: 'Learning', payload: <LearningIcons /> }]

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-10">
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          Tools and Skills.
        </h2>
        <div className='circlePosition w-[600px] h-[100px] bg-[#c56bb2] rounded-[100%] absolute z-[-1] translate-x-[35%] blur-[100px]'></div>
        <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400'>
          This are the main tools that I know and Use.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {
          cards.map((card, index) => (
            <div key={index} className=" flex flex-col justify-center items-center gap-3 isolate aspect-video w-96 min-h-[410px] rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
              <h2 className='text-2xl font-bold tracking-tighter sm:text-4xl md:text-2xl'>{card.title}</h2>
              <div className="flex flex-row flex-wrap justify-center items-center gap-3">
                {card.payload}
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Tools
