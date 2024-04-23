import React from 'react'

const Intro = () => {
    return (
        <div className='intro__container'>
            <div className='intro__innercon'>
                <h1>Protoapp</h1>
                <p>
                    Our landing page template works on all devices, so you only
                    have to set it up once, and get beautiful results forever.
                </p>
                <button>
                    Get Started
                </button>
            </div>
            <div className='intro__stores'>
                <a><img src='./src/assets/badge.play-store.svg' alt='img' /></a>
                <a><img src='./src/assets/badge.app-store.svg' alt='img' /></a>
            </div>
            <div className='intro__btmimg'>
                <img src='./src/assets/bg-decals.svg' alt='img' width={"100%"} />
            </div>
        </div>
    )
}

export default Intro