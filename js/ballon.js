function createBallon() {
  const ballon = document.createElement("div");
  ballon.classList.add("ballon");
  document.body.appendChild(ballon);

  let startPosX = Math.random() * window.innerWidth;
  let duration = Math.random() * 3 + 4; // 4-7 giây rơi xuống
  let size = Math.random() * 20 + 20; // Kích thước 20px - 40px
  let opacity = Math.random() * 0.2 + 0.8; // Độ trong suốt 0.8 - 1

  ballon.style.left = `${startPosX}px`;
  ballon.style.width = `${size}px`;
  ballon.style.height = `${size}px`;
  ballon.style.opacity = opacity;

  ballon.animate(
    [
      { transform: `translateY(-50px) rotate(0deg)`, opacity: opacity },
      {
        transform: `translateY(${window.innerHeight + 50}px) rotate(360deg)`,
        opacity: 0.8,
      },
    ],
    { duration: duration * 1000, easing: "linear" }
  );

  setTimeout(() => {
    ballon.remove();
  }, duration * 1000);
}

function createSky() {
  const sky = document.createElement("div");
  sky.classList.add("sky");
  document.body.appendChild(sky);

  let startPosX = Math.random() * window.innerWidth;
  let duration = Math.random() * 3 + 4; // 4-7 giây rơi xuống
  let size = Math.random() * 20 + 20; // Kích thước 20px - 40px
  let opacity = Math.random() * 0.2 + 0.8; // Độ trong suốt 0.8 - 1

  sky.style.left = `${startPosX}px`;
  sky.style.width = `${size}px`;
  sky.style.height = `${size}px`;
  sky.style.opacity = opacity;

  sky.animate(
    [
      {
        transform: `translateY(${window.innerHeight + 50}px) rotate(0deg)`,
        opacity: opacity,
      }, // Bắt đầu từ dưới màn hình
      { transform: `translateY(-50px) rotate(0deg)`, opacity: 0.6 }, // Bay lên trên
    ],
    { duration: duration * 1000, easing: "linear" }
  );

  setTimeout(() => {
    sky.remove();
  }, duration * 1000);
}

setInterval(createBallon, 300); // Tạo hoa mỗi 300ms
//setInterval(createSky, 300); // Tạo hoa mỗi 300ms

function createFlyingElement(fromLeft) {
  const flying = document.createElement("div");
  flying.classList.add("flying");
  document.body.appendChild(flying);

  // Lấy vị trí bắt đầu từ phần tử cố định
  let startX = fromLeft ? 40 : window.innerWidth - 110; // Bên trái hoặc bên phải
  // Kiểm tra nếu là màn hình nhỏ (dưới 768px) thì set startX = 20
  let isMobile = window.innerWidth <= 768;
  if (isMobile) startX = fromLeft ? 5 : window.innerWidth - 100; // Bên trái hoặc bên phải
  let duration = Math.random() * 3 + 7; // 7 - 10 giây bay lên
  let size = Math.random() * 30 + 70; // 30px - 100px
  let opacity = Math.random() * 0.2 + 0.8; // 0.8 - 1
  let url = fromLeft ? 'url("image/sky.png")' : 'url("image/balloon.png")';

  flying.style.left = `${startX}px`;
  flying.style.bottom = `30px`; // Xuất hiện gần vị trí phần tử cố định
  flying.style.width = `${size}px`;
  flying.style.height = `${size}px`;
  flying.style.opacity = opacity;
  flying.style.background = `${url} no-repeat center`;
  flying.style.backgroundSize = "contain";
  flying.style.position = "absolute";

  flying.animate(
    [
      { transform: `translateY(0)`, opacity: opacity },
      { transform: `translateY(-${window.innerHeight}px)`, opacity: 0.6 },
    ],
    { duration: duration * 1000, easing: "linear" }
  );

  setTimeout(() => {
    flying.remove();
  }, duration * 1000);
}

// // Tạo hiệu ứng bay lên từ trái và phải luân phiên
// setInterval(() => createFlyingElement(true), 1000);  // Bên trái
// setInterval(() => createFlyingElement(false), 1000); // Bên phải

function startFlyingEffect() {
  // Chạy lần đầu sau 500ms
  setTimeout(() => {
    createFlyingElement(true); // Bên trái
    createFlyingElement(false); // Bên phải

    // Sau lần đầu, thiết lập setInterval để chạy mỗi 10s
    setInterval(() => {
      createFlyingElement(true);
      createFlyingElement(false);
    }, 10000); // 10 giây
  }, 500); // Chờ 500ms rồi chạy lần đầu
}

startFlyingEffect(); // Gọi hàm để bắt đầu hiệu ứng
