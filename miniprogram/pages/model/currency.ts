export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    modifyBy: string;
    deteModify: Date;
    constructor() {
        this.id="";
        this.nameEng="";
        this.nameChi="";
        this.modifyBy="";
        this.deteModify=new Date();
    }
}