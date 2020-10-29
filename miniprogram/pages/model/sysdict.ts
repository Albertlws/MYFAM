export default class District {
    id: string;
    lang: string;
    value: string;
    modifyBy: string;
    dateModify: Date;
    constructor() {
        this.id="";
        this.lang="";
        this.value="";
        this.modifyBy="";
        this.dateModify=new Date();
    }
}