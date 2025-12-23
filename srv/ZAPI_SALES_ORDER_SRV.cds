using my.db as db from '../db/schema';
using ZAPI_SALES_ORDER_SRV from './external/ZAPI_SALES_ORDER_SRV.cds';

service ZAPI_SALES_ORDER_SRVSampleService @(requires:'authenticated-user') {

   @(restrict: [
    { grant: '*',       to: 'SO_ManagerRole' },
    { grant: ['READ'], to: 'SO_Employee' }
  ])
entity A_SalesOrder as projection on ZAPI_SALES_ORDER_SRV.A_SalesOrder {
    key SalesOrder,
    SalesOrderType,
    SalesOrganization,
    DistributionChannel,
    OrganizationDivision,
    SoldToParty,
    PurchaseOrderByCustomer,
    to_Item,
    tolocalsales: Association to local on tolocalsales.salesOrderID = SalesOrder,
  } actions {
      action Accept() returns A_SalesOrder;
      action Reject() returns A_SalesOrder;
    };
  entity local as projection on db.local{
     key ID,
   salesOrderID,
   salesOrg,
   soldToParty,
   netValue,
   currency,
   approvalStatus,
   approverComment,
 

  } 
}



