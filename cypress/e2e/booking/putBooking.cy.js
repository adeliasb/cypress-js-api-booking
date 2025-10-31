// // import { bookingService } from "../../support/api/services/bookingService";
// // import { authHelper } from "../../support/api/utils/authHelper";

// // describe("PUT /booking/:id", () => {
// //   it("Deve atualizar uma reserva existente", () => {
// //     authHelper.login().then((token) => {
// //       const payload = { firstname: "Adelia Teste", lastname: "Barroso" };
// //       bookingService.update(1, payload, token).then((res) => {
// //         expect(res.status).to.eq(200);
// //         expect(res.body.firstname).to.eq("Adelia Teste");
// //       });
// //     });
// //   });
// // });

// import { bookingService } from "../../support/api/services/bookingService";
// import { authHelper } from "../../support/api/utils/authHelper";

// describe("PUT /booking/:id", () => {
//   it("Deve atualizar uma reserva existente", () => {
//     cy.fixture("bookingData").then((booking) => {
//       // Cria uma reserva antes
//       bookingService.create(booking).then((createRes) => {
//         expect(createRes.status).to.eq(200);
//         const bookingId = createRes.body.bookingid;

//         // Faz login para obter o token
//         authHelper.login().then((token) => {
//           const payload = { ...booking, firstname: "AdeliaAtualizada" };

//           // Atualiza a reserva criada
//           bookingService.update(bookingId, payload, token).then((updateRes) => {
//             expect(updateRes.status).to.eq(200);
//             expect(updateRes.body.firstname).to.eq("AdeliaAtualizada");
//             console.log("Response:", updateRes);
//             cy.log("Status:", updateRes);
//           });

//           // Salva em arquivo JSON
//           fs.writeFileSync(
//             `cypress/reports/updateteBooking-${Date.now()}.json`,
//             JSON.stringify(updateRes.body, null, 2)
//           );
//         });
//       });
//     });
//   });
// });
// cypress/e2e/booking/putBooking.cy.js
import { bookingService } from "../../support/api/services/bookingService";
import { authHelper } from "../../support/api/utils/authHelper";

describe("PUT /booking/:id", () => {
  it("Deve criar e atualizar uma reserva existente", () => {
    // 1️⃣ Carrega os dados de reserva do fixture
    cy.fixture("bookingData").then((booking) => {
      // 2️⃣ Cria a reserva usando a API
      bookingService.create(booking).then((createRes) => {
        expect(createRes.status).to.eq(200); // Valida status de criação
        const bookingId = createRes.body.bookingid;
        cy.log("Reserva criada com ID:", bookingId);

        // 3️⃣ Faz login para obter o token de autenticação
        authHelper.login().then((token) => {
          const payload = { ...booking, firstname: "AdeliaAtualizada" };

          // 4️⃣ Atualiza a reserva criada
          bookingService.update(bookingId, payload, token).then((updateRes) => {
            expect(updateRes.status).to.eq(200); // Valida status da atualização
            expect(updateRes.body.firstname).to.eq("AdeliaAtualizada"); // Valida dado atualizado
            cy.log("Reserva atualizada:", JSON.stringify(updateRes.body));

            // 5️⃣ Salva a resposta da atualização em arquivo JSON via cy.task
            cy.task("writeFile", {
              filename: `cypress/reports/updateBooking-${Date.now()}.json`,
              data: JSON.stringify(updateRes.body, null, 2),
            });
          });
        });
      });
    });
  });
});
