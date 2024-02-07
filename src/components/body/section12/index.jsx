export const Section12 = () => {
  return (
    <section>
      <div className="container flex flex-col xl:flex-row gap-10 items-center">
        <div className=" min-w-fit">
          <img src="img31.png" alt="" />
        </div>
        <div className="shadow-custom w-full rounded-2xl overflow-hidden">
          <div className="bg-dd-400 text-white w-full text-center py-4">
            <h4 className="text-xl">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h4>
            <p className="text-sm">
              Đặt hẹn ngay để nhận tư vấn và chúng tôi sẽ xếp lịch khám kịp
              thời!
            </p>
          </div>
          <form action="" className="flex flex-col p-4 gap-2">
            <input
              className="outline-none bg-slate-100 py-2 px-4 rounded-lg"
              type="text"
              required
              placeholder="Họ và tên (*)"
            />
            <input
              className="outline-none bg-slate-100 py-2 px-4 rounded-lg"
              type="tel"
              required
              placeholder="Số điện thoại (*)"
              pattern="[0-9]{10,12}"
              title="Số điện thoại từ 10 đến 12 chữ số"
            />
            <input
              className="outline-none bg-slate-100 py-2 px-4 rounded-lg"
              type="email"
              placeholder="E-mail"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Vui lòng nhập một địa chỉ email hợp lệ dạng : user@example.com"
            />
            <textarea
              className="outline-none bg-slate-100 py-2 px-4 rounded-lg"
              rows="2"
              placeholder="Nội dung..."
            ></textarea>
            <button className="flex bg-linear-green w-fit py-2 px-5 rounded-full text-white gap-2 my-3 mx-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_14809)">
                  <path
                    d="M12.25 2H11.15C10.82 0.85 9.76 0 8.5 0C7.24 0 6.18 0.85 5.85 2H4.75C4.34 2 4 2.34 4 2.75V4.25C4 5.21 4.79 6 5.75 6H11.25C12.21 6 13 5.21 13 4.25V2.75C13 2.34 12.66 2 12.25 2Z"
                    fill="white"
                  />
                  <path
                    d="M14.25 3H14V4.25C14 5.77 12.77 7 11.25 7H5.75C4.23 7 3 5.77 3 4.25V3H2.75C1.23 3 0 4.23 0 5.75V18.25C0 19.77 1.23 21 2.75 21H10.13L10.35 19.77C10.45 19.21 10.71 18.71 11.11 18.3L11.91 17.5H3.75C3.34 17.5 3 17.16 3 16.75C3 16.34 3.34 16 3.75 16H13.25C13.3 16 13.34 16 13.39 16.02H13.4L17 12.42V5.75C17 4.23 15.77 3 14.25 3ZM13.25 14.25H3.75C3.34 14.25 3 13.91 3 13.5C3 13.09 3.34 12.75 3.75 12.75H13.25C13.66 12.75 14 13.09 14 13.5C14 13.91 13.66 14.25 13.25 14.25ZM13.25 11H3.75C3.34 11 3 10.66 3 10.25C3 9.84 3.34 9.5 3.75 9.5H13.25C13.66 9.5 14 9.84 14 10.25C14 10.66 13.66 11 13.25 11Z"
                    fill="white"
                  />
                  <path
                    d="M12.527 23.9999C12.33 23.9999 12.138 23.9219 11.997 23.7799C11.824 23.6069 11.746 23.3609 11.789 23.1189L12.319 20.1139C12.345 19.9629 12.419 19.8229 12.527 19.7139L19.952 12.2899C20.864 11.3759 21.76 11.6229 22.25 12.1129L23.487 13.3499C24.17 14.0319 24.17 15.1419 23.487 15.8249L16.062 23.2499C15.954 23.3589 15.814 23.4319 15.662 23.4579L12.657 23.9879C12.614 23.9959 12.57 23.9999 12.527 23.9999ZM15.532 22.7199H15.542H15.532Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_14809">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Đăng kí tư vấn
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
