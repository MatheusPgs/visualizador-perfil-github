# Visualizador de Perfil do GitHub

Projeto front-end que busca perfis de usuários no GitHub e mostra informações importantes do perfil junto com os repositórios públicos.

## Por que este projeto é útil

- Permite consultar perfis GitHub sem precisar abrir o site do GitHub.
- Mostra dados básicos do usuário e os repositórios mais recentes.
- Facilita a leitura com suporte ao tema claro/escuro do navegador.
- Aceita busca por botão e por `Enter` no teclado.

## Destaques do projeto

- Busca de usuário pelo nome do GitHub
- Exibição de avatar, nome, bio, seguidores e seguindo
- Lista os repositórios públicos mais recentes com stars, forks e linguagem
- Suporte a `ES Modules` para organizar o JavaScript
- Layout responsivo para desktop e celular

## Estrutura do projeto

- `index.html` — página principal
- `src/css/`
  - `reset.css` — normaliza estilos básicos
  - `styles.css` — estilos principais e temas
  - `animations.css` — animações de fundo e transições
  - `responsive.css` — ajustes para telas menores
- `src/js/`
  - `dom.js` — referências aos elementos da página
  - `api.js` — funções de comunicação com a API do GitHub
  - `ui.js` — atualização do HTML a partir dos dados
  - `index.js` — orquestra eventos e busca de dados

## Como executar

### Abrir diretamente

1. Abra `index.html` no navegador.
2. Digite o nome de usuário do GitHub.
3. Pressione `Buscar` ou `Enter`.


## Considerações importantes

- A aplicação usa a API pública do GitHub e requer internet.
- Se o nome de usuário não existir, uma mensagem de erro será exibida.
- O tema do navegador (claro/escuro) influencia o visual para melhor legibilidade.

## Tecnologias usadas

- HTML
- CSS
- JavaScript (ES Modules)

## Próximas melhorias possíveis

- adicionar busca automática ao digitar
- mostrar mais informações do perfil
- implementar paginação de repositórios
- salvar último usuário pesquisado no localStorage
