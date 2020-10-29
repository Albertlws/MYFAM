export default class District {
    id: string;
    title: string;
    msg: string;
    dateAdd: Date;
    addBu: string;
    type: string;
    constructor() {
        this.id="";
        this.title="";
        this.msg="";
        this.dateAdd=new Date();
        this.addBu="";
        this.type="";
    }
}