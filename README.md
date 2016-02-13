# OrientationAwareRestraints

shim for object sizing and positioning using tag attributes and JQuery

###vertical-class
adds a space separated group of classes when vertically oriented
removes any classes listed in horizontal-class tag

```

<div vertical-class="class1 class2"  horizontal-class="class3 class4">

```

###horizontal-class
adds a space separated group of classes when horizontally oriented
removes any classes listed in vertical-class tag

```

<div  horizontal-class="class1 class2" vertical-class="class3 class4">

```

###full
adds height of 100vh and width of 100vw

```

<div full>

```

###trim-width
changes a div from 100% width to just what is needed to fit the text inside

```

<div trim-width>

```

###[vertical/horiztontal]-insert-[before/after]

moves the div order based on orientation

```

    <div id="a">a</div>
    <div id="b">b</div>
    <div horizontal-insert-after="#a" vertical-insert-after="#b" id="c">c</div>
```

###min-square
uses % of viewport (vh or vw) to create a square that fits in the screen regardless of orientation

```

<div min-square="80">

```

###max-square
uses any unit to create a square

```

<div min-square="80">

```

###center-vertically

```

<div center-vertically>

```

###center-horizontally

```

<div center-horizontally>

```

###center-both

```

<div center-both>

```

###vertical-width

 any unit to set height when orientation is vertical

```

<div vertical-width="50px">

```

###vertical-height
###horizontal-width

###horizontal-height
###vertical-min-width
uses pixels

###vertical-min-height

###horizontal-min-width
###horizontal-min-height

###vertical-max-width
###vertical-max-height

###horizontal-max-width
###horizontal-max-height

###hide-below-width
###hide-below-height

###hide-above-width
###hide-above-height

###horizontal-hide-below-width
###horizontal-hide-below-height

###horizontal-hide-above-width
###horizontal-hide-above-height

###horizontal-hide-below-width
###horizontal-hide-below-height

###horizontal-hide-above-width
###horizontal-hide-above-height