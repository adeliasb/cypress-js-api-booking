// Arquivo de configuração principal do Cypress
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://restful-booker.herokuapp.com", // URL base da API
    specPattern: "cypress/e2e/booking/*.cy.js", // Padrão dos arquivos de teste
    supportFile: "cypress/support/e2e.js", // Arquivo de suporte global
  },
  reporter: "mochawesome", // Define o reporter
  reporterOptions: {
    reportDir: "cypress/reports", // pasta para salvar os relatórios
    overwrite: false, // não sobrescrever relatórios antigos
    html: true, // gera relatório em HTML
    json: true, // gera relatório em JSON
  },
});
