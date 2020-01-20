var copypasta = [
  "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself",
  "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
  "Hit or miss I guess they never miss, huh? You got a boyfriend, I bet he doesn't kiss ya He gon' find another girl and he won't miss ya He gon' skrrt and hit the dab like Wiz Khalifa",
  ];

function poop() {
  var textInput = $('#textInput').val();
  if (!textInput) {
    $('#alert').html('You gotta shit before you can poop.');
    $('#alert').fadeIn(500);
    $('#alert').delay(1500).fadeOut(500);
    return false;
  }
  $('#textResult').html('');

  textInput = textInput.toLowerCase();
  var textArray = textInput.split(' ');
  
  textArray.forEach(poopWord);

  $('#textResult').html($('#textResult').html().slice(0, -1));
  $('#copyButton').fadeIn(300);
}

function poopWord(word, index) {
  var poop = "";

  var poopSplit = word.split(/[^A-Za-z]/);
  var separators = [];
  
  /*if (word.charAt(0).match(/^[A-Za-z0-9]+$/)) {
    var start = '';
  }
  else {
    var start = word.charAt(0);
  }

  if (word.charAt(word.length - 1).match(/^[A-Za-z0-9]+$/)) {
    var end = '';
  }
  else {
    var end = word.charAt(word.length - 1);
  }*/

  var i = 0;
  var search = 0;
  while (poopSplit[i]) {
    if (search == 0) {
      search = poopSplit[i].length;
    }
    else {
      search += poopSplit[i].length + 1;
    }
    
    separators[i] = word.charAt(search);
    if (poopSplit[i].length <= 3) {
      poopSplit[i] = "pee";
    }
    else if (poopSplit[i].length == 4) {
      poopSplit[i] = "poop";
    }
    else if (poopSplit[i].length <= 6) {
      poopSplit[i] = "peepee";
    }
    else {
      poopSplit[i] = "poopoo";
    }
    if (search >= word.length) {
      poop += poopSplit[i];
    }
    else {
      poop += poopSplit[i] + separators[i];
    }
    
    i++;
  }

  poop += ' ';

  $('#textResult').html($('#textResult').html() + poop);
}

function copyText() {
  $('#textResult').select();
  document.execCommand("copy");
  $('#alert').html('Text Successfully Copied! Share this with your friends!<br><small>Oh wait, you don\'t have any...</small>');
  $('#alert').fadeIn(500);
  $('#alert').delay(1500).fadeOut(500);
}

function randomize() {
  random = Math.floor(Math.random() * copypasta.length);
  sampleText = copypasta[random];

  $('#textInput').val(sampleText);
  poop();
}
