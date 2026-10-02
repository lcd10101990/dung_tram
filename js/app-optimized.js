'use strict';

// Cache DOM references
const config = window.WEDDING || {};
const elPreloader = document.getElementById('preloader');
const elBtnOpen = document.getElementById('btnOpenWeddingCard');
const elMenuToggle = document.getElementById('menuToggle');
const elMusicToggle = document.getElementById('musicToggle');
const elDrawer = document.getElementById('drawer');
const elHeroImg = document.getElementById('heroImg');
const elWishForm = document.getElementById('wishForm');
const elWishStatus = document.getElementById('wishStatus');
const elGalleryGrid = document.getElementById('galleryGrid');
const elBankModal = document.getElementById('bankModal');
const elOpenBankModal = document.getElementById('openBankModal');
const elCloseBankModal = document.getElementById('closeBankModal');
const elAudio = document.getElementById('weddingAudio');

// Google Photos Album ID từ URL
const GOOGLE_PHOTOS_ALBUM_ID = 'mNenmGehhXjgc3TJ9';
const GOOGLE_PHOTOS_API = `https://photos.app.goo.gl/${GOOGLE_PHOTOS_ALBUM_ID}`;

// Utility Functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const escapeHtml = (str) => {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
};

// ========== DATA BINDING ==========
const bindConfig = () => {
  const selectors = {
    '[data-groom]': 'groom',
    '[data-bride]': 'bride',
    '[data-short-names]': 'shortNames',
    '[data-date]': 'dateText',
    '[data-groom-parent]': 'groomParent',
    '[data-bride-parent]': 'brideParent',
    '[data-groom-address]': 'groomAddress',
    '[data-bride-address]': 'brideAddress',
    '[data-ceremony-time]': 'ceremonyTime',
    '[data-bride-party-date]': 'bridePartyDate',
    '[data-groom-party-date]': 'groomPartyDate',
    '[data-lunar0]': 'lunar0',
    '[data-lunar]': 'lunar'
  };

  Object.entries(selectors).forEach(([sel, key]) => {
    const els = document.querySelectorAll(sel);
    if (els.length && config[key]) {
      els.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = config[key];
        } else {
          el.innerHTML = config[key];
        }
      });
    }
  });

  // Set maps
  const mapBride = document.getElementById('brideMap');
  const mapGroom = document.getElementById('groomMap');
  if (mapBride && config.maps?.bride) mapBride.href = config.maps.bride;
  if (mapGroom && config.maps?.groom) mapGroom.href = config.maps.groom;

  // Set hero image
  if (elHeroImg && config.images?.cover) elHeroImg.src = config.images.cover;
};

// ========== GOOGLE PHOTOS GALLERY ==========
const loadGooglePhotosGallery = async () => {
  if (!elGalleryGrid) return;

  // Placeholder: Demonstrasi dengan ảnh từ Google Photos share link
  // Note: Google Photos public link tidak có API publik untuk fetch direct URLs
  // Sử dụng embedded gallery approach
  
  const albumUrl = GOOGLE_PHOTOS_API;
  const html = `
    <div style="width: 100%; height: 600px; overflow: hidden; border-radius: 12px;">
      <iframe 
        src="https://photos.app.goo.gl/${GOOGLE_PHOTOS_ALBUM_ID}/preview" 
        style="width: 100%; height: 100%; border: none; border-radius: 12px;"
        allow="autoplay"
        loading="lazy">
      </iframe>
    </div>
  `;
  
  elGalleryGrid.innerHTML = html;
};

// Fallback: Tải gallery mặc định nếu Google Photos không khả dụng
const loadDefaultGallery = () => {
  if (!elGalleryGrid) return;
  
  const galleryImages = config.images?.gallery || [
    'assets/gallery-01.jpg',
    'assets/gallery-02.jpg',
    'assets/gallery-03.jpg',
    'assets/gallery-04.jpg',
    'assets/gallery-05.jpg',
    'assets/gallery-06.jpg',
    'assets/gallery-07.jpg'
  ];

  const html = galleryImages.map((src, idx) => `
    <figure>
      <img 
        src="${escapeHtml(src)}" 
        alt="Album ảnh cưới ${idx + 1}"
        loading="lazy" 
        decoding="async"
        style="width:100%; height:100%; object-fit:cover;"
      >
    </figure>
  `).join('');

  elGalleryGrid.innerHTML = html;
};

