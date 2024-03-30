var gr = new GlideRecord('a_table');
gr.addQuery('some', 'conditions');
gr.query(myCallBack); //Note that the callback function is passed in without parentheses

//define the callback function
function myCallBack(gr) {
    while (gr.next()) {
        //do some client-side work
    }
}
