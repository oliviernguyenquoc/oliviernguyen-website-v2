# Audit éditorial — signaux d’écriture IA

Date : 11 octobre 2026  
Périmètre : tous les textes éditoriaux bilingues rendus par le site. Les titres, auteurs et résumés de `src/data/references.json` sont exclus : ce sont des notices bibliographiques tierces, et non la voix du site.

## Comment lire cet audit

Le guide [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) est un répertoire de **signaux possibles**, pas un détecteur ni une preuve qu’un texte a été écrit par IA. Ses catégories sont ici utilisées comme une grille de relecture : elles permettent de repérer les formulations générales, emphatiques ou trop symétriques qui rendent une page moins personnelle et moins précise.

Le site ne contient aucun marqueur technique non ambigu (Markdown affiché, citations cassées, pseudo-références, prompts ou texte de modèle). Les améliorations ci-dessous sont donc éditoriales, pas correctives.

Priorités :

- **P1** — à modifier : affirmation large, langage promotionnel ou opposition rhétorique qui affaiblit la précision.
- **P2** — recommandé : tournure abstraite ou générique ; le sens est correct mais une formulation plus incarnée sera plus forte.
- **P3** — facultatif : cohérence ou densité ; pas un signal significatif à lui seul.

## Changements P1

### 1. Page recherche — promesse formulée comme une opposition

Source : `src/data/content.json:300-305` · page recherche, accroche et introduction.  
Catégories : parallélisme négatif (« plutôt que » / “rather than”), lien vague entre l’outil et un effet général.

**Actuel — FR**  
« Comment les grands modèles de langage peuvent-ils soutenir, plutôt que miner, la délibération, la participation et la prise de décision collective ? »

**Proposé — FR**  
« Dans quelles conditions les modèles de langage aident-ils un groupe à délibérer, et quels choix de conception risquent au contraire de réduire la diversité des avis ? »

**Actuel — EN**  
“How can large language models support, rather than undermine, deliberation, participation and collective decision-making?”

**Proposé — EN**  
“Under what conditions do language models help a group deliberate, and which design choices can instead reduce the diversity of views?”

Cette version annonce le vrai sujet de la page — conditions et mécanismes — plutôt qu’une opposition morale générale.

### 2. Page recherche — transformation à toutes les échelles

Source : `src/data/content.json:304-305`.  
Catégories : vocabulaire de transformation, généralisation « local ou global » sans objet concret.

**Actuel — FR**  
« Cette page retrace mon exploration en cours de la façon dont l’IA transforme la prise de décision, dans les organisations comme dans la vie démocratique, à l’échelle locale et globale. »

**Proposé — FR**  
« Cette page réunit mes notes sur l’usage des LLMs dans les équipes, les dispositifs participatifs et les processus de délibération. »

**Actuel — EN**  
“This page documents my ongoing exploration of how AI is changing decision-making processes in organisations and in democratic life, whether at the local or global scale.”

**Proposé — EN**  
“This page brings together my notes on the use of LLMs in teams, participatory processes and deliberation.”

### 3. Page recherche — résumé qui promet un cadre sans le nommer

Source : `src/data/content.json:312-323`.  
Catégories : analyse superficielle ; adjectif « pratique » non spécifié.

**Actuel — FR**  
« Un cadre pratique pour comprendre l’impact des LLMs sur la délibération et la décision collective. »

**Proposé — FR**  
« Une grille de lecture : cadrage du problème, diversité des contributions, agrégation et restitution. »

**Actuel — EN**  
“A practical framework to understand how LLMs influence deliberation and collective decision-making.”

**Proposé — EN**  
“A framework covering problem framing, diversity of contributions, aggregation and feedback.”

Remplacer les quatre termes si le cadre effectivement enseigné en utilise d’autres ; l’important est de les nommer.

### 4. Page recherche — finalité démocratique trop binaire

Source : `src/data/content.json:330-335`.  
Catégories : parallélisme négatif ; emphase sur une importance générale.

**Actuel — FR**  
« Mon objectif est simple : comprendre comment utiliser les nouveaux modèles de langage (LLMs) pour renforcer les pratiques démocratiques plutôt que de les affaiblir. »

**Proposé — FR**  
« Je cherche à identifier les usages des LLMs compatibles avec la pluralité des points de vue, la traçabilité des synthèses et l’égalité de participation. »

**Actuel — EN**  
“My goal is simple: understand how we can use new language models (LLMs) to strengthen democratic practices instead of weakening them.”

**Proposé — EN**  
“I am studying uses of LLMs that preserve plural viewpoints, traceable summaries and equal participation.”

### 5. Page recherche — cours et conférence présentés comme une promesse générale

