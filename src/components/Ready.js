import React from 'react'

const Ready = () => {
    return (
        <div className='ready__container'>
            <div className='ready__img'>
                <img src='./src/assets/bg-decals2.svg' alt='img' width={"100%"} />
            </div>
            <div className='ready__text'>
                <h1>Deep dive. Ready?</h1>
                <p>So are we. Unless. You're. Not. Word filler</p>
            </div>
            <div className='intro__stores'>
                <a><img src='./src/assets/badge.play-store.svg' alt='img' /></a>
                <a><img src='./src/assets/badge.app-store.svg' alt='img' /></a>
            </div>
        </div>
    )
}

export default Ready