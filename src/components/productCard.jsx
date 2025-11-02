import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, title, janr, star, reyting, naush, book }) => {
    if (janr && star) {
        return (
            <Link to={`/product/${id}`}>
                <div>
                    <img className="w-[239px] h-[336px] mb-[18px]" src={img} alt="img" />
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="font-normal text-sm mb-4">{janr}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="" src={star} alt="img" />
                            <p className="font-normal text-sm">{reyting}</p>
                        </div>
                        <div className="flex items-center">
                            <img className="" src={naush} alt="img" />
                            <img className="" src={book} alt="img" />
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
    return (
        <div>
            <img className="w-[190px] h-[267px]" src={img} alt="img" />
            <h3 className="text-xl text-center mt-4 font-bold">{title}</h3>
        </div>
    );
};
