test("this bit should describe, to a human, what the test is for", function() {
    equal( 1, 1);
});


test("check that the header exist", function() {
    var iframe = document.getElementById('if-index');

    var target = iframe.contentDocument || iframe.contentWindow.document;

    var initial = target.getElementById('heading');

    var upper = getComputedStyle(initial,null).textTransform;

    equal(initial.innerHTML, 'The test of both worlds', 'header text is right and exists');

    equal(upper, "uppercase", 'uppercase');
});



test("add function", function() {
    var x=Math.floor(Math.random()*1000);
    var y=Math.floor(Math.random()*1000);
    equal(add(x,y), x+y, 'it works');
    equal(add(10,2),12)


});


// test("Has the CSS loaded?", function() {
// } )
