function convertMenu () {
	var originalMenu = document.getElementById("originalmenu").value;
	var originalMenuType = document.getElementById("originalmenutype").value;
	
	var JSONMenu;

	switch (originalMenuType) {
		case "XML":
			JSONMenu = parseXMLtoJSON(originalMenu);
			break;
		case "JSON":
			JSONMenu = originalmenu;
			break;
	}
}

var jsonmenu = [];
function parseXMLtoJSON( originalXML ) {
	// Parse through each layer of the XML, each time there is a menu object parse it's sublayer
	alert(originalXML);
	var pxml = $.parseXML(originalXML);
	alert("POINT 1");
 	pxml = $(pxml).children();// break out of the global menu
  	(pxml).children().each(function() {jsonmenu.push(extractXMLElements(this));});
}

function extractXMLElements ( XMLtree , parent) {
	// Get the name of the element (eg: menu, menuitem, break)
	var type = XMLtree.nodeName;
	// Create the new object
	var newMenuElement = {};
	newMenuElement["type"] = name;

	if (type === "menu") {
		newMenuElement["name"]     = $(XMLtree).attr("name");
		newMenuElement["iconsrc"]  = $(XMLtree).attr("iconsrc");
		newMenuElement["shortcut"] = $(XMLtree).attr("shortcut");
		newMenuElement["version"]  = $(XMLtree).attr("version");

		//console.log(precurser + newMenuElement["name"]);
		var XMLChildren = $(XMLtree).children();
		var childrenMenu = [];
		XMLChildren.each ( function(){ childrenMenu.push( extractXMLElements( this ) ) } );
	}
	else if (type === "menuitem") {
		newMenuElement["name"]     = $(XMLtree).attr("name");
		newMenuElement["function"] = $(XMLtree).attr("function");
		newMenuElement["iconsrc"]  = $(XMLtree).attr("iconsrc");
		newMenuElement["shortcut"] = $(XMLtree).attr("shortcut");
		newMenuElement["version"]  = $(XMLtree).attr("version");
		//console.log(precurser + newMenuElement["name"]);
	}
	else if (type === "break") {
		// DONE! breaks have no variables
		//console.log(precurser + "---------------");
	}
	// Return the element that was created for adding into the new menu
 	return newMenuElement;
}