// ========== MENU & DRAWER ==========
const setupMenuToggle = () => {
  if (!elMenuToggle || !elDrawer) return;

  elMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    elDrawer.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!elDrawer.contains(e.target) && !elMenuToggle.contains(e.target)) {
      elDrawer.classList.remove('open');
    }
  });

  elDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => elDrawer.classList.remove('open'));
  });
};

// ========== COUNTDOWN ==========
const setupCountdown = () => {
  const targets = [
    {
      time: new Date(2026, 7, 14, 9, 0, 0).getTime(),
      ids: ['cd-bride-days', 'cd-bride-hours', 'cd-bride-minutes', 'cd-bride-seconds']
    },
    {
      time: new Date(2026, 7, 20, 9, 0, 0).getTime(),
      ids: ['cd-groom-days', 'cd-groom-hours', 'cd-groom-minutes', 'cd-groom-seconds']
    }
  ];

  const ONE_DAY_MS = 86400000;
  const update = (t) => {
    const els = t.ids.map(id => document.getElementById(id)).filter(Boolean);
    if (els.some(e => !e)) return;
    if (isNaN(t.time)) return;

    const now = Date.now();
    let diff = t.time - now;

    if (diff < -ONE_DAY_MS) {
      els[0].textContent = '😔';
      els[1].textContent = 'đã';
      els[2].textContent = 'ra';
      els[3].textContent = '🎉';
      return;
    }

    if (diff <= 0) {
      els[0].textContent = 'Hôm';
      els[1].textContent = 'nay';
      els[2].textContent = 'rồi';
      els[3].textContent = '💕';
      return;
    }

    const d = Math.floor(diff / ONE_DAY_MS);
    diff %= ONE_DAY_MS;
    const h = Math.floor(diff / 3600000);
    diff %= 3600000;
    const m = Math.floor(diff / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    els[0].textContent = isNaN(d) ? '0' : d;
    els[1].textContent = String(h).padStart(2, '0');
    els[2].textContent = String(m).padStart(2, '0');
    els[3].textContent = String(s).padStart(2, '0');
  };

  targets.forEach(update);
  setInterval(() => targets.forEach(update), 1000);
};

// ========== BANK MODAL ==========
const setupBankModal = () => {
  if (!elBankModal || !elOpenBankModal || !elCloseBankModal) return;

  elOpenBankModal.addEventListener('click', () => {
    elBankModal.classList.add('active');
  });

  elCloseBankModal.addEventListener('click', () => {
    elBankModal.classList.remove('active');
  });

  elBankModal.addEventListener('click', (e) => {
    if (e.target === elBankModal) elBankModal.classList.remove('active');
  });

  // Tab switching
  const tabBtns = elBankModal.querySelectorAll('.bank-tab-btn');
  const tabContents = elBankModal.querySelectorAll('.bank-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${tab}`)?.classList.add('active');
    });
  });
};

// ========== WISHES FORM & LIST ==========
const fetchWishes = async () => {
  const listBox = document.getElementById('wishListBox');
  if (!listBox) return;

  try {
    const res = await fetch(config.wishEndpoint || '', { method: 'GET' });
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      listBox.innerHTML = '<div style="text-align:center; color:#8e756b; padding:20px;">Chưa có lời chúc nào. Hãy gửi lời chúc đầu tiên!</div>';
      return;
    }

    listBox.innerHTML = data.map(item => `
      <div class="wish-item">
        <div class="wish-item-name">${escapeHtml(item.name || 'Khách')}</div>
        <div class="wish-item-msg">${escapeHtml(item.message || '')}</div>
      </div>
    `).join('');
  } catch (err) {
    console.error('Lỗi khi tải lời chúc:', err);
    listBox.innerHTML = '<div style="text-align:center; color:#8e756b; padding:20px;">Không thể tải danh sách lời chúc.</div>';
  }
};

