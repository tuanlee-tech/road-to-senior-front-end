### **Lời Giới Thiệu: Chinh Phục Đỉnh Cao Front-end**

Chào bạn,

Nếu bạn đang đọc những dòng này, có thể bạn đã cảm thấy quen thuộc với những framework như **React**, biết cách dùng các hook cơ bản như `useState` hay `useEffect`, nhưng vẫn còn một khoảng cách để vươn tới vị trí **Senior Front-end Engineer**. Bạn có thể đã làm một vài dự án nhỏ, nhưng khi nhìn vào các hệ thống lớn, phức tạp, bạn vẫn chưa hình dung được cách chúng hoạt động.

Khoảng cách đó không nằm ở việc bạn phải học thêm hàng chục framework mới. Khoảng cách đó nằm ở **tư duy**.

Một Senior Engineer không chỉ là người viết code. Họ là người thiết kế kiến trúc, tối ưu hiệu suất, và đưa ra các quyết định kỹ thuật quan trọng. Họ hiểu rõ ưu và nhược điểm của từng công nghệ, biết cách kết hợp chúng để xây dựng một hệ thống mạnh mẽ, dễ bảo trì và có khả năng mở rộng.

Cuốn Ebook này chính là cầu nối giúp bạn vượt qua khoảng cách đó. Thay vì học lý thuyết khô khan, chúng ta sẽ cùng nhau thực hiện một hành trình thực chiến gồm **bốn dự án liên kết chặt chẽ**. Mỗi dự án sẽ là một mảnh ghép, giúp bạn làm chủ một nhóm công nghệ cụ thể và sau đó, chúng ta sẽ kết hợp chúng lại thành một bức tranh tổng thể bằng kiến trúc **Micro Front-end**.

Hãy sẵn sàng cho một cuộc lột xác. Hành trình này sẽ thử thách bạn, nhưng khi hoàn thành, bạn sẽ có một bộ portfolio ấn tượng và một nền tảng kiến thức vững chắc để tự tin chinh phục mọi thách thức trong sự nghiệp.

---

### Chương 1: **Tổng Quan Lộ Trình Học Tập**

Trên hành trình này, chúng ta sẽ không chỉ học cách sử dụng các thư viện mà còn hiểu sâu về lý do tại sao chúng ta lại dùng chúng. Dưới đây là toàn bộ danh sách các công nghệ và kiến thức bạn sẽ làm chủ, được phân chia theo từng nhóm chủ đề.

#### **1. Kiến Thức Nền Tảng & Kiểu Kiến Trúc**

* **React & Next.js**: Nắm vững các kiến thức từ cơ bản đến nâng cao như **React Hooks** (`useState`, `useEffect`, `useRef`, `useContext`), **Context API**, và các kỹ thuật **Data Fetching** mạnh mẽ của Next.js (**SSR, SSG, ISR, API Routes**).
* **Monorepo**: Tổ chức code của nhiều dự án trong một kho lưu trữ duy nhất.
* **Micro Front-end**: Chia ứng dụng lớn thành các ứng dụng nhỏ hơn, độc lập bằng **Module Federation** để dễ dàng phát triển và bảo trì.
* **Design Patterns**:
    * **Component Composition**: Tạo ra các component linh hoạt, dễ tái sử dụng.
    * **Custom Hooks**: Đóng gói và tái sử dụng logic phức tạp.
    * **Container/Presenter**: Tách biệt logic xử lý dữ liệu và giao diện.
    * **Singleton & Provider Pattern**: Đảm bảo duy nhất một instance của một lớp và truyền dữ liệu hiệu quả.
    * **Facade & Proxy Pattern**: Cung cấp giao diện đơn giản cho hệ thống phức tạp và kiểm soát quyền truy cập.
    * **Strategy Pattern**: Định nghĩa các thuật toán khác nhau để chọn khi cần.
    * **Observer Pattern**: Xây dựng hệ thống lắng nghe sự kiện (ví dụ: với WebSocket).

#### **2. Quản Lý Trạng Thái & Dữ Liệu**

* **Redux Toolkit (RTK)**: Sử dụng cho các ứng dụng lớn và phức tạp. Bạn sẽ học cách dùng **RTK Query** để fetch, cache dữ liệu và **Redux Saga** để xử lý các side effect bất đồng bộ phức tạp.
* **Zustand**: Thư viện quản lý trạng thái nhỏ gọn, đơn giản, lý tưởng cho các phần cần quản lý state cục bộ.
* **TanStack Query**: Quản lý trạng thái server-side, xử lý caching, invalidation và đồng bộ dữ liệu.

#### **3. Giao Diện & Tối Ưu Hiệu Suất**

* **TanStack Table**: Xây dựng bảng dữ liệu phức tạp với các tính năng lọc, sắp xếp, phân trang.
* **TanStack Virtual & React Virtualized**: Tối ưu hiệu suất render khi hiển thị danh sách dữ liệu lớn (virtualization).
* **Web Worker**: Chạy các tác vụ tính toán nặng ở một luồng riêng để tránh làm lag giao diện chính.
* **PWA & Service Worker**: Biến ứng dụng thành một ứng dụng web tiến bộ, có khả năng hoạt động offline và gửi thông báo đẩy.

#### **4. Form & Bảo Mật**

* **React Hook Form** & **Zod**: Thư viện xây dựng và xác thực form hiệu quả, an toàn.
* **Authentication**: Triển khai xác thực người dùng, **SSO (Single Sign-On)** và **Social Login** (với **Next-Auth**).

#### **5. Công Nghệ Real-time & Định Tuyến**

* **WebSocket**: Thiết lập kết nối hai chiều để xây dựng các tính năng real-time như chat.
* **TanStack Router & React Router**: Xây dựng hệ thống định tuyến mạnh mẽ cho cả SPA và Next.js.
* **Axios**: HTTP Client tiêu chuẩn, để bạn so sánh với RTK Query.
Rất tốt, chúng ta sẽ bắt đầu **Chương 2** của cuốn Ebook. Đây là chương đầu tiên trong chuỗi dự án thực chiến, nơi bạn sẽ làm quen với một hệ sinh thái phức tạp.

---

### **Chương 2: Dự án 1 - Nền tảng E-commerce (Product & Cart)**

Đây là dự án đầu tiên và là nền tảng cốt lõi của toàn bộ hệ sinh thái. Mục tiêu của bạn không chỉ là xây dựng một trang web bán hàng, mà còn là tạo ra một ứng dụng **Next.js** mạnh mẽ, có khả năng mở rộng và hiệu suất cao. Dự án này cũng đóng vai trò là **"Host"** chính trong kiến trúc **Micro Front-end** mà chúng ta sẽ xây dựng sau này.

#### **Mục Tiêu & Công Nghệ Cần Nắm Vững**

* **Next.js**: Áp dụng các kỹ thuật **Data Fetching** nâng cao như **SSR** (Server-Side Rendering) và **SSG** (Static Site Generation), hiểu rõ ưu nhược điểm của từng kỹ thuật và khi nào nên sử dụng.
* **Redux Toolkit (RTK)**: Xử lý state phức tạp của giỏ hàng và **RTK Query** để fetch dữ liệu từ server.
* **Redux Saga**: Quản lý các side effect bất đồng bộ phức tạp như xử lý thanh toán.
* **Authentication**: Triển khai hệ thống xác thực người dùng hoàn chỉnh với **Next-Auth**, bao gồm **Social Login** và **Single Sign-On (SSO)**.
* **Form & Validation**: Sử dụng **React Hook Form** và **Zod** để xây dựng các form an toàn, dễ bảo trì.
* **Design Patterns**: Thực hành các mẫu thiết kế như **Component Composition**, **Custom Hooks** và **Singleton Pattern**.

#### **Cấu Trúc Dự Án & Các Design Patterns Nền Tảng**

Khi bắt đầu, hãy tạo một cấu trúc thư mục rõ ràng và có tổ chức. Điều này không chỉ giúp bạn dễ quản lý mà còn thể hiện tư duy của một Senior Developer.

