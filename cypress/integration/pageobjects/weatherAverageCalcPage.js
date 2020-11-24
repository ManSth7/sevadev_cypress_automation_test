///<reference types ="Cypress" />

class weatherAverageCalcPage {

    searchForCity(city){
        cy.wait(10000);
        cy.get('[data-testid=searchModalInputBox]').invoke('removeAttr', 'disabled').type(city)
        cy.wait(1000)
        cy.get('[data-testid=searchModalInputBox]').type('{downArrow}')
        cy.get('[data-testid=searchModalInputBox]').type('{enter}')

    }

    selectItemList(){
        cy.get('[data-from-string="localsuiteNav_3_10 Day"]')
            .click({force : true, timeout : 3000});
    }

    calculateAverageOfLowerTemprature(){
        var avg = 0;
        cy.get('.DetailsSummary--lowTempValue--1DlJK').each(($el, index, $list) => {
            avg +=parseFloat($el.text())
            if(index == $list.length - 1){
                avg = avg/$list.length;
                cy.log("Average of Lower temprature leve = "+ avg);
            }
        });
    }
}

export default  weatherAverageCalcPage