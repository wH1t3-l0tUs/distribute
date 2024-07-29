
Component-Based Architecture: React sử dụng các thành phần (components) để xây dựng giao diện người dùng. Mỗi thành phần có thể được xem như một khối xây dựng giao diện và có thể được tái sử dụng trong toàn bộ ứng dụng.

Pure-Component: Giống như 1 component bình thường nhưng nó sẽ kiểm tra sự thay đổi của các thuộc tính trong prop với toán tử === nếu có ít nhất 1 sự thay đổi thì mới rerender lại giao diện, tránh trường hợp rerender liên tục gây ảnh hưởng đến 
trải nghiệm người dùng, có tác dụng giống như hook useMemo ở function Component.

JSX (JavaScript XML): JSX là một cú pháp mở rộng của JavaScript cho phép bạn viết HTML trong JavaScript. JSX giúp dễ dàng tạo và quản lý các thành phần giao diện.

Virtual DOM: React sử dụng Virtual DOM để cải thiện hiệu suất. Khi trạng thái của một thành phần thay đổi, React sẽ so sánh Virtual DOM với DOM thực tế và chỉ cập nhật các phần thay đổi, giúp giảm bớt số lần tái tạo lại toàn bộ DOM.

State and Props:

State: Là dữ liệu nội bộ của một thành phần, có thể thay đổi theo thời gian và ảnh hưởng đến giao diện của thành phần.
Props: Là các thuộc tính được truyền từ cha sang con trong cấu trúc cây thành phần. Props giúp truyền dữ liệu và các phương thức giữa các thành phần.
Lifecycle Methods: React cung cấp các phương thức vòng đời (lifecycle methods) cho phép bạn thực hiện các hành động ở các giai đoạn khác nhau của vòng đời của một thành phần, như khi thành phần được tạo ra, cập nhật, hoặc bị xóa.

Hooks: Từ React 16.8 trở đi, các hooks được giới thiệu để quản lý trạng thái và các hiệu ứng bên ngoài trong các thành phần hàm (functional components). Các hook phổ biến bao gồm useState, useEffect, useContext, và useReducer, useMemo, useRef.

React Router: Là một thư viện bổ trợ giúp quản lý điều hướng trong ứng dụng React, cho phép tạo các tuyến đường và điều hướng giữa các trang hoặc các thành phần khác nhau.

Redux: Redux là một thư viện quản lý trạng thái cho các ứng dụng React, giúp quản lý và đồng bộ hóa trạng thái toàn cục của ứng dụng.

Context API: Context API cho phép chia sẻ dữ liệu giữa các thành phần mà không cần truyền props qua từng cấp của cây thành phần.

Sự khác nhau giữa function component và class component :
--- Function compoennt: Sử dụng được các hook có sẵn hoặc hook tự tạo để quản lí trạng thái và các sự thay đổi trong quá trình thực thi truyền và nhận parameter thông qua prop giữa các component khác nhau, cú pháp đơn giản hơn và được sử dụng nhiều
hơn ở các phiên bản mới. Sử dụng hook để quản lí LifeCycle.
--- Class component : Quản lí state và prop ngay trong chính định nghĩa, có thể kế thừa các thuộc tính của các class khác hoặc được các class khác kế thừa, có các phương thức sẵn để quản lí Lifecycle như componentDidMount, componentDidUpdate, và
componentWillUnmount.
