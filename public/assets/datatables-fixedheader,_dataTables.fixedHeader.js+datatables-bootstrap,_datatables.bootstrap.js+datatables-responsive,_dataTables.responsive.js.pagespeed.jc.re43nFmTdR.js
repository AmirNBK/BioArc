var mod_pagespeed_8Na5GOYvkZ = "(function(factory){if(typeof define==='function'&&define.amd){define(['jquery','datatables.net'],function($){return factory($,window,document);});}else if(typeof exports==='object'){module.exports=function(root,$){if(!root){root=window;}if(!$||!$.fn.dataTable){$=require('datatables.net')(root,$).$;}return factory($,root,root.document);};}else{factory(jQuery,window,document);}}(function($,window,document,undefined){'use strict';var DataTable=$.fn.dataTable;var _instCounter=0;var FixedHeader=function(dt,config){if(!(this instanceof FixedHeader)){throw\"FixedHeader must be initialised with the 'new' keyword.\";}if(config===true){config={};}dt=new DataTable.Api(dt);this.c=$.extend(true,{},FixedHeader.defaults,config);this.s={dt:dt,position:{theadTop:0,tbodyTop:0,tfootTop:0,tfootBottom:0,width:0,left:0,tfootHeight:0,theadHeight:0,windowHeight:$(window).height(),visible:true},headerMode:null,footerMode:null,autoWidth:dt.settings()[0].oFeatures.bAutoWidth,namespace:'.dtfc'+(_instCounter++),scrollLeft:{header:-1,footer:-1},enable:true};this.dom={floatingHeader:null,thead:$(dt.table().header()),tbody:$(dt.table().body()),tfoot:$(dt.table().footer()),header:{host:null,floating:null,placeholder:null},footer:{host:null,floating:null,placeholder:null}};this.dom.header.host=this.dom.thead.parent();this.dom.footer.host=this.dom.tfoot.parent();var dtSettings=dt.settings()[0];if(dtSettings._fixedHeader){throw\"FixedHeader already initialised on table \"+dtSettings.nTable.id;}dtSettings._fixedHeader=this;this._constructor();};$.extend(FixedHeader.prototype,{enable:function(enable){this.s.enable=enable;if(this.c.header){this._modeChange('in-place','header',true);}if(this.c.footer&&this.dom.tfoot.length){this._modeChange('in-place','footer',true);}this.update();},headerOffset:function(offset){if(offset!==undefined){this.c.headerOffset=offset;this.update();}return this.c.headerOffset;},footerOffset:function(offset){if(offset!==undefined){this.c.footerOffset=offset;this.update();}return this.c.footerOffset;},update:function(){this._positions();this._scroll(true);},_constructor:function(){var that=this;var dt=this.s.dt;$(window).on('scroll'+this.s.namespace,function(){that._scroll();}).on('resize'+this.s.namespace,function(){that.s.position.windowHeight=$(window).height();that.update();});dt.on('column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc',function(){that.update();});dt.on('destroy.dtfc',function(){dt.off('.dtfc');$(window).off(that.s.namespace);});this._positions();this._scroll();},_clone:function(item,force){var dt=this.s.dt;var itemDom=this.dom[item];var itemElement=item==='header'?this.dom.thead:this.dom.tfoot;if(!force&&itemDom.floating){itemDom.floating.removeClass('fixedHeader-floating fixedHeader-locked');}else{if(itemDom.floating){itemDom.placeholder.remove();itemDom.floating.children().detach();itemDom.floating.remove();}itemDom.floating=$(dt.table().node().cloneNode(false)).removeAttr('id').append(itemElement).appendTo('body');itemDom.placeholder=itemElement.clone(false);itemDom.host.prepend(itemDom.placeholder);this._matchWidths(itemDom.placeholder,itemDom.floating);}},_matchWidths:function(from,to){var get=function(name){return $(name,from).map(function(){return $(this).width();}).toArray();};var set=function(name,toWidths){$(name,to).each(function(i){$(this).width(toWidths[i]).css(\"min-width\",toWidths[i]);});};var thWidths=get('th');var tdWidths=get('td');set('th',thWidths);set('td',tdWidths);},_unsize:function(item){var el=this.dom[item].floating;if(el&&(item==='footer'||(item==='header'&&!this.s.autoWidth))){$('th, td',el).css('width','');}},_horizontal:function(item,scrollLeft){var itemDom=this.dom[item];var position=this.s.position;var lastScrollLeft=this.s.scrollLeft;if(itemDom.floating&&lastScrollLeft[item]!==scrollLeft){itemDom.floating.css('left',position.left-scrollLeft);lastScrollLeft[item]=scrollLeft;}},_modeChange:function(mode,item,forceChange){var dt=this.s.dt;var itemDom=this.dom[item];var position=this.s.position;if(mode==='in-place'){if(itemDom.placeholder){itemDom.placeholder.remove();itemDom.placeholder=null;}this._unsize(item);if(item==='header'){itemDom.host.prepend(this.dom.thead);}else{itemDom.host.append(this.dom.tfoot);}if(itemDom.floating){itemDom.floating.remove();itemDom.floating=null;}}else if(mode==='in'){this._clone(item,forceChange);itemDom.floating.addClass('fixedHeader-floating').css(item==='header'?'top':'bottom',this.c[item+'Offset']).css('left',position.left+'px').css('width',position.width+'px');if(item==='footer'){itemDom.floating.css('top','');}}else if(mode==='below'){this._clone(item,forceChange);itemDom.floating.addClass('fixedHeader-locked').css('top',position.tfootTop-position.theadHeight).css('left',position.left+'px').css('width',position.width+'px');}else if(mode==='above'){this._clone(item,forceChange);itemDom.floating.addClass('fixedHeader-locked').css('top',position.tbodyTop).css('left',position.left+'px').css('width',position.width+'px');}this.s.scrollLeft.header=-1;this.s.scrollLeft.footer=-1;this.s[item+'Mode']=mode;},_positions:function(){var dt=this.s.dt;var table=dt.table();var position=this.s.position;var dom=this.dom;var tableNode=$(table.node());var thead=tableNode.children('thead');var tfoot=tableNode.children('tfoot');var tbody=dom.tbody;position.visible=tableNode.is(':visible');position.width=tableNode.outerWidth();position.left=tableNode.offset().left;position.theadTop=thead.offset().top;position.tbodyTop=tbody.offset().top;position.theadHeight=position.tbodyTop-position.theadTop;if(tfoot.length){position.tfootTop=tfoot.offset().top;position.tfootBottom=position.tfootTop+tfoot.outerHeight();position.tfootHeight=position.tfootBottom-position.tfootTop;}else{position.tfootTop=position.tbodyTop+tbody.outerHeight();position.tfootBottom=position.tfootTop;position.tfootHeight=position.tfootTop;}},_scroll:function(forceChange){var windowTop=$(document).scrollTop();var windowLeft=$(document).scrollLeft();var position=this.s.position;var headerMode,footerMode;if(!this.s.enable){return;}if(this.c.header){if(!position.visible||windowTop<=position.theadTop-this.c.headerOffset){headerMode='in-place';}else if(windowTop<=position.tfootTop-position.theadHeight-this.c.headerOffset){headerMode='in';}else{headerMode='below';}if(forceChange||headerMode!==this.s.headerMode){this._modeChange(headerMode,'header',forceChange);}this._horizontal('header',windowLeft);}if(this.c.footer&&this.dom.tfoot.length){if(!position.visible||windowTop+position.windowHeight>=position.tfootBottom+this.c.footerOffset){footerMode='in-place';}else if(position.windowHeight+windowTop>position.tbodyTop+position.tfootHeight+this.c.footerOffset){footerMode='in';}else{footerMode='above';}if(forceChange||footerMode!==this.s.footerMode){this._modeChange(footerMode,'footer',forceChange);}this._horizontal('footer',windowLeft);}}});FixedHeader.version=\"3.1.1-dev\";FixedHeader.defaults={header:true,footer:false,headerOffset:0,footerOffset:0};$.fn.dataTable.FixedHeader=FixedHeader;$.fn.DataTable.FixedHeader=FixedHeader;$(document).on('init.dt.dtb',function(e,settings,json){if(e.namespace!=='dt'){return;}var opts=settings.oInit.fixedHeader||DataTable.defaults.fixedHeader;if(opts&&!settings._fixedHeader){new FixedHeader(settings,opts);}});DataTable.Api.register('fixedHeader()',function(){});DataTable.Api.register('fixedHeader.adjust()',function(){return this.iterator('table',function(ctx){var fh=ctx._fixedHeader;if(fh){fh.update();}});});DataTable.Api.register('fixedHeader.enable()',function(flag){return this.iterator('table',function(ctx){var fh=ctx._fixedHeader;if(fh){fh.enable(flag!==undefined?flag:true);}});});DataTable.Api.register('fixedHeader.disable()',function(){return this.iterator('table',function(ctx){var fh=ctx._fixedHeader;if(fh){fh.enable(false);}});});$.each(['header','footer'],function(i,el){DataTable.Api.register('fixedHeader.'+el+'Offset()',function(offset){var ctx=this.context;if(offset===undefined){return ctx.length&&ctx[0]._fixedHeader?ctx[0]._fixedHeader[el+'Offset']():undefined;}return this.iterator('table',function(ctx){var fh=ctx._fixedHeader;if(fh){fh[el+'Offset'](offset);}});});});return FixedHeader;}));";
var mod_pagespeed_X2lDijeZI1 = "(function(factory){if(typeof define==='function'&&define.amd){define(['jquery','datatables.net'],function($){return factory($,window,document);});}else if(typeof exports==='object'){module.exports=function(root,$){if(!root){root=window;}if(!$||!$.fn.dataTable){$=require('datatables.net')(root,$).$;}return factory($,root,root.document);};}else{factory(jQuery,window,document);}}(function($,window,document,undefined){'use strict';var DataTable=$.fn.dataTable;$.extend(true,DataTable.defaults,{dom:\"<'row'<'col-sm-6'l><'col-sm-6'f>>\"+\"<'row'<'col-sm-12'tr>>\"+\"<'row'<'col-sm-5'i><'col-sm-7'p>>\",renderer:'bootstrap'});$.extend(DataTable.ext.classes,{sWrapper:\"dataTables_wrapper form-inline dt-bootstrap\",sFilterInput:\"form-control input-sm\",sLengthSelect:\"form-control input-sm\",sProcessing:\"dataTables_processing panel panel-default\"});DataTable.ext.renderer.pageButton.bootstrap=function(settings,host,idx,buttons,page,pages){var api=new DataTable.Api(settings);var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var aria=settings.oLanguage.oAria.paginate||{};var btnDisplay,btnClass,counter=0;var attach=function(container,buttons){var i,ien,node,button;var clickHandler=function(e){e.preventDefault();if(!$(e.currentTarget).hasClass('disabled')&&api.page()!=e.data.action){api.page(e.data.action).draw('page');}};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){attach(container,button);}else{btnDisplay='';btnClass='';switch(button){case'ellipsis':btnDisplay='&#x2026;';btnClass='disabled';break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' disabled');break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' disabled');break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' disabled');break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' disabled');break;default:btnDisplay=button+1;btnClass=page===button?'active':'';break;}if(btnDisplay){node=$('<li>',{'class':classes.sPageButton+' '+btnClass,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null}).append($('<a>',{'href':'#','aria-controls':settings.sTableId,'aria-label':aria[button],'data-dt-idx':counter,'tabindex':settings.iTabIndex}).html(btnDisplay)).appendTo(container);settings.oApi._fnBindAction(node,{action:button},clickHandler);counter++;}}}};var activeEl;try{activeEl=$(host).find(document.activeElement).data('dt-idx');}catch(e){}attach($(host).empty().html('<ul class=\"pagination\"/>').children('ul'),buttons);if(activeEl!==undefined){$(host).find('[data-dt-idx='+activeEl+']').focus();}};return DataTable;}));";
var mod_pagespeed_RwtL_B5_nU = "(function(factory){if(typeof define==='function'&&define.amd){define(['jquery','datatables.net'],function($){return factory($,window,document);});}else if(typeof exports==='object'){module.exports=function(root,$){if(!root){root=window;}if(!$||!$.fn.dataTable){$=require('datatables.net')(root,$).$;}return factory($,root,root.document);};}else{factory(jQuery,window,document);}}(function($,window,document,undefined){'use strict';var DataTable=$.fn.dataTable;var Responsive=function(settings,opts){if(!DataTable.versionCheck||!DataTable.versionCheck('1.10.3')){throw'DataTables Responsive requires DataTables 1.10.3 or newer';}this.s={dt:new DataTable.Api(settings),columns:[],current:[]};if(this.s.dt.settings()[0].responsive){return;}if(opts&&typeof opts.details==='string'){opts.details={type:opts.details};}this.c=$.extend(true,{},Responsive.defaults,DataTable.defaults.responsive,opts);settings.responsive=this;this._constructor();};$.extend(Responsive.prototype,{_constructor:function(){var that=this;var dt=this.s.dt;var dtPrivateSettings=dt.settings()[0];var oldWindowWidth=$(window).width();dt.settings()[0]._responsive=this;$(window).on('resize.dtr orientationchange.dtr',DataTable.util.throttle(function(){var width=$(window).width();if(width!==oldWindowWidth){that._resize();oldWindowWidth=width;}}));dtPrivateSettings.oApi._fnCallbackReg(dtPrivateSettings,'aoRowCreatedCallback',function(tr,data,idx){if($.inArray(false,that.s.current)!==-1){$('td, th',tr).each(function(i){var idx=dt.column.index('toData',i);if(that.s.current[idx]===false){$(this).css('display','none');}});}});dt.on('destroy.dtr',function(){dt.off('.dtr');$(dt.table().body()).off('.dtr');$(window).off('resize.dtr orientationchange.dtr');$.each(that.s.current,function(i,val){if(val===false){that._setColumnVis(i,true);}});});this.c.breakpoints.sort(function(a,b){return a.width<b.width?1:a.width>b.width?-1:0;});this._classLogic();this._resizeAuto();var details=this.c.details;if(details.type!==false){that._detailsInit();dt.on('column-visibility.dtr',function(e,ctx,col,vis){that._classLogic();that._resizeAuto();that._resize();});dt.on('draw.dtr',function(){that._redrawChildren();});$(dt.table().node()).addClass('dtr-'+details.type);}dt.on('column-reorder.dtr',function(e,settings,details){if(details.drop){that._classLogic();that._resizeAuto();that._resize();}});dt.on('init.dtr',function(e,settings,details){that._resizeAuto();that._resize();});this._resize();},_columnsVisiblity:function(breakpoint){var dt=this.s.dt;var columns=this.s.columns;var i,ien;var order=columns.map(function(col,idx){return{columnIdx:idx,priority:col.priority};}).sort(function(a,b){if(a.priority!==b.priority){return a.priority-b.priority;}return a.columnIdx-b.columnIdx;});var display=$.map(columns,function(col){return col.auto&&col.minWidth===null?false:col.auto===true?'-':$.inArray(breakpoint,col.includeIn)!==-1;});var requiredWidth=0;for(i=0,ien=display.length;i<ien;i++){if(display[i]===true){requiredWidth+=columns[i].minWidth;}}var scrolling=dt.settings()[0].oScroll;var bar=scrolling.sY||scrolling.sX?scrolling.iBarWidth:0;var widthAvailable=dt.table().container().offsetWidth-bar;var usedWidth=widthAvailable-requiredWidth;for(i=0,ien=display.length;i<ien;i++){if(columns[i].control){usedWidth-=columns[i].minWidth;}}var empty=false;for(i=0,ien=order.length;i<ien;i++){var colIdx=order[i].columnIdx;if(display[colIdx]==='-'&&!columns[colIdx].control&&columns[colIdx].minWidth){if(empty||usedWidth-columns[colIdx].minWidth<0){empty=true;display[colIdx]=false;}else{display[colIdx]=true;}usedWidth-=columns[colIdx].minWidth;}}var showControl=false;for(i=0,ien=columns.length;i<ien;i++){if(!columns[i].control&&!columns[i].never&&!display[i]){showControl=true;break;}}for(i=0,ien=columns.length;i<ien;i++){if(columns[i].control){display[i]=showControl;}}if($.inArray(true,display)===-1){display[0]=true;}return display;},_classLogic:function(){var that=this;var calc={};var breakpoints=this.c.breakpoints;var dt=this.s.dt;var columns=dt.columns().eq(0).map(function(i){var column=this.column(i);var className=column.header().className;var priority=dt.settings()[0].aoColumns[i].responsivePriority;if(priority===undefined){var dataPriority=$(column.header()).data('priority');priority=dataPriority!==undefined?dataPriority*1:10000;}return{className:className,includeIn:[],auto:false,control:false,never:className.match(/\\bnever\\b/)?true:false,priority:priority};});var add=function(colIdx,name){var includeIn=columns[colIdx].includeIn;if($.inArray(name,includeIn)===-1){includeIn.push(name);}};var column=function(colIdx,name,operator,matched){var size,i,ien;if(!operator){columns[colIdx].includeIn.push(name);}else if(operator==='max-'){size=that._find(name).width;for(i=0,ien=breakpoints.length;i<ien;i++){if(breakpoints[i].width<=size){add(colIdx,breakpoints[i].name);}}}else if(operator==='min-'){size=that._find(name).width;for(i=0,ien=breakpoints.length;i<ien;i++){if(breakpoints[i].width>=size){add(colIdx,breakpoints[i].name);}}}else if(operator==='not-'){for(i=0,ien=breakpoints.length;i<ien;i++){if(breakpoints[i].name.indexOf(matched)===-1){add(colIdx,breakpoints[i].name);}}}};columns.each(function(col,i){var classNames=col.className.split(' ');var hasClass=false;for(var k=0,ken=classNames.length;k<ken;k++){var className=$.trim(classNames[k]);if(className==='all'){hasClass=true;col.includeIn=$.map(breakpoints,function(a){return a.name;});return;}else if(className==='none'||col.never){hasClass=true;return;}else if(className==='control'){hasClass=true;col.control=true;return;}$.each(breakpoints,function(j,breakpoint){var brokenPoint=breakpoint.name.split('-');var re=new RegExp('(min\\\\-|max\\\\-|not\\\\-)?('+brokenPoint[0]+')(\\\\-[_a-zA-Z0-9])?');var match=className.match(re);if(match){hasClass=true;if(match[2]===brokenPoint[0]&&match[3]==='-'+brokenPoint[1]){column(i,breakpoint.name,match[1],match[2]+match[3]);}else if(match[2]===brokenPoint[0]&&!match[3]){column(i,breakpoint.name,match[1],match[2]);}}});}if(!hasClass){col.auto=true;}});this.s.columns=columns;},_detailsDisplay:function(row,update){var that=this;var dt=this.s.dt;var details=this.c.details;if(details&&details.type){var res=details.display(row,update,function(){return details.renderer(dt,row[0],that._detailsObj(row[0]));});if(res===true||res===false){$(dt.table().node()).triggerHandler('responsive-display.dt',[dt,row,res,update]);}}},_detailsInit:function(){var that=this;var dt=this.s.dt;var details=this.c.details;if(details.type==='inline'){details.target='td:first-child';}dt.on('draw.dtr',function(){that._tabIndexes();});that._tabIndexes();$(dt.table().body()).on('keyup.dtr','td',function(e){if(e.keyCode===13&&$(this).data('dtr-keyboard')){$(this).click();}});var target=details.target;var selector=typeof target==='string'?target:'td';$(dt.table().body()).on('click.dtr mousedown.dtr',selector,function(e){if(!$(dt.table().node()).hasClass('collapsed')){return;}if(!dt.row($(this).closest('tr')).length){return;}if(typeof target==='number'){var targetIdx=target<0?dt.columns().eq(0).length+target:target;if(dt.cell(this).index().column!==targetIdx){return;}}var row=dt.row($(this).closest('tr'));if(e.type==='click'){that._detailsDisplay(row,false);}else if(e.type==='mousedown'){e.preventDefault();}});},_detailsObj:function(rowIdx){var that=this;var dt=this.s.dt;return $.map(this.s.columns,function(col,i){if(col.never){return;}return{title:dt.settings()[0].aoColumns[i].sTitle,data:dt.cell(rowIdx,i).render(that.c.orthogonal),hidden:dt.column(i).visible()&&!that.s.current[i],columnIndex:i};});},_find:function(name){var breakpoints=this.c.breakpoints;for(var i=0,ien=breakpoints.length;i<ien;i++){if(breakpoints[i].name===name){return breakpoints[i];}}},_redrawChildren:function(){var that=this;var dt=this.s.dt;dt.rows({page:'current'}).iterator('row',function(settings,idx){var row=dt.row(idx);that._detailsDisplay(dt.row(idx),true);});},_resize:function(){var that=this;var dt=this.s.dt;var width=$(window).width();var breakpoints=this.c.breakpoints;var breakpoint=breakpoints[0].name;var columns=this.s.columns;var i,ien;var oldVis=this.s.current.slice();for(i=breakpoints.length-1;i>=0;i--){if(width<=breakpoints[i].width){breakpoint=breakpoints[i].name;break;}}var columnsVis=this._columnsVisiblity(breakpoint);this.s.current=columnsVis;var collapsedClass=false;for(i=0,ien=columns.length;i<ien;i++){if(columnsVis[i]===false&&!columns[i].never&&!columns[i].control){collapsedClass=true;break;}}$(dt.table().node()).toggleClass('collapsed',collapsedClass);var changed=false;dt.columns().eq(0).each(function(colIdx,i){if(columnsVis[i]!==oldVis[i]){changed=true;that._setColumnVis(colIdx,columnsVis[i]);}});if(changed){this._redrawChildren();$(dt.table().node()).trigger('responsive-resize.dt',[dt,this.s.current]);}},_resizeAuto:function(){var dt=this.s.dt;var columns=this.s.columns;if(!this.c.auto){return;}if($.inArray(true,$.map(columns,function(c){return c.auto;}))===-1){return;}var tableWidth=dt.table().node().offsetWidth;var columnWidths=dt.columns;var clonedTable=dt.table().node().cloneNode(false);var clonedHeader=$(dt.table().header().cloneNode(false)).appendTo(clonedTable);var clonedBody=$(dt.table().body().cloneNode(false)).appendTo(clonedTable);var headerCells=dt.columns().header().filter(function(idx){return dt.column(idx).visible();}).to$().clone(false).css('display','table-cell');$(clonedBody).append($(dt.rows({page:'current'}).nodes()).clone(false)).find('th, td').css('display','');var footer=dt.table().footer();if(footer){var clonedFooter=$(footer.cloneNode(false)).appendTo(clonedTable);var footerCells=dt.columns().header().filter(function(idx){return dt.column(idx).visible();}).to$().clone(false).css('display','table-cell');$('<tr/>').append(footerCells).appendTo(clonedFooter);}$('<tr/>').append(headerCells).appendTo(clonedHeader);if(this.c.details.type==='inline'){$(clonedTable).addClass('dtr-inline collapsed');}var inserted=$('<div/>').css({width:1,height:1,overflow:'hidden'}).append(clonedTable);inserted.insertBefore(dt.table().node());headerCells.each(function(i){var idx=dt.column.index('fromVisible',i);columns[idx].minWidth=this.offsetWidth||0;});inserted.remove();},_setColumnVis:function(col,showHide){var dt=this.s.dt;var display=showHide?'':'none';$(dt.column(col).header()).css('display',display);$(dt.column(col).footer()).css('display',display);dt.column(col).nodes().to$().css('display',display);},_tabIndexes:function(){var dt=this.s.dt;var cells=dt.cells({page:'current'}).nodes().to$();var ctx=dt.settings()[0];var target=this.c.details.target;cells.filter('[data-dtr-keyboard]').removeData('[data-dtr-keyboard]');var selector=typeof target==='number'?':eq('+target+')':target;$(selector,dt.rows({page:'current'}).nodes()).attr('tabIndex',ctx.iTabIndex).data('dtr-keyboard',1);}});Responsive.breakpoints=[{name:'desktop',width:Infinity},{name:'tablet-l',width:1024},{name:'tablet-p',width:768},{name:'mobile-l',width:480},{name:'mobile-p',width:320}];Responsive.display={childRow:function(row,update,render){if(update){if($(row.node()).hasClass('parent')){row.child(render(),'child').show();return true;}}else{if(!row.child.isShown()){row.child(render(),'child').show();$(row.node()).addClass('parent');return true;}else{row.child(false);$(row.node()).removeClass('parent');return false;}}},childRowImmediate:function(row,update,render){if((!update&&row.child.isShown())||!row.responsive.hasHidden()){row.child(false);$(row.node()).removeClass('parent');return false;}else{row.child(render(),'child').show();$(row.node()).addClass('parent');return true;}},modal:function(options){return function(row,update,render){if(!update){var close=function(){modal.remove();$(document).off('keypress.dtr');};var modal=$('<div class=\"dtr-modal\"/>').append($('<div class=\"dtr-modal-display\"/>').append($('<div class=\"dtr-modal-content\"/>').append(render())).append($('<div class=\"dtr-modal-close\">&times;</div>').click(function(){close();}))).append($('<div class=\"dtr-modal-background\"/>').click(function(){close();})).appendTo('body');if(options&&options.header){modal.find('div.dtr-modal-content').prepend('<h2>'+options.header(row)+'</h2>');}$(document).on('keyup.dtr',function(e){if(e.keyCode===27){e.stopPropagation();close();}});}else{$('div.dtr-modal-content').empty().append(render());}};}};Responsive.defaults={breakpoints:Responsive.breakpoints,auto:true,details:{display:Responsive.display.childRow,renderer:function(api,rowIdx,columns){var data=$.map(columns,function(col,i){return col.hidden?'<li data-dtr-index=\"'+col.columnIndex+'\">'+'<span class=\"dtr-title\">'+col.title+'</span> '+'<span class=\"dtr-data\">'+col.data+'</span>'+'</li>':'';}).join('');return data?$('<ul data-dtr-index=\"'+rowIdx+'\"/>').append(data):false;},target:0,type:'inline'},orthogonal:'display'};var Api=$.fn.dataTable.Api;Api.register('responsive()',function(){return this;});Api.register('responsive.index()',function(li){li=$(li);return{column:li.data('dtr-index'),row:li.parent().data('dtr-index')};});Api.register('responsive.rebuild()',function(){return this.iterator('table',function(ctx){if(ctx._responsive){ctx._responsive._classLogic();}});});Api.register('responsive.recalc()',function(){return this.iterator('table',function(ctx){if(ctx._responsive){ctx._responsive._resizeAuto();ctx._responsive._resize();}});});Api.register('responsive.hasHidden()',function(){var ctx=this.context[0];return ctx._responsive?$.inArray(false,ctx._responsive.s.current)!==-1:false;});Responsive.version='2.0.1-dev';$.fn.dataTable.Responsive=Responsive;$.fn.DataTable.Responsive=Responsive;$(document).on('preInit.dt.dtr',function(e,settings,json){if(e.namespace!=='dt'){return;}if($(settings.nTable).hasClass('responsive')||$(settings.nTable).hasClass('dt-responsive')||settings.oInit.responsive||DataTable.defaults.responsive){var init=settings.oInit.responsive;if(init!==false){new Responsive(settings,$.isPlainObject(init)?init:{});}}});return Responsive;}));";