
export const ProductCard = ({ img, title, janr, star, reyting, naush, book }) => {
    if (janr && star) {
        return (
            <div>
                <img className="w-[239px] h-[336px]" src={img} alt="img" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="font-normal text-sm">{janr}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-[239px] h-[336px]" src={naush} alt="img" />
                        <p className="font-normal text-sm">{reyting}</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[239px] h-[336px]" src={naush} alt="img" />
                        <img className="w-[239px] h-[336px]" src={book} alt="img" />
                    </div>
                </div>

                <img src={icon} alt="icon" />
            </div>
        );
    }
    return (
        <div>
            <img className="w-[190px] h-[267px]" src={img} alt="img" />
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
    );
};
