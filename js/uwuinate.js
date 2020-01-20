var copypasta = [
  "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself",
  "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
  "Hit or miss I guess they never miss, huh? You got a boyfriend, I bet he doesn't kiss ya He gon' find another girl and he won't miss ya He gon' skrrt and hit the dab like Wiz Khalifa",
 ];
var kaomojiJoy        = [" (* ^ ω ^)", " (o^▽^o)", " (≧◡≦)", " ☆⌒ヽ(*\"､^*)chu", " ( ˘⌣˘)♡(˘⌣˘ )", " xD"];
var kaomojiEmbarassed = [" (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)..", " (*^.^*)..,", "..,", ",,,", "... ", ".. ", " mmm..", "O.o"];
var kaomojiConfuse    = [" (o_O)?", " (°ロ°) !?", " (ーー;)?", " owo?"];
var kaomojiSparkles   = [" *:･ﾟ✧*:･ﾟ✧ ", " ☆*:・ﾟ ", "〜☆ ", " uguu.., ", "-.-"];

function uwuinate() {
  var textInput = $('#textInput').val();
  if (!textInput) {
    $('#alert').html('You silly bunny, type something in the text area before trying to UwUinate it!<br><small>dumbass...</small>');
    $('#alert').fadeIn(500);
    $('#alert').delay(1500).fadeOut(500);
    return false;
  }
  $('#textResult').html('');

  textInput = textInput.toLowerCase();
  var textArray = textInput.split(' ');
  
  textArray.forEach(uwuWord);

  $('#textResult').html($('#textResult').html().slice(0, -1));
  $('#copyButton').fadeIn(300);
}

function uwuWord(word, index) {
  var uwu = "";

  var lastChar = word[word.length - 1];
  var end = "";
  var random = 0;
  if (lastChar == '.' || lastChar == '?' || lastChar == '!' || lastChar == ',') {
    word = word.slice(0, -1);
    end = lastChar;

    if (end == '.') {
      random = Math.floor(Math.random() * 3);
      if (random == 0) {
        random = Math.floor(Math.random() * kaomojiJoy.length);
        end = kaomojiJoy[random];
      }
    }
    else if (end == '?') {
      random = Math.floor(Math.random() * 2);
      if (random == 0) {
        random = Math.floor(Math.random() * kaomojiConfuse.length);
        end = kaomojiConfuse[random];
      }
    }
    else if (end == '!') {
      random = Math.floor(Math.random() * 2);
      if (random == 0) {
        random = Math.floor(Math.random() * kaomojiJoy.length);
        end = kaomojiJoy[random];
      }
    }
    else if (end == ',') {
      random = Math.floor(Math.random() * 3);
      if (random == 0) {
        random = Math.floor(Math.random() * kaomojiEmbarassed.length);
        end = kaomojiEmbarassed[random];
      }
    }

    random = Math.floor(Math.random() * 4);
    if (random == 0) {
      random = Math.floor(Math.random() * kaomojiSparkles.length);
      end = kaomojiSparkles[random];
    }
  }

  if (word.indexOf('l') > -1) {
    if (word.slice(-2) == "le" || word.slice(-2) == "ll") {
      uwu += word.slice(0, -2).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-2) + end + ' ';
    }
    else if (word.slice(-3) == "les" || word.slice(-3) == "lls") {
      uwu += word.slice(0, -3).replace(/l/g, 'w').replace(/r/g, 'w') + word.slice(-3) + end + ' ';
    }
    else {
      uwu += word.replace(/l/g, 'w').replace(/r/g, 'w') + end + ' ';
    }
  }
  else if (word.indexOf('r') > -1) {
    if (word.slice(-2) == "er" || word.slice(-2) == "re") {
      uwu += word.slice(0, -2).replace(/r/g, 'w') + word.slice(-2) + end + ' ';
    }
    else if (word.slice(-3) == "ers" || word.slice(-3) == "res") {
      uwu += word.slice(0, -3).replace(/r/g, 'w') + word.slice(-3) + end + ' ';
    }
    else {
      uwu += word.replace(/r/g, 'w') + end + ' ';
    }
  }
  else {
    uwu += word + end + ' ';
  }

  uwu = uwu.replace(/you're/g, "ur");
  uwu = uwu.replace(/youre/g, "ur");
  uwu = uwu.replace(/fuck/g, "fwickk");
  uwu = uwu.replace(/shit/g, "poopoo");
  uwu = uwu.replace(/bitch/g, "meanie");
  uwu = uwu.replace(/asshole/g, "b-butthole");
  uwu = uwu.replace(/dick/g, "peenie");
  uwu = uwu.replace(/penis/g, "peenie");
  uwu = uwu.replace(/\bcum\b/g, "cummies");
  uwu = uwu.replace(/\bsemen\b/g, " cummies ");
  uwu = uwu.replace(/\bass\b/g, " boi pussy ");
  uwu = uwu.replace(/\bdad\b/g, "daddy");
  uwu = uwu.replace(/\bfather\b/g, "daddy");

  if (uwu.length > 2 && uwu[0].match(/[a-z]/i)) {
    random = Math.floor(Math.random() * 6);
    if (random == 0) {
      uwu = uwu[0] + '-' + uwu;
    }
  }
  $('#textResult').html($('#textResult').html() + uwu);
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
  uwuinate();
}
