const data = [
  {
    url: "img18.png",
    titile: "Bước 1:",
    content:
      "Khách hàng liên hệ thông qua tổng đài 19001806 hoặc đến bệnh viện trực tiếp để được tư vấn và đặt lịch khám.",
    icon: "img19.png",
  },
  {
    url: "img23.png",
    titile: "Bước 2:",
    content: "Thanh toán chi phí của gói khám.",
    icon: "img20.png",
  },
  {
    url: "img24.png",
    titile: "Bước 3:",
    content:
      "Thực hiện các bước thăm khám, xét nghiệm và chẩn đoán bằng hình ảnh tại viện.",
    icon: "img21.png",
  },
  {
    url: "img25.png",
    titile: "Bước 4:",
    content:
      "Bác sĩ trả kết quả, kết luận và tư vấn quá trình điều trị tiếp theo (nếu có).",
    icon: "img22.png",
  },
]
export const Section9 = () => {
  return (
    <section>
      <div className="container flex flex-col gap-10 items-center justify-center">
        <h2 className="text-center text-4xl font-bold 2xl:w-1/2 mx-auto">
          Lợi ích khi sử dụng dịch vụ Tầm soát ung thư tuyến giáp
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="pb-5 px-6 border border-solid rounded-2xl shadow-custom flex flex-col gap-4
              relative before:content('') before:absolute before:w-1/3 before:h-3 before:bg-dd-400 before:rounded-full before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:translate-y-1/2 "
            >
              <div className="-translate-y-6 grow-0">
                <img src={item.url} alt="" />
              </div>
              <h4 className="font-bold text-2xl text-center grow-0">
                {item.titile}
              </h4>
              <p className="font-semibold text-center grow">{item.content}</p>
              <div className="self-center grow-0">
                <img src={item.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-linear-green py-2 px-5 rounded-full text-white uppercase font-bold mx-auto sm:mx-0"
          onClick={() => {
            prompt("Vui lòng nhập số điện thoại !!!!")
          }}
        >
          Đăng kí tư vấn
        </button>
      </div>
    </section>
  )
}
