using ZAPI_SALES_ORDER_SRVSampleService as service from '../../srv/ZAPI_SALES_ORDER_SRV';
annotate service.A_SalesOrder with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrder',
                Value : SalesOrder,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrderType',
                Value : SalesOrderType,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrganization',
                Value : SalesOrganization,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DistributionChannel',
                Value : DistributionChannel,
            },
            {
                $Type : 'UI.DataField',
                Label : 'OrganizationDivision',
                Value : OrganizationDivision,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SoldToParty',
                Value : SoldToParty,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PurchaseOrderByCustomer',
                Value : PurchaseOrderByCustomer,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'localsales',
            ID : 'localsales',
            Target : 'to_Item/@UI.LineItem#localsales',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'localsales',
            ID : 'localsales1',
            Target : 'to_Item/@UI.LineItem#localsales',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'local',
            ID : 'local',
            Target : 'to_Item/@UI.LineItem#local',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrder',
            Value : SalesOrder,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrderType',
            Value : SalesOrderType,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrganization',
            Value : SalesOrganization,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DistributionChannel',
            Value : DistributionChannel,
        },
        {
            $Type : 'UI.DataField',
            Label : 'OrganizationDivision',
            Value : OrganizationDivision,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ZAPI_SALES_ORDER_SRVSampleService.Accept',
            Label : 'Accept',
            Inline : true,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ZAPI_SALES_ORDER_SRVSampleService.Reject',
            Label : 'Reject',
            Inline : true,
        },
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View',
    },
    UI.SelectionFields : [
        SalesOrder,
        DistributionChannel,
        PurchaseOrderByCustomer,
        SalesOrderType,
        SalesOrganization,
        OrganizationDivision,
    ],
);

annotate service.local with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : approvalStatus,
            Label : 'approvalStatus',
        },
        {
            $Type : 'UI.DataField',
            Value : approverComment,
            Label : 'approverComment',
        },
        {
            $Type : 'UI.DataField',
            Value : currency,
            Label : 'currency',
        },
        {
            $Type : 'UI.DataField',
            Value : ID,
            Label : 'ID',
        },
        {
            $Type : 'UI.DataField',
            Value : netValue,
            Label : 'netValue',
        },
        {
            $Type : 'UI.DataField',
            Value : salesOrderID,
            Label : 'salesOrderID',
        },
        {
            $Type : 'UI.DataField',
            Value : salesOrg,
            Label : 'salesOrg',
        },
        {
            $Type : 'UI.DataField',
            Value : soldToParty,
            Label : 'soldToParty',
        },
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View local',
    },
);

annotate service.A_SalesOrder with {
    SalesOrder @Common.Label : 'SalesOrder'
};

annotate service.A_SalesOrder with {
    DistributionChannel @Common.Label : 'DistributionChannel'
};

annotate service.A_SalesOrder with {
    PurchaseOrderByCustomer @Common.Label : 'PurchaseOrderByCustomer'
};

annotate service.A_SalesOrder with {
    SalesOrderType @Common.Label : 'SalesOrderType'
};

annotate service.A_SalesOrder with {
    SalesOrganization @Common.Label : 'SalesOrganization'
};

annotate service.A_SalesOrder with {
    OrganizationDivision @Common.Label : 'OrganizationDivision'
};

annotate ZAPI_SALES_ORDER_SRV.A_SalesOrderItem with @(
    UI.LineItem #localsales : [
    ]
);

annotate ZAPI_SALES_ORDER_SRV.A_SalesOrderItem with @(
    UI.LineItem #localsales : [
    ]
);

annotate ZAPI_SALES_ORDER_SRV.A_SalesOrderItem with @(
    UI.LineItem #local : [
    ]
);

