import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { CustomBtn } from "../../customSwiper/customBtn"

export const Section10 = () => {
  return (
    <section className="bg-[url('src/images/png/Vector.png')] bg-no-repeat bg-cover bg-center">
      <div className="container relative">
        <h3 className="font-bold text-center text-4xl mb-[2rem]">
          Đội ngũ bác sĩ của chúng tôi
        </h3>
        <Swiper
          slidesPerView={1}
          freeMode={true}
          modules={[FreeMode]}
          className="relative"
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index} style={{ background: "none" }}>
                <div className="flex flex-col justify-center items-center gap-4 text-white mb-7">
                  <div className="grow">
                    <div className="relative before:content-[''] before:absolute before:bottom-0 before:inset-x-0 before:h-1 before:bg-white before:rounded-full">
                      <img
                        src={
                          index > 3
                            ? `src/images/png/doctor${index - 3}.png`
                            : `src/images/png/doctor${index + 1}.png`
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <h4 className="font-bold grow-0">NGUYỄN TRUNG CHÍNH</h4>
                  <p className="text-sm grow-0">PGS.TS. Bác sĩ Ung bướu</p>
                  <div className=" grow-0">
                    <img src="src/images/png/5-star.png" alt="" />
                  </div>
                  <p className="text-xs grow-0">4.8/5 (38 bình chọn)</p>
                </div>
              </SwiperSlide>
            ))}
          <div className="absolute top-2/3  w-full flex justify-between z-20">
            <CustomBtn />
          </div>
        </Swiper>
        <div className="bg-dd-400 rounded-2xl bg-no-repeat bg-conver bg-center absolute bottom-0 inset-x-0 h-3/5"></div>
      </div>
    </section>
  )
}
