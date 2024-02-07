const data = [
  {
    url: "icon1.svg",
    title: "Ho kéo dài mãi",
    content:
      "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    url: "icon2.svg",
    title: "Cơ thể mệt mỏi",
    content:
      "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    url: "icon3.svg",
    title: "Thay đổi giọng nói",
    content:
      "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    url: "icon4.svg",
    title: "Các tuyến ở cổ bị sưng",
    content:
      "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    url: "icon5.svg",
    title: "Khó thở, khó nuốt",
    content:
      "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    url: "icon6.svg",
    title: "Cổ đau phía trước",
    content:
      "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
]

export const Section4 = () => {
  return (
    <section className="xl:mt-[10rem]">
      <div className="container">
        <h3 className="mb-5 font-bold text-4xl text-center">
          Dấu hiệu nhận biết Ung thư tuyến giáp
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[3rem] xl:gap-x-[10rem] gap-y-[3rem]">
          {data.map((item, index) => (
            <div
              className="p-10 shadow-custom rounded-xl flex flex-col gap-4 justify-center items-center text-center"
              key={index}
            >
              <div className="p-2 bg-[#FFF2FD] w-fit rounded-lg">
                <img src={item.url} alt="" />
              </div>
              <h5 className="font-bold ">{item.title}</h5>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
