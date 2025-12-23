
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

