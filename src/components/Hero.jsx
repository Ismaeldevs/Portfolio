import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { BsArrowDown, BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

const Hero = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
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
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-pink-500/10 rounded-full blur-3xl"
                />
                
                {/* Floating particles */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -25, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-40"
                />
            </div>

            <motion.div
                className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12 py-16 md:py-20">
                    {/* Profile Image with Enhanced Design */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            variants={floatingVariants}
                            animate="animate"
                            className="relative group"
                        >
                            {/* Main image container */}
                            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                                <img 
                                    src="/profile.jpg" 
                                    alt="Ismael Profile" 
                                    className="w-full h-full rounded-full object-cover border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow duration-500"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
                                
                                {/* Animated ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-2 sm:-inset-4 rounded-full border border-purple-500/20"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 sm:-inset-8 rounded-full border border-pink-500/10"
                                />
                            </div>
                            
                            {/* Floating status indicator */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                            >
                                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                            </motion.div>

                            {/* Floating elements around image */}
                            <motion.div
                                animate={{ 
                                    y: [0, -15, 0],
                                    rotate: [0, 360]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-80 flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-bold shadow-lg"
                            >
                                &lt;/&gt;
                            </motion.div>
                            
                            <motion.div
                                animate={{ 
                                    y: [0, 10, 0],
                                    x: [0, -10, 0]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-2 -left-3 sm:-bottom-3 sm:-left-4 md:-bottom-4 md:-left-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70 flex items-center justify-center text-white text-sm sm:text-base md:text-lg"
                            >
                                ⚡
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 md:space-y-10 max-w-5xl">
                        {/* Main Heading */}
                        <motion.div className="space-y-3 sm:space-y-4 md:space-y-6">
                            <motion.h1 
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            >
                                <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                                    {t("hero.name")}
                                </span>
                            </motion.h1>
                            
                            <motion.div 
                                className="space-y-2 sm:space-y-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white/90 leading-snug">
                                    {t("hero.title")}
                                </h2>
                                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-purple-300/80 leading-relaxed">
                                    {t("hero.subtitle")} <span className="text-pink-400">{t("hero.subtitleHighlight")}</span> {t("hero.subtitleEnd")}
                                </h3>
                            </motion.div>
                        </motion.div>

                        {/* Description */}
                        <motion.div 
                            variants={itemVariants}
                            className="space-y-4 sm:space-y-6 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-0"
                        >
                            <p className="text-base sm:text-lg md:text-xl text-gray-300/90 leading-relaxed font-normal text-center">
                                {t("hero.description")}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-purple-400/90 font-medium flex items-center justify-center gap-2">
                                {t("hero.subdesc")} 
                                <motion.span
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="text-base sm:text-lg md:text-xl"
                                >
                                    ⚙️
                                </motion.span>
                            </p>
                        </motion.div>

                        {/* Call to Action Buttons */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6 md:pt-8 px-4 sm:px-0"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button 
                                    size="lg" 
                                    onClick={() => scrollToSection('projects')}
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-base sm:text-lg font-semibold shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 rounded-xl border-0 w-full sm:w-auto min-w-[200px]"
                                >
                                    {t("hero.ctaProjects")}
                                </Button>
                            </motion.div>
                            
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button 
                                    variant="outline" 
                                    size="lg"
                                    onClick={() => scrollToSection('contact')}
                                    className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:text-white px-8 py-4 text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 rounded-xl w-full sm:w-auto min-w-[200px]"
                                >
                                    {t("hero.ctaContact")}
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Social Links Row */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center items-center space-x-6 sm:space-x-8 pt-6 sm:pt-8"
                        >
                            {[
                                { icon: BsGithub, href: "https://github.com/Ismaeldevs", color: "hover:text-purple-400", label: "GitHub" },
                                { icon: BsLinkedin, href: "https://www.linkedin.com/in/isma-chavez/", color: "hover:text-blue-400", label: "LinkedIn" },
                                { icon: BsEnvelope, href: "mailto:ismaeldevs@gmail.com", color: "hover:text-green-400", label: "Email" }
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-3 sm:p-4 text-gray-400 transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm ${social.color}`}
                                        title={social.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2 + index * 0.1 }}
                                    >
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        variants={itemVariants}
                        className="pt-12 sm:pt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.button
                            onClick={() => scrollToSection('tech')}
                            whileHover={{ scale: 1.1 }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors cursor-pointer group"
                        >
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                className="p-1.5 sm:p-2 border-2 border-purple-500/30 rounded-full group-hover:border-purple-400 transition-colors"
                            >
                                <BsArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;