* `src/`: Thư mục chính chứa toàn bộ mã nguồn.
* `src/components/`: Chứa các component UI chung và các component của từng trang.
* `src/lib/`: Chứa các hàm tiện ích và các services. Đây là nơi chúng ta sẽ áp dụng **Singleton Pattern**.
* `src/pages/`: Các trang của Next.js, nơi định nghĩa các route.
* `src/store/`: Cấu hình của Redux Toolkit, Redux Saga và RTK Query.
* `src/api/`: Các API Routes của Next.js.

Chúng ta sẽ bắt đầu với hai **Design Patterns** quan trọng:

* **Component Composition**: Thay vì tạo ra các component phức tạp, cồng kềnh, bạn sẽ tạo các component nhỏ, đơn giản và kết hợp chúng lại. Ví dụ, một component `ProductCard` có thể nhận các props như `image`, `title`, `price` và một nút `AddToCart`. Nút này có thể là một component riêng, giúp tăng tính tái sử dụng.
* **Custom Hooks**: Khi có một logic phức tạp lặp lại nhiều lần, ví dụ như logic thêm sản phẩm vào giỏ hàng, bạn nên đóng gói nó vào một **Custom Hook** như `useCart`. Điều này giúp component của bạn gọn gàng hơn và logic dễ dàng được tái sử dụng ở bất kỳ đâu.

#### **Triển Khai Data Fetching với Next.js**

Điểm mấu chốt của dự án này là việc sử dụng đúng kỹ thuật Data Fetching.

* **Trang Danh Sách Sản Phẩm (SSG)**: Để có hiệu suất tải trang siêu nhanh, bạn sẽ sử dụng **`getStaticProps`**. Next.js sẽ pre-render trang này tại thời điểm build và phục vụ một file HTML tĩnh cho mọi người dùng. Điều này lý tưởng cho các trang ít thay đổi.
* **Trang Chi Tiết Sản Phẩm (SSR)**: Để hiển thị thông tin chi tiết của một sản phẩm, bạn sẽ sử dụng **`getServerSideProps`**. Mỗi khi người dùng truy cập, server sẽ fetch dữ liệu mới nhất của sản phẩm đó và trả về một trang HTML hoàn chỉnh. Kỹ thuật này phù hợp với các trang có dữ liệu thường xuyên thay đổi hoặc cần thông tin chính xác tại thời điểm request.

 Dưới đây là phân tích chi tiết về các kỹ thuật render, cách chúng hoạt động và được áp dụng trong dự án của bạn, tập trung vào sự khác biệt giữa **Pages Router** (trước v13) và **App Router** (v13 trở đi).

---

### **Phân tích các Kỹ thuật Render trong Next.js (Pages Router vs. App Router)**

#### **1. Static Site Generation (SSG)**
* **Mục đích**: Tối ưu tốc độ tải trang bằng cách pre-render trang thành các file HTML tĩnh tại thời điểm build. Phù hợp cho các trang có nội dung ít thay đổi.
* **Pages Router (trước Next.js v13)**: Bạn sẽ sử dụng hàm `getStaticProps` để fetch dữ liệu từ API tại thời điểm build. Trang sẽ được tạo một lần duy nhất và được phục vụ từ CDN. Để cập nhật dữ liệu, bạn cần phải build lại toàn bộ ứng dụng hoặc sử dụng `revalidate` để kích hoạt **Incremental Static Regeneration (ISR)**.
* **App Router (Next.js v13+)**: Bạn sẽ sử dụng hàm `fetch` có sẵn của Next.js trong một **Server Component**. Next.js sẽ tự động nhận diện và pre-render trang này thành HTML tĩnh. ISR cũng được cấu hình ngay trong hàm `fetch` với tùy chọn `revalidate`.
* **Áp dụng trong dự án**: Trang chủ và trang danh sách sản phẩm, nơi nội dung không thay đổi theo từng giây.

#### **2. Server-Side Rendering (SSR)**
* **Mục đích**: Đảm bảo dữ liệu luôn được cập nhật theo thời gian thực và tối ưu SEO cho các trang có nội dung thay đổi.
* **Pages Router (trước Next.js v13)**: Bạn sẽ sử dụng hàm `getServerSideProps`. Hàm này sẽ được chạy trên server cho mỗi request truy cập vào trang. Nó fetch dữ liệu, render trang HTML và gửi về cho trình duyệt.
* **App Router (Next.js v13+)**: Bạn sử dụng hàm `fetch` trong một **Server Component** nhưng không cấu hình cache (mặc định sẽ là `cache: 'no-store'`). Next.js sẽ render trang trên server cho mỗi request.
* **Áp dụng trong dự án**: Trang chi tiết sản phẩm, vì thông tin như giá, tồn kho có thể thay đổi liên tục và cần hiển thị chính xác nhất.

#### **3. Client-Side Rendering (CSR)**
* **Mục đích**: Fetch và render dữ liệu trên trình duyệt, phù hợp cho các trang có tính tương tác cao và dữ liệu cá nhân hóa.
* **Pages Router (trước Next.js v13)**: Bạn sẽ sử dụng các hook của React như `useState` và `useEffect` hoặc các thư viện quản lý state như **Redux Toolkit** để fetch dữ liệu sau khi trang đã được tải.
* **App Router (Next.js v13+)**: Bạn sẽ phải đánh dấu component bằng chỉ thị `'use client'` để biến nó thành một **Client Component**. Trong Client Component, bạn có thể sử dụng các hooks của React và các thư viện khác để fetch và quản lý dữ liệu.
* **Áp dụng trong dự án**: Trang giỏ hàng, trang thanh toán, hoặc trang cá nhân người dùng.

#### **4. Incremental Static Regeneration (ISR)**
* **Mục đích**: Giữ được tốc độ của SSG nhưng vẫn đảm bảo nội dung được cập nhật sau một khoảng thời gian nhất định.
* **Pages Router (trước Next.js v13)**: Bạn sẽ thêm thuộc tính `revalidate` vào object được trả về bởi hàm `getStaticProps`.
* **App Router (Next.js v13+)**: Bạn sẽ cấu hình `revalidate` trực tiếp trong tùy chọn của hàm `fetch`.
* **Áp dụng trong dự án**: Trang danh mục sản phẩm, để đảm bảo danh sách sản phẩm không quá cũ mà vẫn có tốc độ tải nhanh.

#### **5. Dynamic Server-Side Rendering**
* **Mục đích**: Render một trang SSR dựa trên các yếu tố động như `cookies` hoặc `search params` trên URL.
* **Pages Router (trước Next.js v13)**: Bạn sẽ phải sử dụng `getServerSideProps` và phân tích `context.req.cookies` hoặc `context.query`.
* **App Router (Next.js v13+)**: Bạn có thể sử dụng các hàm tiện ích của Next.js như `cookies()` hoặc `headers()` trong **Server Component**. Khi các hàm này được gọi, Next.js sẽ tự động chuyển trang từ static sang dynamic render.
* **Áp dụng trong dự án**: Trang danh mục sản phẩm có các bộ lọc. Khi người dùng thay đổi bộ lọc trên URL, trang sẽ được render lại trên server để hiển thị kết quả chính xác nhất.

Với phân tích này, bạn có một cái nhìn tổng quan và chi tiết về sự thay đổi của các kỹ thuật render, từ đó bạn có thể áp dụng một cách hợp lý vào dự án E-commerce của mình.
  
Để bạn dễ hình dung và hiểu rõ hơn về sự khác biệt giữa các kỹ thuật render, đặc biệt là khi chuyển từ **Pages Router** sang **App Router** trong Next.js 13+, dưới đây là các đoạn code minh họa cụ thể cho từng kỹ thuật.

-----

