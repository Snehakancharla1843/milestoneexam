namespace my.db;

entity Approval {
  key ID                    : Integer;
  PurchaseOrderByCustomer   : String(35);
  Status                    : String(20);
  Comment                   : String(255);
  CreatedAt                 : Timestamp;
}
