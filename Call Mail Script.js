//Name of Mail Script : showRitms
(function runMailScript(current, template, email, email_action, event) {
   var item = new GlideRecord("sc_req_item");
   item.addQuery("request", current.sys_id);
   item.query();
   while(item.next()) {
   var catalogItem = item.number + ': ' + item.cat_item.getDisplayValue();
   var misc = item.variable_pool.alt_poc;
   template.print(catalogItem + "<br/> Field: " + misc);
   }
})(current, template, email, email_action, event);

//****************************
//*******************************

Call Mail Script in Notification

${mail_script:showRitms}
