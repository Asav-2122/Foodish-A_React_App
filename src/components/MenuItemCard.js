import { IMG_CDN_URL } from '../../Constanst';
import Default_Img from '../assets/images/default-restaurant.webp';
import MenuAddRemoveItem from './MenuAddRemoveItem';

const MenuItemCard = ({ items, restImg }) => {
  return (
    <div className="menu_card">
      <div className="menu_info">
        <span className="font-[400]">{items.name}</span>
        <p className="text-sm font-[400]">
          ₹{' '}
          {Math.floor(
            items.price > 0 ? items.price / 100 : items.defaultPrice / 100
          )}
        </p>
        <p className="text-xs text-[#5c5959] mt-1">{items.description}</p>
      </div>
      <div className="menu_img">
        {items.imageId ? (
          <img src={IMG_CDN_URL + items.imageId} alt="preview" />
        ) : restImg ? (
          <img src={IMG_CDN_URL + restImg} alt="preview" />
        ) : (
          <img loading="lazy" src={Default_Img} />
        )}

        <MenuAddRemoveItem items={items} />
      </div>
    </div>
  );
};
export default MenuItemCard;
