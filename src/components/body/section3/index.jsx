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
        <img src="img7.png" alt="" />
      </div>
      <div className="container xl:mt-[10rem] grid grid-cols-1 xl:grid-cols-3 gap-10 place-items-center">
        <div className="relative order-last xl:-order-last ">
          <div className="absolute bottom-0 right-0 top-0 overflow-hidden rounded-3xl -z-[1]">
            <img src="img8.png" alt="" />
          </div>
          <div className="">
            <img src="img9.png" alt="" />
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_14055)">
                    <path
                      d="M10.9937 2.74265C6.19841 -1.45156 0.10122 2.23359 0.00123982 7.2294C-0.0242387 8.5026 0.343288 9.7428 1.07486 10.8862H5.8167L6.66012 9.48041C6.90502 9.07228 7.49768 9.05913 7.75647 9.46601L9.53597 12.2623L12.1299 6.78634C12.3561 6.30852 13.0303 6.29336 13.2798 6.7567L15.5034 10.8862H20.9126C24.9197 4.6235 17.0004 -2.51096 10.9937 2.74265Z"
                      fill="white"
                    />
                    <path
                      d="M14.5508 11.8359L12.749 8.48975L10.2011 13.8686C9.98437 14.3262 9.34681 14.366 9.07497 13.9387L7.22874 11.0376L6.73408 11.862C6.6176 12.0561 6.40784 12.1749 6.18146 12.1749H2.09424C2.22236 12.3089 1.53951 11.6275 10.539 20.5804C10.7904 20.8305 11.1967 20.8305 11.4481 20.5804C20.3091 11.7652 19.765 12.3087 19.8929 12.1749H15.1183C14.8811 12.1749 14.6632 12.0447 14.5508 11.8359Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_14055">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
