import React from "react";
import { NavLink } from "react-router-dom";
import "./blog.css"

function blog() {
  return (
      <div>
    <h3 className="h3">  Xu hướng thời trang 2021</h3>
    <div>
   
      <div className="row">
        <div className="col s4">
          <img

            src="https://toplist.vn/images/800px/cua-hang-vascara-quang-binh-318946.jpg"
                      className="img"
            alt=""
          />
          <p className="p">Fashion 2021 Collection</p>
          <p>
            Vascara là thương hiệu thời trang túi xách đã quá nổi tiếng ở Việt
            Nam về các sản phẩm túi xách, giày dép, ví. Hệ thống lên tới 106 cửa
            hàng. Đến với Vascara Quảng Bình, bạn sẽ có cơ hội được chiêm ngưỡng
            không gian cửa hàng rộng rãi, đẹp mắt và hết sức sang trọng. Tất cả
            sản phẩm đều được đặt sẵn trên kệ theo từng dòng, từng loại, nhờ vậy
            khách hàng không mất nhiều thời gian để lựa chọn. Vascara luôn mang
            đến những mẫu túi xách với thiết kế tinh tế, sang trọng, thể hiện
            đẳng cấp của người sử dụng. Những mẫu túi xách ở đây thường xuyên
            cập nhật để bắt kịp với xu hướng mới nhất của thời trang quốc tế.
            Đây thực sự là điểm đến lý tưởng cho những nàng sành điệu.
          </p>
          <NavLink to={`/`} className="nl">discover more</NavLink>
        </div>

        <div className="col s4">
          <img
         

            src="https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2020/11/charles-keith-jpg-1605754611-19112020095651.jpg"
            className="img"
            alt=""
          />
          <p className="p">
            Về thương hiệu Charles & Keith Charles
          </p>
          <p className="collection-subtitle size-14 color-dim-gray mb-30px">
            Ra đời tại một trong những quốc gia phát triển và tiên tiến ở khu
            vực Châu Á, Charles & Keith chịu ảnh hưởng của các phong cách Tây
            Âu, tối giản và đề cao tính cá biệt. Đồng thời là sự hoà hợp và rung
            cảm với thị hiếu cổ điển của văn hoá Phương Đông thế kỷ XX. Thời
            trang Charles & Keith là những nhịp điệu trẻ trung, phóng khoáng của
            phong cách trẻ mang màu sắc đường phố và thành thị. Những sáng tạo
            trong những chiếc túi xách Charles & Keith mang dấu ấn của phong
            cách chiết trung, là sự "dân chủ hoá" và "đại chúng" trong thời
            trang.
          </p>
          <NavLink to={`/`} className="nl">discover more</NavLink>
        </div>

        <div className="col s4">
          <img
         
            src="https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2021/03/shutterstock_634311932-696x464-jpg-1616655982-25032021140622-jpg-1616657711-25032021143511.jpg"
            alt=""
            className="img"
          />
          <p className="p">Đôi nét về thương hiệu Gucci</p>
          <p>
            Được sáng lập bởi Guccio Gucci (1881-1953) tại Florence (Ý), Gucci
            được xem là một trong những thương hiệu thời trang nổi tiếng và được
            yêu thích trên khắp thế giới. Bí quyết thành công của Gucci chính là
            nét hài hòa qua sự kết hợp của các sản phẩm. Bằng nghệ thuật xử lý
            da điêu luyện cùng tính đồng bộ trong sáng tạo sản phẩm, Gucci đã
            chinh phục được các khách hàng khó tính nhất. Danh tiếng lẫy lừng
            của “đế chế” này có thể ví như đã bao trùm làng thời trang quốc tế
            và ngày càng trở nên vững mạnh hơn.{" "}
          </p>
          <NavLink to={`/`} className="nl">discover more</NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}

export default blog;
