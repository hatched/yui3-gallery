YUI.add("tag-ybind",function(a){a.Tag.register("ybind, [ybind]",{created:function(b){if(!this._created(b)){a.later(0,this,this._created,b);}},_created:function(c){var b=c.ybind||this.get("host").getAttribute("ybind"),d=b?a.one(b).tag:this;if(!d){return false;}a.each(c,function(g,f){var h={};if(f.indexOf("on")===0){h.type=f.substr(2);h.target=a.Node.DOM_EVENTS[h.type]?this.get("host"):this;}else{if(f.indexOf("ref")===0){h.type=f.substr(3);h.target=a.Node.DOM_EVENTS[h.type]?d.get("host"):d;}}if(h.type){h.target.on(h.type,d[g]?a.rbind(d[g],d,this):a.bind(this._defaultFn,this));}},this);return true;},_defaultFn:function(f,c){var b=this.get("host"),d=f.newVal?f.newVal:f.target.get("value");if(b.get("tagName")==="INPUT"){b.set("value",d);}else{b.setHTML(d);}}});},"gallery-2012.07.05-20-01",{requires:["gallery-tag","event"]});