export const Section2 = () => {
  return (
    <section className="relative">
      <div className="absolute bottom-0 h-full right-0 translate-y-1/4 hidden xl:block">
        <img src="src/images/png/img6.png" alt="" />
      </div>
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-4xl font-bold text-center lg:text-start">
            Gói Tầm soát ung thư tuyến giáp là gì?
          </h2>
          <p>
            Tầm soát ung thư tuyến giáp là phương pháp y học hiện đại giúp phát
            hiện sớm các tổn thương tiền ung thư. Đây được đánh giá là chìa khóa
            để đưa ra phương pháp điều trị sớm nhất, nâng cao hiệu quả phục hồi,
            hạn chế các diễn biến xấu dẫn tới tử vong.
          </p>
          <p>
            Hiện nay xét nghiệm tầm soát ung thư tuyến giáp được nhiều người
            quan tâm. Thống kê cho thấy căn bệnh chỉ chiếm từ 1 - 2% trong toàn
            bộ các loại ung thư, tuy nhiên nó lại chiếm tới 90% ung thư các
            tuyến nội tiết. Đặc biệt, bệnh đứng hàng thứ 9 trong số các ung thư
            xảy ra ở nữ giới.{" "}
          </p>
          <p>
            Điều đáng lo ngại hiện nay là bệnh ung thư tuyến giáp vẫn thường bị
            bỏ sót. Thậm chí có từ 20 - 60% tổng số bệnh nhân không biết mình
            mắc bệnh cho tới khi diễn biến xấu ở giai đoạn cuối. Điều này là cực
            kỳ đáng lo ngại bởi nghiên cứu đã chỉ ra rằng bệnh ung thư tuyến
            giáp có tỷ lệ chữa khỏi đạt tới 90% nếu như được khám và phát hiện
            sớm.
          </p>
          <a
            href="tel:0123456789"
            className="bg-linear-green rounded-full py-3 px-5 flex gap-1 justify-center items-center text-white hover:opacity-70 w-fit mx-auto lg:mx-0"
          >
            <img src="src/images/svg/call_white.svg" alt="" />
            GỌI CHO CHÚNG TÔI
          </a>
        </div>
        <div>
          <div className="relative w-fit mx-auto">
            <div>
              <img src="src/images/png/img4.png" alt="" />
            </div>
            <div className="absolute bottom-0 inset-x-0 -translate-x-16">
              <img src="src/images/png/img3.png" className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
