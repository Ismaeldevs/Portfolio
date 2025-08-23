import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub } from "react-icons/ai";
import { CiLink } from "react-icons/ci";
import { BsArrowUpRight, BsEye } from "react-icons/bs";
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
    const { t } = useTranslation();
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            img: "/constructora.png",
            title: t("projects.ArConstructora.title"),
            description: t("projects.ArConstructora.desc"),
            technologies: ["React", "Node.js", "MySQL", "CSS"],
            category: "Full-Stack",
            links: {
                github: "https://github.com/Nakama-Tec/ConstructoraAR",
                site: "https://arconstructora.netlify.app/",
            },
        },
        {
            img: "/noxreconlogo.png",
            title: t("projects.NoxRecon.title"),
            description: t("projects.NoxRecon.desc"),
            technologies: ["Python", "Bash", "Linux", "OSINT"],
            category: "Cybersecurity",
            links: {
                github: "https://github.com/Ismaeldevs/NoxRecon",
                site: "https://noxrecon.net/",
            },
        },
        {
            img: "/nakamatec.png",
            title: t("projects.Nakamatec.title"),
            description: t("projects.Nakamatec.desc"),
            technologies: ["React", "Tailwind CSS"],
            category: "Frontend",
            links: {
                github: "https://github.com/Nakama-Tec/NakamatecWeb",
                site: "https://www.nakamatec.com/",
            },
        },
        {
            img: "/uptask.svg",
            title: t("projects.Uptask.title"),
            description: t("projects.Uptask.desc"),
            technologies: ["React", "TypeScript", "Express.js", "MongoDB", "TailwindCSS"],
            category: "Full-Stack",
            links: {
                github: "https://github.com/Ismaeldevs/UpTask_Frontend",
                site: "https://uptask.ismaeldev.com/",
            },
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case "Full-Stack":
                return "from-green-500 to-blue-500";
            case "Frontend":
                return "from-purple-500 to-pink-500";
            case "Cybersecurity":
                return "from-red-500 to-orange-500";
            default:
                return "from-gray-500 to-gray-700";
        }
    };

    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">
                        {t("projects.title")}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4 sm:px-0">
                        {t("projects.desc")}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            onHoverStart={() => setHoveredProject(index)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="group"
                        >
                            <Card className="glass-effect border-white/10 overflow-hidden hover-glow h-full">
                                <div className="relative overflow-hidden aspect-video">
                                    <motion.img
                                        src={project.img}
                                        alt={project.title}
                                        className="project-image transition-transform duration-500 group-hover:scale-110"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    
                                    {/* Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ 
                                            opacity: hoveredProject === index ? 1 : 0 
                                        }}
                                        className="absolute inset-0 bg-black/70 flex items-center justify-center"
                                    >
                                        <div className="flex space-x-4">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="bg-white/10 border-white/20 hover:bg-white/20"
                                                asChild
                                            >
                                                <a 
                                                    href={project.links.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    title="Ver código"
                                                >
                                                    <AiOutlineGithub className="w-5 h-5" />
                                                </a>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="bg-white/10 border-white/20 hover:bg-white/20"
                                                asChild
                                            >
                                                <a 
                                                    href={project.links.site} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    title="Ver proyecto"
                                                >
                                                    <BsEye className="w-5 h-5" />
                                                </a>
                                            </Button>
                                        </div>
                                    </motion.div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-4 sm:p-5 md:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-md hover:bg-white/20 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
                                            asChild
                                        >
                                            <a 
                                                href={project.links.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-2"
                                            >
                                                <AiOutlineGithub className="w-4 h-4" />
                                                <span className="font-medium">Código</span>
                                            </a>
                                        </Button>
                                        
                                        <Button
                                            size="sm"
                                            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                                            asChild
                                        >
                                            <a 
                                                href={project.links.site} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-2"
                                            >
                                                <BsArrowUpRight className="w-4 h-4" />
                                                <span className="font-medium">Ver Demo</span>
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* More Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8"
                        asChild
                    >
                        <a 
                            href="https://github.com/Ismaeldevs" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <AiOutlineGithub className="w-5 h-5" />
                            Ver más en GitHub
                            <BsArrowUpRight className="w-4 h-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
