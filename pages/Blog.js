/**
 * Dentistry / Blog page
 * Frontend-only: all nine posts are static examples from the original HTML.
 * Only this page's CSS is imported. No API calls are performed.
 */


const posts = [
  {
    "slug": "choosing-the-best-toothbrush-for-you",
    "title": "Choosing the Best Toothbrush for You",
    "date": "August 12, 2024",
    "dateISO": "2024-08-12",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5304ee17851a5ac9a8d1_blog%20image%20%281%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5304ee17851a5ac9a8d1_blog%20image%20%281%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5304ee17851a5ac9a8d1_blog%20image%20%281%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5304ee17851a5ac9a8d1_blog%20image%20%281%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5304ee17851a5ac9a8d1_blog%20image%20%281%29.webp 1400w"
  },
  {
    "slug": "benefits-of-regular-dental-checkups",
    "title": "Benefits of Regular Dental Checkups",
    "date": "July 22, 2024",
    "dateISO": "2024-07-22",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a531fc2ab95ad998300ed_blog%20image%20%282%29.webp",
    "imageSrcSet": ""
  },
  {
    "slug": "the-importance-of-flossing-regularly",
    "title": "The Importance of Flossing Regularly",
    "date": "February 3, 2024",
    "dateISO": "2024-02-03",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a533da12ed088b9914efe_blog%20image%20%283%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a533da12ed088b9914efe_blog%20image%20%283%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a533da12ed088b9914efe_blog%20image%20%283%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a533da12ed088b9914efe_blog%20image%20%283%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a533da12ed088b9914efe_blog%20image%20%283%29.webp 1400w"
  },
  {
    "slug": "teeth-brushing-you-might-want-to-avoid",
    "title": "Teeth Brushing You Might Want to Avoid",
    "date": "June 10, 2024",
    "dateISO": "2024-06-10",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a535bc2ab95ad9983363c_blog%20image%20%284%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a535bc2ab95ad9983363c_blog%20image%20%284%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a535bc2ab95ad9983363c_blog%20image%20%284%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a535bc2ab95ad9983363c_blog%20image%20%284%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a535bc2ab95ad9983363c_blog%20image%20%284%29.webp 1400w"
  },
  {
    "slug": "natural-ways-to-whiten-teeth-in-a-healthy-way",
    "title": "Natural ways to whiten teeth in a healthy way",
    "date": "May 25, 2024",
    "dateISO": "2024-05-25",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a53cf0e3c157f6e1fa3f0_blog%20image%20%285%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a53cf0e3c157f6e1fa3f0_blog%20image%20%285%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a53cf0e3c157f6e1fa3f0_blog%20image%20%285%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a53cf0e3c157f6e1fa3f0_blog%20image%20%285%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a53cf0e3c157f6e1fa3f0_blog%20image%20%285%29.webp 1400w"
  },
  {
    "slug": "the-complete-guide-to-dead-teeth",
    "title": "The Complete Guide to Dead Teeth",
    "date": "January 30, 2024",
    "dateISO": "2024-01-30",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a540c9da3b01fd9958a20_blog%20image%20%286%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a540c9da3b01fd9958a20_blog%20image%20%286%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a540c9da3b01fd9958a20_blog%20image%20%286%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a540c9da3b01fd9958a20_blog%20image%20%286%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a540c9da3b01fd9958a20_blog%20image%20%286%29.webp 1400w"
  },
  {
    "slug": "how-to-care-for-your-smile-daily",
    "title": "How to Care for Your Smile Daily",
    "date": "August 1, 2024",
    "dateISO": "2024-08-01",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a542f8fecaf93e4d73591_blog%20image%20%287%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a542f8fecaf93e4d73591_blog%20image%20%287%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a542f8fecaf93e4d73591_blog%20image%20%287%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a542f8fecaf93e4d73591_blog%20image%20%287%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a542f8fecaf93e4d73591_blog%20image%20%287%29.webp 1400w"
  },
  {
    "slug": "how-to-fix-a-loose-adult-tooth",
    "title": "How to Fix a Loose Adult Tooth",
    "date": "September 11, 2024",
    "dateISO": "2024-09-11",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5447ee17851a5aca9118_blog%20image%20%288%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5447ee17851a5aca9118_blog%20image%20%288%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5447ee17851a5aca9118_blog%20image%20%288%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5447ee17851a5aca9118_blog%20image%20%288%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a5447ee17851a5aca9118_blog%20image%20%288%29.webp 1400w"
  },
  {
    "slug": "chewing-gum-and-oral-health-benefits",
    "title": "Chewing Gum and Oral Health Benefits",
    "date": "November 15, 2024",
    "dateISO": "2024-11-15",
    "image": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a545d8722c15e01f141ff_blog%20image%20%289%29.webp",
    "imageSrcSet": "https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a545d8722c15e01f141ff_blog%20image%20%289%29-p-500.webp 500w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a545d8722c15e01f141ff_blog%20image%20%289%29-p-800.webp 800w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a545d8722c15e01f141ff_blog%20image%20%289%29-p-1080.webp 1080w, https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/676a545d8722c15e01f141ff_blog%20image%20%289%29.webp 1400w"
  }
];

// Escape content when rendering text/attributes (also ready for eventual API data).
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

function renderPost(post) {
  const url = `/post/${encodeURIComponent(post.slug)}`;
  return `
    <div role="listitem" class="w-dyn-item">
      <a href="${url}" class="blog-one-link w-inline-block" aria-label="Read article: ${escapeHTML(post.title)}">
        <div class="blog-one-image-block">
          <img
            src="${escapeHTML(post.image)}"
            ${post.imageSrcSet ? `srcset="${escapeHTML(post.imageSrcSet)}" sizes="(max-width: 640px) 94vw, (max-width: 991px) 47vw, 33vw"` : ''}
            alt="${escapeHTML(post.title)}"
            loading="lazy"
            decoding="async"
            class="blog-one-image"
          />
        </div>
        <div class="blog-date-block-one">
          <time datetime="${escapeHTML(post.dateISO)}" class="blog-month-text one">${escapeHTML(post.date)}</time>
        </div>
        <div class="blog-title-block">
          <h2 class="blog-name">${escapeHTML(post.title)}</h2>
        </div>
      </a>
    </div>`;
}

export function Blog() {
  return `
    <div class="dentistry-blog-page">
      <section class="section breadcrumb-section" aria-label="Breadcrumb">
        <div class="w-layout-blockcontainer container-fluid w-container">
          <div class="breadcrumb-block two">
            <div class="w-layout-blockcontainer container w-container">
              <div class="breadcrumb-main-title-block">
                <div class="breadcrumb-title-block"><h1 class="breadcrumb-title">blog</h1></div>
                <div class="breadcrumb-subtext-block">
                  <a class="breadcrumb-subtext" href="/">home</a>
                  <span class="breadcrumb-subtext" aria-hidden="true">-</span>
                  <span class="breadcrumb-subtext" aria-current="page">blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section blog-section-one" aria-labelledby="blog-section-heading">
        <div class="w-layout-blockcontainer container w-container">
          <div class="blog-one-main-block">
            <div class="section-title-main-block">
              <div class="section-title-sub-text-block"><div class="section-sub-text">latest updated</div></div>
              <div class="section-title-grid"><h2 id="blog-section-heading" class="section-title">Find the Latest News and Updates Here.</h2></div>
            </div>
            <div class="w-dyn-list">
              <div role="list" class="blog-one-list w-dyn-items">
                ${posts.map(renderPost).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`;
}

// No component-side event handlers needed: the existing SPA router handles links.
export function initBlog() {
  return () => {};
}
