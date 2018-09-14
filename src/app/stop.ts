export class Stop {
    
    constructor ( protected name: string, protected id: number, protected direction: string) {}

    getname(): String {
        return this.name;
    }

    getid(): number {
        return this.id;
    }

    getdirection(): number {
        return this.id;
    }
    //location: Tuple(number, number);
}
