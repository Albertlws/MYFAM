export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    dateModify: Date;
    modifyBy: string;
    type: string;
    constructor() {
        this.id="";
        this.nameChi="";
        this.nameEng="";
        this.dateModify=new Date();
        this.modifyBy="";
        this.type="";
    }
}