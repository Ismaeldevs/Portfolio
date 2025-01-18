import {
    BiLogoBootstrap,
    BiLogoCss3,
    BiLogoDocker,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoPostgresql,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
  } from "react-icons/bi";
  import BiLogoNest from "../icons/BiLogoNest";
  import BiLogoNotion from '../icons/BiLogoNotion'
  import { useTranslation } from 'react-i18next'
  import { BiLogoGit } from "react-icons/bi";
  import { SiJira } from "react-icons/si";
  import { SiExpress } from "react-icons/si";
  import { SiDotnet } from "react-icons/si";
  import { GrMysql } from "react-icons/gr";
  import {motion} from "framer-motion"
  import { RiNotionFill } from "react-icons/ri";

  
  import Reveal from "./Reveal";
  
  
  const Tech = () => {

    const [t, i18n] = useTranslation("global") 

    const skills = [
      {
        category: "Frontend",
        technologies: [
          { name: "HTML", icon: <BiLogoHtml5 className="text-orange-600" /> },
          { name: "CSS", icon: <BiLogoCss3 className="text-blue-600" /> },
          { name: "Bootstrap", icon: <BiLogoBootstrap className="text-purple-600" /> },
          { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="text-teal-500" /> },
          { name: "JavaScript", icon: <BiLogoJavascript className="text-yellow-500" /> },
          { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" /> },
          { name: "React", icon: <BiLogoReact className="text-cyan-500" /> },
        ],
      },
      {
        category: "Backend",
        technologies: [
          { name: "MongoDB", icon: <BiLogoMongodb className="text-green-600" /> },
          { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-700" /> },
          { name: "MySQL", icon: <GrMysql className="text-cyan-600" /> },
          { name: "ExpressJs", icon: <SiExpress className="text-gray-600" /> },
          { name: "NestJS", icon: <BiLogoNest /> },
          { name: "Dotnet", icon: <SiDotnet className="text-blue-600" /> },
        ],
      },
      {
        category: t("tech.category"),
        technologies: [
          { name: "Jira", icon: <SiJira className="text-blue-600" /> },
          { name: "Notion", icon: <BiLogoNotion  className="text-black" /> },
          { name: "Docker", icon: <BiLogoDocker className="text-blue-500" /> },
          { name: "Git", icon: <BiLogoGit className="text-orange-600" /> },
          { name: "GitHub", icon: <BiLogoGithub className="text-gray-600" /> },
        ],
      },
    ];

    return (
      <div id="tech">
   <div
        className="max-w-[900px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      >
          <motion.div
              initial={{y:-50, opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.8,delay:0.2}}
              >
        <Reveal>
          <h1 className="text-4xl font-semibold mb-8 text-center">{t("tech.title")}</h1>
          <p className="text-center mb-8">
            {t("tech.desc")}
          </p>
  
          <div className="space-y-8">
            
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skill.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-purple-800/10 p-3 rounded-lg shadow-md"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        </motion.div>
      </div>
      </div>
     
    );
  };
  
  export default Tech;