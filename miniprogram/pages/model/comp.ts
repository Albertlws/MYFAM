export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    modifyBy: string;
    dateModify: Date;
    type: string;
    districtID: string;
    constructor() {
        this.id="";
        this.nameChi="";
        this.nameEng="";
        this.modifyBy="";
        this.dateModify=new Date();
        this.type="";
        this.districtID="";
    }
}