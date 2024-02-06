export const Section8 = () => {
  return (
    <section className="bg-[url('src/images/png/img16.png')]">
      <div className="container text-white py-[4rem]">
        <h2 className="text-center mb-12 text-4xl font-bold xl:w-1/2 mx-auto">
          Lợi ích khi sử dụng dịch vụ Tầm soát ung thư tuyến giáp
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="relative flex items-center gap-4 p-2 rounded-lg border border-solid border-white before:content('') before:w-[3rem] before:h-1 before:bg-white before:absolute before:top-0 before:left-[10%] after:content('') after:w-[3rem] after:h-1 after:bg-white after:absolute after:bottom-0 after:right-[10%]"
              >
                <div className="">
                  <img src="src/images/png/img17.png" alt="" />
                </div>
                <p>
                  Bệnh viện có khuôn viên khang trang, hiện đại và trong lành
                  với hệ thống cây xanh rộng khắp, rất lý tưởng trong việc điều
                  trị và hồi phục của người bệnh.{" "}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
