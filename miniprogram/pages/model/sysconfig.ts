export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    value: string;
    dateModify: Date;
    modifyBy: string;
    constructor() {
        this.id="";
        this.nameEng="";
        this.nameChi="";
        this.value="";
        this.dateModify=new Date();
        this.modifyBy="";
    }
}