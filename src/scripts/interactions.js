const menu = document.querySelector(".menu");
menu?.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});
const search = document.querySelector("#search");
if (search) {
  const topic = document.querySelector("#topic"),
    scope = document.querySelector("#scope"),
    rows = [...document.querySelectorAll(".reference")],
    count = document.querySelector("#count"),
    empty = document.querySelector("#empty");
  const normalize = (s) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const params = new URLSearchParams(location.search);
  search.value = params.get("q") || "";
  if ([...topic.options].some((x) => x.value === params.get("topic")))
    topic.value = params.get("topic");
  if ([...scope.options].some((x) => x.value === params.get("scope")))
    scope.value = params.get("scope");
  function filter(update = true) {
    let visible = 0;
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    for (const row of rows) {
      const match =
        terms.every((t) => normalize(row.dataset.search).includes(t)) &&
        (!topic.value || row.dataset.tags.split("|").includes(topic.value)) &&
        (!scope.value ||
          (scope.value === "course"
            ? row.dataset.course === "true"
            : row.dataset.course !== "true"));
      row.hidden = !match;
      if (match) visible++;
    }
    count.textContent =
      document.documentElement.lang === "fr"
        ? `${visible} référence${visible > 1 ? "s" : ""} sur ${rows.length}`
        : `${visible} of ${rows.length} references`;
    empty.hidden = visible !== 0;
    if (update) {
      const p = new URLSearchParams();
      if (search.value) p.set("q", search.value);
      if (topic.value) p.set("topic", topic.value);
      if (scope.value) p.set("scope", scope.value);
      history.replaceState(null, "", location.pathname + (p.size ? "?" + p.toString() : ""));
    }
  }
  search.addEventListener("input", () => filter());
  topic.addEventListener("change", () => filter());
  scope.addEventListener("change", () => filter());
  document.querySelector("#reset").addEventListener("click", () => {
    search.value = "";
    topic.value = "";
    scope.value = "";
    filter();
    search.focus();
  });
  filter(false);
}
