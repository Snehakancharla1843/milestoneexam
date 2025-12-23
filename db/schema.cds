namespace my.db;

using {managed}  from  '@sap/cds/common';

type Currency: String(3);

type ApprovalStatus: String enum {
    Pending ; Approved ;Rejected
}
entity local:managed{
   key ID : UUID;
   salesOrderID: String;
   salesOrg:String;
   soldToParty:String;
   netValue: Decimal;
   currency:Currency;
   approvalStatus:ApprovalStatus;
   approverComment:String;
   
}
