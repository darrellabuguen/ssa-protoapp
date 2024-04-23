import React from 'react'

const LastCall = () => {
    return (
        <div className='last__container'>
            <h1>Last Call to Action</h1>
            <p>Another section content goes here</p>
            <div className='last__innercon'>
                <div className='last__card card1'>
                    <div className='card__img'>
                        <img src='./src/assets/badge.laravel-mix.svg' alt='img' width={"90%"} />
                        <div className='card__imgtxt'>
                            <p>AUTOMATION</p>
                        </div>
                    </div>
                    <div className='card__text'>
                        <h3 className='card__title'>ROLL OUT</h3>
                        <h2 className='card__sub-title'>Automatic Prototyping</h2>
                        <p>
                            Webpack is the most powerful and flexible asset compilation tool available
                            today. With that power, however, comes a certain level of complexity.
                        </p>
                    </div>
                </div>
                <div className='last__card card2'>
                    <div className='card__img'>
                        <img src='./src/assets/badge.how-to-read-code.svg' alt='img' width={"90%"} />
                        <div className='card__imgtxt'>
                            <p>SIMPLICITY</p>
                        </div>
                    </div>
                    <div className='card__text'>
                        <h3 className='card__title'>SIP COFFEE</h3>
                        <h2 className='card__sub-title'>Complexity Simplified</h2>
                        <p>
                            I know too many backend developers who are stifled by one glaring phobia: CSS.
                            How do you construct a layout when nothing lines up?
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <img src='./src/assets/bg-decals3.svg' alt='img' width={"100%"} />
        </div>
    )
}

export default LastCall