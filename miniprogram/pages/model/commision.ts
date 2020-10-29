export default class District {
    id: string;
    dateAdd: Date;
    addby: string;
    compID: string
    constructor() {
        this.id="";
        this.dateAdd=new Date();
        this.addby="";
        this.compID="";
    }
}