const sampleArticles = [
  {
    id: "small-models-big-shifts",
    title: "The next AI race might be won on a laptop",
    description: "Smaller models are changing the economics of experimentation, bringing capable tools closer to the people who use them.",
    category: "AI & Society",
    author: "Mara Ellison",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Abstract illuminated neural network representing machine learning",
    readTime: 6,
    featured: true,
    body: [
      "For a while, progress in artificial intelligence was told as a story of scale: more data, more compute, larger systems. A quieter shift is now drawing attention to a different question. What becomes possible when useful models can run closer to the person asking the question?",
      "Compact models can make experimentation less dependent on a cloud connection and a large infrastructure budget. That changes the shape of product work, too. Teams can test ideas in private environments, keep sensitive material on-device, and tune a tool around a narrower task instead of asking one system to do everything.",
      "There are trade-offs. Smaller systems can be less capable on complex tasks, and running locally does not remove the need to examine data provenance, evaluation, or energy use. But the design space grows when cost and latency fall. The interesting question is no longer simply how large a model can become, but where intelligence is most useful when it is available in more places."
    ],
    demo: true
  },
  {
    id: "interfaces-that-listen",
    title: "When software starts listening, design has to catch up",
    description: "Voice interfaces promise less friction. The best ones may be the systems that know when not to speak.",
    category: "Product & Design",
    author: "Jules Okafor",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Microphone in a softly lit recording studio",
    readTime: 5,
    body: [
      "Talking to software feels natural right up until it does not. A voice interface has to make turn-taking, privacy, and recovery legible in ways that a row of buttons rarely does. Those are design decisions, not just speech-recognition problems.",
      "A useful assistant gives a clear signal when it is listening and an equally clear one when it has stopped. It lets people correct a misunderstanding without starting over. It also offers a quieter route when speaking aloud is awkward or unsafe.",
      "The strongest voice experiences will not replace every screen. They will make room for more ways to interact, with controls that let people choose when a conversation is welcome."
    ],
    demo: true
  },
  {
    id: "the-data-center-question",
    title: "The AI conversation is also an energy conversation",
    description: "As demand for computation grows, more teams are asking what their systems cost beyond the cloud bill.",
    category: "Climate & Compute",
    author: "Theo Park",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Rows of illuminated server racks in a data center",
    readTime: 7,
    body: [
      "Every digital service has a physical footprint. For AI products, that footprint includes the machines used to train and serve models, the cooling systems around them, and the electricity that keeps the whole stack running.",
      "Measuring that impact is harder than it sounds. A single number can obscure where energy came from, what workload it supported, or how often a model was called. Better reporting starts by making those boundaries explicit and comparing like with like.",
      "Efficiency remains valuable, but it does not settle the broader question of demand. Teams can also decide which tasks need a large model, how long data should be retained, and whether a computation needs to happen at all. Those choices belong in product design as much as infrastructure planning."
    ],
    demo: true
  },
  {
    id: "open-tools-shared-work",
    title: "Open tools are making room for a different kind of AI lab",
    description: "A more distributed ecosystem invites new contributors, and asks harder questions about stewardship.",
    category: "Research",
    author: "Nina Solberg",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Researchers collaborating around a table with laptops",
    readTime: 8,
    body: [
      "Research communities have always depended on shared tools: papers, datasets, code, and the conversations that connect them. A growing collection of openly available models adds another layer to that exchange.",
      "Access can make it easier for independent teams to reproduce results and explore questions that might otherwise remain out of reach. It can also shift attention toward maintenance, documentation, and the people who make a project usable after its first release.",
      "Openness is not a single switch. Licenses, training data, compute requirements, and evaluation practices each shape who can participate. Treating those details as part of the research record makes shared work more durable."
    ],
    demo: true
  },
  {
    id: "careful-automation",
    title: "Automation works better when people can see its edges",
    description: "A thoughtful handoff is more than a fallback: it is part of the product promise.",
    category: "AI & Society",
    author: "Mara Ellison",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "A small team discussing work together",
    readTime: 4,
    body: [
      "Automation is often introduced as a way to make work disappear. In practice, the most reliable systems make the boundary between machine assistance and human judgment easier to understand.",
      "That boundary can be visible in the interface: a draft that is clearly a draft, a confidence signal that is explained rather than decorative, or a review step placed where the consequences justify it.",
      "When people know what a system can and cannot do, they can use it with intention. Good handoffs are not evidence that automation failed. They are evidence that a team considered the full workflow."
    ],
    demo: true
  },
  {
    id: "search-after-chat",
    title: "What comes after the chat box? Better ways to find an answer",
    description: "Conversational search is only one possible interface for exploring a large body of information.",
    category: "Product & Design",
    author: "Jules Okafor",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "A view of Earth and satellite networks from orbit",
    readTime: 5,
    body: [
      "A chat box is an inviting starting point, but it can make exploration feel like a sequence of hidden steps. A useful answer may depend on seeing the sources, comparing alternatives, or noticing what is missing.",
      "Interfaces can pair a short synthesis with clear paths into the material behind it. Filters, timelines, and side-by-side views give people more control over the shape of a search without requiring a perfect prompt.",
      "The design opportunity is not to make every tool conversational. It is to match the interface to the kind of thinking someone is doing, and make the route from question to evidence easy to follow."
    ],
    demo: true
  },
  {
    id: "measuring-what-matters",
    title: "A model benchmark is not the same thing as a product test",
    description: "Evaluation becomes more useful when it reflects the real conditions in which a system will be used.",
    category: "Research",
    author: "Theo Park",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Hands reviewing charts and notes beside a laptop",
    readTime: 6,
    body: [
      "Benchmarks help researchers compare systems against a shared set of tasks. They are less suited to answering whether a particular product is useful, understandable, or safe for the people who will depend on it.",
      "A product evaluation can include latency, failure recovery, language coverage, accessibility, and the ways people adapt a tool over time. It can also reveal when a model's impressive score has little bearing on the task at hand.",
      "The work is less tidy than a leaderboard, but it creates better feedback. Teams can connect evaluation to a real decision and revisit it as the product, audience, and surrounding context change."
    ],
    demo: true
  },
  {
    id: "a-more-useful-ai-literacy",
    title: "AI literacy starts with knowing what question to ask",
    description: "Understanding a tool's limits is practical knowledge, not a specialist subject.",
    category: "AI & Society",
    author: "Nina Solberg",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Students learning together in a bright classroom",
    readTime: 5,
    body: [
      "AI literacy is often framed as a list of technical concepts. For many people, the most useful knowledge is more immediate: what a tool is designed to do, what information it receives, and how to check the result.",
      "Those questions help people recognize when a system is a good fit and when another source of expertise matters. They also make it easier to talk about the trade-offs involved in using a tool at work, at school, or in daily life.",
      "Learning to ask better questions does not require becoming a machine-learning engineer. It does require clear explanations, opportunities to experiment, and space to notice when an answer deserves a second look."
    ],
    demo: true
  }
];

