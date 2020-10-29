export default class District {
    id: string;
    nameEng: string;
    nameChi: string;
    show: boolean;
    parentID: string;
    constructor() {
        this.id="";
        this.nameEng="";
        this.nameChi="";
        this.show=undefined;
        this.parentID="";
    }
}