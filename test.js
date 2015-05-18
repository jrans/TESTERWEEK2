test("this bit should describe, to a human, what the test is for", function() {
    equal( 1, 1);
});

test("check that the header exist'", function() {
    var title= document.getElementById('heading').innerHTML;
    equal(title, "This is a header");
});

SC.initialize({
  client_id: 'a3f9118b2e28c73d8d2e68a609815e7d'
});

$(document).ready(function() {
    SC.stream('/tracks/293', function(sound) {
        $( "#start" ).click(function() {
            sound.start();
        }),
        $( "#stop" ).click(function() {
            sound.stop();
        });
});
});

$(document).ready(function() {
    SC.get('/tracks/42242000', function(track) {
      SC.oEmbed(track.permalink_url, document.getElementById('player'));
    });
}
)
