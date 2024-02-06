import { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { CustomBtn } from "../../customSwiper/customBtn"

const data = [
  "Khám bệnh tổng quát",
  "Khám chuyên khoa Ngoại",
  "Chẩn đoán hình ảnh",
  "Xét nghiệm",
]

export const Section5 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section>
      <div className="container relative">
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/4 hidden 2xl:block">
          <img src="src/images/png/img33.png" width="100%" alt="" />
        </div>
        <div className="2xl:absolute top-0 right-0 2xl:w-[60%] z-30 mb-3 2xl:mb-0">
          <h3 className="text-4xl font-bold mb-2 text-center 2xl:text-start">
            Gói tầm soát ung thư tuyến giáp tại{" "}
            <br className="hidden md:block" />
            BVĐK Phương Đông bao gồm những gì?
          </h3>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="hidden md:block mySwiper2"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="2xl:max-w-fit 2xl:mr-5 cursor-pointer hover:opacity-100"
                style={{ background: "none" }}
              >
                {item}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="bg-dd-400 rounded-2xl 2xl:bg-none"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} style={{ background: "none" }}>
              <div className="flex xl:mx-[12rem] gap-2 md:gap-5 items-center xl:items-end my-3 xl:my-0">
                <div className="md:w-1/3 hidden md:block mx-5">
                  <img src="src/images/png/img32.png" alt="" />
                </div>
                <div className="md:w-2/3 text-white text-start xl:mb-[5rem] mx-10">
                  <h4 className="text-2xl mb-4 text-center md:text-start">
                    {item}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque fuga vitae hic sunt temporibus ut consequuntur
                    ab, architecto ipsam ipsum, minus sapiente sit repellendus
                    vero sed quod odio molestias tempore eaque enim at dolorem
                    accusantium beatae reprehenderit! Delectus sequi blanditiis,
                    commodi perspiciatis est eos? Nihil, recusandae suscipit?
                    Dolorum, tenetur officiis!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute top-1/2 -translate-y-1/2 2xl:translate-x-0 2xl:top-[65%] inset-x-0 xl:inset-x-[5%] flex justify-between z-20">
            <CustomBtn />
          </div>
        </Swiper>
      </div>
    </section>
  )
}
