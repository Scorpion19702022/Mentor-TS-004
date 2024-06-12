import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import styles from './Hero.module.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import NavTest from './NavTest'

const Hero = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				// modules={[Pagination, Navigation]}
				modules={[Pagination, NavTest]}
				className={styles.swiper}
			>
				<SwiperSlide className={styles.swiper_slide}>Slide 1</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 7</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 8</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>Slide 9</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Hero
