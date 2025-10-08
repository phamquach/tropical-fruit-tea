import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class Card {
    @Input('card-data') data: ICard = {
        id: 0, src: "https://dodoto.vn/wp-content/uploads/2024/01/cach-lam-sinh-to-dau-dodoto.vn_.jpg",
        alt: "nothing",
        category: 'smoothie',
        description: "Ly Sinh Tố Dâu không chỉ là thức uống giải nhiệt tuyệt vời mà còn là một kho tàng dưỡng chất cho sức khỏe toàn diện. Công dụng hàng đầu là khả năng tăng cường hệ miễn dịch mạnh mẽ nhờ hàm lượng Vitamin C dồi dào, giúp cơ thể chống lại bệnh tật và phục hồi năng lượng nhanh chóng. Đồng thời, với lượng lớn chất chống oxy hóa, sinh tố dâu trở thành bí quyết làm đẹp tự nhiên, giúp chống lão hóa, mang lại làn da tươi trẻ và sáng mịn từ bên trong. Không dừng lại ở đó, chất xơ tự nhiên trong dâu còn hỗ trợ tiêu hóa khỏe mạnh và tạo cảm giác no lâu, lý tưởng cho những ai đang muốn kiểm soát cân nặng và duy trì vóc dáng thon gọn. Tóm lại, mỗi ngụm sinh tố dâu là một sự đầu tư đơn giản và thơm ngon cho sức khỏe, sắc đẹp và sự sảng khoái của bạn mỗi ngày.",
        name: "Dâu"
    }
}