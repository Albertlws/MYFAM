export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    modifyBy: string;
    dateModify: Date;
    constructor() {
        this.id="";
        this.nameEng="";
        this.nameChi="";
        this.modifyBy="";
        this.dateModify=new Date();
    }
}