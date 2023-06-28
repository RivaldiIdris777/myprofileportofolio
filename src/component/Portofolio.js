import React from 'react'
import reactCoffeshop from "../assets/coffe-1.JPG"
import vueOnlineShop from "../assets/vueshop-1.JPG"
import hospitalInformation from "../assets/doi-1.JPG"

const Portofolio = () => {
  
    const portofolios = [
        {
            id: 1,
            src: reactCoffeshop,
            name: "React Coffe Shop Personal Project"
        },
        {
            id: 2,
            src: vueOnlineShop,
            name: "Vue Online Shop Personal Project"
        },
        {
            id: 3,
            src: hospitalInformation,
            name: "Hospital Information Website"
        },
    ]

  return (
    <div name="portofolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portofolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portofolios.map(({id, src, name}) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                            <div className="flex items-center justify-center text-center">
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

export default Portofolio