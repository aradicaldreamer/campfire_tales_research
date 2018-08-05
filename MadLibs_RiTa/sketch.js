// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/ziBO-U2_t3k

var data;

var txt = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';

function setup() {
  noCanvas();
  var button = createButton('generate madlib');
  button.mousePressed(generate);
}

function generate() {
  var rs = new RiString('EXCLAMATION! They said ADVERB as they jumped into their NOUN and flew off with their ADJECTIVE PLURALNOUN.');
  var output = '';

  var words = rs.words();

  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'EXCLAMATION'){
      rs.replaceWord(i, RiTa.randomWord('uh'));
    }
    
    if (words[i] === 'ADVERB'){
      rs.replaceWord(i, RiTa.randomWord('rb'));
    }

    if (words[i] === 'NOUN'){
      rs.replaceWord(i, RiTa.randomWord('nn'));
    }

    if (words[i] === 'ADJECTIVE'){
      rs.replaceWord(i, RiTa.randomWord('jj'));
    }

    if (words[i] === 'PLURALNOUN'){
      rs.replaceWord(i, RiTa.randomWord('nns'));
    }

    rs.replaceChar(0, rs.charAt(0).toUpperCase());
  }
  
  createP(rs.text());
  
}

// function replacer(match, pos) {
//   var entry = random(data);
//   return entry[pos];
// }


// function generate() {
//   //console.log('generate');
//   var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
//   createP(madlib);
// }

// function gotData(stuff, tabletop) {
//   data = stuff;
// }
