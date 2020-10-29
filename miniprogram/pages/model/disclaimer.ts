export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    dateModify: Date;
    modifyBy: string;
    constructor() {
        this.id="";
        this.nameChi="";
        this.nameEng="";
        this.dateModify=new Date();
        this.modifyBy="";
    }
}