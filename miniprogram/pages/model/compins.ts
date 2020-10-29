export default class District {
    id: string;
    dateBack: string;
    paymentInfo: string;
    img: Blob;
    url: string;
    username: string;
    password: string;
    constructor() {
        this.id="";
        this.dateBack="";
        this.paymentInfo="";
        this.img=new Blob();
        this.url="";
        this.username="";
        this.password="";
    }
}