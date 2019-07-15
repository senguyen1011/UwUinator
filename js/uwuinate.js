var copypasta = [
  "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.",
  "gf is prego\nwe like to get kinky anyways\none night things get particularly saucy\ni'm sticking my noodle in her when I notice weird fucking chunks coming out, so I turn on the lights\nwtf it's red everywhere and she's obviously not on her period\ni look up at her, she's got a glassy, jarred look on her face and she's not answering\nohshitohshitohshitohshit\ni rush her into my car and speed all the way to the hospital\nshe's still bleeding everywhere\nby the time we get there, she's not bleeding much anymore, but all the color has drained and she looks colorless and almost transparent\noh shit, she looks like she's in a vegetative state\nstorm into to the emergency room, cary her to the nearest doctor and explain eveything\nhe takes one look at ther and says\n\"sir, i'm sorry, there's nothing we can do\"\n\"WHY THE FUCK NOT???\"\n\"we don't operate on empty jars of spaghetti sauce\"",
  "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself",
  "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
  "Hit or miss I guess they never miss, huh? You got a boyfriend, I bet he doesn't kiss ya He gon' find another girl and he won't miss ya He gon' skrrt and hit the dab like Wiz Khalifa",
  "The similarities. Human development of mankind. The simalarities of boobs and butts. Back when we walked on all fours there was a thing right in front of us, a butt. Then from the time mankind started walking on two legs, we stopped having butts sticking in our faces all the time. And in their place boobs appeared right in our faces. Women grew larger breasts to take the place of buttocks. THE ORIGINAL SOURCE OF LIFE IS THE BUTTOCKS! Boobs are just a substitute. Boobs are nothing more than a pale imitation of the buttocks! If you asked would you rather have the copy or the original,I would take the original! Hips and ass indicate fertility! Boobs jut out forward due to the process of evolution, Keeping buttocks farther back and the rear hidden! THIS IS WHY I AM AN ASS MAN!"
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
