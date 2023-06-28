import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import  HeroImage from "../assets/heroimage.png"
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm Fullstack Web Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">
                Seorang Fullstack Web Developer antusiast yang ingin mempelajari teknologi dan hal baru dalam mengembangkan teknologi. Keinginan kuat untuk belajar dan senang bekerja sama dalam tim 
                </p>
                <div>
                    <Link to="portofolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portofolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my-profile" className="rounded-2xl mx-auto w-2/3 md:w-50"/>
            </div>
        </div>
    </div>
  )
}

export default Home