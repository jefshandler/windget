//Testar a funcao desaclopada
//se a funcao esta fazendo o que pra ser feito, sem testar
//

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// descrever as funcionalidades / 
describe('Submit feedback', () => {
//(it) e importante que os testes tenha linhguagem facil leitura
    it('should be able to dubmit a feedback'), () => {
 //(it)isso deve(deveria fazer alguma coisa) - deveria ser possivel enviar o feedback
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMain: async () => { } }
        )
        expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Testqa comentario',
            screenshot: 'testeqa.jpg',
        })).resolves.not.toThrow();
    });
});