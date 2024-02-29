class Variables { 
    variables: any;
    
    constructor() { 
        this.variables = {};
    }

    public push(name: string, value: any) {
        this.variables[name] = value;
    }

    public get(name: string): any { 
        return this.variables[name];
    }
}

export { 
    Variables
};