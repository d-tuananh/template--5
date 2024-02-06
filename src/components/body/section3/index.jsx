const data = [
  "Nữ giới ở độ tuổi từ 15 - 35 và nam giới trong độ tuổi từ 40 trở lên, những người có nhu cầu thăm khám bệnh ung thư tuyến giáp.",
  "Đối tượng có tiền sử gia đình có người bị ung thư tuyến giáp, người mắc hội chứng Cowden, MEN II hoặc FAP.",
  "Những người có chế độ ăn thiếu i - ốt.",
  "Đối tượng bị phơi nhiễm phóng xạ ở mức cao.",
  "Người đang mắc các bệnh liên quan tới tuyến giáp và có thể trạng mệt mỏi, sút cân nhanh.",
  "Đối tượng xuất hiện triệu chứng bất thường nghi ngờ ung thư tuyến giáp như: Có khối u ở vùng tuyến giáp, giọng nói khàn, hạch bạch huyết sưng to,...",
]

export const Section3 = () => {
  return (
    <section className="relative">
      <div className="absolute bottom-0 left-0 top-0 translate-y-[15%] -z-10 lg:block hidden">
        <img src="src/images/png/img7.png" alt="" />
      </div>
      <div className="container xl:mt-[10rem] grid grid-cols-1 xl:grid-cols-3 gap-10 place-items-center">
        <div className="relative order-last xl:-order-last ">
          <div className="absolute bottom-0 right-0 top-0 overflow-hidden rounded-3xl -z-[1]">
            <img src="src/images/png/img8.png" alt="" />
          </div>
          <div className="">
            <img src="src/images/png/img9.png" alt="" />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h3 className="font-bold text-4xl text-center lg:text-start">
            Ai nên khám tầm soát ung thư tuyến giáp?
          </h3>
          <p>
            Phát hiện sớm bệnh lý ung thư tuyến giáp không chỉ nâng cao hiệu quả
            trong điều trị mà còn hạn chế các biến chứng, tổn thương, gia tăng
            cơ hồi hồi phục hoàn toàn cho người bệnh. Theo khuyến cáo của bác sĩ
            Bệnh Viện Đa khoa Phương Đông, những trường hợp sau đây nên khám
            sàng lọc định kỳ căn bệnh.
          </p>
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-dd-400">
                <img src="src/images/svg/head.svg" alt="" />
              </div>
              <p className="font-medium">{item}</p>
            </div>
          ))}

          <button
            className="py-2 px-5 bg-linear-green rounded-full text-white w-fit hover:opacity-80 font-bold uppercase mx-auto lg:mx-0"
            onClick={() => {
              prompt("Nhập email của bạn !!!!")
            }}
          >
            Đăng kí tư vấn
          </button>
        </div>
      </div>
    </section>
  )
}
