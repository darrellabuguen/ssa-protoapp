import React from 'react'

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__innercon'>
                <div className='footer__img'>
                    <img src='./src/assets/logo1.svg' alt='img' width={"100%"} />
                </div>
                <div className='footer__text'>
                    <h3>Protoapp</h3>
                    <p>Camp One Inc, LLC</p>
                    <p>
                        Que ad Lorem ipsum dolor sit amet, consectur adipisicing elit. Qui reprehenderit
                        rerum ullam necessitatibus, at ab quae expeditia illo, nobis ipsum maxime
                        assumenda dolorum quo ut deleniti possimus. Eveniet, voluptatem, provident.
                    </p>
                </div>
            </div>
            <p className='footer__credits'>© 2019 Protoapp. All rights reserved.</p>
        </div>
    )
}

export default Footer