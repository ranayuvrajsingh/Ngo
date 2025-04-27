import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Hero() {
  const slides = [
    '/1.jpeg',
    '/2.jpeg',
    '/3.jpeg',
    '/4.jpeg',
    '/5.jpeg'
  ];

  return (
    <section id="home" style={{ marginTop: '70px' }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '80vh' }}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div style={{ 
              backgroundImage: `url(${image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '80vh', 
              width: '100%',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(143,188,143,0.2)', 
                opacity: 0.6
              }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