Source : `src/data/content.json:396-409`.  
Catégories : importance non étayée (« matter most » / « reste déterminante »), « base de connaissance » promotionnelle.

**Actuel — FR**  
« Cette conférence examine quand l’IA renforce les décisions de groupe, quand elle les affaiblit, et pourquoi la manière de l’intégrer reste déterminante. »

**Proposé — FR**  
« Cette conférence part d’une expérience d’intelligence collective et compare plusieurs façons d’introduire un LLM dans la discussion. »

**Actuel — EN**  
“This talk examines when AI strengthens group decisions, when it weakens them, and why integration choices matter most.”

**Proposé — EN**  
“This talk starts from a collective-intelligence experiment and compares several ways of introducing an LLM into a discussion.”

**Actuel — FR**  
« La base de connaissance de ce projet. Inclut les sources citées dans le cours et ma veille active sur le sujet. »

**Proposé — FR**  
« Les références citées dans le cours, complétées par les articles que je lis sur l’IA et la démocratie. »

**Actuel — EN**  
“The knowledge base behind this project. Includes sources cited in the lecture and my active reading list on the topic.”

**Proposé — EN**  
“Sources cited in the course, alongside articles I am reading on AI and democracy.”

### 6. Page recherche — méthode de veille au vocabulaire générique

Source : `src/data/content.json:452-474`.  
Catégories : vocabulaire IA (« exploratory but in-depth », « comprehensive », « bridges »), conclusion sur une notion très large (« effort collectif »).

**Actuel — FR**  
« Je mène une revue exploratoire mais approfondie […] incluant […] la littérature à l’intersection de l’informatique et de la théorie politique. »

**Proposé — FR**  
« Je lis des travaux sur Polis, la médiation par IA et la délibération. Je confronte ensuite ces résultats à des textes de théorie politique et à des retours d’implémentation. »

**Actuel — EN**  
“I conduct an exploratory but in-depth review […] including […] the intersection of computer science and political theory.”

**Proposé — EN**  
“I read work on Polis, AI mediation and deliberation, then compare those findings with political theory and implementation feedback.”

**Actuel — FR**  
« J’ai synthétisé ces recherches dans un module complet […] Il fait le pont entre les contraintes techniques et la théorie démocratique pour explorer des applications concrètes dans les organisations. »

**Proposé — FR**  
« J’en ai tiré un module qui présente les limites des LLMs, les principes de la délibération et des cas d’usage en organisation. Je publie ici les notes et supports associés. »

**Actuel — EN**  
“I synthesized this research into a comprehensive module […] It bridges technical constraints and democratic theory to explore concrete applications for organizations.”

**Proposé — EN**  
“I turned this work into a module on LLM limitations, deliberation principles and organisational use cases. I publish the related notes and materials here.”

**Actuel — FR**  
« La démocratie est un effort collectif. »

**Proposé — FR**  
Supprimer cette phrase, puis conserver : « J’échange avec des chercheurs, des acteurs de la civic tech et des institutions pour confronter ces idées à leurs pratiques. »

**Actuel — EN**  
“Democracy is a collective effort.”

**Proposé — EN**  
Remove this sentence, then keep: “I talk with researchers, civic-tech practitioners and institutions to compare these ideas with their work.”

### 7. Page recherche — manifeste de conclusion

Source : `src/data/content.json:483-493`.  
Catégories : emphase sur l’importance, règle de trois, métaphore conclusive vague.

**Actuel — FR**  
« Les implications démocratiques de l’IA ne doivent pas rester confinées […] Elles méritent une discussion ouverte, accessible et informée. »

**Proposé — FR**  
« Je publie ces ressources pour rendre les références, les hypothèses et les limites de ce travail discutables par d’autres. »

**Actuel — EN**  
“The democratic implications of AI should not remain confined […] They deserve open, accessible and informed discussion.”

**Proposé — EN**  
“I publish these resources so that others can discuss the references, assumptions and limits of this work.”

**Actuel — FR**  
« C’est une petite pierre dans une conversation démocratique bien plus vaste. »

**Proposé — FR**  
Supprimer la citation finale ; le paragraphe précédent porte déjà l’intention de publication.

**Actuel — EN**  
“It is a small stone in a much larger democratic conversation.”

**Proposé — EN**  
Remove the closing quotation; the preceding paragraph already states the publishing intent.

### 8. Page cours — rhétorique « diagnostic / va plus loin »

Source : `src/data/content.json:561-568`.  
Catégories : contraste artificiel, formulation promotionnelle (« goes further »), « plutôt que ».

**Actuel — FR**  
« La plupart des programmes […] s’arrêtent au diagnostic […] Ce module va plus loin. Il demande comment […] tirer parti de l’IA, plutôt que d’être distordus par un usage naïf. »

