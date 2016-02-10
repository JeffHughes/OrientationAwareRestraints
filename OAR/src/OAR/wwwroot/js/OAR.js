/*

add coverage for picture
var image = $(this).find("img");

image.removeAttr("width");
image.removeAttr("height");

var initialImage = new Image();
initialImage.src = image.attr("src");
*/

function isVerticalOrientation() {
    console.log($(window).width() + " " + $(window).height());
    return $(window).width() < $(window).height();
}
function isHorizontalOrientation() {
    return !isVerticalOrientation();
}

/*== 1. ================*/
function CenterVertically(ele) {
    $(ele)
        .css("position", "relative")
        .css("top", "50%")
        .css("-moz-transform", "translateY(-50%)")
        .css("-ms-transform", "translateY(-50%)")
        .css("-o-transform", "translateY(-50%)")
        .css(" -webkit-transform", "translateY(-50%)")
        .css("transform", "translateY(-50%)");
}
function CenterHorizontally(ele) {
    $(ele)
        .css("position", "relative")
        .css("left", "50%")
        .css("-moz-transform", "translateX(-50%)")
        .css("-ms-transform", "translateX(-50%)")
        .css("-o-transform", "translateX(-50%)")
        .css(" -webkit-transform", "translateX(-50%)")
        .css("transform", "translateX(-50%)");
}

function Trim(ele) {
    $(ele)
        .css("width", "auto")
        .css("min-width", "0")
        .css("display", "table");
}

function MinSquare(ele) {
    if (isVerticalOrientation()) {
        //console.log("vertical");
        $(ele).css("width", $(ele).attr("min-square") + "vw");
        $(ele).css("height", $(ele).innerWidth());
    } else {
        //console.log("horizontal");
        $(ele).css("height", $(ele).attr("min-square") + "vh");
        $(ele).css("width", $(ele).innerHeight());
    }
}
function MaxSquare(ele) {
    var height = $(ele).innerHeight();
    var width = $(ele).innerWidth();

    if (width > height)
        $(ele).css("height", width);
    else if (height > width)
        $(ele).css("width", height);
}

/*== 2. ================*/
function VerticalWidth(ele) {
    if (isVerticalOrientation())
        $(ele).css("width", $(ele).attr("vertical-width"));
}
function VerticalHeight(ele) {
    if (isVerticalOrientation())
        $(ele).css("height", $(ele).attr("vertical-height"));
}
function HorizontalWidth(ele) {
    if (isHorizontalOrientation())
        $(ele).css("width", $(ele).attr("vertical-width"));
}
function HorizontalHeight(ele) {
    if (isHorizontalOrientation())
        $(ele).css("height", $(ele).attr("vertical-height"));
}

/*== 3. ================*/
function VerticalMinWidth(ele) {
    if (isVerticalOrientation() && $(ele).innerWidth() < $(ele).attr("vertical-min-width"))
        $(ele).innerWidth($(ele).attr("vertical-min-width"));
    else
        $(ele).innerWidth(null);
}
function VerticalMinHeight(ele) {
    if (isVerticalOrientation() && $(ele).innerHeight() < $(ele).attr("vertical-min-height"))
        $(ele).innerWidth($(ele).attr("vertical-min-height"));
}

function HorizontalMinWidth(ele) {
    console.log($(ele).innerWidth() + " " + $(ele).attr("horizontal-min-width"));
    if (isHorizontalOrientation() && $(ele).innerWidth() < $(ele).attr("horizontal-min-width"))
        $(ele).innerWidth($(ele).attr("horizontal-min-width"));
    else
        $(ele).resize();
}
function HorizontalMinHeight(ele) {
    if (isHorizontalOrientation() && $(ele).innerHeight() < $(ele).attr("horizontal-min-height"))
        $(ele).innerWidth($(ele).attr("horizontal-min-height"));
}

function VerticalMaxWidth(ele) {
    if (isVerticalOrientation() && $(ele).innerWidth() > $(ele).attr("vertical-max-width"))
        $(ele).innerWidth($(ele).attr("vertical-max-width"));
}
function VerticalMaxHeight(ele) {
    if (isVerticalOrientation() && $(ele).innerHeight() > $(ele).attr("horizontal-max-height"))
        $(ele).innerWidth($(ele).attr("horizontal-max-height"));
}
function HorizontalMaxWidth(ele) {
    if (isHorizontalOrientation() && $(ele).innerWidth() > $(ele).attr("horizontal-max-width"))
        $(ele).innerWidth($(ele).attr("horizontal-max-width"));
}
function HorizontalMaxHeight(ele) {
    if (isHorizontalOrientation() && $(ele).innerHeight() > $(ele).attr("horizontal-max-height"))
        $(ele).innerWidth($(ele).attr("horizontal-max-height"));
}

/*== 4. ================*/
function HideVertical(ele) {
    if (isVerticalOrientation())
        $(ele).hide();
    else
        $(ele).show();
}
function HideHorizontal(ele) {
    if (!isHorizontalOrientation())
        $(ele).hide();
    else
        $(ele).show();
}

function HideBelowWidth(ele) {
    if ($(ele).innerWidth() < $(ele).attr("hide-below-width"))
        $(ele).hide();
    else
        $(ele).show();
}
function HideAboveWidth(ele) {
    if ($(ele).innerWidth() > $(ele).attr("hide-below-width"))
        $(ele).hide();
    else
        $(ele).show();
}
function HideBelowHeight(ele) {
    if ($(ele).innerHeight() < $(ele).attr("hide-below-height"))
        $(ele).hide();
    else
        $(ele).show();
}
function HideAboveHeight(ele) {
    if ($(ele).innerHeight() > $(ele).attr("hide-below-height"))
        $(ele).hide();
    else
        $(ele).show();
}

