// const cds = require('@sap/cds');

// module.exports = async (srv) => 
// {        
//     // Using CDS API      
//     const ZAPI_SALES_ORDER_SRV = await cds.connect.to("ZAPI_SALES_ORDER_SRV"); 
//       srv.on('READ', 'A_SalesOrder', req => ZAPI_SALES_ORDER_SRV.run(req.query)); 
// }


// const cds = require('@sap/cds');

// module.exports = async (srv) => {

//   const s4 = await cds.connect.to('ZAPI_SALES_ORDER_SRV');

//   // GET
//   srv.on('READ', 'A_SalesOrder', (req) => s4.run(req.query));

//   // POST (CREATE)
//   srv.on('CREATE', 'A_SalesOrder', async (req) => {
//     return s4.tx(req).send({
//       method: 'POST',
//       path: '/A_SalesOrder',
//       data: req.data
//     });
//   });

//   // (optional) PATCH (UPDATE)
//   srv.on('UPDATE', 'A_SalesOrder', async (req) => {
//     const key = req.data.SalesOrder;
//     return s4.tx(req).send({
//       method: 'PATCH',
//       path: `/A_SalesOrder('${key}')`,
//       data: req.data
//     });
//   });

//   // (optional) DELETE
//   srv.on('DELETE', 'A_SalesOrder', async (req) => {
//     const key = req.data.SalesOrder;
//     return s4.tx(req).send({
//       method: 'DELETE',
//       path: `/A_SalesOrder('${key}')`
//     });
//   });

// };



const cds = require('@sap/cds');

module.exports = async (srv) => {

  const s4 = await cds.connect.to('ZAPI_SALES_ORDER_SRV');

  // GET
  srv.on('READ', 'A_SalesOrder', (req) => s4.run(req.query));

  // POST (CREATE)
  srv.on('CREATE', 'A_SalesOrder', async (req) => {
    const payload = { ...req.data };

    // Do NOT send SalesOrder on create (S/4 generates it)
    delete payload.SalesOrder;

    return s4.tx(req).send({
      method: 'POST',
      path: '/A_SalesOrder',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: payload
    });
  });

};



// const cds = require("@sap/cds");

// module.exports = async (srv) => {
//   const s4 = await cds.connect.to("ZAPI_SALES_ORDER_SRV");
//   const { Approvals } = srv.entities;

//   srv.on("READ", "A_SalesOrder", (req) => s4.run(req.query));

//   srv.on("READ", "Approvals", async (req, next) => {
//     const approvals = await next();
//     if (!approvals) return approvals;

//     const wantExpand =
//       req.query?.SELECT?.columns?.some(
//         (c) => c.expand && (c.ref?.[0] === "SalesOrderData")
//       );

//     if (!wantExpand) return approvals;

//     const rows = Array.isArray(approvals) ? approvals : [approvals];

//     const keys = [...new Set(rows.map(r => r.PurchaseOrderByCustomer).filter(Boolean))];
//     if (keys.length === 0) return approvals;

//     const q = SELECT.from("ZAPI_SALES_ORDER_SRV.A_SalesOrder")
//       .columns(
//         "SalesOrder",
//         "SalesOrderType",
//         "SalesOrganization",
//         "DistributionChannel",
//         "OrganizationDivision",
//         "SoldToParty",
//         "PurchaseOrderByCustomer"
//       )
//       .where({ PurchaseOrderByCustomer: { in: keys } });

//     const soList = await s4.run(q);
//     const byPO = new Map(soList.map(x => [x.PurchaseOrderByCustomer, x]));

//     for (const r of rows) {
//       r.SalesOrderData = byPO.get(r.PurchaseOrderByCustomer) || null;
//     }

//     return approvals;
//   });
// };
