Este repositório apresenta uma suíte de **testes automatizados E2E** utilizando **Playwright e TypeScript**, aplicada à plataforma de demonstração **Restful Booker**.
O projeto utiliza **Page Object Model (POM)**, massa de dados em JSON e cenários positivos e negativos para validar o fluxo de reserva de quartos.

🎯 **Objetivo & Foco do Projeto**:
Validação do fluxo de reserva de um quarto individual, cobrindo:

* Navegação pela aplicação;
* Seleção do quarto;
* Validação dos detalhes da reserva;
* Preenchimento dos dados do hóspede;
* Submissão da reserva;
* Validação de mensagens de erro.

🔹 **Destaques Técnicos**:
**Playwright + TypeScript:** Automação de testes E2E em navegador utilizando Playwright Test.
**Page Object Model (POM):** Separação das páginas e suas funcionalidades em classes específicas, facilitando manutenção e reutilização.
**Massa de Dados:** Utilização do arquivo `booking-data.json` para armazenar dados válidos e inválidos.
**Testes Positivos e Negativos:** Cobertura de cenários de sucesso, campos vazios e dados em formatos inválidos.
**Asserções:** Validação de títulos, URLs, elementos da página, informações da reserva e mensagens de erro.
**Evidências:** Configuração de screenshots, vídeos e traces para auxiliar na análise de falhas.

🧪 **Fluxos Automatizados**

### Happy Flow

Validação do fluxo completo de reserva:

* Acesso à aplicação;
* Acesso à seção `Rooms`;
* Seleção do quarto `Single`;
* Clique em `Book now`;
* Validação dos detalhes da reserva;
* Preenchimento dos dados do hóspede;
* Submissão da reserva.

### Sad Flow:
Validação do formulário com **campos obrigatórios vazios**.
São verificadas as mensagens de validação apresentadas pela aplicação.

### Incorrect Data Flow:
Validação do formulário utilizando **dados em formatos inválidos**, como e-mail incorreto e informações com quantidade insuficiente de caracteres.

**Estrutura do Projeto**

```
restful-booker-plataform/

├── data/
│   └── booking-data.json       # Massa de dados dos testes
│
├── interface/
│   └── booking-interface.ts    # Interface dos dados do hóspede
│
├── pages/
│   ├── home-page.ts            # Page Object da página inicial
│   └── reservation-page.ts     # Page Object da reserva
│
├── tests/
│   ├── booking-single-room-happy-flow.spec.ts
│   ├── booking-single-room-sad-flow.spec.ts
│   └── booking-single-room-incorrect-data-flow.spec.ts
│
├── playwright.config.ts        # Configurações do Playwright
├── package.json
└── README.md
```

**Tecnologias & Ferramentas**:
* **TypeScript**
* **Playwright**
* **Node.js**
* **Page Object Model (POM)**
* **JSON**

```

**Objetivo do Projeto**

Este projeto foi desenvolvido como prática de **QA e Automação de Testes**, demonstrando conhecimentos em:

* Testes E2E;
* Testes funcionais;
* Testes positivos e negativos;
* Playwright;
* TypeScript;
* Page Object Model;
* Massa de dados;
* Asserções;
* Validação de formulários;
* Evidências de testes;
* Automação de testes web.