### **1. Static Site Generation (SSG)**

  * **Pages Router (trước Next.js 13)**
      * Dùng `getStaticProps` để fetch data tại thời điểm build. Trang sẽ được tạo thành file HTML tĩnh và cache trên CDN.
    <!-- end list -->
    ```javascript
    // pages/index.js

    export default function HomePage({ products }) {
      return (
        <div>
          <h1>Trang Chủ</h1>
          {products.map(product => <div key={product.id}>{product.name}</div>)}
        </div>
      );
    }

    export async function getStaticProps() {
      const res = await fetch('https://api.example.com/products');
      const products = await res.json();
      
      return {
        props: { products },
      };
    }
    ```
  * **App Router (từ Next.js 13+)**
      * Dùng `fetch` trong một **Server Component**. Next.js sẽ tự động phân tích và pre-render trang này thành HTML tĩnh tại thời điểm build.
    <!-- end list -->
    ```javascript
    // app/page.js

    async function getProducts() {
      const res = await fetch('https://api.example.com/products');
      return res.json();
    }

    export default async function HomePage() {
      const products = await getProducts();
      
      return (
        <div>
          <h1>Trang Chủ</h1>
          {products.map(product => <div key={product.id}>{product.name}</div>)}
        </div>
      );
    }
    ```

-----

### **2. Server-Side Rendering (SSR)**

  * **Pages Router (trước Next.js 13)**
      * Dùng `getServerSideProps` để fetch data trên server cho mỗi request.
    <!-- end list -->
    ```javascript
    // pages/products/[slug].js

    export default function ProductPage({ product }) {
      return (
        <div>
          <h1>{product.name}</h1>
          <p>Giá: {product.price}</p>
        </div>
      );
    }

    export async function getServerSideProps(context) {
      const { slug } = context.params;
      const res = await fetch(`https://api.example.com/products/${slug}`);
      const product = await res.json();
      
      return {
        props: { product },
      };
    }
    ```
  * **App Router (từ Next.js 13+)**
      * Dùng `fetch` trong **Server Component** với tùy chọn `cache: 'no-store'` để đảm bảo data luôn mới.
    <!-- end list -->
    ```javascript
    // app/products/[slug]/page.js

    async function getProduct(slug) {
      const res = await fetch(`https://api.example.com/products/${slug}`, { cache: 'no-store' });
      return res.json();
    }

    export default async function ProductPage({ params }) {
      const product = await getProduct(params.slug);
      
      return (
        <div>
          <h1>{product.name}</h1>
          <p>Giá: {product.price}</p>
        </div>
      );
    }
    ```

-----

### **3. Client-Side Rendering (CSR)**

  * **Pages Router (trước Next.js 13)**
      * Dùng `useState` và `useEffect` để fetch data sau khi component đã mount.
    <!-- end list -->
    ```javascript
    // pages/cart.js
    import { useState, useEffect } from 'react';

    export default function CartPage() {
      const [cart, setCart] = useState(null);
      
      useEffect(() => {
        async function fetchCart() {
          const res = await fetch('https://api.example.com/cart');
          const data = await res.json();
          setCart(data);
        }
        fetchCart();
      }, []);
      
      return (
        <div>
          <h1>Giỏ Hàng Của Bạn</h1>
          {cart ? <div>{/* Hiển thị giỏ hàng */}</div> : <p>Đang tải...</p>}
        </div>
      );
    }
    ```
  * **App Router (từ Next.js 13+)**
      * Component phải được đánh dấu `'use client'`. Sau đó, bạn có thể dùng các hook của React.
    <!-- end list -->
    ```javascript
    // app/cart/page.js
    'use client';
    import { useState, useEffect } from 'react';

    export default function CartPage() {
      const [cart, setCart] = useState(null);
      
      useEffect(() => {
        async function fetchCart() {
          const res = await fetch('https://api.example.com/cart');
          const data = await res.json();
          setCart(data);
        }
        fetchCart();
      }, []);
      
      return (
        <div>
          <h1>Giỏ Hàng Của Bạn</h1>
          {cart ? <div>{/* Hiển thị giỏ hàng */}</div> : <p>Đang tải...</p>}
        </div>
      );
    }
    ```

-----

### **4. Incremental Static Regeneration (ISR)**

  * **Pages Router (trước Next.js 13)**
      * Sử dụng `getStaticProps` và thêm thuộc tính `revalidate` để cập nhật trang sau một khoảng thời gian nhất định.
    <!-- end list -->
    ```javascript
    // pages/products/[id].js

    export default function ProductPage({ product }) {
      // ...
    }

    export async function getStaticPaths() {
      // Return list of product IDs
      return { paths: [{ params: { id: '1' } }], fallback: 'blocking' };
    }

    export async function getStaticProps(context) {
      const { id } = context.params;
      const res = await fetch(`https://api.example.com/products/${id}`);
      const product = await res.json();
      
      return {
        props: { product },
        revalidate: 60, // Trang sẽ được cập nhật sau 60 giây
      };
    }
    ```
  * **App Router (từ Next.js 13+)**
      * Dùng `fetch` trong **Server Component** với tùy chọn `next: { revalidate: number }`.
    <!-- end list -->
    ```javascript
    // app/products/[id]/page.js

    async function getProduct(id) {
      const res = await fetch(`https://api.example.com/products/${id}`, {
        next: { revalidate: 60 } // Tương đương với ISR, trang cập nhật sau 60 giây
      });
      return res.json();
    }

    export default async function ProductPage({ params }) {
      const product = await getProduct(params.id);
      
      return (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      );
    }
    ```
#### **Quản Lý State Phức Tạp với Redux Toolkit & Saga**

Giỏ hàng là một trong những state phức tạp nhất của ứng dụng.

* **Redux Toolkit**: Giúp bạn định nghĩa một slice cho giỏ hàng, bao gồm các actions và reducers để thêm, bớt, cập nhật số lượng sản phẩm.
* **RTK Query**: Đây là lựa chọn tối ưu để fetch dữ liệu sản phẩm từ API. Bạn sẽ tạo một service API với **RTK Query** và nó sẽ tự động xử lý việc caching, re-fetching, và invalidation. Điều này loại bỏ hoàn toàn nhu cầu sử dụng **Axios** riêng lẻ cho việc fetch dữ liệu, giúp code của bạn gọn gàng và dễ bảo trì hơn nhiều.
* **Redux Saga**: Đối với các tác vụ phức tạp như xử lý thanh toán, **Redux Saga** sẽ đóng vai trò là "người điều phối". Nó lắng nghe các actions (ví dụ: `checkout/startCheckout`) và thực hiện các side effect bất đồng bộ như gọi nhiều API, xử lý lỗi và gửi thông báo.



* #### **Các Khái Niệm Cốt Lõi của Redux Saga**

  Để hiểu Redux Saga, bạn cần nắm vững các khái niệm sau:

  * **Generators**: Saga được xây dựng trên **Generators** của JavaScript. Bạn cần hiểu cách hoạt động của `function*` và từ khóa `yield`.
  * **Sagas**: Một saga là một hàm generator, hoạt động như một "daemon" (tiến trình nền) lắng nghe các action của Redux và thực hiện các tác vụ bất đồng bộ.
  * **Effects**: Đây là các object đơn giản (plain objects) do Redux Saga cung cấp để "hướng dẫn" middleware thực hiện các tác vụ, ví dụ như gọi một API hoặc dispatch một action. Các effects chính bao gồm:
      * `takeEvery`: Lắng nghe mọi action được dispatch và chạy một saga tương ứng.
      * `put`: Dispatch một action mới.
      * `call`: Gọi một hàm bất đồng bộ, ví dụ như một hàm fetch API.
      * `select`: Lấy dữ liệu từ Redux store.
      * `take`: Lắng nghe một action duy nhất.
      * `fork`: Chạy một saga khác mà không làm block saga hiện tại.
      * `all`: Chờ tất cả các effect trong một mảng hoàn thành.
  * **Redux Saga Middleware**: Đây là cầu nối giữa Redux store và các saga của bạn. Middleware này sẽ lắng nghe các action được dispatch và chạy các saga tương ứng.


* #### **Các Tác Vụ Cần Xử Lý với Redux Saga trong Dự án E-commerce**

  Trong dự án E-commerce, Redux Saga sẽ đảm nhận các tác vụ phức tạp sau:

  * **Quản lý giỏ hàng**:
      * Lắng nghe action `cart/addToCart` và kiểm tra xem sản phẩm đã có trong giỏ hàng chưa.
      * Nếu sản phẩm chưa có, thực hiện một API call để thêm sản phẩm vào giỏ hàng trên server. Sau đó, dispatch action `cart/addToCartSuccess`.
  * **Xử lý thanh toán**:
      * Lắng nghe action `checkout/startCheckout`.
      * Chạy một chuỗi các tác vụ bất đồng bộ:
          * Gọi API để tạo đơn hàng.
          * Lấy token thanh toán từ server.
          * Gửi thông báo thành công hoặc thất bại.
      * Nếu có lỗi xảy ra ở bất kỳ bước nào, bạn có thể xử lý lỗi và dispatch một action `checkout/fail`.
  * **Xử lý login và logout**:
      * Lắng nghe action `auth/loginRequest`.
      * Gọi API đăng nhập.
      * Lưu token vào localStorage.
      * Dispatch action `auth/loginSuccess` hoặc `auth/loginFail`.
      * Tương tự, lắng nghe action `auth/logoutRequest` và xóa token.
  * **Quản lý các side effect phức tạp khác**:
      * **Throttling**: Hạn chế số lần chạy một hàm trong một khoảng thời gian nhất định (ví dụ: hạn chế số lần người dùng tìm kiếm để tránh gọi API liên tục).
      * **Debouncing**: Chờ một khoảng thời gian nhất định sau khi người dùng ngừng gõ thì mới thực hiện tác vụ (ví dụ: sau khi người dùng ngừng gõ vào ô tìm kiếm 500ms thì mới gọi API).
      * **Race condition**: Xử lý trường hợp khi nhiều request được gửi đi và chỉ request cuối cùng là có giá trị.

-----

* #### **Các Ví dụ Code Saga Thực tế**

  Dưới đây là một ví dụ về cách một saga có thể xử lý việc thêm sản phẩm vào giỏ hàng:

 ```javascript
