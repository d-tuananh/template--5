export const Section6 = () => {
  return (
    <section className="relative xl:mt-[10rem]">
      <div className="absolute bottom-0 h-full right-0 translate-y-1/4 hidden xl:block">
        <img src="img6.png" alt="" />
      </div>
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5 justify-center">
          <h4 className="text-4xl text-center lg:text-start">
            Lưu ý khi sử dụng dịch vụ
          </h4>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-4 bg-[#FFF2FD] p-2 rounded-2xl"
              >
                <div>
                  <img src="img15.png" alt="" />
                </div>
                <p>
                  Với những trường hợp nghi ngờ ung thư tuyến giáp, bác sĩ có
                  thể chỉ định người bệnh thực hiện thêm các xét nghiệm như chọc
                  hút tế bào tuyến giáp.{" "}
                </p>
              </div>
            ))}
          <button
            className="font-bold uppercase bg-linear-green py-3 px-5 rounded-full w-fit self-center lg:self-auto text-white"
            onClick={() => prompt("Vui lòng nhập số điện thoại !")}
          >
            Đăng kí tư vấn
          </button>
        </div>
        <div>
          <div className="relative w-fit mx-auto">
            <div>
              <img src="img4.png" alt="" />
            </div>
            <div className="absolute bottom-0 inset-x-0 -translate-x-16">
              <img src="img3.png" className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
