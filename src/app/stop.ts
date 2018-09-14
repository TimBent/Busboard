import { Arrival } from '../app/arrival'

export class Stop {
    
    constructor ( protected name: string, protected id: string, protected direction: string, protected arrivals: Arrival[]) {}

    getname(): String {
        return this.name;
    }

    getid(): string {
        return this.id;
    }

    getdirection(): string {
        return this.direction;
    }
}
