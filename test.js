test("this bit should describe, to a human, what the test is for", function() {
    equal( 1, 1);
});





test("If there is a header", function(){
var iframe = document.getElementById('if-index');
var target = iframe.contentDocument || iframe.contentWindow.document;
var testable = target.getElementById('heading').innerHTML;

notEqual(testable,'',"Woohoo, the header exists and has some text in it")

})


test("Is there an image on the page", function(){
var iframe = document.getElementById('if-index');
var target = iframe.contentDocument || iframe.contentWindow.document;	
var testimage = target.getElementsByTagName("img")[0].alt;

notEqual(testimage, "", "yeah");

})

test("We want to see a css link", function(){
var iframe = document.getElementById('if-index');
var target = iframe.contentDocument || iframe.contentWindow.document;	
var linkki = target.getElementsByTagName('link')[0].href;


equal(linkki,"main.css", "Fuck yessss! We are ze besttt testers on the face of earth");

})

test("We want to test if the font family of the header is sans serif", function(){
var iframe = document.getElementById('if-index');
var target = iframe.contentDocument || iframe.contentWindow.document;	
var  elementti = target.getElementById('heading')
var fontstyle =window.getComputedStyle(elementti,null).getPropertyValue('font-family');

equal(fontstyle,"sans-serif","Onneksi olkoon you are the mosts awesomest testing team!");

})



