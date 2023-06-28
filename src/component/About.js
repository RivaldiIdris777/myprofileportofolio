import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>                    
            <p className="text-xl mt-15">
                Memiliki pengalaman bekerja di perusahaan dalam membuat website yaitu di PT Perkebunan Nusantara VI dan di RSUD H. Abdurrahman Sayoeti.
            </p>  

            <br />

            <p className="text-xl">
                Dalam teknologi pengalaman menggunakan Express, Laravel, ReactJs, VueJs. Membuat aplikasi sederhana contoh kasus pada porotofolio yaitu Coffeshop dan Online Shop. M
            </p>
            <p className="text-xl">
                Membuat aplikasi sederhana contoh kasus pada porotofolio yaitu Coffeshop dan Online Shop. 
            </p>
            <p className="text-xl">
                Membuat Aplikasi Rumah Sakit Untuk Sistem Management Informasi.
            </p>
        </div>              
    </div>
  )
}

export default About