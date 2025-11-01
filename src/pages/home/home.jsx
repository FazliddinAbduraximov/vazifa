import { AudioProduct } from "./components/audio"
import { Banner } from "./components/banner"
import { Description } from "./components/discription"
import { NewProduct } from "./components/newproduct"
import { Rukunlar } from "./components/rukunlar"

export const Home = () => {
    return (
        <div>
            <Banner />
            <Description />
            <Rukunlar />
            <NewProduct />
            <AudioProduct />
        </div>
    )
}