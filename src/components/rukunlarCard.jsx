import React from 'react'

const RukunlarCard = ({ img, text }) => {
    return (
        <div className="w-[200px] h-[164px] p-[18px] rounded-xl flex items-end justify-center text-white text-lg font-bold"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <h3>{text}</h3>
        </div >
    )
}

export default RukunlarCard