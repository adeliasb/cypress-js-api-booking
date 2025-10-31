import { bookingService } from "../../support/api/services/bookingService";
import bookingData from "../../fixtures/bookingData.json";

describe("POST /booking", () => {
  it("Deve criar uma reserva com sucesso", () => {
    bookingService.create(bookingData).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.booking).to.have.property("firstname", "Adelia");
      cy.log("Reserva criada com ID:", res.body.bookingid);
      console.log("Response:", res.body);
      cy.log("Status:", res.status);
    });
  });
});
