import styles from "./activeProjectCard.module.scss";

import PictureSvg from "../../../assets/svg/picture.svg";
import LikeSvg from "../../../assets/svg/like-filled.svg";
import CartSvg from "../../../assets/svg/cart.svg";

const iconsBlockVariants = [
  {
    text: "2 hour ago",
    icon: "",
  },
  {
    text: 7,
    icon: <PictureSvg />,
  },
  {
    text: 2,
    icon: <LikeSvg />,
  },
  {
    text: 1,
    icon: <CartSvg />,
  },
];

const ActiveProjectCard = () => {
  return (
    <li className={styles.cardItem}>
      <button className={styles.itemButton}>
        <h2>Some colorful steampunk picture</h2>
      </button>
      <ul className={styles.rightBlock}>
        {iconsBlockVariants.map((el) => (
          <li key={el.text}>
            <button>
              {el.icon}
              <span>{el.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ActiveProjectCard;
