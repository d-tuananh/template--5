import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { CustomBtn } from "../../customSwiper/customBtn"

export const Section11 = () => {
  return (
    <section className="bg-[url('src/images/png/img27.png')]">
      <div className="container py-[5rem]">
        <h3 className="text-center font-bold text-4xl text-white mb-[3rem]">
          Cảm nhận của khách hàng sau khi sử dụng dịch vụ
          <br />
          Tầm soát ung thư tuyến giáp
        </h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="relative"
          breakpoints={{
            750: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide
                className="rounded-2xl p-3 sm:px-10 sm:py-5"
                key={index}
              >
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="">
                    <img src="src/images/png/Union.png" alt="" />
                  </div>
                  <h4 className="font-bold w-[80%] mx-auto">
                    Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình
                    yên và an tâm khi thăm khám tại đây!
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit nulla etiam sed consequat dictumst viverra molestie
                    tortor feugiat. Purus consequat, sapien diam nec. Egestas
                    lacinia scelerisque ultrices vivamus adipiscing diam massa
                    phasellus diam. Sit mi at nibh amet, suscipit dui ornare
                    cursus duis.
                  </p>
                  <div className="">
                    <img
                      src={
                        index > 2
                          ? `src/images/png/img${index + 25}.png`
                          : `src/images/png/img${index + 28}.png`
                      }
                      alt=""
                    />
                  </div>
                  <h5 className="text-xs font-bold">Nguyễn Minh Ánh</h5>
                  <div className="">
                    <img src="src/images/png/5-star.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-20">
            <CustomBtn />
          </div>
        </Swiper>
      </div>
    </section>
  )
}
