// authHelper.js - Responsável pela autenticação e gerenciamento de token
import { apiClient } from "../clients/apiClient";

export const authHelper = {
  // Faz login e retorna o token (cookie)
  login(username = "admin", password = "password123") {
    return apiClient
      .sendRequest("POST", "/auth", { username, password })
      .then((res) => {
        if (res.status === 200 && res.body.token) {
          return res.body.token; // Retorna o token para ser usado em outras requisições
        }
        return null;
      });
  },

  // Monta o cabeçalho com o token (para endpoints autenticados)
  getAuthHeader(token) {
    return token ? { Cookie: `token=${token}` } : {};
  },
};
