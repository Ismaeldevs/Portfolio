import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {
    BiLogoBootstrap,
    BiLogoDocker,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoPostgresql,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
    BiLogoGit,
} from "react-icons/bi";
import { SiJira, SiExpress, SiDotnet } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import BiLogoNest from "../icons/BiLogoNest";
import BiLogoNotion from '../icons/BiLogoNotion';
import BiLogoNext from "../icons/BiLogoNext";
import CSSNew from "../icons/CSSNew";
import Supabase from "../icons/Supabase";
import Bash from "../icons/Bash";
import Python from "../icons/Python";
import Kali from "../icons/Kali";
import Linux from "../icons/Linux";
import Cloudflare from "../icons/Cloudflare";
import GitHub from "../icons/GitHub";
import Vercel from "../icons/Vercel";
import Ngrok from "../icons/Ngrok";
import MicrosoftSQLServer from "../icons/MicrosoftSQLServer";
import PostgreSQL from "../icons/PostgreSQL";
import Railway from "../icons/Railway";
import FastAPI from "../icons/FastAPI";
import Nodejs from "../icons/Nodejs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
  
  
  const Tech = () => {
    const { t } = useTranslation();

    const skills = [
        {
            category: "Frontend",
            color: "from-purple-500 to-pink-500",
            icon: "🎨",
            technologies: [
                { name: "HTML", icon: <BiLogoHtml5 className="text-orange-500" /> },
                { name: "CSS", icon: <CSSNew className="text-blue-500" /> },
                { name: "Bootstrap", icon: <BiLogoBootstrap className="text-purple-500" /> },
                { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="text-teal-400" /> },
                { name: "JavaScript", icon: <BiLogoJavascript className="text-yellow-400" /> },
                { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" /> },
                { name: "React", icon: <BiLogoReact className="text-cyan-400" /> },
                { name: "Next.js", icon: <BiLogoNext /> },
            ],
        },
        {
            category: "Backend",
            color: "from-blue-500 to-cyan-500", 
            icon: "⚡",
            technologies: [
                { name: "Node.js", icon: <Nodejs /> },
                { name: "Express", icon: <SiExpress className="text-gray-400" /> },
                { name: "NestJS", icon: <BiLogoNest /> },
                { name: "FastAPI", icon: <FastAPI /> },
                { name: ".NET", icon: <SiDotnet className="text-blue-500" /> },
                { name: "Python", icon: <Python /> },
            ],
        },
        {
            category: "Bases de Datos",
            color: "from-green-500 to-emerald-500",
            icon: "🗄️",
            technologies: [
                { name: "MongoDB", icon: <BiLogoMongodb className="text-green-500" /> },
                { name: "PostgreSQL", icon: <PostgreSQL /> },
                { name: "MySQL", icon: <GrMysql className="text-blue-500" /> },
                { name: "SQL Server", icon: <MicrosoftSQLServer /> },
                { name: "Supabase", icon: <Supabase /> },
            ],
        },
        {
            category: "DevOps & Herramientas",
            color: "from-orange-500 to-red-500",
            icon: "🛠️",
            technologies: [
                { name: "Git", icon: <BiLogoGit className="text-orange-500" /> },
                { name: "GitHub", icon: <GitHub /> },
                { name: "Docker", icon: <BiLogoDocker className="text-blue-400" /> },
                { name: "Vercel", icon: <Vercel /> },
                { name: "Railway", icon: <Railway /> },
                { name: "Cloudflare", icon: <Cloudflare /> },
                { name: "Jira", icon: <SiJira className="text-blue-500" /> },
                { name: "Notion", icon: <BiLogoNotion /> },
            ],
        },
    ];

    // Variantes de animación optimizadas para rendimiento
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const techItemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <section id="tech" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-pink-500/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block text-5xl sm:text-6xl md:text-7xl mb-6 sm:mb-8"
                    >
                        💻
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 sm:mb-8 leading-tight tracking-tight">
                        {t("tech.title")}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed font-normal px-4 sm:px-0">
                        {t("tech.desc")}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
                >
                    {skills.map((skill, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="glass-effect border-white/10 hover-glow h-full group">
                                <CardHeader className="pb-4 sm:pb-6">
                                    <CardTitle className="flex items-center gap-4 sm:gap-5">
                                        <motion.div 
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className="text-3xl sm:text-4xl"
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        <div className="flex flex-col">
                                            <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                                {skill.category}
                                            </span>
                                            <div className={`w-16 sm:w-20 h-1.5 rounded-full bg-gradient-to-r ${skill.color} mt-2 sm:mt-3`} />
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
                                    >
                                        {skill.technologies.map((tech, idx) => (
                                            <motion.div
                                                key={idx}
                                                variants={techItemVariants}
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    transition: { duration: 0.2 }
                                                }}
                                                className="group/tech"
                                            >
                                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/15">
                                                    <div className="flex items-center gap-3 sm:gap-4">
                                                        <motion.span 
                                                            className="text-2xl sm:text-3xl group-hover/tech:scale-110 transition-transform duration-300"
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.5 }}
                                                        >
                                                            {tech.icon}
                                                        </motion.span>
                                                        <span className="text-sm sm:text-base font-semibold text-white/90 group-hover/tech:text-purple-300 transition-colors leading-snug">
                                                            {tech.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 sm:mt-24"
                >
                    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10">
                        <motion.h3 
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {t("stats.titleStats")}
                        </motion.h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
                            {[
                                { number: "25+", label: t("stats.technologies"), icon: "💻" },
                                { number: "10+", label: t("stats.projects"), icon: "🚀" },
                                { number: "1+", label: t("stats.experience"), icon: "⏰" },
                                { number: "100%", label: t("stats.dedication"), icon: "❤️" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    viewport={{ once: true }}
                                    className="text-center group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                                >
                                    <motion.div 
                                        className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        {stat.icon}
                                    </motion.div>
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-300 text-sm sm:text-base md:text-lg group-hover:text-white transition-colors font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
  
  export default Tech;