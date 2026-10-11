import references from "../data/references.json";
import content from "../data/content.json";

const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
const strip = (s) => String(s ?? "").replace(/<[^>]*>/g, "");
const safeURL = (s) => (/^https?:\/\//i.test(s || "") ? s.replace(/^http:/, "https:") : "#");
const arrow =
  '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17M13 5l7 7-7 7"/></svg>';
const localize = (x, lang) => {
  if (Array.isArray(x)) return x.map((v) => localize(v, lang));
  if (x && typeof x === "object") {
    if ("fr" in x && "en" in x) return x[lang];
    return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, localize(v, lang)]));
  }
  return x;
};
const routes = {
  fr: {
    home: "",
    parcours: "parcours",
    research: "ia-democratie",
    teaching: "transmettre",
    course: "cours",
    talk: "conference",
    references: "references",
  },
  en: {
    home: "en",
    parcours: "en/about",
    research: "en/ai-democracy",
    teaching: "en/teaching",
    course: "en/course",
    talk: "en/talk",
    references: "en/references",
  },
};
const url = (lang, page) => "/" + routes[lang][page] + (routes[lang][page] ? "/" : "");
const words = {
  fr: {
    nav: ["Parcours", "IA & démocratie", "Transmettre", "Références"],
    contact: "Contact",
    back: "Accueil",
    toc: "Dans cette page",
    skip: "Aller au contenu",
    mail: "Continuons la conversation.",
    mailText: "Une question, une idée, un projet ? Je serais ravi d’échanger.",
    menu: "Ouvrir le menu",
    read: "Lire la référence",
    search: "Rechercher un titre, un auteur, un sujet…",
    all: "Tous les sujets",
    scope: "Toutes les références",
    courseScope: "Sources du cours",
    readScope: "Veille & lectures",
    reset: "Réinitialiser",
    abstract: "Résumé",
    noResults: "Aucune référence ne correspond à cette recherche.",
    open: "Ouvrir la publication",
    searchLabel: "Rechercher",
    topicLabel: "Sujet",
    scopeLabel: "Collection",
  },
  en: {
    nav: ["About", "AI & democracy", "Teaching", "References"],
    contact: "Contact",
    back: "Home",
    toc: "On this page",
    skip: "Skip to content",
    mail: "Let’s keep the conversation going.",
    mailText: "A question, an idea, a project? I’d be happy to talk.",
    menu: "Open menu",
    read: "Read reference",
    search: "Search by title, author, topic…",
    all: "All topics",
    scope: "All references",
    courseScope: "Course sources",
    readScope: "Reading & research",
    reset: "Reset filters",
    abstract: "Abstract",
    noResults: "No references match your search.",
    open: "Open publication",
    searchLabel: "Search",
    topicLabel: "Topic",
    scopeLabel: "Collection",
  },
};
const topicLabels = {
  fr: {
    persuasion: "LLM & persuasion",
    democracy: "IA & démocratie",
    bias: "Biais politiques",
    analysis: "Analyse politique",
    polisci: "Sciences politiques",
  },
  en: {
    persuasion: "LLMs & persuasion",
    democracy: "AI & democracy",
    bias: "Political bias",
    analysis: "Political analysis",
    polisci: "Political science",
  },
};
function link(href, label, cls = "text-link") {
  return `<a class="${cls}" href="${esc(href)}"><span>${esc(label)}</span>${arrow}</a>`;
}
function pageIntro(lang, title, lead, meta = "") {
  return `<div class="wrap page-intro"><a class="back" href="${url(lang, "home")}">${arrow}${words[lang].back}</a><h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ""}${meta ? `<p class="meta">${esc(meta)}</p>` : ""}</div>`;
}
function paragraphs(items) {
  return items.map((p) => `<p>${esc(p)}</p>`).join("");
}
function list(items) {
  return "<ul>" + items.map((x) => `<li>${esc(x)}</li>`).join("") + "</ul>";
}
function article(lang, sections) {
  return `<div class="wrap article-layout"><aside class="contents"><strong>${words[lang].toc}</strong>${sections.map((s) => `<a href="#${s.id}">${esc(s.title)}</a>`).join("")}</aside><div class="article">${sections.map((s) => `<section id="${s.id}"><h2>${esc(s.title)}</h2>${s.html}</section>`).join("")}</div></div>`;
}
function courses(lang) {
  const fr = lang === "fr";
  return [
    {
      page: "course",
      meta: fr ? "Cours · 2 heures · Niveau master" : "Course · 2 hours · Master’s level",
      title: fr
        ? "Concevoir la décision collective augmentée par l’IA"
        : "Designing AI-augmented collective decision-making",
      desc: fr
        ? "Un module à l’intersection de la recherche en IA, de la théorie délibérative et du design de processus."
        : "A module at the intersection of AI research, deliberative theory and process design.",
    },
    {
      page: "talk",
      meta: fr
        ? "Conférence · 45 min · Présentation & échanges"
        : "Talk · 45 min · Presentation & Q&A",
      title: fr
        ? "Les LLMs peuvent-ils améliorer nos décisions collectives ?"
        : "Can LLMs improve our collective decisions?",
      desc: fr
        ? "Ce que la recherche nous apprend sur le potentiel, les limites et les conditions d’une IA utile au collectif."
        : "What research tells us about the potential, limits and conditions for AI to support groups.",
    },
  ]
    .map(
      (c) =>
        `<a class="course-row" href="${url(lang, c.page)}"><div><span class="meta">${c.meta}</span><h3>${c.title}</h3><p>${c.desc}</p></div>${arrow}</a>`,
    )
    .join("");
}
function projects(lang) {
  const fr = lang === "fr";
  return `<div class="projects"><article class="project"><span class="number">01</span><h3>1er Balcon</h3><span class="meta">${fr ? "Média culturel · Tech & SEO" : "Cultural media · Tech & SEO"}</span><p>${fr ? "La culture comme terrain de curiosité. Je m’occupe de la technique et du SEO de ce média culturel, avec une stack TypeScript, Next.js et Strapi." : "Culture as a field of curiosity. I handle technology and SEO for this cultural publication, using TypeScript, Next.js and Strapi."}</p>${link("https://premierbalcon.fr", fr ? "Découvrir 1er Balcon" : "Discover 1er Balcon")}</article><article class="project"><span class="number">02</span><h3>AvignApp</h3><span class="meta">${fr ? "Compagnon de festival · En développement" : "Festival companion · In development"}</span><p>${fr ? "Une application mobile et web pour choisir ses spectacles au Festival d’Avignon, planifier son parcours et s’organiser entre amis. Un projet qui réunit produit, tech et passion du théâtre." : "A mobile and web app to choose shows at the Avignon Festival, plan a schedule and organise with friends. A project combining product, technology and a love of theatre."}</p></article></div>`;
}
function home(lang) {
  const fr = lang === "fr";
  const items = fr
    ? [
        [
          "Construire",
          "Depuis neuf ans, je construis des produits data et IA chez Decathlon et L’Oréal. Du développement au management, avec une même attention aux usages réels et aux équipes qui les rendent possibles.",
          "Voir mon parcours",
          "parcours",
        ],
        [
          "Comprendre",
          "J’explore les effets des modèles de langage sur la délibération démocratique et l’intelligence collective, en croisant recherche en IA, théorie politique et pratique technique.",
          "IA & démocratie",
          "research",
        ],
        [
          "Transmettre",
          "Je transforme ces lectures et expérimentations en cours et conférences. Des formats pour rendre l’IA plus compréhensible, questionner ses usages et ouvrir la discussion.",
          "Découvrir les interventions",
          "teaching",
        ],
      ]
    : [
        [
          "Build",
          "For nine years, I have built data and AI products at Decathlon and L’Oréal. From engineering to management, with a focus on real use and the teams that make it possible.",
          "Explore my background",
          "parcours",
        ],
        [
          "Understand",
          "I explore how language models affect democratic deliberation and collective intelligence, connecting AI research, political theory and engineering practice.",
          "AI & democracy",
          "research",
        ],
        [
          "Share",
          "I turn reading and experimentation into courses and talks. Formats that make AI more understandable, question its uses and open up discussion.",
          "Explore teaching",
          "teaching",
        ],
      ];
  return `<section class="wrap section" id="perspectives"><h2>${fr ? "Une pratique, <em>trois perspectives.</em>" : "One practice, <em>three perspectives.</em>"}</h2><div class="columns">${items.map((x, i) => `<article class="perspective"><span class="number">0${i + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p>${link(url(lang, x[3]), x[2])}</article>`).join("")}</div></section><section class="research-band"><div class="wrap"><h2>${fr ? "L’IA peut-elle nous aider à <em>mieux décider ensemble ?</em>" : "Can AI help us <em>make better decisions together?</em>"}</h2><div><p>${fr ? "Qui parle, qui est entendu, comment une décision se construit : ces questions relient ma pratique de l’IA à mes préoccupations citoyennes." : "Who speaks, who is heard, how a decision is made: these questions connect my AI practice with my civic concerns."}</p><p>${fr ? "Les LLMs peuvent soutenir la délibération. Ils peuvent aussi homogénéiser les points de vue, déformer les arguments ou masquer des biais. Je cherche à comprendre ce qui fait la différence." : "LLMs can support deliberation. They can also homogenise perspectives, distort arguments or obscure bias. I’m trying to understand what makes the difference."}</p>${link(url(lang, "research"), fr ? "Explorer le sujet" : "Explore the topic")}</div></div></section><section class="wrap section"><h2>${fr ? "Partager pour faire avancer la réflexion." : "Share to move the conversation forward."}</h2><p class="section-lead">${fr ? "Deux formats pour explorer l’IA, la délibération et la décision collective." : "Two formats to explore AI, deliberation and collective decision-making."}</p>${courses(lang)}</section><section class="wrap section project-section"><h2>${fr ? "La culture, un autre terrain d’exploration." : "Culture, another field to explore."}</h2>${projects(lang)}</section>`;
}
function research(lang, c) {
  const r = c.research;
  const fr = lang === "fr";
  return (
    pageIntro(
      lang,
      fr
        ? "IA, démocratie et<br><em>intelligence collective.</em>"
        : "AI, democracy and<br><em>collective intelligence.</em>",
      esc(r.hero.paragraphs[0]),
    ) +
    article(lang, [
      {
        id: "pourquoi",
        title: r.why.title,
        html:
          paragraphs(r.why.paragraphs) +
          `<h3>${fr ? "Trois regards sur une même question" : "Three perspectives on one question"}</h3>` +
          list(r.why.angles.map((x) => x.label.replace(/ \(\d+%\)/, "") + " : " + x.desc)),
      },
      {
        id: "questions",
        title: r.resources.notesCard.title,
        html:
          `<p>${esc(r.resources.notesCard.desc)}</p>` +
          list(r.resources.notesCard.bullets) +
          `<p>${esc(r.hero.paragraphs[1])}</p>`,
      },
      {
        id: "methode",
        title: r.approach.title,
        html: r.approach.steps.map((x) => `<h3>${esc(x.title)}</h3><p>${esc(x.text)}</p>`).join(""),
      },
      {
        id: "ressources",
        title: fr ? "Explorer & approfondir" : "Explore & go deeper",
        html:
          courses(lang) +
          `<div class="resource-band"><h3>${esc(r.resources.bibliographyCard.title)}</h3><p>${esc(r.resources.bibliographyCard.desc)}</p>${link(url(lang, "references"), fr ? "Parcourir les références" : "Browse references")}</div>`,
      },
      {
        id: "partager",
        title: r.share.title,
        html:
          paragraphs(r.share.paragraphs) +
          `<blockquote class="quote">${esc(r.share.final)}</blockquote><p>${esc(r.sidebar.contact.intro)}</p>` +
          list(r.sidebar.contact.bullets) +
          link(
            "mailto:olivier.nguyenquoc@gmail.com",
            fr ? "Échanger sur ces sujets" : "Talk about these topics",
          ),
      },
    ])
  );
}
function teaching(lang, c) {
  const fr = lang === "fr";
  return (
    pageIntro(
      lang,
      fr
        ? "Transmettre.<br><em>Et ouvrir la discussion.</em>"
        : "Share knowledge.<br><em>And open up discussion.</em>",
      fr
        ? "Des cours et conférences pour relier les contraintes techniques de l’IA aux enjeux de la délibération et de la décision collective."
        : "Courses and talks connecting the technical constraints of AI with the challenges of deliberation and collective decision-making.",
    ) +
    `<section class="wrap section">${courses(lang)}<div class="article" style="margin-top:60px"><h2>${fr ? "Une pédagogie de praticien" : "Teaching grounded in practice"}</h2><p>${esc(c.course.speaker.text)}</p><h3>${esc(c.talk.previouslyPresented.title)}</h3>${list(c.talk.previouslyPresented.events.map((x) => x.name + " — " + x.date))}<div class="resource-band"><h3>${fr ? "Organiser une intervention" : "Host a session"}</h3><p>${fr ? "Un cours en master, une conférence d’équipe ou un atelier sur l’IA et la décision ? Échangeons sur le contexte et le format adapté." : "A master’s course, a team talk or a workshop on AI and decision-making? Let’s discuss the context and the right format."}</p>${link("mailto:olivier.nguyenquoc@gmail.com", fr ? "Me contacter" : "Get in touch")}</div>${link(url(lang, "references"), fr ? "Accéder à la bibliographie" : "Browse the bibliography")}</div></section>`
  );
}
function course(lang, c) {
  const t = c.course;
  return (
    pageIntro(lang, esc(t.header.title), esc(t.header.subtitle), t.header.tags.join(" · ")) +
    article(lang, [
      {
        id: "intention",
        title: lang === "fr" ? "L’intention pédagogique" : "The teaching approach",
        html: paragraphs(t.pitch),
      },
      { id: "themes", title: t.syllabus.title, html: list(t.syllabus.modules) },
      { id: "acquis", title: t.learningOutcomes.title, html: list(t.learningOutcomes.items) },
      { id: "format", title: t.formatTitle, html: `<p>${esc(t.format)}</p>` },
      {
        id: "supports",
        title: lang === "fr" ? "Supports & références" : "Materials & references",
        html:
          `<p>${esc(t.slides.text)}</p><div class="resource-band"><h3>${esc(t.references.title)}</h3>${link(url(lang, "references"), t.references.cta)}</div>` +
          link(
            url(lang, "talk"),
            lang === "fr" ? "Découvrir la conférence de 45 minutes" : "Explore the 45-minute talk",
          ),
      },
      {
        id: "intervenant",
        title: t.speaker.title,
        html: `<p>${esc(t.speaker.text)}</p>${link(url(lang, "parcours"), t.speaker.cta)}<h3>${esc(t.contact.title)}</h3><p>${esc(t.contact.text)}</p>${link(t.contact.href, t.contact.cta)}`,
      },
    ])
  );
}
const notes = {
  fr: [
    [
      "La promesse de départ",
      "Des outils comme Polis cartographient les convergences entre opinions. Les LLMs ouvrent la possibilité de résumer et de structurer des contributions à grande échelle. Mais une synthèse plus rapide ne garantit pas une meilleure décision.",
      "https://arxiv.org/abs/2306.11932",
    ],
    [
      "Pourquoi l’approche naïve échoue",
      "Consulter un LLM avant de formuler son avis peut introduire un effet d’ancrage et réduire la diversité des réponses. L’agrégation soulève aussi des problèmes de fidélité aux sources, de représentation des opinions minoritaires et de biais. Même une bonne agrégation ne remplace pas la délibération : les échanges peuvent transformer les jugements initiaux. Un processus structuré doit également traiter les profils cachés, l’homogénéité cognitive, les inégalités de parole et la polarisation.",
      "https://arxiv.org/abs/2303.17548",
    ],
    [
      "Ce que la recherche propose",
      "Les travaux de Tessler et al. explorent une médiation par IA où les participants critiquent puis révisent une proposition commune. Plurals expérimente des ensembles d’agents représentant des profils sociaux. Ces approches invitent à distinguer efficacité et légitimité : participation, égalité des voix et légitimité perçue restent des valeurs à examiner.",
      "https://doi.org/10.1126/science.adq2852",
    ],
    [
      "L’IA comme outil de facilitation",
      "Un protocole en six étapes permet de réfléchir au rôle de l’IA dans le cadrage, la sélection des participants, la préparation individuelle, la délibération, l’agrégation puis la communication et le suivi. L’objectif est de soutenir le processus humain à chaque étape. La qualité de l’intégration importe plus que la sophistication du modèle.",
      "https://arxiv.org/abs/2410.08418",
    ],
  ],
  en: [
    [
      "The starting promise",
      "Tools such as Polis map common ground between opinions. LLMs offer ways to summarise and structure contributions at scale. Yet a faster synthesis does not guarantee a better decision.",
      "https://arxiv.org/abs/2306.11932",
    ],
    [
      "Why naive approaches fail",
      "Consulting an LLM before forming an opinion can introduce anchoring and reduce diversity. Aggregation also raises issues of faithfulness, minority representation and bias. Even good aggregation cannot replace deliberation: exchanges can change initial judgments. Structured processes must also address hidden profiles, cognitive homogeneity, unequal speaking time and polarisation.",
      "https://arxiv.org/abs/2303.17548",
    ],
    [
      "What research proposes",
      "Tessler et al. explore AI mediation where participants critique and revise a shared statement. Plurals experiments with ensembles of agents representing social profiles. These approaches invite us to distinguish efficiency from legitimacy: participation, equality of voice and perceived legitimacy remain essential values to examine.",
      "https://doi.org/10.1126/science.adq2852",
    ],
    [
      "AI as a facilitation tool",
      "A six-step protocol helps examine AI’s role in framing, participant selection, individual preparation, deliberation, aggregation, then communication and follow-up. The aim is to support the human process at every stage. The quality of integration matters more than model sophistication.",
      "https://arxiv.org/abs/2410.08418",
    ],
  ],
};
function talk(lang, c) {
  const t = c.talk,
    fr = lang === "fr";
  return (
    pageIntro(lang, esc(t.title), esc(t.subtitle), t.duration + " · " + t.sessionFormat) +
    article(lang, [
      { id: "resume", title: t.abstractTitle, html: paragraphs(t.description) },
      {
        id: "format",
        title: t.formatTitle,
        html: `<p>${esc(t.duration)} · ${esc(t.sessionFormat)}</p><h3>${esc(t.targetAudienceTitle)}</h3><p>${esc(t.targetAudience)}</p>`,
      },
      {
        id: "notes",
        title: fr ? "Les idées de la conférence" : "Ideas from the talk",
        html: `<p>${fr ? "Une synthèse des quatre temps de la conférence. Ouvrez chaque partie pour explorer le raisonnement et une référence associée." : "A summary of the four parts of the talk. Open each section to explore the argument and a related reference."}</p><div class="notes">${notes[lang].map((n, i) => `<details><summary>0${i + 1} · ${n[0]}</summary><p>${n[1]}</p>${link(n[2], fr ? "Lire la référence associée" : "Read the related reference")}</details>`).join("")}</div>`,
      },
      {
        id: "interventions",
        title: t.previouslyPresented.title,
        html: list(t.previouslyPresented.events.map((x) => x.name + " — " + x.date)),
      },
      {
        id: "ressources",
        title: t.resources.title,
        html:
          `<div class="resource-band"><div class="actions">${link("https://oliviernguyen.com/assets/ai-collective-intelligence-slides.pdf", fr ? "Consulter les slides (PDF)" : "View slides (PDF)")}${link(url(lang, "references"), t.resources.bibliographyCta)}</div></div>` +
          link(
            url(lang, "course"),
            fr ? "Découvrir le cours de 2 heures" : "Explore the 2-hour course",
          ) +
          `<h3>${fr ? "Organiser cette conférence" : "Host this talk"}</h3>` +
          link(
            "mailto:olivier.nguyenquoc@gmail.com",
            fr ? "Discuter d’une intervention" : "Discuss a session",
          ),
      },
    ])
  );
}
function library(lang) {
  const fr = lang === "fr",
    w = words[lang];
  const rows = references
    .map((i) => {
      const tags = i.tags.filter((t) => t.startsWith("cat:"));
      const labels = tags.map((t) => topicLabels[lang][t.slice(4)]).filter(Boolean);
      const course = i.tags.includes("utiliséPresentation");
      return `<article class="reference" data-search="${esc(strip(i.title) + " " + i.authors + " " + labels.join(" "))}" data-tags="${esc(tags.join("|"))}" data-course="${course}"><div class="ref-year">${esc((i.date || "").match(/\b(19|20)\d{2}\b/)?.[0] || "—")}</div><div><h2>${i.url ? `<a href="${esc(safeURL(i.url))}">${esc(strip(i.title))}</a>` : esc(strip(i.title))}</h2><p class="authors">${esc(i.authors)}</p><div class="topics">${esc(labels.join(" · "))}${course ? (labels.length ? " · " : "") + w.courseScope : ""}</div>${i.abstract ? `<details><summary>${w.abstract}</summary><p>${esc(strip(i.abstract))}</p></details>` : ""}</div>${i.url ? `<a href="${esc(safeURL(i.url))}" aria-label="${esc(w.open + ": " + strip(i.title))}">${arrow}</a>` : ""}</article>`;
    })
    .join("");
  return (
    pageIntro(
      lang,
      fr
        ? "Des lectures pour<br><em>nourrir la réflexion.</em>"
        : "Reading to<br><em>inform the thinking.</em>",
      fr
        ? "La bibliothèque derrière mes recherches et mes interventions. Des sources académiques aux lectures exploratoires sur l’IA et la démocratie."
        : "The library behind my research and teaching. From academic sources to exploratory reading on AI and democracy.",
    ) +
    `<section class="wrap library"><div class="reading-intro"><p>${fr ? "87 références issues de ma bibliothèque Zotero. Une sélection de sources utilisées dans mes interventions, complétée par ma veille. Cette édition reprend la bibliothèque du site original." : "87 references from my Zotero library. Sources used in my talks and courses, alongside exploratory reading. This edition includes the library from the original website."}</p></div><div class="filters" style="margin-top:30px"><div class="field"><label for="search">${w.searchLabel}</label><input type="search" id="search" placeholder="${w.search}" autocomplete="off"></div><div class="field"><label for="topic">${w.topicLabel}</label><select id="topic"><option value="">${w.all}</option>${Object.entries(
      topicLabels[lang],
    )
      .map(([k, v]) => `<option value="cat:${k}">${v}</option>`)
      .join(
        "",
      )}</select></div><div class="field"><label for="scope">${w.scopeLabel}</label><select id="scope"><option value="">${w.scope}</option><option value="course">${w.courseScope}</option><option value="reading">${w.readScope}</option></select></div></div><div class="library-status"><span id="count" role="status" aria-live="polite">${fr ? "87 références" : "87 references"}</span><button id="reset" class="reset">${w.reset}</button></div><div id="references">${rows}</div><p id="empty" class="empty" hidden>${w.noResults}</p></section>`
  );
}

export {
  routes,
  url,
  words,
  localize,
  esc,
  link,
  list,
  home,
  research,
  teaching,
  course,
  talk,
  library,
};
export function getContent(lang) {
  return localize(content, lang);
}
