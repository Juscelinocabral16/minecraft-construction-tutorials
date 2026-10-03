# Minecraft Build Guide

App simples para visualizar tutoriais de construções do Minecraft em etapas, com imagens e busca por título, categoria e descrição.

## Como executar

1. Abra o projeto em uma pasta local.
2. No terminal, rode:

```bash
python3 -m http.server 8000
```

3. Acesse no navegador:

```text
http://localhost:8000
```

## Estrutura

- `index.html` — layout principal
- `style.css` — visual do app
- `script.js` — dados e lógica de busca

## Recursos

- Barra de pesquisa
- Cards de construções
- Tutorial passo a passo com imagens
- Design inspirado em Minecraft

## Próximos passos

- Adicionar mais construções
- Criar de verdade em React
- Implementar filtro por categoria
- Salvar favoritos e histórico
