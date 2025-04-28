import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function About() {
  return (
    <section id="about" className="bg-green-50 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* ABOUT SECTION */}
        <div className="about section mb-20">
          <div className="about__container grid">

            <h2 className="section__title-1 text-5xl font-bold mb-10">
              <span>About Us.</span>
            </h2>

            <div className="about__perfil mb-10">
              <div className="about__image relative mx-auto w-60 h-60">
                <img 
                  src="student.jpeg" 
                  alt="profile" 
                  className="about__img rounded-full object-cover w-full h-full"
                />
                 <img 
                  src="student2.jpeg" 
                  alt="profile" 
                  className="about__img rounded-full object-cover w-full h-full"
                />
                {/* Decorations */}
                <div className="about__shadow absolute inset-0 bg-black opacity-10 rounded-full"></div>
                <div className="geometric-box absolute top-0 left-0 w-6 h-6 bg-green-500"></div>
                <div className="about__box absolute bottom-0 right-0 w-8 h-8 bg-green-300"></div>
              </div>
            </div>

            <div className="about__info text-gray-700">
              <p className="about__description mb-6 text-lg">
              <b>"Let the Hills Learn. Let the Earth Heal."</b> Founded with love for the land and people of the Himalayas, 
          Bugyal Foundation works to empower rural communities especially in remote and underdeveloped areas. 
          Our name comes from the word “Bugyal”, meaning alpine meadows in the mountains—a symbol of harmony between nature and life.
              </p>

              <ul className="about__list list-disc list-inside mb-6 text-left max-w-md mx-auto">
                <li className="about__item">
                  <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, Flutter & Figma.
                </li>
              </ul>

              {/* <div className="about__buttons flex justify-center gap-6">
                <a href="#contact" className="button flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                  <i className="ri-send-plane-line"></i> Contact Me
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="button__ghost flex items-center gap-2 px-4 py-2 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition">
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </div> */}
            </div>

          </div>
        </div>

        {/* ABOUT US INTRO */}
        <h2 className="text-5xl font-extrabold text-green-800 mb-8">About Us</h2>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium max-w-4xl mx-auto">
         
        </p>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium max-w-4xl mx-auto">
          We believe that education is a right, not a privilege, and that protecting nature is not optional, but essential. 
          Our projects aim to:
        </p>

        {/* SLIDER SECTION */}
        <div className="mb-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            loop={true}
          >
            {[
              { title: "Education", desc: "Make education accessible and inclusive." },
              { title: "Nature", desc: "Preserve natural ecosystems." },
              { title: "Leadership", desc: "Promote local leadership and sustainable living." }
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-lg">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* FOCUS AREAS */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold text-green-800 mb-12">Our Focus Areas</h3>

          {/* Education Empowerment */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-green-800 mb-4">1. Rural Education Empowerment</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              "Shiksha Se Shakti – Education is Power." We work to ensure every child in rural communities has access 
              to meaningful education.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Project Pahaad Pathshala – Establishing and enhancing village schools in hill regions</li>
              <li>Shiksha Sapna – Supporting students with learning materials, uniforms, and digital access</li>
              <li>Teacher training and community learning centers</li>
              <li>After-school programs and adult literacy drives</li>
            </ul>
          </div>

          {/* Environment */}
          <div>
            <h4 className="text-2xl font-semibold text-green-800 mb-4">2. Environment & Sustainability</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              "Green Minds. Clean Earth." We promote ecological awareness and action that is community-led and locally rooted.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Green Roots Movement – Tree plantations, native forest revival, and climate awareness</li>
              <li>EcoVaani – Environmental education using stories, folk art, and local wisdom</li>
              <li>Village-level clean water, sanitation, and plastic-free campaigns</li>
              <li>Waste management workshops and sustainable farming training</li>
            </ul>
          </div>
        </div>

        {/* FLAGSHIP PROJECT */}
        <div className="bg-green-600 text-white p-12 rounded-2xl shadow-lg text-center max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Our Flagship Project: Pahaad Pathshala</h3>
          <p className="text-lg mb-8 leading-relaxed">
            Pahaad Pathshala is our flagship project, bringing quality education to remote mountain villages. 
            By establishing and enhancing local schools, we are ensuring that every child, no matter their background, 
            receives the education they deserve. With support from volunteers, donors, and local communities, 
            we are making a lasting impact.
          </p>
          <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-green-100 transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;