// src/store/cart/cartSaga.js
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { addToCartSuccess, addToCartError } from './cartSlice';
import { selectCartItemById } from './cartSelectors';
// Giả sử đây là file chứa các hàm gọi API
import * as api from '../../lib/api'; 

function* handleAddToCart(action) {
  try {
    const { payload: product } = action;
    
    // Sử dụng select để lấy state từ Redux store
    const existingItem = yield select(selectCartItemById, product.id);

    if (existingItem) {
      // Nếu sản phẩm đã có, gọi API để cập nhật số lượng
      yield call(
         api.updateCartItem,
         existingItem.id,
         existingItem.quantity + 1
      );
    } else {
      // Nếu sản phẩm chưa có, gọi API để thêm mới
      yield call(api.addCartItem, product);
    }
    
    // Sau khi gọi API thành công, dispatch action thành công
    yield put(addToCartSuccess(product));
  } catch (error) {
    // Nếu có lỗi, dispatch action lỗi
    yield put(addToCartError(error.message));
  }
}

// Hàm root saga lắng nghe các action
export function* cartSaga() {
  // Lắng nghe mọi action 'cart/addToCart' 
  // và chạy saga 'handleAddToCart'
  yield takeEvery('cart/addToCart', handleAddToCart);
}
```

---


### **Chương 3: Dự án 2 - Bảng điều khiển quản lý (Admin Dashboard)**

* **Mục tiêu dự án**: Xây dựng một **Single Page Application (SPA)** độc lập để quản lý dữ liệu sản phẩm hoặc đơn hàng từ dự án E-commerce. Dự án này đóng vai trò là một ứng dụng **"Remote"** sẽ được nhúng vào ứng dụng chính sau này. Bạn sẽ tập trung vào việc xử lý dữ liệu phức tạp, xây dựng bảng biểu mạnh mẽ và tối ưu hóa hiệu suất với các thư viện của **TanStack**.
* **Tech Stack**:
    * **React (Vite)**: Nền tảng chính cho SPA.
    * **TanStack Table**: Xây dựng bảng dữ liệu.
    * **TanStack Query**: Quản lý trạng thái dữ liệu từ server.
    * **TanStack Router**: Quản lý định tuyến.
    * **Mono Repo (Nx)**: Quản lý codebase của các dự án.
* **Design Patterns**: **Container/Presenter** (hoặc **Smart/Dumb Component**), **Custom Hooks**, **Strategy Pattern**.

---

#### **Phần 1: Kiến trúc Component với Pattern Container/Presenter**

Một trong những thách thức lớn nhất khi xây dựng các ứng dụng quản trị là việc tách biệt logic xử lý dữ liệu và UI. **Pattern Container/Presenter** là giải pháp hoàn hảo cho vấn đề này.

* **Container Component** (Smart Component): Chịu trách nhiệm về **logic**.
    * Nhiệm vụ chính: Gọi API bằng **TanStack Query**, xử lý các trạng thái `loading`, `error`, và `data`. Nó cũng quản lý các state liên quan đến bảng như phân trang, sắp xếp và lọc.
    * Component này không chứa markup HTML của bảng, mà sẽ truyền dữ liệu và các hàm xử lý (`onPageChange`, `onSort`,...) xuống component con qua `props`.
* **Presenter Component** (Dumb Component): Chịu trách nhiệm về **giao diện**.
    * Nhiệm vụ chính: Nhận dữ liệu và các hàm xử lý từ component cha qua `props`. Nó chỉ chịu trách nhiệm render bảng bằng **TanStack Table** và gọi các hàm xử lý khi có tương tác từ người dùng (ví dụ: bấm nút phân trang, sắp xếp).

Việc áp dụng pattern này giúp code của bạn trở nên dễ đọc, dễ test và tái sử dụng hơn rất nhiều.

#### **Phần 2: Xử lý Dữ liệu với TanStack Query & TanStack Table**

Đây là sự kết hợp mạnh mẽ để xây dựng bảng quản trị chuyên nghiệp.

* **TanStack Query**:
    * Sử dụng hook `useQuery` để fetch dữ liệu từ API. **TanStack Query** sẽ tự động cache dữ liệu, giúp các lần truy cập sau nhanh hơn.
    * Tối ưu hiệu suất bằng cách sử dụng các tùy chọn như `staleTime` và `cacheTime`.
    * Sử dụng hook `useMutation` để xử lý các hành động thêm, sửa, xóa dữ liệu. Đặc biệt, bạn sẽ học cách triển khai **optimistic updates** - cập nhật giao diện ngay lập tức mà không cần chờ phản hồi từ server, giúp trải nghiệm người dùng mượt mà hơn.
* **TanStack Table**:
    * Đây là một thư viện "headless" (không có UI), cho phép bạn hoàn toàn tùy chỉnh giao diện.
    * Bạn sẽ học cách định nghĩa cấu trúc cột (`columns`), các hàm xử lý (sorting, filtering) và trạng thái bảng.
    * Áp dụng các tính năng nâng cao như **phân trang (pagination)**, **sắp xếp (sorting)**, **lọc (filtering)** và **tìm kiếm toàn cục (global filter)**.

#### **Phần 3: Routing & Tổ chức Codebase**

* **TanStack Router**:
    * Bạn sẽ sử dụng thư viện này để quản lý việc điều hướng trong SPA, với các tính năng mạnh mẽ như **nested routes** (ví dụ: `/admin/products/new`), **lazy loading** các components và xử lý các tham số trên URL.
* **Mono Repo (Nx)**:
    * Khi bạn hoàn thành dự án này, bạn sẽ đặt nó cùng với dự án E-commerce vào một **Monorepo** bằng **Nx**.
    * Lợi ích: Dễ dàng chia sẻ code, component, hoặc các loại type giữa hai dự án, đảm bảo tính nhất quán và hiệu quả.


Dự án này sẽ không chỉ là một trang web tĩnh, mà là một ứng dụng quản lý dữ liệu hoàn chỉnh. Dưới đây là các chức năng chính bạn sẽ xây dựng, được chia thành từng phần rõ ràng.

---

### **Các Chức Năng Chính Của Admin Dashboard**

#### **1. Quản lý Danh sách Sản phẩm**

Đây là chức năng trung tâm của dự án, nơi bạn sẽ áp dụng **TanStack Table** và **TanStack Query** một cách hiệu quả nhất.

* **Hiển thị dữ liệu**: Liệt kê tất cả sản phẩm dưới dạng bảng. Dữ liệu này được lấy từ API (sử dụng **TanStack Query**).
* **Phân trang (Pagination)**: Tự động chia danh sách sản phẩm thành nhiều trang. Người dùng có thể di chuyển giữa các trang để xem dữ liệu.
* **Sắp xếp (Sorting)**: Cho phép người dùng sắp xếp danh sách theo các cột khác nhau như tên sản phẩm, giá cả, hoặc ngày tạo.
* **Tìm kiếm (Filtering)**:
    * **Tìm kiếm toàn cục (Global Filter)**: Một ô tìm kiếm chung để lọc sản phẩm theo bất kỳ thuộc tính nào (tên, mô tả, SKU).
    * **Lọc theo cột (Column Filtering)**: Các bộ lọc riêng biệt cho từng cột (ví dụ: lọc sản phẩm theo danh mục).
* **Thao tác trên bảng**:
    * **Thêm sản phẩm**: Một form để người dùng thêm một sản phẩm mới.
    * **Sửa sản phẩm**: Chức năng để chỉnh sửa thông tin của một sản phẩm hiện có.
    * **Xóa sản phẩm**: Chức năng để xóa một hoặc nhiều sản phẩm.

#### **2. Quản lý Đơn hàng (Nested Route)**

Dự án này cũng sẽ có chức năng quản lý đơn hàng. Chức năng này sẽ được triển khai như một **nested route** của **TanStack Router**.

* **Hiển thị danh sách đơn hàng**: Liệt kê các đơn hàng với các thông tin chi tiết như mã đơn hàng, tên khách hàng, tổng tiền, trạng thái đơn hàng.
* **Tìm kiếm và lọc**: Tương tự như quản lý sản phẩm, bạn sẽ có các chức năng tìm kiếm và lọc đơn hàng theo trạng thái (đã thanh toán, đang giao hàng, đã hoàn thành, đã hủy).
* **Xem chi tiết đơn hàng**: Khi người dùng click vào một đơn hàng, họ sẽ được chuyển đến một trang chi tiết để xem các sản phẩm trong đơn hàng đó.

#### **3. Tối ưu hóa Trải nghiệm Người dùng**

Các chức năng này không trực tiếp hiển thị trên giao diện nhưng lại rất quan trọng đối với trải nghiệm người dùng.

* **Tải dữ liệu tối ưu**: Sử dụng **TanStack Query** để xử lý trạng thái **loading** và **error** một cách mượt mà. Khi dữ liệu đang được tải, bạn có thể hiển thị một bộ xương tải (**skeleton loader**).
* **Optimistic updates**: Khi người dùng thực hiện một hành động (như xóa một sản phẩm), giao diện sẽ cập nhật ngay lập tức mà không cần chờ phản hồi từ server. Điều này giúp ứng dụng cảm thấy nhanh hơn.
* **Navigation mượt mà**: Sử dụng **TanStack Router** để chuyển đổi giữa các trang mà không cần tải lại toàn bộ ứng dụng, giống như một SPA thực thụ.


---

### **Chương 4: Dự án 3 - Ứng dụng Real-time Chat**

Mục tiêu của dự án này là xây dựng một ứng dụng chat đơn giản nhưng đầy đủ các tính năng nâng cao. Đây sẽ là cơ hội để bạn làm chủ các công nghệ real-time, xử lý các tác vụ nền hiệu quả, và tối ưu trải nghiệm người dùng với các kỹ thuật offline-first.

#### **Mục Tiêu & Công Nghệ Cần Nắm Vững**

* **WebSocket**: Thiết lập kết nối hai chiều để gửi và nhận tin nhắn theo thời gian thực.
* **PWA & Service Worker**: Biến ứng dụng thành một Progressive Web App (PWA), có khả năng hoạt động offline và gửi thông báo đẩy (push notifications).
* **Web Worker**: Xử lý các tác vụ nặng ở một luồng riêng, đảm bảo giao diện người dùng luôn mượt mà.
* **Zustand**: Sử dụng thư viện quản lý state nhỏ gọn, đơn giản để quản lý trạng thái của cuộc trò chuyện.
* **Design Patterns**: Áp dụng **Observer Pattern** để lắng nghe các sự kiện từ WebSocket và **Proxy Pattern** để xử lý các logic bổ sung trước khi gửi tin nhắn.

#### **Tổng quan chức năng**

Ứng dụng chat của bạn sẽ có các chức năng chính sau:
1.  **Gửi/Nhận tin nhắn**: Gửi và nhận tin nhắn theo thời gian thực.
2.  **Thông báo**: Gửi thông báo đẩy khi có tin nhắn mới, ngay cả khi ứng dụng không mở.
3.  **Hoạt động offline**: Người dùng có thể xem lại lịch sử chat ngay cả khi không có kết nối internet.
4.  **Tối ưu hiệu suất**: Xử lý các tác vụ phức tạp (như mã hóa tin nhắn) ở luồng nền để tránh làm gián đoạn UI.

---

#### **Chi tiết các kỹ thuật nâng cao**

##### **1. Thiết lập Real-time với WebSocket**
* **WebSocket** là giao thức cho phép giao tiếp hai chiều giữa client và server thông qua một kết nối duy nhất, liên tục mở.
* Bạn sẽ tạo một kết nối WebSocket khi ứng dụng khởi động. Khi người dùng gửi tin nhắn, bạn sẽ sử dụng kết nối này để gửi dữ liệu lên server. Ngược lại, khi server nhận được tin nhắn từ người dùng khác, nó sẽ gửi tin nhắn đó về cho tất cả các client đang kết nối.
* **Observer Pattern**: Bạn sẽ áp dụng mẫu thiết kế này để lắng nghe các sự kiện từ WebSocket (`onmessage`, `onopen`, `onclose`). Khi có tin nhắn mới, một hàm xử lý sẽ được gọi để cập nhật state của ứng dụng.

##### **2. Cải thiện trải nghiệm với PWA & Service Worker**
* **Progressive Web App (PWA)** biến trang web của bạn thành một ứng dụng có thể cài đặt trên thiết bị của người dùng.
* **Service Worker** là một script chạy ở luồng nền của trình duyệt, độc lập với trang web. Nó sẽ đóng vai trò như một proxy giữa trình duyệt và mạng.
* Bạn sẽ sử dụng **Service Worker** để:
    * **Lưu cache**: Cache các tài nguyên tĩnh của ứng dụng (HTML, CSS, JS) để người dùng có thể truy cập offline.
    * **Quản lý dữ liệu offline**: Cache dữ liệu lịch sử chat, cho phép người dùng xem lại ngay cả khi không có mạng.
    * **Thông báo đẩy (Push Notification)**: Nhận và hiển thị thông báo đẩy khi có tin nhắn mới từ server.

##### **3. Tối ưu hóa hiệu suất với Web Worker**
* JavaScript trên trình duyệt chạy trên một luồng duy nhất. Các tác vụ nặng có thể làm block luồng này, khiến giao diện bị "đóng băng".
* **Web Worker** giải quyết vấn đề này bằng cách tạo ra một luồng riêng biệt để chạy các tác vụ nặng.
* Trong dự án này, bạn có thể dùng **Web Worker** để:
    * **Mã hóa/giải mã tin nhắn**: Mã hóa hoặc giải mã tin nhắn ở luồng nền, tránh làm chậm ứng dụng chính.
    * **Xử lý dữ liệu lớn**: Xử lý các đoạn chat dài mà không làm lag giao diện.

##### **4. Quản lý State với Zustand**
* Với một ứng dụng chat, state cần quản lý khá đơn giản: danh sách tin nhắn, trạng thái kết nối, trạng thái online của người dùng.
* **Zustand** là một thư viện quản lý state nhẹ, không cần boilerplate code như Redux, rất phù hợp cho dự án này.



#### **Tổng thể kiến trúc**

Ứng dụng chat này sẽ được xây dựng trên một kiến trúc hiện đại và mạnh mẽ, bao gồm nhiều lớp để xử lý các tác vụ khác nhau:

* **Lớp Giao diện (UI Layer)**: Xây dựng các component React như `ChatWindow`, `MessageList`, và `MessageInput`.
* **Lớp Quản lý State (State Management Layer)**: Sử dụng **Zustand** để lưu trữ danh sách tin nhắn, trạng thái kết nối, và thông tin người dùng.
* **Lớp Kết nối Real-time (Real-time Connection Layer)**: Xử lý toàn bộ logic của **WebSocket** thông qua một **Custom Hook** chuyên dụng.
* **Lớp Xử lý Nền (Background Processing Layer)**: Sử dụng **Web Worker** để xử lý các tác vụ nặng, không làm ảnh hưởng đến UI.
* **Lớp Ngoại tuyến (Offline Layer)**: Sử dụng **PWA** và **Service Worker** để quản lý cache và thông báo đẩy.

---

#### **Chi tiết từng lớp & Cách triển khai**

##### **1. Lớp Kết nối Real-time với WebSocket**

* **Custom Hook `useChatWebSocket`**: Bạn sẽ tạo một hook riêng để đóng gói toàn bộ logic của WebSocket. Điều này giúp các component UI của bạn không cần quan tâm đến chi tiết kết nối.
    * **Nhiệm vụ của Hook**:
        * Tạo và duy trì một kết nối WebSocket.
        * Sử dụng **`useRef`** để lưu trữ instance của WebSocket, đảm bảo nó không bị tạo lại sau mỗi lần re-render.
        * Sử dụng **`useEffect`** để xử lý vòng đời của kết nối: tạo kết nối khi component mount và đóng kết nối khi component unmount.
        * Thiết lập các sự kiện lắng nghe (**Observer Pattern**): `onopen`, `onmessage`, `onclose`, và `onerror`. Khi nhận được tin nhắn (`onmessage`), hook sẽ dispatch một action đến **Zustand** store để cập nhật state.
* **Gửi tin nhắn**: Hook này cũng sẽ cung cấp một hàm `sendMessage` để các component UI có thể dễ dàng gửi tin nhắn.

##### **2. Lớp Quản lý State với Zustand**

* **Store `useChatStore`**: Bạn sẽ tạo một store **Zustand** để quản lý các trạng thái cần thiết của ứng dụng chat.
    * **Các state chính**: `messages` (một mảng các tin nhắn), `status` (trạng thái kết nối: `connecting`, `connected`, `disconnected`), `user` (thông tin người dùng hiện tại).
    * **Các actions**: `addMessage`, `updateStatus`, `setUser`. Khi custom hook `useChatWebSocket` nhận được tin nhắn, nó sẽ gọi `useChatStore.getState().addMessage()`.

##### **3. Lớp Tối ưu Hiệu suất với Web Worker**

* **Xử lý tác vụ nặng**: Chúng ta sẽ sử dụng một **Web Worker** để mã hóa tin nhắn trước khi gửi đi.
* **Cách triển khai**:
    * Tạo một file JavaScript riêng, ví dụ `crypto.worker.js`. File này sẽ chứa logic mã hóa tin nhắn.
    * Trong component chính (ví dụ: `MessageInput`), khi người dùng gửi tin nhắn, bạn sẽ không gọi hàm mã hóa trực tiếp. Thay vào đó, bạn sẽ tạo một instance của `WebWorker` và gửi tin nhắn tới nó bằng `postMessage()`.
    * Web Worker sẽ xử lý tác vụ, sau đó gửi lại tin nhắn đã mã hóa cho luồng chính. Luồng chính sẽ nhận được tin nhắn này và gửi nó qua WebSocket.

##### **4. Lớp Ngoại tuyến với PWA & Service Worker**

* **Web App Manifest**: Bạn sẽ tạo file `manifest.json` để định nghĩa icon, tên, và các cài đặt khác để ứng dụng có thể cài đặt được trên thiết bị.
* **Service Worker**:
    * Sử dụng một thư viện như **Workbox** để dễ dàng tạo một **Service Worker**.
    * **Caching tài nguyên**: Service Worker sẽ được cấu hình để cache các file tĩnh của ứng dụng (`index.html`, `bundle.js`, CSS) bằng chiến lược "cache-first". Điều này giúp ứng dụng tải ngay lập tức khi người dùng truy cập offline.
    * **Caching dữ liệu**: Sử dụng API **IndexedDB** hoặc `Cache API` để lưu trữ các tin nhắn gần đây. Điều này cho phép người dùng xem lại lịch sử chat khi không có kết nối internet.
    * **Push Notifications**: Bạn sẽ xử lý việc đăng ký cho push notifications. Khi server gửi một thông báo đẩy, Service Worker sẽ lắng nghe sự kiện đó và hiển thị thông báo trên màn hình thiết bị của người dùng.

-----

### **Chương 5: Dự án 4 - Bảng hiển thị dữ liệu lớn (Big Data Table)**

  * **Mục tiêu dự án**: Xây dựng một component bảng dữ liệu có khả năng hiển thị hàng nghìn, thậm chí hàng triệu bản ghi mà không làm chậm ứng dụng. Bạn sẽ học cách sử dụng các kỹ thuật **Virtualization** và **Infinite Scrolling** để tối ưu hóa hiệu suất render.
  * **Tech Stack**:
      * **React (Vite)**: Nền tảng chính cho component.
      * **TanStack Virtual & React Virtualized**: Các thư viện cốt lõi để triển khai virtualization.
      * **TanStack Query**: Quản lý việc fetch dữ liệu một cách hiệu quả.
      * **Zustand**: Quản lý state cục bộ cho component.
  * **Design Patterns**: **Component Composition** (kết hợp các thành phần nhỏ để tạo nên bảng lớn) và **Container/Presenter** (tách logic xử lý dữ liệu và UI).

-----

#### **Vấn đề cần giải quyết: "Lagging UI"**

Khi bạn cố gắng render hàng ngàn dòng dữ liệu trong một bảng HTML thông thường, trình duyệt sẽ phải xử lý một lượng DOM element khổng lồ. Điều này làm cho ứng dụng bị "đóng băng" và không thể tương tác được. Giải pháp là không render tất cả các dòng cùng một lúc, mà chỉ render những gì người dùng nhìn thấy trên màn hình.

#### **Giải pháp 1: Virtualization (Ảo hóa)**

Đây là kỹ thuật chính để xử lý dữ liệu lớn.

  * **Bản chất**: **Virtualization** (hay "Windowing") là việc chỉ render một "cửa sổ" nhỏ các item đang hiển thị trong viewport. Khi người dùng cuộn, các item không còn trong viewport sẽ bị "hủy" và các item mới sẽ được render.
  * **Áp dụng trong dự án**: Bạn sẽ sử dụng **TanStack Virtual** hoặc **React Virtualized** để xây dựng một component bảng. Thay vì render một mảng dữ liệu đầy đủ, bạn sẽ cung cấp cho thư viện số lượng item và kích thước của chúng. Thư viện sẽ tính toán và chỉ render các item cần thiết, giúp hiệu suất luôn ổn định, bất kể bạn có bao nhiêu dữ liệu.

<!-- end list -->

```javascript
// Minh họa cách TanStack Virtual hoạt động
import { useVirtualizer } from '@tanstack/react-virtual';

