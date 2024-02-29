import { Variables } from "./managers/variableManager";

class Interpreter {
    variables = new Variables();

    public interpret(code: String) {
        const lines = code.split(';');
        
        for (const line of lines) {

            if (line.includes('DATA')) { 
                this.setVariable(line);
            }            
            
            // if (varName.length >= 3) {
            //     throw new Error('Ошибка переменной: название переменной должна быть >= 3.');
            // }
        } 
    }

    private setVariable(line: string) {
        const [varDeclaration, varValue] = line.split('=').map(str => str.trim());
        const [_, varName] = varDeclaration.split(/\s+/);

        this.variables.push(varName, varValue);
    }
};

export { 
    Interpreter
};