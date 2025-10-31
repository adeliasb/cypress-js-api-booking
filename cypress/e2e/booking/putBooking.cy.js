// import { bookingService } from "../../support/api/services/bookingService";
// import { authHelper } from "../../support/api/utils/authHelper";

// describe("PUT /booking/:id", () => {
//   it("Deve atualizar uma reserva existente", () => {
//     authHelper.login().then((token) => {
//       const payload = { firstname: "Adelia Teste", lastname: "Barroso" };
//       bookingService.update(1, payload, token).then((res) => {
//         expect(res.status).to.eq(200);
//         expect(res.body.firstname).to.eq("Adelia Teste");
//       });
//     });
//   });
// });

import { bookingService } from "../../support/api/services/bookingService";
import { authHelper } from "../../support/api/utils/authHelper";

describe("PUT /booking/:id", () => {
  it("Deve atualizar uma reserva existente", () => {
    cy.fixture("bookingData").then((booking) => {
      // Cria uma reserva antes
      bookingService.create(booking).then((createRes) => {
        expect(createRes.status).to.eq(200);
        const bookingId = createRes.body.bookingid;

        // Faz login para obter o token
        authHelper.login().then((token) => {
          const payload = { ...booking, firstname: "AdeliaAtualizada" };

          // Atualiza a reserva criada
          bookingService.update(bookingId, payload, token).then((updateRes) => {
            expect(updateRes.status).to.eq(200);
            expect(updateRes.body.firstname).to.eq("AdeliaAtualizada");
          });
        });
      });
    });
  });
});
