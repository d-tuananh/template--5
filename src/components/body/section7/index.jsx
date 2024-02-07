import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { CustomBtn } from "../../customSwiper/customBtn"
const data = [
  {
    url: "img10.png",
    title: "Gói Khám sàng lọc ung thư tiền liệt tuyến",
    content:
      "Ung thư tiền liệt tuyến rất nguy hiểm, đe dọa nặng nề đến sức khỏe nam giới. Vì vậy các bác sĩ luôn khuyến nghị người thuộc đối tượng có nguy cơ cao mắc căn bệnh này nên khám sàng lọc định kỳ để có thể phát hiện sớm, chính xác, giúp điều trị hiệu quả.",
  },
  {
    url: "img11.png",
    title: "Gói Khám tầm soát ung thư đường tiêu hoá",
    content:
      "Tầm soát ung thư đường tiêu hoá là việc làm rất quan trọng với mỗi người. Tầm soát định kỳ được khuyến cáo cho tất cả mọi người, trong đó những trường hợp đặc biệt dưới đây thuộc nguy cơ cao mắc ung thư đường tiêu hoá.",
  },
  {
    url: "img12.png",
    title: "Gói Khám sàng lọc ung thư phổi",
    content:
      "Ung thư phổi là một trong những bệnh lý nguy hiểm đe dọa cả phụ nữ và nam giới tại Việt Nam. Bởi vậy, khám sàng lọc ung thư phổi luôn được các bác sĩ khuyến khích thực hiện định kỳ nhằm phát hiện sớm tình trạng bệnh để có phương án điều trị hiệu quả.",
  },
]
export const Section7 = () => {
  return (
    <section>
      <div className="container relative mt-[10rem]">
        <h3 className="text-4xl font-bold text-center mb-10">
          Các gói dịch vụ liên quan
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
              spaceBetween: 40,
            },
          }}
        >
          {[...data, ...data].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-custom rounded-3xl my-2">
                <div>
                  <img src={item.url} alt={item.title} />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-justify">{item.content}</p>
                  <button
                    className="text-[#0A9949]"
                    onClick={() => {
                      prompt("Vui lòng nhập số điện thoại của bạn !")
                    }}
                  >
                    Đăng ký tư vấn ngay
                  </button>
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
