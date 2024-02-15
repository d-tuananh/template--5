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
];
export const Section9 = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center gap-10">
        <h2 className="mx-auto text-center text-4xl font-bold 2xl:w-1/2">
          Lợi ích khi sử dụng dịch vụ Tầm soát ung thư tuyến giáp
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="before:content('') relative flex flex-col gap-4 rounded-2xl border border-solid px-6
              pb-5 shadow-custom before:absolute before:bottom-0 before:left-1/2 before:h-3 before:w-1/3 before:-translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-dd-400 "
            >
              <div className="grow-0 -translate-y-6 self-center">
                <img src={item.url} alt="" />
              </div>
              <h4 className="grow-0 text-center text-2xl font-bold">
                {item.titile}
              </h4>
              <p className="grow text-center font-semibold">{item.content}</p>
              <div className="grow-0 self-center">
                <img src={item.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
        <button
          className="mx-auto rounded-full bg-linear-green px-5 py-2 font-bold uppercase text-white hover:opacity-75 sm:mx-0"
          onClick={() => {
            prompt("Vui lòng nhập số điện thoại !!!!");
          }}
        >
          Đăng kí tư vấn
        </button>
      </div>
    </section>
  );
};
