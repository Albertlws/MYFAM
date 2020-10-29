export default class District {
    id: string;
    version: string;
    path: string;
    type: string;
    dateModify: Date;
    modifyBy: string;
    constructor() {
        this.id="";
        this.version="";
        this.path="";
        this.type="";
        this.dateModify=new Date();
        this.modifyBy="";
    }
}