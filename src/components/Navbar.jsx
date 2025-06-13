import { useState } from 'react'
import { BsGithub, BsLinkedin,BsFileEarmarkArrowDown } from "react-icons/bs"
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { useTranslation } from 'react-i18next'


const Navbar = () => {
    
    const [t, i18n] = useTranslation("global");

    const menuItems = [
        { name: t("navbar.home"), href: '#home' },
        { name: t("navbar.tech"), href: '#tech' },
        { name: t("navbar.projects"), href: '#projects' },
        { name: t("navbar.contact"), href: '#contact' }
    ];
    
    
    const socialLinks = [
        { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/isma-chavez/", color: 'text-blue-300' },
        { icon: <BsGithub />, href: "https://github.com/Ismaeldevs", color: 'text-purple-500' },
        { icon: <BsFileEarmarkArrowDown />, href: `${import.meta.env.VITE_PUBLIC_URL}CV - Ismael.pdf`, color: 'text-green-500', title: "Download CV" },
        
    ];
    
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => setIsOpen(prevState => !prevState);

    const renderMenuItems = (className) => (
        menuItems.map(item => (
            <a key={item.name} href={item.href} className={`relative group cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ${className}`}>
                <li className="inline-block">{item.name}</li>
                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-100 to-blue-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
        ))
    );
 
    const renderSocialLinks = (className) => (
        socialLinks.map((link, index) => (
            <li key={index} className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 ${className}`}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={link.color}>
                    {link.icon}
                </a>
            </li>
        ))
    );
  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b-gray-700 bg-black/70 p-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
    <a href="#home" className='bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>
        Ismadev
    </a>

    {/* Desktop Menu */}
    <ul className='hidden md:flex gap-10'>
        {renderMenuItems('')}
    </ul>

    { /* Desktop Social Icons */}
    <ul className='hidden md:flex gap-5'>
     {renderSocialLinks('')}
        <button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "es" : "en")}>
            <MdGTranslate/>
         </button>
    </ul>

        {/* Mobile Menu Icon */}
    <div className="md:hidden text-4xl" onClick={menuOpen}>
        {isOpen ? <IoIosClose /> : <BiMenu />}
    </div>

    {/* Mobile Menu */}
    {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/3 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12`}>
            <ul className='flex flex-col gap-8 relative right-3'>
                {renderMenuItems('')}
            </ul>

            <ul className='flex flex-wrap gap-5'>
                {renderSocialLinks('')}
                <button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "es" : "en")}>
            <MdGTranslate className='relative left-1'/>
         </button>
            </ul>
        </div>
    )}
</nav>
  )
}

export default Navbar