**Proposé — FR**  
« Le module aborde les biais et la polarisation, puis étudie les choix de conception d’un processus collectif : rôle du modèle, préparation des participants, synthèse et restitution. »

**Actuel — EN**  
“Most programs […] stop at the diagnosis […] This module goes further. It asks how […] rather than be distorted by a naive deployment of it.”

**Proposé — EN**  
“The module covers bias and polarisation, then examines the design of a collective process: the model’s role, participant preparation, synthesis and feedback.”

### 9. Page cours — résultats d’apprentissage en promesses de valeur

Source : `src/data/content.json:597-617`.  
Catégories : adjectifs valorisants non démontrables (« clear-eyed », « genuinely », « conceptual framework »).

**Actuel — FR**  
« Une compréhension concrète […] au-delà des discours enthousiastes ou alarmistes. »

**Proposé — FR**  
« Identifier les effets possibles d’un LLM sur la participation, la synthèse et la révision d’une décision collective. »

**Actuel — EN**  
“A clear-eyed understanding […] beyond the hype and the fear.”

**Proposé — EN**  
“Identify how an LLM can affect participation, synthesis and revision in a collective decision.”

**Actuel — FR**  
« La capacité à distinguer les usages naïfs […] réellement augmentatifs, et à articuler pourquoi cette distinction compte. »

**Proposé — FR**  
« Comparer deux usages d’un LLM et expliciter leurs effets sur la diversité des contributions et la traçabilité de la synthèse. »

**Actuel — EN**  
“The ability to distinguish naïve AI deployments from genuinely augmentative ones, and to articulate why that distinction matters.”

**Proposé — EN**  
“Compare two uses of an LLM and explain their effects on contribution diversity and summary traceability.”

### 10. Page cours — biographie et appel à contact trop qualificatifs

Source : `src/data/content.json:630-644`.  
Catégories : attribution vague (« sustained engagement »), autoévaluation (« intellectually rigorous »), langage promotionnel.

**Actuel — FR**  
« Il a développé ce module à partir d’un engagement soutenu […] Son approche est celle d’un praticien : ancré dans la réalité technique, rigoureux intellectuellement, attentif […] »

**Proposé — FR**  
« Il développe des produits data et IA depuis neuf ans. Le module s’appuie sur sa lecture de travaux en IA, théorie délibérative et civic tech, ainsi que sur son expérience de conception de systèmes. »

**Actuel — EN**  
“He developed this module from a sustained engagement […] technically grounded, intellectually rigorous, and attentive […]”

**Proposé — EN**  
“He has built data and AI products for nine years. The module draws on his reading in AI, deliberative theory and civic tech, alongside his experience designing systems.”

**Actuel — FR**  
« […] cherchez un module d’enseignement rigoureux et interdisciplinaire […] »

**Proposé — FR**  
« Vous construisez un programme sur l’IA, la démocratie ou la transformation numérique ? Écrivez-moi pour discuter du public, du format et des exemples à traiter. »

**Actuel — EN**  
“[…] looking for a rigorous, interdisciplinary teaching module […]”

**Proposé — EN**  
“Building a programme on AI, democracy or digital transformation? Get in touch to discuss the audience, format and examples to cover.”

### 11. Page conférence — conclusion sur un dispositif « robuste et transparent »

Source : `src/data/content.json:680-698`.  
Catégories : analyse superficielle ; adjectifs positifs sans critère ; « rather than ».

**Actuel — FR**  
« La conférence propose enfin une grille de lecture pour penser l’IA comme un outil de facilitation plutôt que comme une autorité, et aider les équipes à concevoir des dispositifs collectifs plus robustes et plus transparents. »

**Proposé — FR**  
« La conférence se termine par une grille de lecture : à quel moment le modèle intervient, qui peut contester sa synthèse et quelles décisions restent entre les mains du groupe. »

**Actuel — EN**  
“The conference concludes with a framework for thinking about AI as a facilitation tool rather than an authority, helping teams design more robust and transparent collective systems.”

**Proposé — EN**  
“The talk closes with a checklist: when the model intervenes, who can challenge its summary and which decisions remain with the group.”

## Changements P2

### 12. Accueil et CV — remplacer une portée sociétale abstraite par le métier exercé

Sources : `src/components/cv/Profile.astro:46-47`, `src/lib/pages.js:162-195`.  
Catégories : effet vague sur « les personnes et la société », triade très régulière.

**Actuel — FR**  
« Je construis des produits et des plateformes data & IA, j’accompagne les équipes qui les font vivre et je m’intéresse à leurs effets sur les personnes et la société. »

**Proposé — FR**  
« Je conçois des produits et plateformes data et IA, et j’accompagne les équipes qui les développent. Je travaille aussi sur leurs usages dans les organisations et dans le débat public. »

