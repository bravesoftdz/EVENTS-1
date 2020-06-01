/*
 * File: app/view/CustomersModelViewModel.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Customers.view.CustomersModelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customersmodel',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Rest'
    ],

    stores: {
        myModels: {
            autoLoad: true,
            autoSync: true,
            model: 'Customers.model.MyModel',
            proxy: {
                type: 'rest',
                idParam: 'CUST_NO',
                url: 'http://localhost:8080/customer'
            }
        }
    }

});