/*== 5. ================*/
function HorizontalHideBelowWidth(ele) {
    if (isHorizontalOrientation() && $(ele).innerWidth() < $(ele).attr("horizontal-hide-below-width"))
        $(ele).hide();
    else
        $(ele).show();
}
function HorizontalHideAboveWidth(ele) {
    if (isHorizontalOrientation() && $(ele).innerWidth() > $(ele).attr("horizontal-hide-above-width"))
        $(ele).hide();
    else
        $(ele).show();
}
function HorizontalHideBelowHeight(ele) {
    if (isHorizontalOrientation() && $(ele).innerHeight() < $(ele).attr("horizontal-hide-below-height"))
        $(ele).hide();
    else
        $(ele).show();
}
function HorizontalHideAboveHeight(ele) {
    if (isHorizontalOrientation() && $(ele).innerHeight() > $(ele).attr("horizontal-hide-above-height"))
        $(ele).hide();
    else
        $(ele).show();
}

/*== 6. ================*/
function VerticalHideBelowWidth(ele) {
    if (isVerticalOrientation() && $(ele).innerWidth() < $(ele).attr("vertical-hide-below-width"))
        $(ele).hide();
    else
        $(ele).show();
}
function VerticalHideAboveWidth(ele) {
    if (isVerticalOrientation() && $(ele).innerWidth() > $(ele).attr("vertical-hide-above-width"))
        $(ele).hide();
    else
        $(ele).show();
}
function VerticalHideBelowHeight(ele) {
    if (isVerticalOrientation() && $(ele).innerHeight() < $(ele).attr("vertical-hide-below-height"))
        $(ele).hide();
    else
        $(ele).show();
}
function VerticalHideAboveHeight(ele) {
    if (isVerticalOrientation() && $(ele).innerHeight() > $(ele).attr("vertical-hide-above-height"))
        $(ele).hide();
    else
        $(ele).show();
}

function UpdateOARs() {
    /*== 1. ================*/
    $.each($("[center-both]"), function (i, v) { CenterVertically(v); CenterHorizontally(v); })
    $.each($("[center-horizontally]"), function (i, v) { CenterHorizontally(v); })
    $.each($("[center-vertically]"), function (i, v) { CenterVertically(v); })

    $.each($("[trim-width]"), function (i, v) { Trim(v); })

    $.each($("[min-square]"), function (i, v) { MinSquare(v); })
    $.each($("[max-square]"), function (i, v) { MaxSquare(v); })

    /*== 2. ================*/
    $.each($("[vertical-width]"), function (i, v) { VerticalWidth(v); })
    $.each($("[vertical-height]"), function (i, v) { VerticalHeight(v); })

    $.each($("[horizontal-width]"), function (i, v) { HorizontalWidth(v); })
    $.each($("[horizontal-height]"), function (i, v) { HorizontalHeight(v); })

    /*== 3. ================*/
    $.each($("[vertical-min-width]"), function (i, v) { VerticalMinWidth(v); })
    $.each($("[vertical-min-height]"), function (i, v) { VerticalMinHeight(v); })

    $.each($("[horizontal-min-width]"), function (i, v) { HorizontalMinWidth(v); })
    $.each($("[horizontal-min-height]"), function (i, v) { HorizontalMinHeight(v); })

    $.each($("[vertical-max-width]"), function (i, v) { VerticalMaxWidth(v); c })
    $.each($("[vertical-max-height]"), function (i, v) { VerticalMaxHeight(v); })

    $.each($("[horizontal-max-width]"), function (i, v) { HorizontalMaxWidth(v); })
    $.each($("[horizontal-max-height]"), function (i, v) { HorizontalMaxHeight(v); })

    /*== 4. ================*/
    $.each($("[hide-vertical]"), function (i, v) { HideVertical(v); })
    $.each($("[hide-horizontal]"), function (i, v) { HideHorizontal(v); })

    $.each($("[hide-below-width]"), function (i, v) { HideBelowWidth(v); })
    $.each($("[hide-above-width]"), function (i, v) { HideAboveWidth(v); })

    $.each($("[hide-below-height]"), function (i, v) { HideBelowHeight(v); })
    $.each($("[hide-above-height]"), function (i, v) { HideAboveHeight(v); })

    /*== 5. ================*/
    $.each($("[horizontal-hide-below-width]"), function (i, v) { HorizontalHideBelowWidth(v); })
    $.each($("[horizontal-hide-below-height]"), function (i, v) { HorizontalHideBelowHeight(v); })

    $.each($("[horizontal-hide-above-width]"), function (i, v) { HorizontalHideAboveWidth(v); })
    $.each($("[horizontal-hide-above-height]"), function (i, v) { HorizontalHideAboveHeight(v); })

    /*== 6. ================*/
    $.each($("[vertical-hide-below-width]"), function (i, v) { VerticalHideBelowWidth(v); })
    $.each($("[vertical-hide-below-height]"), function (i, v) { VerticalHideBelowHeight(v); })

    $.each($("[vertical-hide-above-width]"), function (i, v) { VerticalHideAboveWidth(v); })
    $.each($("[vertical-hide-above-height]"), function (i, v) { VerticalHideAboveHeight(v); })
}

$(function () {
    UpdateOARs();
    $(document).on("HeightOrWidthChanged", UpdateOARs);
    $(document).on("OrientationChanged", UpdateOARs);
});