define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

Handlebars.registerPartial("music-shortcut", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"music-shortcut-logo\">\r\n	<img src=\"";
  if (helper = helpers['logo-source']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['logo-source']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n</div>\r\n<a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }));

this["JST"]["js/templates/discover-gates.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<tr>\r\n			<td><a href=\"#\" class=\"add-action\" data-gateName=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-gateAdress=\"";
  if (helper = helpers.adress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.adress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Add</a></td>\r\n			<td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			<td>";
  if (helper = helpers.adress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.adress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n		</tr>\r\n	";
  return buffer;
  }

  buffer += "<table>\r\n	<thead>\r\n		<tr>\r\n			<th></th>\r\n			<th>Name</th>\r\n			<th>Address</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.gates), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</tbody>\r\n</table>";
  return buffer;
  });

this["JST"]["js/templates/gates-discovery.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<tr>\r\n				<td><input type=\"radio\" name=\"gate-address\" value=\"";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"gate-";
  if (helper = helpers.adress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.adress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/></td>\r\n				<td><label for=\"gate-";
  if (helper = helpers.adress) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.adress); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.friendlyName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.friendlyName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label></td>\r\n			</tr>\r\n		";
  return buffer;
  }

  buffer += "<table>\r\n	<thead>\r\n		<tr>\r\n			<th></th>\r\n			<th>Address</th>\r\n	</thead>\r\n	<tbody>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.discoverdGate), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</tbody>\r\n</table>\r\n<div class=\"actions\">\r\n	<a class=\"action\" id=\"select-discoverd\">Next</a>\r\n</div>";
  return buffer;
  });

this["JST"]["js/templates/gates.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <div class=\"object-card\">\r\n        <h2 class=\"card-title\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n        <div class=\"card-body\">\r\n            Address: ";
  if (helper = helpers.addess) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addess); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n        </div>\r\n    </div>\r\n";
  return buffer;
  }

  buffer += "<h1 class=\"page-title\">Gate Automation</h1>\r\n\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.gates), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n\r\n<div class=\"block-actions\">\r\n    <ul>\r\n        <li><a href=\"/gates/add\">Add a new Gate</a></li>\r\n    </ul>\r\n</div>\r\n";
  return buffer;
  });

this["JST"]["js/templates/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"page-title\">Dashboard</h1>\r\n<p>Todo from handlebars</p>";
  });

this["JST"]["js/templates/music-dashboard.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<div class=\"music-shortcut\"> \r\n			";
  stack1 = self.invokePartial(partials['music-shortcut'], 'music-shortcut', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	";
  return buffer;
  }

  buffer += "<h1 class=\"page-title\">Listen to music</h1>\r\n<div id=\"music-shortcuts\">\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.shortcuts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n	<div class=\"music-shortcut music-shortcut-empty\">\r\n		<div class=\"music-shortcut-logo\">\r\n			TODO\r\n		</div>\r\n		<a href=\"/music/shortcut/new\">Add shortcut</a>\r\n	</div>\r\n</div>";
  return buffer;
  });

return this["JST"];

});