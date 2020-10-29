export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    dateModify: Date;
    modifyBy: string;
    constructor() {
        this.id="";
        this.nameEng="";
        this.nameChi="";
        this.dateModify=new Date();
        this.modifyBy="";
    }
}