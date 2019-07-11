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
  var kaomojiJoy        = [" (* ^ ω ^)", " (o^▽^o)", " (≧◡≦)", " ☆⌒ヽ(*\"､^*)chu", " ( ˘⌣˘)♡(˘⌣˘ )", " xD"];
  var kaomojiEmbarassed = [" (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)..", " (*^.^*)..,", "..,", ",,,", "... ", ".. ", " mmm.."];
  var kaomojiConfuse    = [" (o_O)?", " (°ロ°) !?", " (ーー;)?", " owo?"];
  var kaomojiSparkles   = [" *:･ﾟ✧*:･ﾟ✧ ", " ･ﾟﾟ･｡ ", " ♥♡♥ ", " uguu.., "];
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
        random = Math.floor(Math.random() * (kaomojiJoy.length - 1)) + 1;
        end = kaomojiJoy[random];
      }
    }
    else if (end == '?') {
      random = Math.floor(Math.random() * 2);
      if (random == 0) {
        random = Math.floor(Math.random() * (kaomojiConfuse.length - 1)) + 1;
        end = kaomojiConfuse[random];
      }
    }
    else if (end == '!') {
      random = Math.floor(Math.random() * 2);
      if (random == 0) {
        random = Math.floor(Math.random() * (kaomojiJoy.length - 1)) + 1;
        end = kaomojiJoy[random];
      }
    }
    else if (end == ',') {
      random = Math.floor(Math.random() * 3);
      if (random == 0) {
        random = Math.floor(Math.random() * (kaomojiEmbarassed.length - 1)) + 1;
        end = kaomojiEmbarassed[random];
      }
    }

    random = Math.floor(Math.random() * 4);
    if (random == 0) {
      random = Math.floor(Math.random() * (kaomojiSparkles.length - 1)) + 1;
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
  uwu = uwu.replace(/fuck/g, "f**k");
  uwu = uwu.replace(/shit/g, "poopoo");
  uwu = uwu.replace(/bitch/g, "meanie");
  uwu = uwu.replace(/asshole/g, "b-butthole");
  uwu = uwu.replace(/ ass /g, " boi pussy ");
  uwu = uwu.replace(/ dad | father /g, " daddy ");

  if (uwu.length > 2 && uwu[0].match(/[a-z]/i)) {
    random = Math.floor(Math.random() * 5);
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