const parentRef = useRef(null);

const rowVirtualizer = useVirtualizer({
  count: 100000, // Số lượng bản ghi
  getScrollElement: () => parentRef.current,
  estimateSize: () => 35, // Chiều cao ước tính của mỗi dòng
});
```

#### **Giải pháp 2: Infinite Scrolling (Cuộn vô hạn)**

Để xử lý việc fetch dữ liệu một cách hiệu quả, bạn sẽ kết hợp **Virtualization** với **Infinite Scrolling**.

  * **Bản chất**: Thay vì fetch toàn bộ dữ liệu ngay từ đầu, bạn chỉ fetch một lượng dữ liệu nhỏ ban đầu. Khi người dùng cuộn đến cuối danh sách, bạn sẽ tự động fetch batch dữ liệu tiếp theo.
  * **Áp dụng trong dự án**: Bạn sẽ sử dụng hook `useInfiniteQuery` của **TanStack Query**. Hook này sẽ tự động quản lý các page (trang) dữ liệu và trạng thái `isLoading`, `isError` cho từng page. Khi người dùng cuộn đến cuối danh sách ảo hóa, bạn sẽ gọi hàm `fetchNextPage()` do `useInfiniteQuery` cung cấp.

<!-- end list -->

```javascript
// Minh họa cách TanStack Query hoạt động
import { useInfiniteQuery } from '@tanstack/react-query';

