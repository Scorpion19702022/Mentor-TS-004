import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './Hero.module.css'

import helikopter from '../../assets/helikopter.jpg'
import polnoc from '../../assets/polnoc.jpg'
import chiru from '../../assets/chirurdzy.jpg'
import sherlock from '../../assets/sherlock.jpg'
import skazani from '../../assets/skazani.jpg'
import czarn from '../../assets/czarnobyl.jpg'
import przelecz from '../../assets/przelecz_2.jpg'
import incepcja from '../../assets/incepcja.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Hero = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				// navigation={{
				// 	nextEl: `.${styles.swiper_button_next}`,
				// 	prevEl: `.${styles.swiper_button_prev}`,
				// }}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className={styles.swiper}
			>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Helikopter w ogniu</h4>
					</div>
					<img className={styles.img} src={helikopter} alt='helikopter' />
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Północ, południe</h4>
					</div>
					<img className={styles.img} src={polnoc} alt='polnoc' />
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Chirurdzy</h4>
					</div>
					<img className={styles.img} src={chiru} alt='chiru' />
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Sherlock</h4>
					</div>
					<img className={styles.img} src={sherlock} alt='sherlock' />
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Skazani na Showshenk</h4>
					</div>
					<img className={styles.img} src={skazani} alt='skazani' />
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Czarnobyl</h4>
					</div>
					<img className={styles.img} src={czarn} alt='czarn' />
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Przełęcz ocalonych</h4>
					</div>
					<img className={styles.img} src={przelecz} alt='przelecz' />
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<div className={styles.box_title}>
						<h4 className={styles.title}>Incepcja</h4>
					</div>
					<img className={styles.img} src={incepcja} alt='incepcja' />
				</SwiperSlide>

				{/* <div className={`${styles.swiper_button_next} swiper-button-next`}></div>
				<div className={`${styles.swiper_button_prev} swiper-button-prev`}></div> */}
			</Swiper>
		</>
	)
}

export default Hero
