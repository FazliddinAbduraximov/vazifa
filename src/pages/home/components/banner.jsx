import YANGI from '../../../data/yangi'
import foto from '../../../assets/banner/image.png'
import { ProductCard } from '../../../components/productCard'

export const Banner = () => {
  return (
    <div>
      <div>
        <h2>Кўп ўқилаётганлар</h2>
        <img src={foto} alt="foto" />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {
          YANGI.slice(0, 3).map((e) => (
            <ProductCard
              key={e.id}
              img={e.img}
              title={e.title}
            />
          ))
        }
      </div>
    </div>
  )
}
