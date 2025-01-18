import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import farma from "/public/farma.jpg"
import ipage from "/public/ipage.png"
import constructora from "/public/constructora.png"
import { CiLink } from "react-icons/ci";
import { useTranslation } from 'react-i18next'

  
const Projects = () => {

  const [t, i18n] = useTranslation("global") 

  const projects = [
    {
      img:constructora,
      title: t("projects.ArConstructora.title"),
      description: t("projects.ArConstructora.desc"),
      links: {
        github: "https://github.com/Ismaeldevs",
      },
    },
    {
        img:farma,
        title: t("projects.Farmacia.title"),
      description: t("projects.Farmacia.desc"),
      links: {
        github: "https://github.com/Ismaeldevs/Proyecto-Farma",
      },
    },
    {
        img:ipage,
        title: t("projects.iPage.title"),
      description: t("projects.iPage.desc"),
      links: {
        github: "https://github.com/Ismaeldevs",
      },
    },
  ];

  return (
    <div id="projects">
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' >
    <h2 className='text-3xl font-bold text-gray-200 mb-8'>{t("projects.title")}</h2>
    {projects.map((project, index) => (
        // eslint-disable-next-line react/jsx-key
        <Reveal>
        <div key={index} 
        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
                <img
                    src={project.img}
                    alt={project.title}
                    className='w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 '
                />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
               
                <div className='flex space-x-4'>
                   
                    <a href={project.links.github}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300'>
                        <AiOutlineGithub/>
                    </a>
             
                    <a href={project.links.site}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300'>
                        <CiLink/>
                    </a>

                </div>

            </div>

        </div>
        </Reveal>
    ))}

</div>
</div>
)
}

export default Projects