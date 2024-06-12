import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './Hero.module.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Hero = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={{
					nextEl: `.${styles.swiper_button_next}`,
					prevEl: `.${styles.swiper_button_prev}`,
				}}
				modules={[Autoplay, Pagination, Navigation]}
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

				<div className={`${styles.swiper_button_next} swiper-button-next`}></div>
				<div className={`${styles.swiper_button_prev} swiper-button-prev`}></div>
			</Swiper>
		</>
	)
}

export default Hero
