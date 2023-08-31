# project-pet-shop

## TÊN THƯ MỤC
- **Tên tiêu đề:** Tài liệu Database
- **Tác giả:** HOÀNG TRỌNG TẤN
- **Vai trò:** Scrum master
- **Ngày:** 30/08/2023
- **Tên tệp:** 5._MOP_Database.docx
- **Đường dẫn:**
- **Kết nối:**

## LỊCH SỬ THAY ĐỔI
Phiên bản | Người thay đổi | Ngày | Miêu tả
--- | --- | --- | ---
1.0 | Hoàng Trọng Tấn | 30/08/2023 | Tạo tài liệu

## Phê duyệt tài liệu
Cẩn có các chữ ký để phê duyệt tài liệu này
- Cố vấn dự án: Phan Long
- Project Manager: Phan Long
- Scrum Master: Hoàng Trọng Tấn
- Thành viên nhóm: 
    - Đặng Văn Sơn
    - Lê Thanh Hiếu
    - Đặng Văn Phố
    - Hà Công Tuấn

## MỤC LỤC
1. **Tổng quan** 
   1.1. Giới thiệu
   1.2. Mục địch
   1.3. Tài liệu liên quan
2. **Giới thiệu về MongoDB**
   2.1. MongoDB là gì ?
   2.2. Lịch sử phát triển MongoDB
   2.3. Tại sao phải dùng MongoDB.
   2.4. Bạn có thể sử dụng MongoDB ở đâu?
3. **Database**
   3.1. Kiến trúc cơ sở dữ liệu
   3.2. Đặc tả cơ sở dữ liệu

 
 
# Tổng quan

## 1.1. Giới thiệu
Thiết kế cơ sở dữ liệu này cung cấp cơ sở cho việc thiết kế cơ sở dữ liệu cho web PetShop. Nó định nghĩa cơ sở dữ liệu sẽ hỗ trợ mô hình dữ liệu web. Nó mô tả cả định nghĩa logic và vật lý, các vấn đề phi chức năng, các giao diện cơ sở dữ liệu. Các khía cạnh lưu trữ được xác định trong phần thiết kế cơ sở dữ liệu vật lý. Các chủ đề sau đây được đề cập trong tài liệu này:

