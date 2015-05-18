test("this bit should describe, to a human, what the test is for", function() {
    equal( 1, 1);
});

test("check that the header exist'", function() {
    var title= document.getElementById('heading').innerHTML;
    equal(title, "This is a header");
});