const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: ({ pageParam = 0 }) => fetchProjects(pageParam),
  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
});
```

#### **Thiết kế component**

Bạn sẽ áp dụng lại pattern **Container/Presenter** để xây dựng component này.

  * **Container Component**: Chứa toàn bộ logic fetch dữ liệu bằng `useInfiniteQuery` và logic virtualization bằng `useVirtualizer`.
  * **Presenter Component**: Nhận dữ liệu đã được ảo hóa và các hàm xử lý qua props. Nhiệm vụ duy nhất là render các item trong "cửa sổ" một cách hiệu quả.



#### **Các Tính năng & Kiến thức Cốt lõi của Bảng Dữ liệu Lớn**

#### **1. Virtualization (Ảo hóa)**

* **Bản chất và Cấu trúc**: Virtualization là kỹ thuật chỉ render các phần tử HTML (DOM) đang nằm trong khung nhìn của người dùng. Để làm được điều này, thư viện như **TanStack Virtual** sẽ tính toán vị trí và kích thước của toàn bộ danh sách ảo, nhưng chỉ render một "cửa sổ" nhỏ các item ở gần vị trí cuộn hiện tại.
* **Các thành phần chính**:
    * **`useVirtualizer`**: Hook này là trái tim của virtualization. Nó nhận vào các tham số như `count` (tổng số dòng), `getScrollElement` (phần tử DOM chứa thanh cuộn) và `estimateSize` (chiều cao ước tính của một dòng).
    * **`measureElement`**: Sau khi render, `useVirtualizer` có thể sử dụng hàm này để lấy chiều cao thực tế của các dòng, giúp việc cuộn mượt mà hơn và tránh các vấn đề về hiển thị.
* **Vai trò trong dự án**: Đây là tính năng then chốt giúp bảng dữ liệu của bạn có thể hiển thị hàng triệu dòng mà vẫn duy trì hiệu suất ở mức cao.

---

#### **2. Infinite Scrolling (Cuộn vô hạn)**

* **Tích hợp với Virtualization**: Hai kỹ thuật này bổ trợ cho nhau. **Virtualization** giải quyết vấn đề hiệu suất render trên front-end, còn **Infinite Scrolling** giải quyết vấn đề hiệu suất tải dữ liệu từ back-end. Bạn sẽ không fetch toàn bộ dữ liệu cùng lúc, mà sẽ fetch từng "trang" một.
* **Sử dụng TanStack Query**:
    * **`useInfiniteQuery`**: Hook này được thiết kế để xử lý **Infinite Scrolling** một cách dễ dàng. Bạn chỉ cần cung cấp hàm fetch dữ liệu cho từng trang (`queryFn`) và một hàm để lấy tham số cho trang tiếp theo (`getNextPageParam`).
    * **Các state quan trọng**: Hook này cung cấp các state hữu ích như `data` (dữ liệu của tất cả các trang đã tải), `hasNextPage` (kiểm tra xem còn trang nào để tải tiếp không), và `isFetchingNextPage` (để hiển thị trạng thái loading khi đang fetch dữ liệu mới).
* **Vai trò trong dự án**: Tính năng này giúp ứng dụng tải nhanh hơn, vì chỉ cần tải một lượng nhỏ dữ liệu ban đầu. Nó cũng tiết kiệm tài nguyên server và băng thông mạng.

---

#### **3. Component Composition & Container/Presenter**

* **Mục đích**: Để giữ cho component bảng dữ liệu dễ quản lý và mở rộng, chúng ta sẽ áp dụng các mẫu thiết kế.
* **Container Component**:
    * **Nhiệm vụ**: Chứa toàn bộ logic xử lý dữ liệu. Component này sẽ sử dụng `useInfiniteQuery` để fetch dữ liệu, sau đó sử dụng `useVirtualizer` để ảo hóa dữ liệu đó.
    * **Ví dụ**: Component `DataTableContainer.js`.
* **Presenter Component**:
    * **Nhiệm vụ**: Chỉ chịu trách nhiệm về giao diện. Nó nhận dữ liệu đã được xử lý (đã ảo hóa) và các hàm xử lý từ Container qua props, sau đó render bảng.
    * **Ví dụ**: Component `DataTable.js`.
* **Vai trò trong dự án**: Phân tách rõ ràng logic và giao diện giúp code dễ đọc, dễ bảo trì và tái sử dụng hơn.

---

#### **4. Kết hợp tất cả để xây dựng Bảng dữ liệu lớn**

* **Quy trình xử lý**:
    1.  **Container Component** gọi `useInfiniteQuery` để fetch trang dữ liệu đầu tiên.
    2.  Dữ liệu được trả về và được lưu trong state của `useInfiniteQuery`.
    3.  **Container Component** truyền dữ liệu này và số lượng dòng ảo (`count`) cho `useVirtualizer`.
    4.  `useVirtualizer` tính toán và tạo ra một danh sách các "item" cần render trong khung nhìn.
    5.  **Container Component** truyền các "item" này đến **Presenter Component**.
    6.  **Presenter Component** render các item.
    7.  Khi người dùng cuộn đến gần cuối, `useVirtualizer` sẽ phát hiện và **Container Component** sẽ gọi `fetchNextPage()` để tải trang dữ liệu tiếp theo.

Mô hình này tạo ra một bảng dữ liệu siêu hiệu quả, có thể xử lý lượng lớn dữ liệu mà không làm ảnh hưởng đến trải nghiệm người dùng.

---

### Chúng ta đã đi qua tất cả các chương chính trong lộ trình. Bây giờ là lúc kết nối tất cả các mảnh ghép lại với nhau.

---

### **Phụ lục A: Kết nối bức tranh lớn với Micro Front-end & Monorepo**

Đây là phần quan trọng nhất để bạn chuyển từ một người lập trình các dự án riêng lẻ thành một **Senior Developer** có tư duy kiến trúc hệ thống. Chúng ta sẽ kết hợp các dự án đã xây dựng thành một hệ sinh thái duy nhất.

#### **1. Monorepo (Kho chứa duy nhất)**

* **Bản chất**: Thay vì có nhiều kho chứa (repository) cho từng dự án, bạn sẽ gom tất cả code của dự án E-commerce, Admin Dashboard, và Chat vào một kho chứa duy nhất.
* **Công cụ**: Chúng ta sẽ sử dụng công cụ như **Nx** hoặc **Turborepo** để quản lý monorepo này. Các công cụ này sẽ giúp:
    * **Quản lý dependencies**: Tất cả các dự án trong monorepo có thể dùng chung một phiên bản của thư viện (ví dụ: React, TanStack).
    * **Tái sử dụng code**: Dễ dàng tạo các thư viện UI chung (`@my-app/ui-components`), các hàm tiện ích (`@my-app/utils`) để chia sẻ giữa các dự án. Điều này giúp giảm thiểu code trùng lặp.
    * **Tối ưu hóa build**: Các công cụ này chỉ build hoặc test những dự án bị thay đổi, giúp tiết kiệm thời gian đáng kể.

#### **2. Micro Front-end (Kiến trúc vi giao diện)**

* **Bản chất**: Chia ứng dụng web lớn thành các ứng dụng nhỏ hơn, độc lập về mặt phát triển và triển khai.
* **Công cụ**: Chúng ta sẽ sử dụng **Module Federation** của Webpack để kết nối các dự án lại.
    * Dự án **E-commerce** sẽ là **"Host"** chính.
    * Dự án **Admin Dashboard** sẽ là **"Remote"** được đóng gói và nhúng vào E-commerce.
* **Cách thực hiện**:
    * Trong dự án Admin Dashboard (Remote), bạn sẽ định nghĩa những thành phần nào sẽ được "export" ra ngoài, ví dụ: một component `AdminDashboardPage`.
    * Trong dự án E-commerce (Host), bạn sẽ cấu hình để "import" component `AdminDashboardPage` từ Remote. Next.js và Webpack sẽ tự động xử lý việc tải và hiển thị component đó.


#### **3. Tích hợp thực tế**

##### **Cách 4 Dự án Kết nối với nhau**

Trong kiến trúc **Monorepo** và **Micro Front-end**, các dự án sẽ được tổ chức như sau:

* **Dự án 1 (Nền tảng E-commerce): Host Application**
    * Đây sẽ là ứng dụng chính và là điểm truy cập của người dùng.
    * Nó sẽ "nhúng" các dự án khác vào các route hoặc các thành phần cụ thể.

* **Dự án 2 (Admin Dashboard): Remote Application**
    * Đây là một ứng dụng độc lập, được phát triển và triển khai riêng.
    * Bạn sẽ sử dụng **Module Federation** để "export" toàn bộ ứng dụng này.
    * **Dự án 1** (E-commerce) sẽ "import" dự án này và hiển thị nó trên một route riêng, ví dụ: `/admin`.

* **Dự án 3 (Real-time Chat): Shared Component**
    * Đây không phải là một ứng dụng Micro Front-end độc lập.
    * Component chat sẽ được xây dựng như một thư viện dùng chung trong **Monorepo** (ví dụ: `libs/chat-widget`).
    * **Dự án 1** (E-commerce) sẽ import component này và hiển thị nó trên giao diện người dùng chính. 

* **Dự án 4 (Big Data Table): Shared Component**
    * Tương tự như dự án chat, đây là một component mạnh mẽ, được xây dựng như một thư viện chung (ví dụ: `libs/data-table`).
    * Component này sẽ được **Dự án 2** (Admin Dashboard) sử dụng để hiển thị các danh sách lớn như danh sách sản phẩm, đơn hàng, hay người dùng.

Tóm lại, **Dự án 1** đóng vai trò là "chủ nhà" (Host), **Dự án 2** là "khách" (Remote), và **Dự án 3, 4** là các thư viện, components dùng chung để tạo nên một hệ thống hoàn chỉnh và mạnh mẽ. 

Việc này giúp bạn quản lý code hiệu quả hơn, tái sử dụng các thành phần, và làm chủ tư duy kiến trúc hệ thống lớn.

Sau khi cấu hình, bạn sẽ có một ứng dụng duy nhất, nhưng khi người dùng truy cập vào đường dẫn `/admin`, họ sẽ thấy giao diện của Admin Dashboard. 

Dù các dự án được phát triển và triển khai độc lập, chúng vẫn hoạt động mượt mà như một ứng dụng duy nhất.

Dưới đây là các đoạn code mẫu chi tiết, minh họa cho việc triển khai **Monorepo** và **Micro Front-end** với **4 dự án** đã xây dựng.

-----

### **Cấu Trúc Monorepo**

Đầu tiên, chúng ta sẽ tạo một cấu trúc thư mục logic để chứa tất cả các dự án và các thư viện dùng chung. Đây là xương sống của hệ thống.

```
my-ecommerce-monorepo/
├── apps/
│   ├── ecommerce-host/     (Dự án Next.js - Host chính)
│   └── admin-remote/       (Dự án React SPA - Remote)
├── libs/
│   ├── chat-widget/        (Thư viện component cho dự án chat)
│   └── data-table/         (Thư viện component cho dự án big data)
└── package.json
```

-----

### **1. Ứng Dụng Host (Ecommerce)**

Đây là ứng dụng chính, sẽ tải và hiển thị các ứng dụng remote khác. Chúng ta sẽ cấu hình nó để "import" Admin Dashboard và component chat.

  * **Cấu hình Webpack (Next.js)**:
    Sử dụng `@module-federation/nextjs-mf` để khai báo các ứng dụng remote mà chúng ta sẽ sử dụng.

<!-- end list -->

```javascript
// apps/ecommerce-host/next.config.js
const { withModuleFederation } = require('@module-federation/nextjs-mf');

