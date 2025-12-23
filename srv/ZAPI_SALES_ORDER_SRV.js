
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

 /// Accept handler 
   srv.on("Accept", async (req) => {

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


   srv.on("Reject", async (req) => {

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

//   // READ Sales Orders from S/4
//   srv.on("READ", "A_SalesOrder", (req) => s4.run(req.query));

//   // ✅ BOUND Action handler: Approvals.postApproval()
//   srv.on("postApproval", "Approvals", async (req) => {
//     // DEBUG (optional)
//     console.log(
//       "[postApproval][DEBUG]",
//       "req.data =", JSON.stringify(req.data),
//       "req.params =", JSON.stringify(req.params)
//     );

//     const id = req.params?.[0]?.ID;
//     if (id == null) return req.reject(400, "Approval ID is missing");

//     // Read approval by ID (from DB)
//     const approval = await SELECT.one.from(Approvals).where({ ID: id });
//     if (!approval) return req.reject(404, `Approval not found for ID ${id}`);

//     const storedPO = String(approval.PurchaseOrderByCustomer || "").trim();
//     if (!storedPO) return req.reject(400, "PurchaseOrderByCustomer is empty in this Approval");

//     console.log(`[postApproval] Starting POST for Approval ID ${id}, PO: ${storedPO}`);

//     const payload = { PurchaseOrderByCustomer: storedPO };

//     const timeoutMs = 12000;
//     try {
//       const created = await Promise.race([
//         s4.tx(req).send({
//           method: "POST",
//           path: "/A_SalesOrder",
//           headers: { "X-Requested-With": "XMLHttpRequest" },
//           data: payload
//         }),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms`)), timeoutMs)
//         )
//       ]);

//       const so = created?.SalesOrder || created?.d?.SalesOrder;

//       await UPDATE(Approvals)
//         .set({
//           Status: "CREATED",
//           Comment: so ? `Posted successfully. SalesOrder: ${so}` : "Posted successfully.",
//           CreatedAt: new Date().toISOString()
//         })
//         .where({ ID: id });

//       console.log(`[postApproval] ✅ Posted successfully for ID ${id}${so ? ` | SO: ${so}` : ""}`);
//       return true;

//     } catch (e) {
//       await UPDATE(Approvals)
//         .set({
//           Status: "FAILED",
//           Comment: (`POST failed: ${e.message}`).slice(0, 255),
//           CreatedAt: new Date().toISOString()
//         })
//         .where({ ID: id });

//       console.log(`[postApproval] ❌ POST failed for ID ${id}: ${e.message}`);
//       return req.reject(502, e.message);
//     }
//   });
// };



