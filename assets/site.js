// Copy buttons, scroll reveals, and the SUPER DESKTOP clip that plays only
// while it is on screen (never with reduced motion).
document.documentElement.classList.add('js');

for (const button of document.querySelectorAll('.cmd .copy')) {
  button.addEventListener('click', async () => {
    const text = button.parentElement.querySelector('code').textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(button.parentElement.querySelector('code'));
      getSelection().removeAllRanges();
      getSelection().addRange(range);
      button.textContent = 'Selected';
    }
    button.classList.add('done');
    setTimeout(() => { button.textContent = 'Copy'; button.classList.remove('done'); }, 1600);
  });
}

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add('in'); reveal.unobserve(entry.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

  const video = document.querySelector('video.shot');
  if (video && !reduced) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { video.preload = 'auto'; video.play().catch(() => {}); } else video.pause();
    }, { threshold: 0.35 }).observe(video);
  } else if (video) {
    video.controls = true;
  }
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}