module.exports = withModuleFederation({
  name: 'ecommerceHost',
  remotes: {
    adminRemote: 'adminRemote@http://localhost:3001/_next/static/chunks/remoteEntry.js', // Địa chỉ của ứng dụng Admin
  },
  // ... các cấu hình khác của Next.js
});
```

  * **Cách sử dụng Admin Remote**:
    Tạo một trang `/admin` trong `ecommerce-host` để dynamic import (nhập động) component từ ứng dụng remote.

<!-- end list -->

```javascript
// apps/ecommerce-host/pages/admin.js
import dynamic from 'next/dynamic';

// Nhập động component từ ứng dụng Remote
const AdminDashboardPage = dynamic(
  () => import('adminRemote/pages/index'),
  { ssr: false } // Rất quan trọng: tắt SSR cho component này
);

export default function AdminPage() {
  return <AdminDashboardPage />;
}
```

  * **Cách sử dụng Chat Widget (Thư viện dùng chung)**:
    Bạn có thể import component chat từ thư viện dùng chung và đặt nó vào layout chính của ứng dụng.

<!-- end list -->

```javascript
// apps/ecommerce-host/components/Layout.js
import { ChatWidget } from '@my-monorepo/chat-widget';

export default function Layout({ children }) {
  return (
    <>
      <header>...</header>
      <main>{children}</main>
      <ChatWidget />
      <footer>...</footer>
    </>
  );
}
```

-----

### **2. Ứng Dụng Remote (Admin Dashboard)**

Đây là một ứng dụng độc lập, sẽ "export" các component của nó để ứng dụng host có thể sử dụng.

  * **Cấu hình Webpack (Next.js)**:
    Trong `admin-remote`, chúng ta sẽ cấu hình để "export" component chính của nó.

<!-- end list -->

```javascript
// apps/admin-remote/next.config.js
const { withModuleFederation } = require('@module-federation/nextjs-mf');

