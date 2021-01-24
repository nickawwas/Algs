import React from 'react'

import "./Card.css"

const Card = (props) => {
    
    const fetchImg = (img, algo) => {
        const noSpaces = algo.replace(/\s/g, '');
        return `${img}${noSpaces}`;
    };

    return (
        <div className='cubing'>
            <div className="cubing-data"> 
            
                { props.algos.map(alg => (
                    <div className='algs'>
                        <div className="alg-case">
                            <span> {alg.algCase} </span>
                            <img src={fetchImg(props.imgUrl, alg.regAlgo)} alt="Cube" />
                        </div>

                        <div className="alg-notation">
                            <span className="alg-moves"> {alg.regAlgo} </span>
                            <span className="bld-moves"> {alg.bldAlgo} </span>
                        </div>  
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Card;
