/*
 * File: app/view/CustomersModelViewController.js
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

Ext.define('Customers.view.CustomersModelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customersmodel',

    id: 'CUST_NO',

    showView: function(view) {
        var layout = this.getReferences().display.getLayout();
        layout.setActiveItem(this.lookupReference(view));
    },

    select: function(rowmodel, record, index, eOpts) {
        // Set selected record
        this.getViewModel().set('record', record);

        // Show details
        this.showView('details');
    },

    save: function(button, e, eOpts) {
        var form = this.getReferences().form.getForm(),
            record = form.getRecord(),
            store = this.getStore('myModels');

        // Valid
        if (form.isValid()) {

            // Update associated record with values
            form.updateRecord();

            // Add to store if new record
            if (record.phantom) {

                // TODO: Assign the record's ID from data source
                // Normally, this value would be auto-generated,
                // or returned from the server
                // var id = store.count() + 1;
                // record.set('id', id);

                // Add to store
                store.add(record);

            }

            // Commit changes
            store.commitChanges();

            // Display record
            this.select(this, record);

        }
    },

    cancelEdit: function(button, e, eOpts) {
        // Show details
        this.showView('details');
    },

    add: function(button, e, eOpts) {
        var formPanel = this.getReferences().form,
            form = formPanel.getForm(),
            newRecord = Ext.create('model.mymodel');

        // Clear form
        form.reset();

        // Set record
        form.loadRecord(newRecord);

        // Set title
        formPanel.setTitle('Add MyModel');

        // Show form
        this.showView('form');
    },

    edit: function(button, e, eOpts) {
        var formPanel = this.getReferences().form,
            form = formPanel.getForm(),
            record = this.getViewModel().get('record');

        // Load record model into form
        form.loadRecord(record);

        // Set title
        formPanel.setTitle('Edit MyModel');

        // Show form
        this.showView('form');
    },

    remove: function(button, e, eOpts) {
        var me = this;

        // Ask user to confirm this action
        Ext.Msg.confirm('Confirm Delete', 'Are you sure you want to delete this mymodel?', function(result) {

            // User confirmed yes
            if (result == 'yes') {

                var record = me.getViewModel().get('record'),
                    store = me.getStore('myModels');

                // Delete record from store
                store.remove(record);

                // Hide display
                me.showView('selectMessage');

            }

        });
    }

});