- Giả định và quyết định về thiết kế cơ sở dữ liệu
- Lập bản đồ thực thể
- Định nghĩa bảng, cột
- Định nghĩa chính, duy nhất
- Các quy tắc xác nhận giá trị của cột và hàng (các ràng buộc kiểm tra)
- Các quy tắc cho việc điền các cột cụ thể (các trình tự, dẫn xuất, renormalized (các cột)
- Các giao diện và phụ thuộc với các thành phần khác
- Mô tả truy cập dữ liệu

## 1.2. Mục đích
Thiết kế cơ sở dữ liệu cho web PetShop bao gồm các định nghĩa cho các đối tượng cơ sở dữ liệu thu được bằng cách dựa vào thực thể đưa vào các bảng, các thuộc tính cho các cột, các định danh duy nhất cho các khóa duy nhất và các mối quan hệ với các khoá ngoại.

## 1.3. Tài liệu liên quan
Tài liệu yêu cầu dự án web PetShop…

# Giới thiệu về MongoDB

## 2.1. MongoDB là gì?
MongoDB là một chương trình cơ sở dữ liệu mã nguồn mở được thiết kế theo kiểu hướng đối tượng trong đó các bảng được cấu trúc một cách linh hoạt cho phép các dữ liệu lưu trên bảng không cần phải tuân theo một dạng cấu trúc nhất định nào. Chính do cấu trúc linh hoạt này nên MongoDB có thể được dùng để lưu trữ các dữ liệu có cấu trúc phức tạp và đa dạng và không cố định (hay còn gọi là Big Data).

## 2.2. Lịch sử phát triển MongoDB
- MongoDB được tạo bởi Dwight Merriman và Eliot Horowitz – những người đã gặp các vấn đề về phát triển và khả năng mở rộng với cách tiếp cận cơ sở dữ liệu quan hệ truyền thống trong khi xây dựng các ứng dụng trong thiết kế web tại DoubleClick (một công ty quảng cáo trực tuyến hiện thuộc sở hữu của Google Inc.) – để hỗ trợ một lượng lớn dữ liệu.
- Merriman và Horowitz đã giúp thành lập 10Gen Inc. vào năm 2007 để thương mại hóa MongoDB và các phần mềm liên quan. Công ty đã được đổi tên thành MongoDB Inc. vào năm 2013 và ra mắt vào tháng 10 năm 2017 với ký hiệu MDB.
- DBMS được phát hành dưới dạng phần mềm nguồn mở vào năm 2009 và có các điều khoản của Phiên bản 3.0 của Giấy phép GNU, bên cạnh các giấy phép thương mại được cung cấp bởi MongoDB Inc.

## 2.3. Tại sao phải dùng MongoDB?
Công nghệ này đã vượt qua một trong những yếu điểm lớn nhất của các hệ thống cơ sở dữ liệu truyền thống đó là khả năng mở rộng. Với nhu cầu ngày càng phát triển của các doanh nghiệp, hệ thống cơ sở dữ liệu của họ cũng cần được nâng cấp. MongoDb có khả năng mở rộng đặc biệt giúp dễ dàng trong việc lấy dữ liệu và cung cấp sự tích hợp một cách liên tục và tự động. Sau đây là các lý do tại sao chúng ta cần MongoDb:
- Không có downtime trong khi ứng dụng đang được mở rộng.
- Thực hiện trong memory processing
- Tìm kiếm văn bản
- Xử lý đồ thị
- Sao chép toàn cầu
- MongoDb có tính kinh tế
- Hơn nữa, các doanh nghiệp ngày càng nhận thấy rằng MongoDB đáp ứng được hầu hết các yêu cầu kinh doanh của họ, cụ thể như sau:
- MongoDB cung cấp sự kết hợp hiệu quả giữa công nghệ và dữ liệu nhằm tăng lợi thế cạnh tranh.
- Nó phù hợp nhất cho các ứng dụng quan trọng vì nó làm giảm đáng kể các rủi ro có thể xảy ra.
- Nó ngày càng gia tăng giá trị theo thời gian và làm giảm tổng chi phí sở hữu. Cơ sở dữ liệu quan hệ.
- Nó xây dựng các ứng dụng mà các cơ sở dữ liệu quan hệ truyền thống không thể thực hiện được.

## 2.4. Bạn có thể sử dụng MongoDB ở đâu?
Cơ sở dữ liệu NoSQL MongoDB có thể được sử dụng rộng rãi cho các ứng dụng Big Data và Hadoop, làm việc với số lượng dữ liệu NoSQL khổng lồ - phần chính của Big Data.
MongoDB có thể được triển khai thành công cho các phương tiện truyền thông xã hội và các ứng dụng di động trong việc phân tích tất cả các dữ liệu trực tuyến có định dạng không có cấu trúc.
MongoDB NoSQL database cũng được áp dụng trong việc quản lý và phân phối nội dung, quản lý dữ liệu người dùng và hoạt động độc quyền trong các data hub.

# 3. Database
## 3.1. Kiến trúc cơ sở dữ liệu

 
# Đặc tả cơ sở dữ liệu

## Bảng: Khách hàng (KH SÀI)

| Tên cột     | Kiểu dữ liệu | Mô tả             |
|-------------|--------------|-------------------|
| _id         | ObjectId     | id                |
| FisrtName   | String       | Họ                |
| LastName    | String       | Tên               |
| Email       | String       | Địa chỉ gmail     |
| Phone       | String       | Số điện thoại     |
| Address     | String       | Địa chỉ           |

## Bảng: Thú cưng

| Tên cột     | Kiểu dữ liệu | Mô tả                  |
|-------------|--------------|------------------------|
| ID          | ObjectId     | Id                     |
| Name        | String       | Họ và tên              |
| Species     | String       | Loại thú cưng          |
| Breed       | String       | Tên gọi thông dụng     |
| Age         | Number       | Tuổi                   |
| Gender      | String       | Giống loài             |
| CustomerID  | ObjectId     | Id khách hàng (references Khách Hàng) |
 

# Bảng: Dịch Vụ

| Tên cột     | Kiểu dữ liệu | Mô tả       |
|-------------|--------------|-------------|
| ID          | ObjectId     | id          |
| ServiceName | String       | Tên dịch vụ |
| Description | String       | Mô tả       |
| Price       | Double       | Giá         |

# Bảng: Đặt Lịch

| Tên cột      | Kiểu dữ liệu                    | Mô tả                |
|--------------|---------------------------------|----------------------|
| ID           | ObjectId                        | id                   |
| CustomerID   | ObjectId (references Khách hàng) | ID khách hàng        |
| ServiceID    | ObjectId (references Dịch vụ)   | Id dịch vụ           |
| PetID        | ObjectId (references Thú cưng)  | Id thú cưng          |
| AppointmentDate | Date                         | Ngày hẹn             |
| Status       | String                          | Trạng thái           |

# Bảng: Thanh toán

| Tên cột       | Kiểu dữ liệu                   | Mô tả             |
|---------------|--------------------------------|-------------------|
| ID            | ObjectId                       | id                |
| AppointmentID | ObjectId (references Khách hàng) | Id                |
| PaymentAmount | Double                         | Số tiền thanh toán |
| PaymentDate   | Date                           | Ngày thanh toán   |

# Bảng: Sản Phẩm

| Tên cột        | Kiểu dữ liệu                    | Mô tả          |
|----------------|---------------------------------|----------------|
| ID             | ObjectId                        | ID Hoá Đơn     |
| ProductName    | ObjectId (references Customers) | Tên Sản Phẩm   |
| Description    | Double                          | Mô Tả          |
| Category       | DateTime                        | Loại           |
| Price          | Double                          | Giá Tiền       |
| StockQuantity  | Int                             | Số Lượng       |
| Supplier       | String                          | Nhà cung cấp   |


# Bảng: Hoá Đơn

| Tên cột          | Kiểu dữ liệu                  | Mô tả              |
|------------------|-------------------------------|--------------------|
| ID               | ObjectId                      | ID Hoá Đơn         |
| CustomerID       | ObjectId (references Customers)| ID Khách Hàng      |
| InvoiceItems     | ProductID: ObjectId(ref Products), Quantity: int, UnitPrice: Double | Mặt hàng hoá đơn, Số lượng, Đơn giá |
|                  | ServiceItems: "ServiceID": ObjectId (references Services), Quantity: int, UnitPrice: double | Dịch vụ hoá đơn, Số lượng, Đơn giá |
| TotalProductAmount | double                       | Tổng tiền sản phẩm |
| TotalServiceAmount | double                       | Tổng Tiền Dịch Vụ |
| TotalAmount      | Double                        | Tổng Tiền Cả Hai  |
| Payment Method   | string                        | Phương thức thanh toán |
| InvoiceDate      | dateTime                      | Ngày Hoá Đơn       |

# Bảng: USER

| Tên cột       | Kiểu dữ liệu  | Mô tả       |
|---------------|---------------|-------------|
| ID            | ObjectID      | Id          |
| NAME          | string        | Họ và tên  |
| CHUCVU        | string        | Chức vụ     |
| PHONE NUMBER           | number        | Số điện thoại |
| ROLE      | number        | Quyền hạn   |
| BIRTHDAY      | string        | Ngày sinh   |
| LOCATION        | string        | Địa chỉ     |
| HONETOWN      | string        | Quê quán    |
| EMAIL         | string        | Email       |
| USERNAME   | string        | Tên đăng nhập |
| PASSWORD       | string        | Mật khẩu    |

# Bảng: Role

| Tên cột       | Kiểu dữ liệu  | Mô tả       |
|---------------|---------------|-------------|
| ID            | ObjectID      | Id  Role    |
| Name Role     | string        | Tên role    |



# Bảng: Lịch Làm Việc

| Tên cột      | Kiểu dữ liệu                | Mô tả             |
|--------------|-----------------------------|-------------------|
| ID           | ObjectID                    | id                |
| EmployeeID   | ObjectID (ref Employess)    | Id Nhân viên      |
| DayofWeek    | String                      | Số Ngày Làm       |
| StartTime    | time                        | Giờ bắt đầu làm   |
| EndTime      | time                        | Giờ tan làm       |

# Bảng: Kho

| Tên cột          | Kiểu dữ liệu  | Mô tả                    |
|------------------|---------------|--------------------------|
| ID               | ObjectID      | id                       |
| ItemName         | String        | Tên mặt hàng             |
| Description      | String        | Mô tả                    |
| Quantity         | int           | Số Lượng                 |
| UnitPrice        | double        | Giá Tiền                 |
| Supplier         | string        | Nhà cung cấp             |
| ReorderThreshold | Int           | Ngưỡng tái đặt hàng      |
| LastRestocked    | dataTime      | Thời điểm nhập hàng gần nhất |
| RestockedBy      | ObjectID (ref Employees) | Nhân viên nhập hàng    |
| CheckedBy        | ObjectID (ref Employees) | Nhân viên kiểm tra     |

# Bảng: Đánh Giá Từ Người Dùng

| Tên cột      | Kiểu dữ liệu                    | Mô tả           |
|--------------|---------------------------------|-----------------|
| ID           | ObjectID                        | id              |
| CustomerID   | ObjectId (references Customers) | ID Khách Hàng   |
| Rating       | int                             | Số Sao          |
| Comment      | string                          | Đánh Giá        |
| ReviewDate   | datetime                        | Ngày gửi đánh giá |

# Bảng: Khuyến mãi

| Tên cột            | Kiểu dữ liệu  | Mô tả                    |
|--------------------|---------------|--------------------------|
| ID                 | ObjectID      | id                       |
| PromotionName      | string        | Tên khuyến mãi           |
| Description        | string        | Mô tả                    |
| DiscountPercentage | double        | Phần trăm khuyến mãi     |
| StartDate          | datetime      | Ngày bắt đầu             |
| EndDate            | datetime      | Ngày Kết Thúc            |

# Bảng: Sự Kiện ( KH SÀI )

| Tên cột      | Kiểu dữ liệu  | Mô tả            |
|--------------|---------------|------------------|
| ID           | ObjectID      | id               |
| EventName    | string        | Tên Sự Kiện      |
| Description  | string        | Mô tả            |
| EventDate    | double        | Ngày Diễn Ra     |
| Location     | string        | Địa Điểm         |





