export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    modifyBy: string;
    dateModify: Date;
    constructor() {
        this.id="";
        this.nameChi="";
        this.nameEng="";
        this.modifyBy="";
        this.dateModify=new Date();
    }
}