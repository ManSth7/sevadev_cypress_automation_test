///<reference types ="Cypress" />

import weatherAverageCalcPage from "../pageobjects/weatherAverageCalcPage"

const objWAC = new weatherAverageCalcPage();

describe('Average of temperature level Calculation Test', function (){
    let testUrl = Cypress.env('testUrl')
    let testData = ""

    beforeEach(function() {
        cy.visit(testUrl);
        cy.fixture('../fixtures/data/weatherAverageCalcData.json').then(text => {
            testData = text;
        });
    })

    it('Calculate ten days average temperature of lower levels', function (){
        objWAC.searchForCity(testData.city);
        objWAC.selectItemList();
        objWAC.calculateAverageOfHigherTemprature();
        objWAC.calculateAverageOfLowerTemprature();
    })
})
