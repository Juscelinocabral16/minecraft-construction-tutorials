const tutorials = [
  {
    id: 1,
    title: "Casa de madeira",
    category: "Casa",
    difficulty: "Fácil",
    description: "Uma casa simples e bonita para começar sua base.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        title: "Fundação",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
        text: "Aplique uma base de 7x9 usando blocos de madeira e pedra."
      },
      {
        title: "Paredes",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        text: "Suba as paredes com blocos de tronco e deixe janelas de vidro."
      },
      {
        title: "Telhado",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
        text: "Monte o telhado em formato de duas águas usando escadas."
      }
    ]
  },
  {
    id: 2,
    title: "Portal do Nether",
    category: "Portal",
    difficulty: "Médio",
    description: "Crie um portal funcional e eficiente para exploração.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        title: "Estrutura",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        text: "Monte a moldura com 4x5 e deixe espaço para os blocos de obsidiana."
      },
      {
        title: "Obsidiana",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        text: "Use água e lava para transformar o terreno em obsidiana."
      },
      {
        title: "Ativação",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        text: "Acenda com um isqueiro e entre no portal."
      }
    ]
  },
  {
    id: 3,
    title: "Torre de vigilância",
    category: "Torre",
    difficulty: "Médio",
    description: "Uma torre alta para observar o mundo e confirmar perigos.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        title: "Base",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        text: "Comece com uma base sólida e larga para manter a torre firme."
      },
      {
        title: "Altura",
        image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        text: "Suba até a altura desejada e mantenha corredores para segurança."
      },
      {
        title: "Detalhes",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        text: "Adicione lanternas, janelas e um topo reforçado."
      }
    ]
  },
  {
    id: 4,
    title: "Fazenda automática",
    category: "Fazenda",
    difficulty: "Difícil",
    description: "Uma planta funcional para coletar itens sem desperdício.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        title: "Terreno",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
        text: "Prepare o espaço com blocos de terra e água."
      },
      {
        title: "Plantação",
        image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80",
        text: "Plante os itens na linha ideal para coleta automática."
      },
      {
        title: "Coleta",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
        text: "Use dispensadores, baldes e canais para automatizar a coleta."
      }
    ]
  }
];

const cardGrid = document.getElementById("cardGrid");
const searchInput = document.getElementById("searchInput");
const tutorialPanel = document.getElementById("tutorialPanel");
const emptyState = document.getElementById("emptyState");

function renderCards(filterText = "") {
  const term = filterText.trim().toLowerCase();

  const filtered = tutorials.filter((item) => {
    const title = item.title.toLowerCase();
    const category = item.category.toLowerCase();
    const description = item.description.toLowerCase();
    return title.includes(term) || category.includes(term) || description.includes(term);
  });

  cardGrid.innerHTML = "";

  if (!filtered.length) {
    emptyState.classList.add("show");
    return;
  }

  emptyState.classList.remove("show");

  filtered.forEach((tutorial) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="card-image">
        <img src="${tutorial.image}" alt="${tutorial.title}" />
        <span class="tag">${tutorial.category}</span>
      </div>
      <div class="card-body">
        <div class="card-top">
          <h3>${tutorial.title}</h3>
          <span class="difficulty">${tutorial.difficulty}</span>
        </div>
        <p class="desc">${tutorial.description}</p>
        <span class="steps-count">${tutorial.steps.length} etapas</span>
        <button class="btn" data-id="${tutorial.id}">Ver tutorial</button>
      </div>
    `;

    cardGrid.appendChild(card);
  });

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = tutorials.find((t) => t.id === Number(button.dataset.id));
      showTutorial(selected);
    });
  });
}

function showTutorial(tutorial) {
  tutorialPanel.classList.add("active");
  tutorialPanel.innerHTML = `
    <div class="tutorial-header">
      <h2>${tutorial.title}</h2>
      <span class="difficulty">${tutorial.difficulty}</span>
    </div>

    <div class="tutorial-grid">
      ${tutorial.steps
        .map(
          (step, index) => `
            <div class="step">
              <img src="${step.image}" alt="${step.title}" />
              <div class="step-body">
                <span class="step-number">Etapa ${index + 1}</span>
                <h4>${step.title}</h4>
                <p>${step.text}</p>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  tutorialPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

searchInput.addEventListener("input", (event) => {
  renderCards(event.target.value);
});

renderCards();
