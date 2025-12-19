



// using ZAPI_SALES_ORDER_SRV from './external/ZAPI_SALES_ORDER_SRV.cds';

// service ZAPI_SALES_ORDER_SRVSampleService {

//   entity A_SalesOrder as projection on ZAPI_SALES_ORDER_SRV.A_SalesOrder {
//     key SalesOrder,
//     SalesOrderType,
//     SalesOrganization,
//     DistributionChannel,
//     OrganizationDivision,
//     SoldToParty,
//     PurchaseOrderByCustomer,
//     to_Item
//   };

// }



using my.db as db from '../db/schema';
using ZAPI_SALES_ORDER_SRV from './external/ZAPI_SALES_ORDER_SRV.cds';

service ZAPI_SALES_ORDER_SRVSampleService {

  entity Approvals as projection on db.Approval {
    key ID,
    PurchaseOrderByCustomer,
    Status,
    Comment,
    CreatedAt,

    SalesOrderData : Association to one A_SalesOrder
      on SalesOrderData.PurchaseOrderByCustomer = $self.PurchaseOrderByCustomer
  };

  entity A_SalesOrder as projection on ZAPI_SALES_ORDER_SRV.A_SalesOrder {
    key SalesOrder,
    SalesOrderType,
    SalesOrganization,
    DistributionChannel,
    OrganizationDivision,
    SoldToParty,
    PurchaseOrderByCustomer,
    to_Item
  };
}
