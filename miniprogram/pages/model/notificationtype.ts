export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    deteModify: Date;
    modifyBy: string;
    constructor() {
        this.id="";
        this.nameEng="";
        this.nameChi="";
        this.deteModify=new Date();
        this.modifyBy="";
    }
}