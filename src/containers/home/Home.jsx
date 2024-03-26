import styles from "./home.module.css"
import Carousel from "../../components/carousel/Carousel"



const Home = () => {
  return (
    <div>
      <section className={styles.heroSection}>
        <Carousel />
      </section>

      {/* card section  */}
      <section>
        <div className="cardWrapper">
          <div className="card">
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home