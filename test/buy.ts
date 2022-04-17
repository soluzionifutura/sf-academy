import { it, describe } from "mocha"
import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import { apiPort, apiHost } from "./config"
import getToken from "./getToken"

chai.use(chaiHttp)
const url = `${apiHost}:${apiPort}`

const invalidToken = "invalidToken"

const goodData = {
   value: 10,
   symbol: "EUR"
}

const badData = {
   value: -1,
   symbol: "USD"
}

const exceedingRequestData = {
   value: 10000,
   symbol: "EUR"
}

getToken().then(token => {
   describe("POST /buy", () => {
      
      it("201 good request", done => {
         chai.request(url)
         .post("/buy")
         .set("Authorization", "Bearer " + token)
         .send(goodData)
         .end((err, res) => {
            expect(res).to.have.status(201)
            expect(res.body).to.be.eql({})
            done()
         })
      })
   
      it("400 bad request", done => {
         chai.request(url)
         .post("/buy")
         .set("Authorization", "Bearer " + token)
         .send(badData)
         .end((err, res) => {
            expect(res).to.have.status(400)
            expect(res.body.message).to.be.equal("Bad request")
            done()
         })
      })
   
      it("401 invalid token", done => {
         chai.request(url)
         .post("/buy")
         .set("Authorization", "Bearer " + invalidToken)
         .send(goodData)
         .end((err, res) => {
            expect(res).to.have.status(401)
            expect(res.body.message).to.be.equal("Invalid token")
            done()
         })
      })
   
      it("409 insufficient credit", done => {
         chai.request(url)
         .post("/buy")
         .set("Authorization", "Bearer " + token)
         .send(exceedingRequestData)
         .end((err, res) => {
            expect(res).to.have.status(409)
            expect(res.body.message).to.be.equal("Insufficient credit")
            done()
         })
      })
   })
})