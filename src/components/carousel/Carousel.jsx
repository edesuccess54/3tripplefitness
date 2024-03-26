import sliderImage1 from "../../assets/images/h1-slider1-img-1.png";

import styles from "./carousel.module.css"

const Carousel = () => {

  return (
    <div className={styles.carouselWrapper}>
          
      <div className={styles.carousel}>
        <div className={styles.carouselContent}>
          <p className={styles.carouselText}>Challenge your limit</p>
        </div>
        <div className={styles.carouselImage}>
          <img src={sliderImage1} width={300} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Carousel
