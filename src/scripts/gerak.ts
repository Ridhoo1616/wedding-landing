// Gerak saat menggulir: elemen .muncul/.tirai tampil ketika masuk layar,
// [data-paralaks] bergeser pelan, dan kata pada [data-kata] menyala bergiliran.

const redam = matchMedia('(prefers-reduced-motion: reduce)').matches;

function mulai() {
  const pengamat = new IntersectionObserver(
    (entri) => {
      for (const e of entri) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('tampak');
        pengamat.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  document.querySelectorAll('.muncul, .tirai').forEach((el) => pengamat.observe(el));

  if (redam) return;

  const paralaks = [...document.querySelectorAll<HTMLElement>('[data-paralaks]')];
  const kalimat = [...document.querySelectorAll<HTMLElement>('[data-kata]')].map((el) => ({
    el,
    kata: [...el.children] as HTMLElement[],
  }));

  let antre = false;
  const bingkai = () => {
    antre = false;
    const t = innerHeight;
    for (const el of paralaks) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > t + 200) continue;
      const tengah = r.top + r.height / 2 - t / 2;
      el.style.transform = `translate3d(0, ${tengah * Number(el.dataset.paralaks)}px, 0)`;
    }
    for (const { el, kata } of kalimat) {
      const r = el.getBoundingClientRect();
      // 0 saat kalimat baru masuk dari bawah, 1 saat sampai sepertiga atas layar.
      const p = Math.min(1, Math.max(0, (t * 0.85 - r.top) / (t * 0.85 - t * 0.3 + r.height * 0.4)));
      const batas = Math.round(p * kata.length);
      kata.forEach((k, i) => k.classList.toggle('nyala', i < batas));
    }
  };
  const minta = () => {
    if (!antre) {
      antre = true;
      requestAnimationFrame(bingkai);
    }
  };
  addEventListener('scroll', minta, { passive: true });
  addEventListener('resize', minta);
  bingkai();
}

// Tunggu sampul dibuka agar animasi di bagian atas tidak terjadi di balik sampul.
if (document.getElementById('sampul')) document.addEventListener('undangan:dibuka', () => setTimeout(mulai, 450), { once: true });
else mulai();
