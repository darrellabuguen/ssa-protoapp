import React from 'react'

const Body = () => {
    return (
        <div className='body__container'>
            <h1>Meet Protoapp</h1>
            <p>
                The app lorem ipsum is common placeholder text used to demonstrate
                the graphic elements of a document or visual presentation.
            </p>
            <div className='content__container'>
                <div className='content__text'>
                    <h2>Discover</h2>
                    <p>
                        Get information on using these guidelines whenever you are using
                        therfore they have the same style and quality.
                    </p>
                </div>
                <div className='content__img'>
                    <img src='./src/assets/product-search.svg' alt='img' width={"100%"} />
                </div>
            </div>
            <div className='content__container aug'>
                <div className='content__img'>
                    <img src='./src/assets/product-smartphone.svg' alt='img' width={"100%"} />
                </div>
                <div className='content__text aug'>
                    <h2>Augmented</h2>
                    <p>
                        Word salad often arouses curiosity due to its seemingly intelligent
                        and tasteful play on words.
                    </p>
                </div>
            </div>
            <div className='content__container'>
                <div className='content__text poss'>
                    <h2>Endless Possibilities</h2>
                    <p>
                        Management Systems shouldn't be a bore. Run out of words? heres some
                        lorem ipsum: Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className='content__img'>
                    <img src='./src/assets/product-work.svg' alt='img' width={"100%"} />
                </div>
            </div>
        </div>
    )
}

export default Body