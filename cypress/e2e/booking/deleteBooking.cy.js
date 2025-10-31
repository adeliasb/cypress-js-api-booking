// import { bookingService } from "../../support/api/services/bookingService";
// import { authHelper } from "../../support/api/utils/authHelper";

// describe("DELETE /booking/:id", () => {
//   it("Deve deletar uma reserva existente", () => {
//     authHelper.login().then((token) => {
//       bookingService.delete(1, token).then((res) => {
//         expect(res.status).to.eq(201);
//       });
//     });
//   });
// });

import { bookingService } from "../../support/api/services/bookingService";
import { authHelper } from "../../support/api/utils/authHelper";
import bookingData from "../../fixtures/bookingData.json";

describe("DELETE /booking/:id", () => {
  it("Deve criar e depois deletar uma reserva com sucesso", () => {
    // 1. Cria uma reserva
    bookingService.create(bookingData).then((createRes) => {
      expect(createRes.status).to.eq(200);
      const bookingId = createRes.body.bookingid;

      cy.log("Reserva criada com ID:", bookingId);

      // 2. Faz login para obter o token
      authHelper.login().then((token) => {
        // 3. Deleta a reserva recém-criada
        bookingService.delete(bookingId, token).then((deleteRes) => {
          expect(deleteRes.status).to.eq(201);
          cy.log("Reserva deletada com sucesso:", bookingId);
        });
      });
    });
  });
});