const setupWishForm = () => {
  if (!elWishForm) return;

  elWishForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const honeypot = elWishForm.querySelector('[name="website"]');
    if (honeypot?.value) return;

    const nameInput = elWishForm.querySelector('[name="name"]');
    const msgInput = elWishForm.querySelector('[name="message"]');

    if (!nameInput?.value.trim() || !msgInput?.value.trim()) return;

    const payload = {
      name: nameInput.value.trim(),
      message: msgInput.value.trim()
    };

    const submitBtn = elWishForm.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'ĐANG GỬI...';
    }

    try {
      const res = await fetch(config.wishEndpoint || '', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      if (elWishStatus) {
        elWishStatus.textContent = '💕 Cảm ơn bạn đã gửi lời chúc!';
        elWishStatus.style.color = '#9f5f57';
      }
      nameInput.value = '';
      msgInput.value = '';
      setTimeout(() => fetchWishes(), 1500);
    } catch (err) {
      console.error('Lỗi gửi lời chúc:', err);
      if (elWishStatus) {
        elWishStatus.textContent = '❌ Có lỗi xảy ra, vui lòng thử lại!';
        elWishStatus.style.color = '#d9534f';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'GỬI LỜI CHÚC';
      }
      setTimeout(() => {
        if (elWishStatus) elWishStatus.textContent = '';
      }, 4000);
    }
  });

  fetchWishes();
};

// ========== REVEAL ON SCROLL (Intersection Observer) ==========
const setupRevealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-top, .reveal-bottom');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => entry.target.classList.add('active'));
      } else {
        // Optional: remove class khi scroll ra khỏi vùng nhìn thấy
        // entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-100px 0px -160px 0px'
  });

  reveals.forEach(el => observer.observe(el));
};

// ========== MUSIC TOGGLE ==========
const setupMusicToggle = () => {
  if (!elMusicToggle || !elAudio) return;

  elMusicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (elAudio.paused) {
      elAudio.play().then(() => {
        elMusicToggle.classList.add('playing');
        elMusicToggle.textContent = '⏸';
      }).catch(() => console.log('Không thể phát nhạc'));
    } else {
      elAudio.pause();
      elMusicToggle.classList.remove('playing');
      elMusicToggle.textContent = '♪';
    }
  });
};

// ========== PRELOADER & CARD OPEN ==========
const setupPreloader = () => {
  if (!elBtnOpen || !elPreloader) return;

  elBtnOpen.addEventListener('click', (e) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
    document.body.classList.add('card-opened');

    if (elPreloader) {
      elPreloader.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
      elPreloader.style.opacity = '0';
      elPreloader.style.visibility = 'hidden';
      setTimeout(() => elPreloader.remove(), 500);
    }

    if (elAudio) {
      elAudio.play().catch(() => console.log('Auto-play music blocked'));
    }

    // Auto scroll after delay
    setTimeout(() => {
      let scrollPos = 0;
      const scroll = () => {
        if (scrollPos >= window.innerHeight) return;
        scrollPos += 1.8;
        window.scrollBy(0, 1.8);
        requestAnimationFrame(scroll);
      };
      scroll();
    }, 400);
  });
};

// ========== INIT ==========
const init = () => {
  bindConfig();
  setupMenuToggle();
  setupCountdown();
  setupBankModal();
  setupWishForm();
  setupRevealOnScroll();
  setupMusicToggle();
  setupPreloader();
  
  // Load gallery - prioritize Google Photos, fallback to default
  loadGooglePhotosGallery().catch(() => loadDefaultGallery());

  // Create audio element if not exists
  if (!document.getElementById('weddingAudio')) {
    const audio = document.createElement('audio');
    audio.id = 'weddingAudio';
    audio.src = 'music/wedding.mp3';
    audio.loop = true;
    audio.preload = 'auto';
    document.body.appendChild(audio);
  }
};

// Run init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