module.exports = withModuleFederation({
  name: 'adminRemote',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './pages/index': './pages/index.js', // Export trang chủ của Admin Dashboard
  },
  // ... các cấu hình khác
});
```

  * **Cách sử dụng Big Data Table (Thư viện dùng chung)**:
    Component `BigDataTable` sẽ được import và sử dụng trong trang chính của Admin Dashboard để hiển thị danh sách sản phẩm.

<!-- end list -->

```javascript
// apps/admin-remote/pages/index.js
import { BigDataTable } from '@my-monorepo/data-table';
import { useProductsQuery } from '@/api'; // Custom hook để fetch dữ liệu

export default function AdminDashboardPage() {
  const { data, isLoading } = useProductsQuery();

  if (isLoading) return <div>Đang tải dữ liệu...</div>;

  return (
    <div>
      <h1>Bảng điều khiển quản trị</h1>
      <BigDataTable data={data} />
    </div>
  );
}
```
---

### **Phụ lục B: Lời kết - Bạn đã sẵn sàng trở thành Senior**

Khi đã hoàn thành toàn bộ lộ trình này, bạn không chỉ có một bộ portfolio ấn tượng mà còn sở hữu một tư duy và kỹ năng của một **Senior Engineer**. Bạn đã làm chủ:
* **Kiến trúc**: Xây dựng và quản lý các hệ thống lớn với Monorepo và Micro Front-end.
* **Tối ưu hóa**: Xử lý các vấn đề hiệu suất phức tạp như virtualization và Web Worker.
* **Lập trình bất đồng bộ**: Sử dụng Redux Saga, TanStack Query và WebSocket một cách hiệu quả.
* **Bảo mật & Trải nghiệm người dùng**: Triển khai authentication, PWA và các kỹ thuật offline-first.

-----

Đây là lúc bạn có thể tự tin ứng tuyển và đảm nhận các vị trí cao hơn, trở thành người ra quyết định kỹ thuật và dẫn dắt các dự án.
