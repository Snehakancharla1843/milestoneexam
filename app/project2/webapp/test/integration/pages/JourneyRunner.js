sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project2/test/integration/pages/A_SalesOrderList",
	"project2/test/integration/pages/A_SalesOrderObjectPage"
], function (JourneyRunner, A_SalesOrderList, A_SalesOrderObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project2') + '/test/flp.html#app-preview',
        pages: {
			onTheA_SalesOrderList: A_SalesOrderList,
			onTheA_SalesOrderObjectPage: A_SalesOrderObjectPage
        },
        async: true
    });

    return runner;
});

