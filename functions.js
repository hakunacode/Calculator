window.onresize=function(a){reWriteOnResize()};function setFullScreen(){reWriteOnResize();$("#btnRad").button("disable");$("#btnRad").button("refresh");$("#btnDeg").button("enable");$("#btnDeg").button("refresh")}
function reWriteOnResize(){$(window).height();$(window).width();$(document).ready(function(){$("#elka").css("width",780);$("#form1").css("width",780);$("#subElka").css("width",610);$("#bigBox").addClass("ui-grid-a");$("#littleBox1").addClass("ui-block-a");$("#littleBox2").addClass("ui-block-b")})}function TestExitFullScreen(){}function closeapplication(){}
function stripBadSymbols(){var a=$("#display1").val();a=a.replace(/[^0-9.+*-e\/\s]/g,"");""==a&&(a="0");"-"==a&&(a="-0");$("#display1").val(a)}function addDigit(a,b){1==canClear&&(canClear=!1,a.value="");lastOperator="";null==a.value||"0"==a.value?a.value=b:"-0"==a.value?"."!=b&&(a.value="-"+b):a.value+=b;stripBadSymbols();dc()}function calcPercent(){unaryOperationRight("percent");lastRightSide=lastOperator=""}
function calcPercent2(){isPercent=!0;enterPressed();rightSide=lastRightSide=lastOperator="";isPercent=!1}function f(){isDegrees?(isDegrees=!0,$("#btnDeg").button("disable"),$("#btnDeg").button("refresh"),$("#btnRad").button("enable"),$("#btnRad").button("refresh")):(isDegrees=!1,$("#btnRad").button("disable"),$("#btnRad").button("refresh"),$("#btnDeg").button("enable"),$("#btnDeg").button("refresh"));localStorage.deg_selected=isDegrees};