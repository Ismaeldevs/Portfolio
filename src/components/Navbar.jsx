import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsGithub, BsLinkedin, BsFileEarmarkArrowDown } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { toggleLanguage } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const menuItems = [
        { name: t("navbar.home"), href: 'home' },
        { name: t("navbar.tech"), href: 'tech' },
        { name: t("navbar.projects"), href: 'projects' },
        { name: t("navbar.contact"), href: 'contact' }
    ];

    const socialLinks = [
        { 
            icon: <BsLinkedin />, 
            href: "https://www.linkedin.com/in/isma-chavez/", 
            color: 'hover:text-blue-400',
            label: t("navbar.linkedin")
        },
        { 
            icon: <BsGithub />, 
            href: "https://github.com/Ismaeldevs", 
            color: 'hover:text-purple-400',
            label: t("navbar.github")
        },
        { 
            icon: <BsFileEarmarkArrowDown />, 
            href: "/CV - Ismael.pdf", 
            color: 'hover:text-green-400', 
            label: t("navbar.downloadCV"),
            download: true
        },
    ];

    // Detectar scroll para cambiar estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detectar sección activa
    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.href);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Compensar altura del navbar
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-purple-500/10' 
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
                        {/* Logo */}
                        <motion.button
                            onClick={() => scrollToSection('home')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
                        >
                            Ismadev
                        </motion.button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 ${
                                        activeSection === item.href
                                            ? 'text-purple-300'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {item.name}
                                    {activeSection === item.href && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                                            initial={false}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Desktop Social Icons */}
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={link.download}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-1.5 xl:p-2 text-gray-400 transition-all duration-300 ${link.color}`}
                                    title={link.label}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="text-xs lg:text-sm xl:text-base">
                                        {link.icon}
                                    </div>
                                </motion.a>
                            ))}
                            
                            <motion.button
                                onClick={toggleLanguage}
                                whileHover={{ scale: 1.1, rotate: 180 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-1.5 xl:p-2 text-gray-400 hover:text-purple-400 transition-all duration-300"
                                title="Cambiar idioma"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <div className="text-xs lg:text-sm xl:text-base">
                                    <MdGTranslate />
                                </div>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <IoIosClose size={28} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <BiMenu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-80 bg-black/90 backdrop-blur-md border-l border-white/10 z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full pt-24 px-8">
                                {/* Mobile Menu Items */}
                                <div className="flex flex-col space-y-6 mb-12">
                                    {menuItems.map((item, index) => (
                                        <motion.button
                                            key={item.href}
                                            onClick={() => scrollToSection(item.href)}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`text-left text-lg font-medium transition-all duration-300 ${
                                                activeSection === item.href
                                                    ? 'text-purple-300'
                                                    : 'text-gray-300 hover:text-white'
                                            }`}
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Mobile Social Links */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download={link.download}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className={`p-3 text-gray-400 hover:scale-110 transition-all duration-300 ${link.color}`}
                                            title={link.label}
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                    
                                    <motion.button
                                        onClick={toggleLanguage}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7 }}
                                        className="p-3 text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
                                        title="Cambiar idioma"
                                    >
                                        <MdGTranslate />
                                    </motion.button>
                                </div>

                                {/* Language Display */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-sm text-gray-500 border-t border-white/10 pt-4"
                                >
                                    Idioma actual: {i18n.language === 'es' ? 'Español' : 'English'}
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;