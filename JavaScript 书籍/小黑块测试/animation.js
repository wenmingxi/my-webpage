document.addEventListener('DOMContentLoaded', () => {
  const numCircles = 10;
  const circles = [];
  const speed = 2;

  function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${Math.random() * 50 + 20}px`;
    circle.style.height = circle.style.width;
    circle.style.backgroundColor = getRandomColor();
    circle.style.left = `${Math.random() * window.innerWidth}px`;
    circle.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(circle);
    circles.push({
      element: circle,
      angle: Math.random() * 360,
      radius: Math.random() * 100 + 50,
      centerX: Math.random() * window.innerWidth,
      centerY: Math.random() * window.innerHeight
    });
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function animate() {
    circles.forEach(circle => {
      circle.angle += speed;
      const radians = circle.angle * (Math.PI / 180);
      circle.element.style.left = `${circle.centerX + circle.radius * Math.cos(radians)}px`;
      circle.element.style.top = `${circle.centerY + circle.radius * Math.sin(radians)}px`;

      // 每帧随机改变颜色和大小
      if (Math.random() > 0.98) {
        circle.element.style.backgroundColor = getRandomColor();
        const size = Math.random() * 50 + 20;
        circle.element.style.width = `${size}px`;
        circle.element.style.height = `${size}px`;
      }
    });

    requestAnimationFrame(animate);
  }

  for (let i = 0; i < numCircles; i++) {
    createCircle();
  }

  animate();
});