**Actuel — EN**  
“I build data & AI products and platforms, support the teams behind them and explore their effects on people and society.”

**Proposé — EN**  
“I design data and AI products and platforms, and support the teams that build them. I also study their use in organisations and public debate.”

La page d’accueil est déjà plus concrète : conserver les neuf ans, Decathlon et L’Oréal. Éviter seulement de répéter « explore », « understanding » et « discussion » entre ses trois cartes et les pages de recherche.

### 13. CV — supprimer l’adjectif promotionnel sans perdre le bilan

Source : `src/data/content.json:231-248`. À noter : ce bloc n’est pas rendu par le composant CV actuel, mais doit être corrigé avant toute réutilisation.  
Catégories : langage promotionnel (« impactful », « high-performing »), résultat économique sans précision.

**Proposé — FR**  
« Leader technique, je conçois des produits data et IA utilisés par des équipes métier. Depuis neuf ans, j’ai construit et dirigé des équipes d’ingénierie et conçu une plateforme de deep learning pour la réutilisation d’actifs vidéo, adoptée par 12 marques de L’Oréal. »

**Proposé — EN**  
“Engineering leader building data and AI products used by business teams. Over nine years, I have built and led engineering teams and designed a deep-learning platform for video-asset reuse, adopted by 12 L’Oréal brands.”

Retirer « millions d’euros » sauf si une valeur, une période et une méthode de calcul peuvent être défendues publiquement.

### 14. Page conférence — promesse d’expérimentation et causalité

Source : `src/data/content.json:670-692`.  
Catégories : « simple and reproducible », causalité large (« dépend avant tout »).

**Actuel — FR**  
« À partir d’une expérience d’intelligence collective simple et reproductible, cette conférence montre comment l’usage naïf de l’IA peut conduire à des décisions très convaincantes en apparence, mais moins fiables en pratique. »

**Proposé — FR**  
« La conférence présente une expérience d’intelligence collective et compare les réponses obtenues avec et sans LLM. Elle permet de discuter les effets d’ancrage, de biais et de vérification. »

**Actuel — EN**  
“Based on a simple and reproducible collective intelligence experiment, this conference demonstrates how naive use of AI can lead to seemingly convincing but less reliable decisions in practice.”

**Proposé — EN**  
“The talk presents a collective-intelligence experiment and compares responses produced with and without an LLM. It opens a discussion of anchoring, bias and verification.”

Ne pas affirmer la comparabilité « avec et sans LLM » si l’expérience ne comporte pas ces deux conditions ; dans ce cas, nommer le protocole réel.

### 15. Notes de conférence — remplacer une maxime par un critère observable

Source : `src/lib/pages.js:321-345`.  
Catégories : conclusion aphoristique (« importe plus que » / “matters more than”).

**Actuel — FR**  
« La qualité de l’intégration importe plus que la sophistication du modèle. »

**Proposé — FR**  
« Le protocole doit préciser le rôle du modèle, les étapes de contrôle humain et la façon dont les participants peuvent contester une synthèse. »

**Actuel — EN**  
“The quality of integration matters more than model sophistication.”

**Proposé — EN**  
“The protocol should specify the model’s role, the human checks and how participants can challenge a summary.”

## Éléments à conserver

- Les passages qui décrivent un fait, une expérience, un public ou un format précis : durée des cours, événements passés, outils cités, références liées et expérience professionnelle chiffrée.
- Les questions de recherche listées dans les notes : elles sont spécifiques à la délibération et ne prétendent pas démontrer leur importance.
- Les projets 1er Balcon, AvignApp et Advent of Code : leurs descriptions disent clairement ce qui est fait ; aucun changement n’est nécessaire.
- Les emoji du CV : le guide les relève surtout quand ils remplacent la structure d’un texte. Ici ils servent d’icônes de centres d’intérêt et ne constituent pas un signal utile.

## Règles de relecture pour les prochains textes

1. Remplacer « impact », « importance », « robuste », « rigoureux », « complet », « à grande échelle » par un fait, un mécanisme ou un critère observable.
2. Éviter les formules « pas X mais Y », « plutôt que » et les fins de phrase qui expliquent une portée générale ; dire directement ce que le lecteur verra, fera ou apprendra.
3. Donner un exemple avant une conclusion : un protocole, un groupe concerné, une étape de décision ou une référence.
4. Réserver les listes de trois aux cas où les trois éléments sont réellement nécessaires ; ne pas les utiliser pour donner un rythme artificiel.
5. Garder le « je » lorsqu’il précise une démarche, une expérience ou une limite. C’est précisément ce qui distingue le site d’une présentation générique.
