# Guaxa Tech — Site institucional

Landing page estática para apresentar o Guaxa Tech e levar visitantes ao Telegram. Site feito em HTML, CSS e JS, sem Node.js, banco de dados ou bibliotecas externas.

## Antes de publicar (obrigatório)

1. Abra `config.js` e preencha o campo `telegramUrl` com o link real do grupo. Use `https://t.me/...`.
2. Troque `assets/logo-guaxa.png` pela arte oficial da marca. **A imagem incluída no pacote é uma ilustração provisória** criada para que o site abra imediatamente. Se a logo oficial for PNG, substitua o caminho `assets/logo-guaxa.png` nas tags `<img>`, `<link rel="icon">` e `<meta property="og:image">` do arquivo `index.html`, ou peça ajuda para fazer essa mudança.
3. Reveja os textos antes de divulgar e confira se as informações do grupo estão corretas.
4. Teste os botões do Telegram no celular e no computador.

## Visualizar localmente

Abra `index.html` no navegador. Não é necessário instalar dependências.

## Publicar com GitHub + Easypanel (recomendado)

1. Crie no GitHub um repositório chamado `guaxa-tech-site` (público ou privado). Envie todos os arquivos da pasta, incluindo `Dockerfile` e `nginx.conf`.
2. Dentro do projeto `guaxa-tech` no Easypanel, crie um serviço do tipo **App**, nome `site`.
3. Em **Fonte**, selecione **GitHub**, informe `usuario/guaxa-tech-site`, branch `main` e build path `/`. Para repositório privado, autorize o acesso do Easypanel conforme sua configuração, ou utilize Git + chave SSH (deploy key).
4. Em **Build**, selecione **Dockerfile** (caminho `Dockerfile`).
5. Em **Domínios**, crie um domínio temporário do Easypanel com o destino na porta **8080**, protocolo interno HTTP. O Easypanel termina HTTPS externamente.
6. Clique **Implantar**. Quando abrir corretamente, substitua pelo seu domínio próprio, se desejar.
7. Não configure o domínio do site na aplicação n8n; cada serviço deve ter seu próprio domínio.

Referência: https://easypanel.io/docs/services/app

## Publicar sem GitHub, usando ZIP

Easypanel > `guaxa-tech` > Novo Serviço > `App` > Fonte: `Upload` > selecione o ZIP > Build: `Dockerfile` > Domínio com destino `8080` > Implantar. Depois que criar o repositório, você pode mudar a fonte para GitHub e versionar as próximas mudanças.

## Versionamento e segurança

- O site é público mesmo se o repositório for privado: jamais inclua senhas, tokens, chaves da VPS ou links privados de administração.
- Antes de guardar exports do n8n no GitHub, revise os JSONs em busca de tokens e dados privados. Prefira um repositório privado separado (`guaxa-tech-automacoes`).
- O site não necessita acesso ao PostgreSQL nem ao n8n. Mantenha-os separados.

## Arquivos

- `index.html`: conteúdo e estrutura.
- `style.css`: identidade visual e responsividade.
- `config.js`: link público do grupo.
- `script.js`: comportamento dos links.
- `assets/logo-guaxa.png`: símbolo provisório.
- `Dockerfile`: imagem de hospedagem Nginx na porta 8080.
- `nginx.conf`: configuração mínima e cabeçalhos de segurança.
