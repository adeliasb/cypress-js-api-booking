// bookingService.js - Contém métodos específicos para o endpoint /booking
import { apiClient } from "../clients/apiClient";

export const bookingService = {
  // Cria uma reserva
  create(payload) {
    return apiClient.sendRequest("POST", "/booking", payload);
  },

  // Busca uma reserva pelo ID
  getById(id) {
    return apiClient.sendRequest("GET", `/booking/${id}`);
  },

  // Atualiza uma reserva existente
  update(id, payload, token) {
    const headers = token ? { Cookie: `token=${token}` } : {};
    return apiClient.sendRequest("PUT", `/booking/${id}`, payload, headers);
  },

  // Deleta uma reserva existente
  delete(id, token) {
    const headers = token ? { Cookie: `token=${token}` } : {};
    return apiClient.sendRequest("DELETE", `/booking/${id}`, {}, headers);
  },
};
