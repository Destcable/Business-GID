import { Variables } from "./managers/variableManager";

class Interpreter {
    variables = new Variables();

    public interpret(code: String) {
        const lines = code.split(';');
        
        for (const line of lines) {

            if (line.includes('DATA')) { 
                this.setVariable(line);
            }       
            
            if (line.includes('WINDOW')) { 
                this.createWindow(line);
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

    private createWindow(line: string) {
        const match = line.match(/WINDOW\s*([A-Za-z_][A-Za-z0-9_]*)/);

        if (!match) {
            throw new Error('Invalid WINDOW declaration syntax');
        }

        const currentWindowName = match[1];

        console.log(currentWindowName);
    }
};

export { 
    Interpreter
};