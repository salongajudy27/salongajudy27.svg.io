var orientation =1;
var WaveEffect = false;
var ShadowPropertyNum = 1;
function changeProperty()
 {
		// Font Color
		// var $fontColor = $("#fontColor").val();
		// $(".svgText").attr('style','color: ' + $fontColor);
		// Border Color
		var $borderColor = $("#borderColor").val();
		$("#svgContainer").css("border-color", $borderColor);
		// Border Width
		var $borderWidth = $("#borderWidth").val();
		$("#svgContainer").css("borderWidth",$borderWidth +"px");
		//Border Radius
		var $borderRadiusTL = $("#topLeftCorner").val();
		var $borderRadiusTR = $("#topRightCorner").val();
		var $borderRadiusBL = $("#bottomLeftCorner").val();
		var $borderRadiusBR = $("#bottomRightCorner").val();	
		$("#svgContainer").css("border-top-left-radius",$borderRadiusTL +"px");
		$("#svgContainer").css("border-top-right-radius",$borderRadiusTR +"px");
		$("#svgContainer").css("border-bottom-left-radius",$borderRadiusBL +"px");
		$("#svgContainer").css("border-bottom-right-radius",$borderRadiusBR +"px");
		$("#lbltopLeftCorner").text($borderRadiusTL);
		$("#lbltopRightCorner").text($borderRadiusTR);
		$("#lblbottomLeftCorner").text($borderRadiusBL);
		$("#lblbottomRightCorner").text($borderRadiusBR);
		rounded_rect($borderRadiusTR, false, true, false, false);
		rounded_rect($borderRadiusBL, false, false, true, false);
		rounded_rect($borderRadiusBR, false, false, false, true);
		rounded_rect($borderRadiusTL, true, false, false, false);
		$("#lblSliderValue").text($borderWidth);
 		
}
function changeFontColor(){
	var $fontColor = $("#fontColor").val();
	document.execCommand('styleWithCSS', false, true);
	document.execCommand("ForeColor", false, $fontColor);
}
function changeFontBold(){
	var $isBold = $("#txtBold").prop("checked");
	document.execCommand('styleWithCSS', false, true);
	document.execCommand("bold", $isBold, null);
}
function changeFontItalic(){
	var $isItalic = $("#txtItalic").prop("checked");
	document.execCommand('styleWithCSS', false, true);
	document.execCommand("italic", $isItalic, null);
}
function changeFontUnderline(){
	var $isUnderline = $("#txtUnderline").prop("checked");
	document.execCommand('styleWithCSS', false, true);
	document.execCommand("underline", $isUnderline, null);
}
function changeFontStrikethrough(){
	var $isStrikethrough = $("#txtStrikethrough").prop("checked");
	document.execCommand('styleWithCSS', false, true);
	document.execCommand("strikethrough", $isStrikethrough, null);
}
$('#txtShadow').on('mouseup', '#hOffset', function() {
// $('#txtShadow #hOffset').on('mouseup', function(){
	debugger;
	// get the selection
	
   //  $('#testing').contents().unwrap();
  	// $('.svgText #testing').remove();
  	changeFontShadowProperty(range);
});
$('#txtShadow').on('mouseup', '#vOffset', function() {
// $('#txtShadow #vOffset').on('mouseup', function(){
	debugger;
	// var range = window.getSelection().getRangeAt(0);
 //    $('#testing').contents().unwrap();
 //  	$('.svgText #testing').remove();
  	changeFontShadowProperty(range);
});
function changeFontShadowProperty(){

	var $TxtShadowProperty ="";
	
  	var $mainDiv = $("#txtShadow").attr('id');
	var $hOffset = $("#"+ $mainDiv + " #hOffset").val();
	var $vOffset =$("#"+ $mainDiv + " #vOffset").val();  
	var $blur = $("#"+ $mainDiv + " #blur").val();  
	var $shadowColor =  $("#"+ $mainDiv + " #shadowColor").val(); 

	$("#"+ $mainDiv + " #lblhOffset").text($hOffset);
	$("#"+ $mainDiv + " #lblvOffset").text($vOffset);
	$("#"+ $mainDiv + " #lblBlur").text($blur);
	
  	$TxtShadowProperty =  $hOffset + "px " + $vOffset +"px " + $blur + "px " + $shadowColor;
  	var range = window.getSelection().getRangeAt(0);
	// create a new span node and give it an id 'testing'.
	var newNode = document.createElement('span');
	// newNode.id = "testing";

	// wrap the selection range with the <span id="testing"></span> node.
	range.surroundContents(newNode);

	// select that new node with jquery and use the jQuery .css() method to apply styles.
	$("#testing").css("text-shadow", $TxtShadowProperty); 
	// document.execCommand("styleWithCSS", false, true);
	// document.execCommand('text-shadow',true , $TxtShadowProperty);
	
}
function rounded_rect(r, tl, tr, bl, br) 
{
 	var box = document.getElementById("rectID");
 	var x = box.x.baseVal.value;
 	var y = box.y.baseVal.value;
 	var w = box.width.baseVal.value;
 	var h = box.height.baseVal.value;
    var $retval;
    $retval  = "M" + (x + r) + "," + y;
    $retval += "h" + (w - 2*r);
    if (tr) { 
    	$retval += "a" + r + "," + r + " 0 0 1 " + r + "," + r; 
    }
    else { 
    	$retval += "h" + r; 
    	$retval += "v" + r; 
    }
    $retval += "v" + (h - 2*r);
    if (br) { 
    	$retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + r; 
    }
    else { 
    	$retval += "v" + r; 
    	$retval += "h" + -r; 
    }
    $retval += "h" + (2*r - w);
    if (bl) { 
    	$retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + -r; 
    }
    else { 
    	$retval += "h" + -r; 
    	$retval += "v" + -r; 
    }
    $retval += "v" + (2*r - h);
    if (tl) { 
    	$retval += "a" + r + "," + r + " 0 0 1 " + r + "," + -r; 
    }
    else 
    	{ 
    		$retval += "v" + -r; 
    		$retval += "h" + r; 
    }
    $retval += "z";
   $("#svgPath").attr('d', $retval);
}
function LoadBGColor(orientationType = orientation,isWaveEffect = WaveEffect)
{
	orientation = orientationType
	WaveEffect = Boolean(isWaveEffect);
	// Bg COLOR
	var $bgcolor = $("#startcolor").val();
	var $endbgcolor = $("#endcolor").val();

	if (orientationType === 1)
	{
		// Top to bottom
		retType = (isWaveEffect === false) ? "linear-gradient(" + $bgcolor +","+ $endbgcolor +")" : "linear-gradient(" + $bgcolor +","+ $endbgcolor +", "+ $bgcolor +")";
	}
	else if (orientationType === 2)
	{
		// Left to right
		retType = (isWaveEffect === false) ? "linear-gradient(to right," + $bgcolor +","+ $endbgcolor +")" : "linear-gradient(to right," + $bgcolor +","+ $endbgcolor +", "+ $bgcolor +")";
	}
	else if (orientationType === 3)
	{
		// top left to bottom right
		retType = (isWaveEffect === false) ? "linear-gradient(to bottom right," + $bgcolor +","+ $endbgcolor +")" : "linear-gradient(to bottom right," + $bgcolor +","+ $endbgcolor +", "+ $bgcolor +")";
	}
	else if (orientationType === 4)
	{
		// bottom left to top right
		retType = (isWaveEffect === false) ? "linear-gradient(to top right," + $bgcolor +","+ $endbgcolor +")" : "linear-gradient(to top right," + $bgcolor +","+ $endbgcolor +", "+ $bgcolor +")";
	}
	else if (orientationType === 5)
	{
		// bottom left to top right
		retType = (isWaveEffect === false) ? "radial-gradient(circle," + $bgcolor +","+ $endbgcolor +")" : "radial-gradient(circle," + $bgcolor +","+ $endbgcolor +", "+ $bgcolor +")";
	}
	$("#svgContainer").css("background-image",retType);
}

