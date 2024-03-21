import { AstroIcon, BashIcon, BootstrapIcon, CSSIcon, CSharpIcon, DockerIcon, EsLintIcon, ExpoIcon, ExpressIcon, FirebaseIcon, GitHubAuctionsIcon, GitHubIcon, GitIcon, GraphQLIcon, HTMLIcon, HandlebarsIcon, JSONIcon, JavaIcon, JavaScriptIcon, JestIcon, KubernetesIcon, MaterialUIIcon, MochaIcon, MongoDBIcon, MySQLIcon, NextjsIcon, NodejsIcon, NpmIcon, PlaywrightIcon, PostgreSQLIcon, PostmanIcon, PuttyIcon, PythonIcon, ReactIcon, ReduxIcon, SassIcon, SpringIcon, TailwindIcon, TypescriptIcon } from "@/assets/svg/icons"

export const FrontendIcons = () => {
    
    const frontendIcons = [{name: "HTML", payload: <HTMLIcon />}, {name: "CSS", payload:<CSSIcon />}, {name: "Javascript", payload:<JavaScriptIcon />}, {name: "React", payload:<ReactIcon />}, {name: "Bootstrap", payload: <BootstrapIcon />}, {name: "Tailwind", payload: <TailwindIcon />} , {name: "MUI", payload: <MaterialUIIcon />}, {name: "Sass", payload: <SassIcon />} , {name: "Redux", payload: <ReduxIcon />}]


    return (
        <>
             {
                frontendIcons.map((icon, index) => (
                    <div key={index} className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] m-2">
                    {icon?.payload}
                    <p className="text-white text-center">{icon?.name}</p>
                  </div>
                ))
              }
        </>
    )
}

export const BackendIcons = () => {
    
    const backendIcons = [{name: "Node.js", payload: <NodejsIcon />}, {name: "Express", payload:<ExpressIcon />}, {name: "Next", payload: <NextjsIcon />}, {name: "Firebase", payload:<FirebaseIcon />}, {name: "MongoDB", payload:<MongoDBIcon />}, {name: "MySQL", payload: <MySQLIcon />}, {name: "Postgre", payload: <PostgreSQLIcon />} , {name: "GraphQL", payload: <GraphQLIcon />}, {name: "Postman", payload: <PostmanIcon />}]

    return (
        <>
             {
                backendIcons.map((icon, index) => (
                    <div key={index} className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] m-2">
                    {icon?.payload}
                    <p className="text-white text-center">{icon?.name}</p>
                  </div>
                ))
              }
        </>
    )
}

export const TestAndToolsIcons = () => {
    
    const backendIcons = [{name: "Jest", payload: <JestIcon />}, {name: "Mocha", payload:<MochaIcon />}, {name: "Git", payload:<GitIcon />}, {name: "Github", payload:<GitHubIcon />}, {name: "Bash", payload: <BashIcon />}, {name: "NPM", payload: <NpmIcon />} , {name: "EsLint", payload: <EsLintIcon />}, {name: "Docker", payload: <DockerIcon />}]

    return (
        <>
             {
                backendIcons.map((icon, index) => (
                  <div key={index} className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] m-2">
                    {icon?.payload}
                    <p className="text-white text-center">{icon?.name}</p>
                  </div>
                ))
              }
        </>
    )
}

export const LearningIcons = () => {
    
    const backendIcons = [{name: "Python", payload: <PythonIcon />}, {name: "Typescript", payload:<TypescriptIcon />}, {name: "Astro", payload:<AstroIcon />}, {name: "Expo", payload:<ExpoIcon />}, {name: "Java", payload: <JavaIcon />}, {name: "Spring", payload: <SpringIcon />} , {name: "Kubernetes", payload: <KubernetesIcon />}, {name: "Playwright", payload: <PlaywrightIcon />}]

    return (
        <>
             {
                backendIcons.map((icon, index) => (
                    <div key={index} className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] m-2">
                     {icon?.payload}
                    <p className="text-white text-center">{icon?.name}</p>
                  </div>
                ))
              }
        </>
    )
}