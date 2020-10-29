export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    type: string;
    modifyBy: string;
    dateModify: Date;
    compID: string;
    constructor() {
        this.id="";
        this.nameChi="";
        this.nameEng="";
        this.type="";
        this.modifyBy="";
        this.dateModify=new Date();
        this.compID="";
    }
}