const categories = ["AI & Society", "Product & Design", "Climate & Compute", "Research"];
const savedKey = "signal-field-bookmarks";
const themeKey = "signal-field-theme";
let articles = [...sampleArticles];
let liveAvailable = false;
let liveError = "";
let activeRoute = "home";
let activeQuery = "";
let currentPage = 1;
let selectedCategory = "All topics";
let bookmarks = readStored(savedKey, []);
let theme = readStored(themeKey, "light");

function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function routeFromHash() {
  const [path = "", query = ""] = location.hash.replace(/^#\/?/, "").split("?");
  const params = new URLSearchParams(query);
  activeQuery = params.get("q") || "";
  selectedCategory = params.get("category") || "All topics";
  currentPage = Math.max(1, Number(params.get("page") || 1));
  if (path.startsWith("article/")) return { name: "article", slug: path.slice(8) };
  return { name: path || "home" };
}

function updateTheme() {
  document.documentElement.dataset.theme = theme;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = theme === "dark" ? "#161a18" : "#f2f2ed";
}

function sourceLabel(article) {
  return article.demo ? "Illustrative edition" : escapeHTML(article.source?.name || "News source");
}

function articleCard(article, index = 0, featured = false) {
  const saved = bookmarks.includes(article.id);
  const image = article.image || "";
  const category = escapeHTML(article.category || "Technology");
  const title = escapeHTML(article.title);
  const description = escapeHTML(article.description || "Open the story for more context.");
  return `<article class="story-card ${featured ? "story-card-featured" : ""}" style="--card-order:${index}">
    <a class="story-image-link" href="#/article/${encodeURIComponent(article.id)}" aria-label="Read: ${title}">
      <img class="story-image" src="${escapeHTML(image)}" alt="${escapeHTML(article.imageAlt || article.title)}" loading="lazy" onerror="this.classList.add('image-unavailable');this.removeAttribute('src')">
      <span class="image-index">${String(index + 1).padStart(2, "0")}</span>
    </a>
    <div class="story-card-copy">
      <div class="story-card-top"><a class="category-link" href="#/categories?category=${encodeURIComponent(article.category || "All topics")}">${category}</a><button class="bookmark-button ${saved ? "is-saved" : ""}" type="button" data-bookmark="${escapeHTML(article.id)}" aria-label="${saved ? "Remove bookmark" : "Bookmark article"}" aria-pressed="${saved}"><span aria-hidden="true">${saved ? "★" : "☆"}</span><span class="bookmark-text">${saved ? "Saved" : "Save"}</span></button></div>
      <h3><a href="#/article/${encodeURIComponent(article.id)}">${title}</a></h3>
      <p>${description}</p>
      <div class="story-meta"><span>${escapeHTML(article.author || article.source?.name || "Signal / Field")}</span><span>${article.readTime ? `${article.readTime} min read` : formatDate(article.publishedAt)}</span></div>
    </div>
  </article>`;
}

function formatDate(value) {
  if (!value) return "Demo edition";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Demo edition";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date);
}

function siteHeader() {
  const links = [["Latest", "latest"], ["Trending", "trending"], ["Topics", "categories"], ["About", "about"]];
  return `<header class="site-header"><div class="header-main shell">
    <a class="wordmark" href="#/" aria-label="Signal / Field home"><span class="wordmark-mark">S<span>F</span></span><span class="wordmark-name">SIGNAL <i>/</i> FIELD</span></a>
    <nav class="desktop-nav" aria-label="Main navigation">${links.map(([label, path]) => `<a href="#/${path}" class="${activeRoute === path ? "active" : ""}">${label}</a>`).join("")}</nav>
    <div class="header-actions"><form class="header-search" role="search"><label class="visually-hidden" for="site-search">Search stories</label><input id="site-search" name="q" type="search" placeholder="Search stories" value="${activeRoute === "search" ? escapeHTML(activeQuery) : ""}"><button type="submit" aria-label="Search">⌕</button></form><button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch to ${theme === "dark" ? "light" : "dark"} theme" title="Switch theme"><span aria-hidden="true">${theme === "dark" ? "☼" : "◐"}</span></button><a class="saved-link" href="#/bookmarks" aria-label="Saved stories">Saved <span>${bookmarks.length}</span></a></div>
  </div><div class="mobile-nav"><nav class="shell" aria-label="Mobile navigation">${links.slice(0, 3).map(([label, path]) => `<a href="#/${path}" class="${activeRoute === path ? "active" : ""}">${label}</a>`).join("")}<a href="#/bookmarks" class="${activeRoute === "bookmarks" ? "active" : ""}">Saved ${bookmarks.length ? `<span>${bookmarks.length}</span>` : ""}</a></nav></div></header>`;
}

function editionNote() {
  return liveAvailable
    ? `<div class="edition-note live-note"><span class="status-dot"></span> LIVE COVERAGE <span class="note-divider">/</span> Stories provided by NewsAPI</div>`
    : `<div class="edition-note"><span class="status-dot demo-dot"></span> ILLUSTRATIVE EDITION <span class="note-divider">/</span> Sample stories, not live news${liveError ? ` <span class="note-error">${escapeHTML(liveError)}</span>` : ""}</div>`;
}

function storyGrid(items, className = "story-grid") {
  return items.length ? `<div class="${className}">${items.map((item, index) => articleCard(item, index)).join("")}</div>` : `<div class="empty-state"><span class="empty-symbol">—</span><h2>No stories here yet</h2><p>Try another topic or come back for the next edition.</p><a class="text-link" href="#/latest">Browse the latest <span aria-hidden="true">→</span></a></div>`;
}

function homeView() {
  const featured = articles.find((item) => item.featured) || articles[0];
  const rest = articles.filter((item) => item.id !== featured?.id).slice(0, 3);
  const trending = articles.slice(1, 4);
  return `<main id="main" class="page-enter"><section class="home-intro shell"><div class="intro-kicker">THE EDITION <span>NO. 014</span></div><div class="intro-main"><h1>Better questions<br>for a <em>changing world.</em></h1><p>Independent reporting and considered perspectives on artificial intelligence, emerging technology, and what they mean for us.</p></div><div class="intro-foot"><span>TECHNOLOGY, WITH CONTEXT</span><span>VOL. 01 &nbsp; / &nbsp; ${new Date().getFullYear()}</span></div></section>
  <div class="shell">${editionNote()}</div>
  <section class="feature-section shell"><div class="section-heading"><div><span class="eyebrow">THE LEAD STORY</span><h2>One idea, a little deeper.</h2></div><a class="text-link" href="#/latest">All stories <span aria-hidden="true">→</span></a></div>
    <article class="lead-story"><a href="#/article/${encodeURIComponent(featured.id)}" class="lead-image-link"><img src="${escapeHTML(featured.image)}" alt="${escapeHTML(featured.imageAlt || featured.title)}" onerror="this.classList.add('image-unavailable');this.removeAttribute('src')"><span class="lead-image-label">${featured.demo ? "FIELD NOTE / SAMPLE" : "LATEST REPORT"}</span></a><div class="lead-copy"><div class="lead-kicker"><span>${escapeHTML(featured.category)}</span><span>${featured.readTime || 6} MIN READ</span></div><h2><a href="#/article/${encodeURIComponent(featured.id)}">${escapeHTML(featured.title)}</a></h2><p>${escapeHTML(featured.description)}</p><div class="lead-byline"><span class="byline-avatar">${escapeHTML((featured.author || "S").split(" ").map((part) => part[0]).join("").slice(0, 2))}</span><span>Words by <strong>${escapeHTML(featured.author || "Signal / Field")}</strong><small>${sourceLabel(featured)}</small></span><button class="bookmark-button ${bookmarks.includes(featured.id) ? "is-saved" : ""}" type="button" data-bookmark="${escapeHTML(featured.id)}" aria-label="${bookmarks.includes(featured.id) ? "Remove bookmark" : "Bookmark article"}" aria-pressed="${bookmarks.includes(featured.id)}"><span aria-hidden="true">${bookmarks.includes(featured.id) ? "★" : "☆"}</span><span class="bookmark-text">${bookmarks.includes(featured.id) ? "Saved" : "Save"}</span></button></div></div></article>
  </section>
  <section class="latest-section shell"><div class="section-heading"><div><span class="eyebrow">FRESH PERSPECTIVES</span><h2>Latest stories</h2></div><a class="text-link" href="#/latest">View all <span aria-hidden="true">→</span></a></div>${storyGrid(rest, "story-grid home-grid")}</section>
  <section class="trending-band"><div class="shell"><div class="section-heading"><div><span class="eyebrow">ON OUR RADAR</span><h2>Worth your attention.</h2></div><a class="text-link" href="#/trending">Explore the selection <span aria-hidden="true">→</span></a></div><div class="trending-list">${trending.map((item, index) => `<a class="trending-row" href="#/article/${encodeURIComponent(item.id)}"><span class="trending-number">0${index + 1}</span><span class="trending-category">${escapeHTML(item.category)}</span><span class="trending-title">${escapeHTML(item.title)}</span><span class="trending-arrow" aria-hidden="true">↗</span></a>`).join("")}</div></div></section>
  ${newsletterSection()}</main>`;
}

function pagination(totalPages) {
  if (totalPages <= 1) return "";
  return `<nav class="pagination" aria-label="Story pages"><button type="button" data-page="${currentPage - 1}" ${currentPage <= 1 ? "disabled" : ""} aria-label="Previous page">←</button><span>0${currentPage} <i>/</i> 0${totalPages}</span><button type="button" data-page="${currentPage + 1}" ${currentPage >= totalPages ? "disabled" : ""} aria-label="Next page">→</button></nav>`;
}

function listingView(kind) {
  const perPage = 6;
  let items = [...articles];
  let title = "Latest stories";
  let eyebrow = "THE FULL PICTURE";
  let intro = "New perspectives on the technologies shaping daily life.";
  if (kind === "trending") {
    title = "On the radar";
    eyebrow = "A CONSIDERED SELECTION";
    intro = "Stories selected by our editors for the questions they raise. No popularity scores, just ideas worth staying with.";
    items = articles.slice(1, 7);
  }
  if (kind === "categories") {
    title = selectedCategory === "All topics" ? "Explore by topic" : selectedCategory;
    eyebrow = "FOLLOW YOUR CURIOSITY";
    intro = "Choose a beat, find a new angle, follow the thread.";
    if (selectedCategory !== "All topics") items = items.filter((item) => item.category === selectedCategory);
  }
  if (kind === "search") {
    title = activeQuery ? `Results for “${activeQuery}”` : "Search the edition";
    eyebrow = "FIND YOUR THREAD";
    intro = activeQuery ? "Stories and perspectives from across the edition." : "Search stories, topics, and ideas.";
    const query = activeQuery.toLowerCase();
    items = query ? items.filter((item) => `${item.title} ${item.description} ${item.category} ${item.author}`.toLowerCase().includes(query)) : [];
  }
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const pageItems = items.slice((currentPage - 1) * perPage, currentPage * perPage);
  return `<main id="main" class="shell page-enter listing-page"><div class="page-heading"><span class="eyebrow">${eyebrow}</span><h1>${escapeHTML(title)}</h1><p>${escapeHTML(intro)}</p></div>${kind === "categories" ? `<div class="topic-filter" role="group" aria-label="Filter by topic">${["All topics", ...categories].map((category) => `<a class="topic-chip ${selectedCategory === category ? "selected" : ""}" href="#/categories${category === "All topics" ? "" : `?category=${encodeURIComponent(category)}`}" ${selectedCategory === category ? 'aria-current="page"' : ""}>${escapeHTML(category)}</a>`).join("")}</div>` : ""}${kind === "search" && !activeQuery ? `<form class="large-search"><label for="page-search">What are you curious about?</label><div><input id="page-search" name="q" type="search" placeholder="Try “design”, “climate”, or “research”"><button type="submit">Search <span aria-hidden="true">→</span></button></div></form>` : ""}${editionNote()}${storyGrid(pageItems)}${kind !== "trending" ? pagination(totalPages) : ""}</main>`;
}

function detailView(slug) {
  const article = articles.find((item) => item.id === decodeURIComponent(slug));
  if (!article) return `<main id="main" class="shell page-enter"><div class="empty-state"><span class="empty-symbol">404</span><h1>That story has moved.</h1><a class="text-link" href="#/latest">Back to the edition <span aria-hidden="true">→</span></a></div></main>`;
  const paragraphs = article.body?.length ? article.body : [article.description || "Open the original source for the full article."];
  const related = articles.filter((item) => item.id !== article.id && item.category === article.category).slice(0, 3);
  const canonicalUrl = article.url || location.href;
  const shareUrl = encodeURIComponent(canonicalUrl);
  const shareTitle = encodeURIComponent(article.title);
  document.title = `${article.title} — Signal / Field`;
  return `<main id="main" class="article-page page-enter"><article><header class="article-header shell"><a class="back-link" href="#/latest"><span aria-hidden="true">←</span> BACK TO THE EDITION</a>${editionNote()}<div class="article-heading"><a class="category-link" href="#/categories?category=${encodeURIComponent(article.category || "All topics")}">${escapeHTML(article.category || "Technology")}</a><h1>${escapeHTML(article.title)}</h1><p class="article-deck">${escapeHTML(article.description || "A story from the latest edition.")}</p><div class="article-byline"><span class="byline-avatar">${escapeHTML((article.author || "S").split(" ").map((part) => part[0]).join("").slice(0, 2))}</span><span>By <strong>${escapeHTML(article.author || article.source?.name || "Signal / Field")}</strong><small>${sourceLabel(article)} · ${article.readTime ? `${article.readTime} min read` : formatDate(article.publishedAt)}</small></span><button class="bookmark-button ${bookmarks.includes(article.id) ? "is-saved" : ""}" type="button" data-bookmark="${escapeHTML(article.id)}" aria-label="${bookmarks.includes(article.id) ? "Remove bookmark" : "Bookmark article"}" aria-pressed="${bookmarks.includes(article.id)}"><span aria-hidden="true">${bookmarks.includes(article.id) ? "★" : "☆"}</span><span class="bookmark-text">${bookmarks.includes(article.id) ? "Saved" : "Save"}</span></button></div></div><figure class="article-hero-image"><img src="${escapeHTML(article.image || "")}" alt="${escapeHTML(article.imageAlt || article.title)}" onerror="this.classList.add('image-unavailable');this.removeAttribute('src')"><figcaption>${article.demo ? "Illustrative image for a sample editorial story." : `Image via ${escapeHTML(article.source?.name || "source")}`}</figcaption></figure></header>
  <div class="article-body-layout shell"><aside class="article-share"><span>SHARE</span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" aria-label="Share on LinkedIn">in</a><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}" aria-label="Share on X">𝕏</a><button type="button" data-copy="${escapeHTML(canonicalUrl)}" aria-label="Copy article link">↗</button><span class="copy-feedback" aria-live="polite"></span></aside><div class="article-prose">${article.demo ? `<div class="sample-callout"><strong>About this sample</strong><span>This is illustrative editorial content created for the demo edition. It does not describe breaking or real-time news.</span></div>` : ""}${paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}${!article.demo && article.url ? `<p class="source-link"><a href="${escapeHTML(article.url)}" target="_blank" rel="noopener noreferrer">Continue to the original reporting <span aria-hidden="true">↗</span></a></p>` : ""}</div></div></article>
  ${related.length ? `<section class="related-section shell"><div class="section-heading"><div><span class="eyebrow">KEEP EXPLORING</span><h2>More on ${escapeHTML(article.category)}</h2></div><a class="text-link" href="#/categories?category=${encodeURIComponent(article.category)}">All topics <span aria-hidden="true">→</span></a></div>${storyGrid(related, "story-grid related-grid")}</section>` : ""}</main>`;
}

function bookmarksView() {
  const saved = articles.filter((item) => bookmarks.includes(item.id));
  return `<main id="main" class="shell page-enter listing-page"><div class="page-heading"><span class="eyebrow">YOUR READING LIST</span><h1>Saved for later<span class="heading-period">.</span></h1><p>Good ideas are worth coming back to.</p></div>${storyGrid(saved)}</main>`;
}

function aboutView() {
  return `<main id="main" class="shell page-enter editorial-page"><span class="eyebrow">WHY WE'RE HERE</span><h1>Technology deserves<br><em>better questions.</em></h1><div class="editorial-columns"><p class="editorial-lede">Signal / Field is an independent editorial project exploring the ideas, choices, and people behind artificial intelligence and emerging technology.</p><div><p>We believe a useful technology story does more than announce what is new. It makes room for context, disagreement, and the human consequences that don't fit in a product demo.</p><p>This edition is a working sample. Its stories are illustrative, written to demonstrate the reading experience, and are not reports of current events. When live coverage is configured, articles link to their original publishers.</p><a class="text-link" href="#/latest">Read the edition <span aria-hidden="true">→</span></a></div></div><div class="about-statement"><span>OUR NORTH STAR</span><p>Curiosity, with its feet on the ground.</p></div></main>`;
}

function contactView() {
  return `<main id="main" class="shell page-enter contact-page"><div class="page-heading"><span class="eyebrow">START A CONVERSATION</span><h1>We'd like to hear<br>what you're <em>thinking.</em></h1><p>Story ideas, thoughtful disagreement, and notes from readers are welcome.</p></div><form class="contact-form"><label>Your name<input name="name" autocomplete="name" required></label><label>Email address<input name="email" type="email" autocomplete="email" required></label><label>What's on your mind?<textarea name="message" rows="5" required></textarea></label><button class="button-primary" type="submit">Send a note <span aria-hidden="true">→</span></button><p class="form-feedback" aria-live="polite">This demo form does not send or store messages.</p></form></main>`;
}

function newsletterSection() {
  return `<section class="newsletter-section"><div class="shell newsletter-inner"><div><span class="eyebrow">A NOTE, NOW AND THEN</span><h2>Good signal.<br><em>No noise.</em></h2><p>A considered read from the world of technology, delivered when it's ready.</p></div><form class="newsletter-form"><label for="newsletter-email">Your email address</label><div><input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required autocomplete="email"><button type="submit" aria-label="Subscribe to newsletter">Join <span aria-hidden="true">→</span></button></div><p class="form-feedback" aria-live="polite">Preview only. This form is not connected to a mailing list.</p></form></div></section>`;
}

function siteFooter() {
  return `<footer class="site-footer"><div class="shell footer-main"><a class="wordmark footer-wordmark" href="#/" aria-label="Signal / Field home"><span class="wordmark-mark">S<span>F</span></span><span class="wordmark-name">SIGNAL <i>/</i> FIELD</span></a><p>Independent thought for a world in motion.</p><nav aria-label="Footer navigation"><a href="#/about">About</a><a href="#/contact">Contact</a><a href="#/categories">Topics</a></nav></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} SIGNAL / FIELD</span><span>ILLUSTRATIVE EDITION · NOT LIVE NEWS</span><a href="#/">BACK TO TOP ↑</a></div></footer>`;
}

function render() {
  const route = routeFromHash();
  activeRoute = route.name;
  document.title = "Signal / Field — AI & technology, in context";
  let view;
  if (route.name === "home") view = homeView();
  else if (["latest", "trending", "categories", "search"].includes(route.name)) view = listingView(route.name);
  else if (route.name === "article") view = detailView(route.slug);
  else if (route.name === "bookmarks") view = bookmarksView();
  else if (route.name === "about") view = aboutView();
  else if (route.name === "contact") view = contactView();
  else view = `<main id="main" class="shell page-enter"><div class="empty-state"><span class="empty-symbol">404</span><h1>That page isn't in this edition.</h1><a class="text-link" href="#/">Return home <span aria-hidden="true">→</span></a></div></main>`;
  document.querySelector("#app").innerHTML = `${siteHeader()}${view}${siteFooter()}`;
  document.querySelector("#app").setAttribute("aria-busy", "false");
  updateTheme();
  observeReveals();
}

function observeReveals() {
  const targets = [...document.querySelectorAll(".story-card, .trending-row")];
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach((target) => {
    target.classList.add("reveal-pending");
    observer.observe(target);
  });
}

function navigateToSearch(query) {
  const normalized = query.trim();
  location.hash = normalized ? `/search?q=${encodeURIComponent(normalized)}` : "/search";
}

async function loadLiveStories() {
  try {
    const healthResponse = await fetch("/api/health");
    if (!healthResponse.ok) return;
    const health = await healthResponse.json();
    if (!health.apiConfigured) return;
    const response = await fetch("/api/news");
    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      liveError = payload.message || "Live coverage is currently unavailable.";
      if (document.querySelector(".edition-note")) render();
      return;
    }
    const mapped = (payload.articles || []).filter((item) => item.title && item.title !== "[Removed]").map((item, index) => ({
      id: `live-${index}-${slugify(item.title)}`,
      title: item.title,
      description: item.description || item.content || "Read the original report for more detail.",
      category: "Latest coverage",
      author: item.author || item.source?.name || "News source",
      source: item.source,
      image: item.urlToImage || "",
      imageAlt: item.title,
      publishedAt: item.publishedAt,
      url: item.url,
      readTime: 0,
      body: [item.description || item.content || "Open the original source for the full report."],
      demo: false
    }));
    if (!mapped.length) {
      liveError = "The provider returned no stories for this edition.";
      render();
      return;
    }
    articles = mapped;
    liveAvailable = true;
    liveError = "";
    render();
  } catch {
    liveError = "Live provider could not be reached.";
    if (document.querySelector(".edition-note")) render();
  }
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 64);
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;
  if (target.matches("[data-theme-toggle]")) {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeKey, JSON.stringify(theme));
    updateTheme();
    target.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    target.innerHTML = `<span aria-hidden="true">${theme === "dark" ? "☼" : "◐"}</span>`;
  }
  if (target.matches("[data-bookmark]")) {
    const id = target.dataset.bookmark;
    bookmarks = bookmarks.includes(id) ? bookmarks.filter((saved) => saved !== id) : [...bookmarks, id];
    localStorage.setItem(savedKey, JSON.stringify(bookmarks));
    render();
  }
  if (target.matches("[data-page]")) {
    const nextPage = Number(target.dataset.page);
    if (nextPage > 0) {
      const params = new URLSearchParams();
      if (selectedCategory !== "All topics") params.set("category", selectedCategory);
      params.set("page", String(nextPage));
      location.hash = `/${activeRoute}?${params}`;
    }
  }
  if (target.matches("[data-copy]")) {
    const feedback = target.parentElement.querySelector(".copy-feedback");
    try {
      await navigator.clipboard.writeText(target.dataset.copy);
      feedback.textContent = "Copied";
    } catch {
      feedback.textContent = "Copy unavailable";
    }
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (form.matches(".header-search, .large-search")) {
    event.preventDefault();
    navigateToSearch(new FormData(form).get("q") || "");
  }
  if (form.matches(".newsletter-form, .contact-form")) {
    event.preventDefault();
    const feedback = form.querySelector(".form-feedback");
    feedback.textContent = form.matches(".newsletter-form")
      ? "Thanks for your interest. This demo is not connected to a mailing list."
      : "Thanks for your note. This demo form does not send or store messages.";
    feedback.classList.add("form-feedback-visible");
    form.reset();
  }
});

window.addEventListener("hashchange", () => {
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (!location.hash) location.hash = "/";
render();
loadLiveStories();