function changeActive(objActive)
{
	debugger;
	$("img").removeClass('imgSelect');
	$(objActive).addClass('imgSelect');
}

function changeShadowProperty()
{
	var ShadowProperty ="";
	var divShadow= $('.divShadow');
	for (var i = 0; i < divShadow.length; i++) 
	{
	  	var mainDiv = $(divShadow[i]).attr('id');
		var $hOffset = $("#"+ mainDiv + " #hOffset").val();
		var $vOffset =$("#"+ mainDiv + " #vOffset").val();  
		var $blur = $("#"+ mainDiv + " #blur").val();  
		var $shadowColor =  $("#"+ mainDiv + " #shadowColor").val(); 

		$("#"+ mainDiv + " #lblhOffset").text($hOffset);
		$("#"+ mainDiv + " #lblvOffset").text($vOffset);
		$("#"+ mainDiv + " #lblBlur").text($blur);
		
	  	ShadowProperty += "," + $hOffset + "px " + $vOffset +"px " + $blur + "px 0px " + $shadowColor;
	}
	ShadowProperty = ShadowProperty.substr(1);
	$("#svgContainer").css("box-shadow",ShadowProperty);
}

function CloneDivShadow()
{
	ShadowPropertyNum ++;
	var $el = $('#divShadow1').clone().prop('id','divShadow' + ShadowPropertyNum); 
	$('.divShadowMain').append($el); 
	$('#divShadow' + ShadowPropertyNum + " #hOffset").val(1);
	$('#divShadow' + ShadowPropertyNum + " #vOffset").val(1);
	$('#divShadow' + ShadowPropertyNum + " #blur").val(2);
	$('#divShadow' + ShadowPropertyNum + " #shadowColor").val('#665e5e');

	$('#divShadow' + ShadowPropertyNum + " #lblhOffset").text(1);
	$('#divShadow' + ShadowPropertyNum + " #lblvOffset").text(1);
	$('#divShadow' + ShadowPropertyNum + " #lblBlur").text(2);
    
}

function RemoveShadow(objDiv)
{
	var delDiv = $(objDiv).closest(".divShadow");
	if ($(delDiv).attr("id") !== "divShadow1" )
	{
		$(delDiv).remove();
		changeShadowProperty();
	}
}

function SetSVGDimension(isFit)
{
	if (isFit === true)
	{
		$(".svgText").css("width", 'auto');
		$('#svgContainer svg').attr('height', $('.svgText').height());
		$('#svgContainer svg').attr('width', $('.svgText').width());
	}
	else
	{
		$(".svgText").css("width", '400px');
		$('#svgContainer svg').attr('height', 150);
		$('#svgContainer svg').attr('width', $('.svgText').width());

	}
}

function changePaddingProperty()
{
	var $vPadding = $("#vPadding").val();
	var $hPadding = $("#hPadding").val();
	$("#svgContainer").css("padding-top",$vPadding +"px");
	$("#svgContainer").css("padding-bottom",$vPadding +"px");
	$("#svgContainer").css("padding-left",$hPadding +"px");
	$("#svgContainer").css("padding-right",$hPadding +"px");

	$('#lblvPadding').text($vPadding);
	$('#lblhPadding').text($hPadding);
}