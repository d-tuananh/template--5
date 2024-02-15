export const Section1 = () => {
  return (
    <section className=" relative bg-dd-400 xl:bg-none">
      <div className="absolute bottom-0 end-0 top-0 -z-10 hidden overflow-hidden xl:block">
        <img src="img2.png" alt="" />
      </div>
      <div className="container relative pb-[2rem] pt-[5rem] xl:py-[10rem]">
        <div className="absolute inset-y-0 -start-[25rem] -z-20 hidden overflow-hidden xl:block 2xl:-start-[12rem]">
          <img src="img1.png" alt="" />
        </div>
        <div className="flex flex-col gap-5 text-white xl:w-2/5">
          <h3 className="text-center font-extrabold tracking-[0.25rem] lg:text-start">
            TẦM SOÁT UNG THƯ TUYẾN GIÁP
          </h3>
          <div className="text-center text-4xl font-bold md:text-6xl lg:text-start">
            <span>Phát hiện sớm ung thư giúp điều trị dễ dàng</span>
          </div>
          <p>
            Tầm soát ung thư tuyến giáp là phương pháp y học hiện đại giúp phát
            hiện sớm các tổn thương tiền ung thư. Đây được đánh giá là chìa khóa
            để đưa ra phương pháp điều trị sớm và hiệu quả nhất.
          </p>
          <p>
            Quý khách vui lòng để lại số điện thoại, chúng tôi sẽ liên hệ lại
            ngay!
          </p>
          <form className="flex items-center justify-between rounded-full bg-white py-2 pl-4 pr-2">
            <input
              type="tel"
              className="w-full p-1 text-main outline-none"
              required
              placeholder="Nhập số điện thoại ...."
              pattern="[0-9]{10,12}"
              title="Số điện thoại từ 10 đến 12 chữ số"
            />
            <button className="flex min-w-fit items-center justify-center gap-2 rounded-full bg-linear-green p-2 hover:opacity-80">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 17.6123V22.2503C8.75 22.5743 8.958 22.8613 9.266 22.9633C9.343 22.9883 9.422 23.0003 9.5 23.0003C9.734 23.0003 9.96 22.8903 10.104 22.6943L12.817 19.0023L8.75 17.6123Z"
                  fill="white"
                />
                <path
                  d="M23.685 0.139089C23.455 -0.0239114 23.153 -0.0459114 22.903 0.0850886L0.403045 11.8351C0.137044 11.9741 -0.0199555 12.2581 0.00204448 12.5571C0.0250445 12.8571 0.224045 13.1131 0.507045 13.2101L6.76205 15.3481L20.083 3.95809L9.77505 16.3771L20.258 19.9601C20.336 19.9861 20.418 20.0001 20.5 20.0001C20.636 20.0001 20.771 19.9631 20.89 19.8911C21.08 19.7751 21.209 19.5801 21.242 19.3611L23.992 0.861089C24.033 0.581089 23.915 0.303089 23.685 0.139089Z"
                  fill="white"
                />
              </svg>
              GỬI THÔNG TIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
