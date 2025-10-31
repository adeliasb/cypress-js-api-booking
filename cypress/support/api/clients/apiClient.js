// apiClient.js - Cliente genérico para requisições HTTP
// Centraliza a comunicação com a API, facilitando manutenção e reuso

export const apiClient = {
  // Função principal para enviar requisições
  sendRequest(method, endpoint, body = {}, headers = {}) {
    const url = `${Cypress.config("baseUrl")}${endpoint}`; // Monta URL completa
    return cy.request({
      method, // Método HTTP (GET, POST, PUT, DELETE)
      url, // Endpoint da API
      body, // Corpo da requisição (JSON)
      headers, // Cabeçalhos customizados
      failOnStatusCode: false, // Evita falhas automáticas em erros 4xx/5xx
    });
  },
};
