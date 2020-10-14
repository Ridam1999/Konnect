
export class details{
    MSC: string;
    CUSTOMER_ID: number;
    CUSTOMER_NAME: string;
    MAIL_ID: string;
    EDS: string;
    DESK_NAME: string;
    DOMAIN:string;
    MANAGER_NAME:string;

    constructor(MSC,CUSTOMER_ID,CUSTOMER_NAME,MAIL_ID,EDS,DESK_NAME,DOMAIN,MANAGER_NAME){
      this.MSC=MSC;
      this.CUSTOMER_ID=CUSTOMER_ID;
      this.CUSTOMER_NAME=CUSTOMER_NAME;
      this.MAIL_ID=MAIL_ID;
      this.EDS=EDS;
      this.DESK_NAME=DESK_NAME;
      this.DOMAIN=DOMAIN;
      this.MANAGER_NAME=MANAGER_NAME;

    }
  }