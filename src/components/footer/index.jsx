export const Footer = () => {
  return (
    <div className="container py-7 flex flex-col gap-5">
      <div className="cursor-pointer">
        <img src="src/images/png/logo_white.png" alt="" />
      </div>
      <div className="xl:flex xl:justify-between grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-xl">BỆNH VIỆN ĐA KHOA PHƯƠNG ĐÔNG</h4>
          <p>Địa chỉ: Số 9, Phố Viên, P. Cổ Nhuế 2, Q. Bắc Từ Liêm, HN</p>
          <p>
            Email:{" "}
            <a href="mailto:bvphuongdong@phuongdonghospital.vn">
              bvphuongdong@phuongdonghospital.vn
            </a>
          </p>
          <p>
            Hotline: <a href="tel:1900 1806">1900 1806</a>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-xl">Thời gian mở cửa</h4>
          <p>
            <span className="font-bold mr-4">Thứ 2 - Chủ nhật :</span> 07:30
            -19:00
          </p>
          <p>
            <span className="font-bold mr-4">Cấp cứu 24/7: </span>{" "}
            <a href="tel:0833 015 115">0833 015 115</a>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-xl">Liên hệ</h4>
          <p>
            <span className="font-bold mr-4">Hotline Tiêm chủng: </span>{" "}
            <a href="tel:0911 615 115">0911 615 115</a>
          </p>
          <p>
            <span className="font-bold mr-4">Hotline Khoa sản : </span>
            <a href="tel:0911 615 115">0911 615 115</a>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-xl">Mạng xã hội</h4>
          <div className="flex gap-3">
            <div className="">
              <img src="src/images/svg/fb.svg" alt="" />
            </div>
            <div className="">
              <img src="src/images/svg/twiiter.svg" alt="" />
            </div>
            <div className="">
              <img src="src/images/svg/ytb.svg" alt="" />
            </div>
            <div className="">
              <img src="src/images/svg/insta.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.1rem] bg-white"></div>
      <div className="text-center text-white">
        <span>
          © Copyright 2022 Bệnh Viện Đa khoa Phương Đông. All Rights Reserved.
          Designed and developed by Tech5S
        </span>
      </div>
    </div>
  )
}
