import { Arrival } from '../app/arrival'

export class Stop {
    
    constructor ( protected name: string, protected id: number, protected direction: string, protected arrivals: Arrival[]) {}

    getname(): String {
        return this.name;
    }

    getid(): number {
        return this.id;
    }

    getdirection(): number {
        return this.id;
    }
}
