import React from 'react'
import softwaremaintaning from "../assets/softwaremaintaning.png"
import technicalsupport from "../assets/technicalsupport.png"
import linuxadministrator from "../assets/linuxadministrator.png"

const TechnicalSkill = () => {
    const technicalskills = [
        {
            id: 1,
            src: softwaremaintaning,
            name: "Software Maintaining"
        },
        {
            id: 2,
            src: technicalsupport,
            name: "Technical Support"
        },
        {
            id: 3,
            src: linuxadministrator,
            name: "Linux Administrator"
        },
    ]
  return (
    <div name="technicalskill" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Technical Skill</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                technicalskills.map(({id, src, name}) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg object-center">
                            <div className="flex items-center justify-center mt-5">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" width="30%" />
                            </div>                            
                            <div className="flex items-center justify-center text-center mt-3">
                                <button className="w-1/2 m-4 duration-200 hover:scale-105">{name}</button>        
                            </div>
                        </div>
                ))
            }                    
            </div>
        </div>
    </div>
  )
}

export default TechnicalSkill