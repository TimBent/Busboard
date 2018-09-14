export class Bus {

    constructor( protected number: number, protected destination: string, protected route: string){}

    getnumber(): number {
        return this.number;
    }

    getdestination(): string {
        return this.destination;
    }

    getroute(): string {
        return this.route;
    }
}
