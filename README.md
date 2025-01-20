# Site oficial - Panoram Digital (by André Melo)
# Licença

Esse modelo é criado para uso comercial, sendo permitido para servir de base para projetos pessoais - mas não responsabilizado por suporte a esses projetos.

## Esse modelo utiliza Tailwind CSS V4

Agora estamos utilizando o TailwindCSS V4 Beta, por meio do arquivo `global.css`, localizado em 'src/styles. Nenhum outro arquivo específico para o tailwind se faz mais necessárrio

```css
// Importando Tailwind CSS
@import "tailwindcss";
// Importando Tailwind plugins
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

Tente adicionar seus estilos na diretiva do tema:

```css
@theme {
  /* Seu CSS deve estar escrito aqui. */
}
```

## Estrutura de projeto

O projeto segue a seguinte estrutura do Astro.

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```