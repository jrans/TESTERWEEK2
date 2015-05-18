test("this bit should describe, to a human, what the test is for", function() {
    equal( 1, 1);
});







test("check that the header exist'", function() {
    var iframe = document.getElementById('if-index');

    var target = iframe.contentDocument || iframe.contentWindow.document;

    var initial = target.getElementById('heading');

    equal(initial, 'Hello World!', 'it works');
});
