export const scrollToSection = (id: string) => {
  // const element = document.getElementById(id);
  // if (element) {
  //   element.scrollIntoView({
  //     block: "start",
  //     behavior: "smooth",
  //   });
  //   window.location.hash = `#${id}`;
  // }
  const element = document.getElementById(id);
  if (!element) return;
  // const elementPosition = element.getBoundingClientRect().top;
  // const offsetPosition = window.scrollY + elementPosition;
  //
  // // 현재 스크롤 위치와 대상 요소의 위치를 비교하여 스크롤 방향 결정
  // const currentScrollPosition = window.scrollY;
  // const scrollDirection = currentScrollPosition > offsetPosition ? 'up' : 'down';
  //
  // // 스크롤 애니메이션을 smooth하게 적용
  // console.log(scrollDirection, 's')
  // element.scrollIntoView({
  //   block: scrollDirection === 'up' ? 'end' : 'start',
  //   behavior: 'smooth',
  // });

  // URL hash 변경
  // window.location.hash = `#${id}`;
  const targetPosition = element.getBoundingClientRect().top + window.scrollY; // 목표 위치
  const startPosition = window.scrollY; // 현재 스크롤 위치
  const distance = targetPosition - startPosition; // 이동해야 할 거리
  const duration = 800; // 애니메이션 시간 (ms)
  let startTime: number|null = null;

  // 스크롤 애니메이션 함수
  const animateScroll = (currentTime:number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run); // 스크롤 위치 조정

    if (timeElapsed < duration) requestAnimationFrame(animateScroll); // 애니메이션 계속
  };

  // 부드러운 스크롤을 위한 ease 함수 (가속도 곡선)
  const ease = (t:number, b:number, c:number, d:number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // 애니메이션 시작
  requestAnimationFrame(animateScroll);
};