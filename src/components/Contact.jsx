import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { BsEnvelope, BsLinkedin, BsGithub, BsDownload, BsTelephone, BsGeoAlt } from 'react-icons/bs';

const Contact = () => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    const contactMethods = [
        {
            icon: <BsEnvelope className="w-6 h-6" />,
            title: "Email",
            value: "ismaeldevs@gmail.com",
            href: "mailto:ismaeldevs@gmail.com",
            color: "hover:text-red-400"
        },
        {
            icon: <BsLinkedin className="w-6 h-6" />,
            title: "LinkedIn",
            value: "@isma-chavez",
            href: "https://www.linkedin.com/in/isma-chavez/",
            color: "hover:text-blue-400"
        },
        {
            icon: <BsGithub className="w-6 h-6" />,
            title: "GitHub",
            value: "@Ismaeldevs",
            href: "https://github.com/Ismaeldevs",
            color: "hover:text-purple-400"
        },
        {
            icon: <BsGeoAlt className="w-6 h-6" />,
            title: "Ubicación",
            value: "Argentina",
            href: null,
            color: "hover:text-green-400"
        }
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

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.3, 1, 1.3],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-pink-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 sm:mb-6">
                            {t("contacts.title")}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                            {t("contacts.desc")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                        {/* Contact Form Card */}
                        <motion.div variants={itemVariants}>
                            <Card className="glass-effect border-white/10 hover-glow h-full">
                                <CardHeader>
                                    <CardTitle className="text-xl sm:text-2xl text-white flex items-center gap-3">
                                        <BsEnvelope className="text-purple-400" />
                                        {t("contacts.formTitle")}
                                    </CardTitle>
                                    <CardDescription className="text-gray-300 text-sm sm:text-base">
                                        {t("contacts.formDesc")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Primary CTA */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        onHoverStart={() => setIsHovered(true)}
                                        onHoverEnd={() => setIsHovered(false)}
                                    >
                                        <Button
                                            size="lg"
                                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                                            asChild
                                        >
                                            <a href="mailto:ismaeldevs@gmail.com" className="flex items-center justify-center gap-3">
                                                <BsEnvelope className="w-5 h-5" />
                                                {t("contacts.textButton")}
                                                <motion.div
                                                    animate={{ x: isHovered ? 5 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    →
                                                </motion.div>
                                            </a>
                                        </Button>
                                    </motion.div>

                                    <Separator className="bg-white/10" />

                                    {/* Alternative Contact Methods */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                                            {t("contacts.altContact")}
                                        </h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {contactMethods.slice(0, 3).map((method, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="group"
                                                >
                                                    {method.href ? (
                                                        <a
                                                            href={method.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300"
                                                        >
                                                            <span className={`text-gray-400 group-hover:scale-110 transition-transform duration-300 ${method.color}`}>
                                                                {method.icon}
                                                            </span>
                                                            <div>
                                                                <div className="text-sm text-gray-400">{method.title}</div>
                                                                <div className="text-white font-medium">{method.value}</div>
                                                            </div>
                                                        </a>
                                                    ) : (
                                                        <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10">
                                                            <span className={`text-gray-400 ${method.color}`}>
                                                                {method.icon}
                                                            </span>
                                                            <div>
                                                                <div className="text-sm text-gray-400">{method.title}</div>
                                                                <div className="text-white font-medium">{method.value}</div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Profile & Info Card */}
                        <motion.div variants={itemVariants}>
                            <Card className="glass-effect border-white/10 hover-glow h-full">
                                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                                    {/* Profile Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        className="relative"
                                    >
                                        <img
                                            src="/profile.jpg"
                                            alt="Ismael Profile"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-purple-500/30 shadow-xl shadow-purple-500/20"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20"></div>
                                        
                                        {/* Status Indicator */}
                                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </motion.div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{t("contacts.name")}</h3>
                                            <p className="text-purple-300 font-medium">{t("contacts.role")}</p>
                                            <p className="text-sm text-gray-400 mt-1">{t("contacts.availability")}</p>
                                        </div>

                                        <Separator className="bg-white/10" />

                                        {/* Stats */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div>
                                                <div className="text-2xl font-bold text-gradient">1+</div>
                                                <div className="text-xs text-gray-400">{t("contacts.expYears")}</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gradient">10+</div>
                                                <div className="text-xs text-gray-400">{t("contacts.projects")}</div>
                                            </div>
                                        </div>

                                        <Separator className="bg-white/10" />

                                        {/* Download CV */}
                                        <Button
                                            variant="outline"
                                            className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                                            asChild
                                        >
                                            <a 
                                                href="/CV - Ismael.pdf" 
                                                download
                                                className="flex items-center gap-2"
                                            >
                                                <BsDownload className="w-4 h-4" />
                                                {t("contacts.downloadCV")}
                                            </a>
                                        </Button>

                                        {/* Response Time */}
                                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                                            <div className="flex items-center gap-2 text-green-400 text-sm">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                {t("contacts.responseTime")}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Footer Quote */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-16 p-8 glass-effect border-white/10 rounded-xl"
                    >
                        <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4">
                            "{t("contacts.quote")}"
                        </blockquote>
                        <cite className="text-purple-400 font-medium">- Matt Mullenweg</cite>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;