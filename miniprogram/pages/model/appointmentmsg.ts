export default class District {
    appointmentID: string;
    msg: string;
    parenID: string;
    deteModify: Date;
    modifyBy: string;
    constructor() {
        this.appointmentID="";
        this.msg="";
        this.parenID="";
        this.deteModify=new Date();
        this.modifyBy="";
    }
}