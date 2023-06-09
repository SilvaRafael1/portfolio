import React from 'react'
import port3d from "../assets/portfolio/3d-port.png";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: '3D Portfolio',
            src: port3d,
            demo: 'https://rafael-3d-port.bohr.io',
            code: 'https://github.com/SilvaRafael1/portfolio-3d'
        }
    ]

  return (
    <div
    name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
        <div
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
        >
            <div
            className='pb-8'
            >
                <p
                className='text-4xl font-bold inline border-b-4 border-gray-500'
                >Portfolio</p>
                <p
                className='py-6'
                >Confira alguns dos meus projetos</p>
            </div>

            <div
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'
            >
            {portfolios.map(({ id, title, src, demo, code }) => 
            
                <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg flex flex-col items-center'
                >
                    <span className='text-2xl font-bold py-3'>{title}</span>
                    <img 
                    src={src} 
                    alt="" 
                    className='rounded-md duration-200 hover:scale-105'
                    />
                    <div
                    className='flex items-center justify-center'
                    >
                        <form 
                        action={demo}
                        target='_black'
                        >
                            <button
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                            >
                                Demo
                            </button>
                        </form>

                        <form 
                        action={code}
                        target='_black'
                        >
                            <button
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                            >
                                Code
                            </button>
                        </form>
                    </div>
                    
                </div>
                )}
            </div>
            
        </div>

    </div>
  )
}

export default Portfolio