# Copa 2026 Intelligence ⚽

Uma plataforma de análise editorial e estatística das probabilidades de vitória para a Copa do Mundo FIFA 2026. Este projeto foi totalmente desenvolvido, polido e validado utilizando a metodologia e as ferramentas do **AI Workflow Kit**.

O site está em produção no Cloudflare Pages:
👉 **[https://copa2026-845.pages.dev/](https://copa2026-845.pages.dev/)**

---

## ⚡ Como este resultado foi alcançado com o AI Workflow?

O **AI Workflow** é uma metodologia de desenvolvimento ágil assistida por IA que preza pela **segurança não-negociável**, **validação contínua baseada em evidências** e **interferência mínima de código**. 

Abaixo está o passo a passo de como o fluxo foi estruturado para construir esta aplicação:

### 1. Auditoria e Planejamento (Fase de Descoberta)
Antes de qualquer linha de código ser escrita ou alterada, o agente em modo de planejamento realizou uma análise da estrutura do projeto para identificar inconsistências (como problemas de hidratação de SSR no Nuxt 3 e cores fixas que quebravam o tema escuro).
* **Artefato gerado:** [implementation_plan.md](.system_generated/../implementation_plan.md) detalhando as correções e colhendo aprovação do desenvolvedor antes de avançar.

### 2. Branch Gates (Segurança Não-Negociável)
Para garantir a integridade do código em produção, nenhuma funcionalidade foi desenvolvida diretamente na branch protegida `main` ou `master`.
- Cada ajuste foi implementado em uma branch de funcionalidade dedicada:
  - `feat/tournament-bracket` (chaveamento visual)
  - `fix/bracket-scrollbar` (ajustes finos de layout)
  - `feat/readme` (documentação)
- Integrações finais na `main` foram feitas com `--no-ff` (no fast-forward) para preservar o rastreamento histórico do desenvolvimento.

### 3. Quality Gates (Validação Obrigatória)
Nenhuma entrega foi aceita sem a execução e validação bem-sucedida de três portões de qualidade executados no ambiente WSL (Ubuntu):
1. **Testes Unitários:** Validação de 21 testes de integridade de dados (`npm test`).
2. **TypeScript Typecheck:** Garantia de ausência de erros de tipagem estática (`npm run typecheck`).
3. **Build de Produção:** Compilação do pacote Nuxt 3 com o preset `cloudflare-pages` (`npm run build`).

### 4. Coleta de Evidências (Delivery Proof)
Utilizando o pacote `@williambeto/ai-workflow`, rodamos o comando de automação para auditar e compilar os resultados das validações:
```bash
npm run validate
# Executa: ai-workflow collect-evidence
```
Isso gera um sumário formal de entrega comprovando que todos os Quality Gates e testes estão passando com sucesso na branch atual.

### 5. Deploy Contínuo (CI/CD)
O repositório do GitHub foi conectado diretamente ao painel do **Cloudflare Pages**. 
- Graças a essa integração, toda vez que um branch gate é aprovado e mesclado na branch `main`, a Cloudflare baixa o repositório, executa a build (`npm run build` usando o preset `cloudflare-pages`) e publica o site atualizado em menos de 2 minutos.

---

## 📝 Reconstruindo o Site via IA (`prompt.md`)

Para fins de portabilidade e documentação, o repositório conta com o arquivo [prompt.md](./prompt.md) na sua raiz. 
Este arquivo contém um blueprint técnico completo do projeto (estrutura de diretórios, tokens de design, especificações detalhadas de componentes e regras de lógica) estruturado em formato de prompt. Ele serve para que qualquer assistente de inteligência artificial (IA) possa ler as especificações e regenerar todo o site de forma idêntica a partir do zero.

---

## 🛠️ Tecnologias Utilizadas
- **Framework:** Nuxt 3 (SSR + Vue 3)
- **Estilização:** Tailwind CSS (com sistema de cores semânticas customizado para modo claro/escuro)
- **Provedor de Bandeiras:** FlagCDN (compatibilidade cross-platform garantida no Windows)
- **Hospedagem:** Cloudflare Pages
- **Workflow Engine:** AI Workflow Kit (`@williambeto/ai-workflow`)

---

## 🚀 Como Executar Localmente

1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone git@github.com:williambeto/copa2026.git
   cd copa2026
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Valide a integridade do projeto:
   ```bash
   npm test
   npm run typecheck
   npm run build
   npm run validate
   ```
