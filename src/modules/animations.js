/*eslint-disable */
const MINIMUM_COLOR_R = 60;
const MINIMUM_COLOR_G = 15;
const MINIMUM_COLOR_B = 90;

const MAXIMUM_COLOR_R = 180;
const MAXIMUM_COLOR_G = 15;
const MAXIMUM_COLOR_B = 30;

const ICONS_DISTANCE = 50;

let cachePosition = {
  x: 0,
  y: 0,
};
// const bcg = generateRGB(true);
// let bcgName = `rgb(${MINIMUM_COLOR_R},${MINIMUM_COLOR_G},${MINIMUM_COLOR_R})`;

// document.body.style.background = bcgName;

// Generate random number within a given range.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Handle rgb change on mouseOver inside the body.
// implemented by calculating the percentage of the cursor position regarding the highest number we can achieve inside the palette (<255).
// minimum color in an RGB is 0 (which is black, so we had to set different minimum).
function setSmoothColorChange(pos, colors) {
  colors.r = MINIMUM_COLOR_R + Math.round((pos / window.innerWidth) * MAXIMUM_COLOR_R);
  colors.g = MINIMUM_COLOR_G + Math.round((pos / window.innerWidth) * MAXIMUM_COLOR_G);
  colors.b = MINIMUM_COLOR_B + Math.round((pos / window.innerWidth) * MAXIMUM_COLOR_B);

  return bcgName = `rgb(${colors.r},${colors.g},${colors.b})`;
}

// As the function name applies.
// function generateRGB(isObj) {
//   const colors = {
//     r: getRandomInt(0, 255),
//     g: getRandomInt(0, 255),
//     b: getRandomInt(0, 255),
//   };
//   return isObj ? colors : `rgb(${colors.r},${colors.g},${colors.b})`;
// }

function renderEmoji() {
  const allEmojis = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '👿', '😉', '😊', '☺️', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '👣', '👤', '👥', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿', '👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿', '👪', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👫', '👬', '👭', '👯', '👰', '👰🏻', '👰🏼', '👰🏽', '👰🏾', '👰🏿', '👱', '👱🏻', '👱🏼', '👱🏽', '👱🏾', '👱🏿', '👲', '👲🏻', '👲🏼', '👲🏽', '👲🏾', '👲🏿', '👳', '👳🏻', '👳🏼', '👳🏽', '👳🏾', '👳🏿', '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿', '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿', '👮', '👮🏻', '👮🏼', '👮🏽', '👮🏾', '👮🏿', '👷', '👷🏻', '👷🏼', '👷🏽', '👷🏾', '👷🏿', '👸', '👸🏻', '👸🏼', '👸🏽', '👸🏾', '👸🏿', '💂', '💂🏻', '💂🏼', '💂🏽', '💂🏾', '💂🏿', '👼', '👼🏻', '👼🏼', '👼🏽', '👼🏾', '👼🏿', '🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿', '👻', '👹', '👺', '💩', '💀', '👽', '👾', '🙇', '🙇🏻', '🙇🏼', '🙇🏽', '🙇🏾', '🙇🏿', '💁', '💁🏻', '💁🏼', '💁🏽', '💁🏾', '💁🏿', '🙅', '🙅🏻', '🙅🏼', '🙅🏽', '🙅🏾', '🙅🏿', '🙆', '🙆🏻', '🙆🏼', '🙆🏽', '🙆🏾', '🙆🏿', '🙋', '🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿', '🙎', '🙎🏻', '🙎🏼', '🙎🏽', '🙎🏾', '🙎🏿', '🙍', '🙍🏻', '🙍🏼', '🙍🏽', '🙍🏾', '🙍🏿', '💆', '💆🏻', '💆🏼', '💆🏽', '💆🏾', '💆🏿', '💇', '💇🏻', '💇🏼', '💇🏽', '💇🏾', '💇🏿', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '🙌', '🙌🏻', '🙌🏼', '🙌🏽', '🙌🏾', '🙌🏿', '👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿', '👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿', '👀', '👃', '👃🏻', '👃🏼', '👃🏽', '👃🏾', '👃🏿', '👄', '💋', '👅', '💅', '💅🏻', '💅🏼', '💅🏽', '💅🏾', '💅🏿', '👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿', '👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿', '👎', '👎🏻', '👎🏼', '👎🏽', '👎🏾', '👎🏿', '☝', '☝🏻', '☝🏼', '☝🏽', '☝🏾', '☝🏿', '👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿', '👇', '👇🏻', '👇🏼', '👇🏽', '👇🏾', '👇🏿', '👈', '👈🏻', '👈🏼', '👈🏽', '👈🏾', '👈🏿', '👉', '👉🏻', '👉🏼', '👉🏽', '👉🏾', '👉🏿', '👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿', '✌', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿', '👊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿', '💪', '💪🏻', '💪🏼', '💪🏽', '💪🏾', '💪🏿', '👐', '👐🏻', '👐🏼', '👐🏽', '👐🏾', '👐🏿', '🙏', '🙏🏻', '🙏🏼', '🙏🏽', '🙏🏾', '🙏🏿', '🌱', '🌲', '🌳', '🌴', '🌵', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼', '💐', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🍄', '🌰', '🐀', '🐁', '🐭', '🐹', '🐂', '🐃', '🐄', '🐮', '🐅', '🐆', '🐯', '🐇', '🐰', '🐈', '🐱', '🐎', '🐴', '🐏', '🐑', '🐐', '🐓', '🐔', '🐤', '🐣', '🐥', '🐦', '🐧', '🐘', '🐪', '🐫', '🐗', '🐖', '🐷', '🐽', '🐕', '🐩', '🐶', '🐺', '🐻', '🐨', '🐼', '🐵', '🙈', '🙉', '🙊', '🐒', '🐉', '🐲', '🐊', '🐍', '🐢', '🐸', '🐋', '🐳', '🐬', '🐙', '🐟', '🐠', '🐡', '🐚', '🐌', '🐛', '🐜', '🐝', '🐞', '🐾', '⚡️', '🔥', '🌙', '☀️', '⛅️', '☁️', '💧', '💦', '☔️', '💨', '❄️', '🌟', '⭐️', '🌠', '🌄', '🌅', '🌈', '🌊', '🌋', '🌌', '🗻', '🗾', '🌐', '🌍', '🌎', '🌏', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌚', '🌝', '🌛', '🌜', '🌞', '🍅', '🍆', '🌽', '🍠', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍞', '🍟', '🍡', '🍢', '🍣', '🍤', '🍥', '🍦', '🍧', '🍨', '🍩', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🍰', '🍱', '🍲', '🍳', '🍴', '🍵', '☕️', '🍶', '🍷', '🍸', '🍹', '🍺', '🍻', '🍼', '🎀', '🎁', '🎂', '🎃', '🎄', '🎋', '🎍', '🎑', '🎆', '🎇', '🎉', '🎊', '🎈', '💫', '✨', '💥', '🎓', '👑', '🎎', '🎏', '🎐', '🎌', '🏮', '💍', '❤️', '💔', '💌', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '💜', '💛', '💚', '💙', '🏃', '🏃🏻', '🏃🏼', '🏃🏽', '🏃🏾', '🏃🏿', '🚶', '🚶🏻', '🚶🏼', '🚶🏽', '🚶🏾', '🚶🏿', '💃', '💃🏻', '💃🏼', '💃🏽', '💃🏾', '💃🏿', '🚣', '🚣🏻', '🚣🏼', '🚣🏽', '🚣🏾', '🚣🏿', '🏊', '🏊🏻', '🏊🏼', '🏊🏽', '🏊🏾', '🏊🏿', '🏄', '🏄🏻', '🏄🏼', '🏄🏽', '🏄🏾', '🏄🏿', '🛀', '🛀🏻', '🛀🏼', '🛀🏽', '🛀🏾', '🛀🏿', '🏂', '🎿', '⛄️', '🚴', '🚴🏻', '🚴🏼', '🚴🏽', '🚴🏾', '🚴🏿', '🚵', '🚵🏻', '🚵🏼', '🚵🏽', '🚵🏾', '🚵🏿', '🏇', '🏇🏻', '🏇🏼', '🏇🏽', '🏇🏾', '🏇🏿', '⛺️', '🎣', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏉', '⛳️', '🏆', '🎽', '🏁', '🎹', '🎸', '🎻', '🎷', '🎺', '🎵', '🎶', '🎼', '🎧', '🎤', '🎭', '🎫', '🎩', '🎪', '🎬', '🎨', '🎯', '🎱', '🎳', '🎰', '🎲', '🎮', '🎴', '🃏', '🀄️', '🎠', '🎡', '🎢', '🚃', '🚞', '🚂', '🚋', '🚝', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚨', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚲', '🚏', '⛽️', '🚧', '🚦', '🚥', '🚀', '🚁', '✈️', '💺', '⚓️', '🚢', '🚤', '⛵️', '🚡', '🚠', '🚟', '🛂', '🛃', '🛄', '🛅', '💴', '💶', '💷', '💵', '🗽', '🗿', '🌁', '🗼', '⛲️', '🏰', '🏯', '🌇', '🌆', '🌃', '🌉', '🏠', '🏡', '🏢', '🏬', '🏭', '🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '💒', '⛪️', '🏪', '🏫', '🇦🇺', '🇦🇹', '🇧🇪', '🇧🇷', '🇨🇦', '🇨🇱', '🇨🇳', '🇨🇴', '🇩🇰', '🇫🇮', '🇫🇷', '🇩🇪', '🇭🇰', '🇮🇳', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇹', '🇯🇵', '🇰🇷', '🇲🇴', '🇲🇾', '🇲🇽', '🇳🇱', '🇳🇿', '🇳🇴', '🇵🇭', '🇵🇱', '🇵🇹', '🇵🇷', '🇷🇺', '🇸🇦', '🇸🇬', '🇿🇦', '🇪🇸', '🇸🇪', '🇨🇭', '🇹🇷', '🇬🇧', '🇺🇸', '🇦🇪', '🇻🇳', '⌚️', '📱', '📲', '💻', '⏰', '⏳', '⌛️', '📷', '📹', '🎥', '📺', '📻', '📟', '📞', '☎️', '📠', '💽', '💾', '💿', '📀', '📼', '🔋', '🔌', '💡', '🔦', '📡', '💳', '💸', '💰', '💎', '🌂', '👝', '👛', '👜', '💼', '🎒', '💄', '👓', '👒', '👡', '👠', '👢', '👞', '👟', '👙', '👗', '👘', '👚', '👕', '👔', '👖', '🚪', '🚿', '🛁', '🚽', '💈', '💉', '💊', '🔬', '🔭', '🔮', '🔧', '🔪', '🔩', '🔨', '💣', '🚬', '🔫', '🔖', '📰', '🔑', '✉️', '📩', '📨', '📧', '📥', '📤', '📦', '📯', '📮', '📪', '📫', '📬', '📭', '📄', '📃', '📑', '📈', '📉', '📊', '📅', '📆', '🔅', '🔆', '📜', '📋', '📖', '📓', '📔', '📒', '📕', '📗', '📘', '📙', '📚', '📇', '🔗', '📎', '📌', '✂️', '📐', '📍', '📏', '🚩', '📁', '📂', '✒️', '✏️', '📝', '🔏', '🔐', '🔒', '🔓', '📣', '📢', '🔈', '🔉', '🔊', '🔇', '💤', '🔔', '🔕', '💭', '💬', '🚸', '🔍', '🔎', '🚫', '⛔️', '📛', '🚷', '🚯', '🚳', '🚱', '📵', '🔞', '🉑', '🉐', '💮', '㊙️', '㊗️', '🈴', '🈵', '🈲', '🈶', '🈚️', '🈸', '🈺', '🈷', '🈹', '🈳', '🈂', '🈁', '🈯️', '💹', '❇️', '✳️', '❎', '✅', '✴️', '📳', '📴', '🆚', '🅰', '🅱', '🆎', '🆑', '🅾', '🆘', '🆔', '🅿️', '🚾', '🆒', '🆓', '🆕', '🆖', '🆗', '🆙', '🏧', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🚻', '🚹', '🚺', '🚼', '♿️', '🚰', '🚭', '🚮', '▶️', '◀️', '🔼', '🔽', '⏩', '⏪', '⏫', '⏬', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️', '↖️', '↕️', '↔️', '🔄', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂', '#⃣', '0⃣', '1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣', '🔟', '🔢', '🔤', '🔡', '🔠', 'ℹ️', '📶', '🎦', '🔣', '➕', '➖', '〰', '➗', '✖️', '✔️', '🔃', '™', '©', '®', '💱', '💲', '➰', '➿', '〽️', '❗️', '❓', '❕', '❔', '‼️', '⁉️', '❌', '⭕️', '💯', '🔚', '🔙', '🔛', '🔝', '🔜', '🌀', 'Ⓜ️', '⛎', '🔯', '🔰', '🔱', '⚠️', '♨️', '♻️', '💢', '💠', '♠️', '♣️', '♥️', '♦️', '☑️', '⚪️', '⚫️', '🔘', '🔴', '🔵', '🔺', '🔻', '🔸', '🔹', '🔶', '🔷', '▪️', '▫️', '⬛️', '⬜️', '◼️', '◻️', '◾️', '◽️', '🔲', '🔳', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧'];
  const randomNum = getRandomInt(0, allEmojis.length - 1);
  const emojiCon = document.createElement('p');
  emojiCon.classList.add('emoji');

  emojiCon.innerHTML = allEmojis[randomNum];
  emojiCon.style.top = `${cachePosition.y}px`;
  emojiCon.style.left = `${cachePosition.x}px`;
  document.body.appendChild(emojiCon);
  setTimeout(() => {
    emojiCon.classList.add('fadeOut');
    setTimeout(() => document.body.removeChild(emojiCon), 300);
  }, 2000);
}

(function anime() {
  let mousePos;

  document.onmousemove = handleMouseMove;
  setInterval(getMousePosition, 1000); // setInterval repeats every X ms

  function handleMouseMove(event) {
    let dot; let eventDoc; let doc; let body; let pageX; let
      pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX
        + (doc && doc.scrollLeft || body && body.scrollLeft || 0)
        - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY
        + (doc && doc.scrollTop || body && body.scrollTop || 0)
        - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    mousePos = {
      x: event.pageX,
      y: event.pageY,
    };

    // Fixing the distance between each emoji
    switch (true) {
      case mousePos.x - cachePosition.x > ICONS_DISTANCE:
      case mousePos.y - cachePosition.y > ICONS_DISTANCE:
        cachePosition = mousePos;
        renderEmoji();
        break;
      case cachePosition.y - mousePos.y > ICONS_DISTANCE:
      case cachePosition.x - mousePos.x > ICONS_DISTANCE:
        cachePosition = mousePos;
        renderEmoji();
        break;
      default:
        break;
    }

    setSmoothColorChange(mousePos.x, bcg);
    document.body.style.background = bcgName;
  }

  function getMousePosition() {
    const pos = mousePos;
    if (!pos) {
      // We haven't seen any movement yet
    } else {
      // Use pos.x and pos.y
    }
  }
}());

// TODO:
// 1. Set min & high color pickers.
// 2. Add the Y axis color interpolation (minimal color change effect just for more coolness).

// export { generateRGB, getRandomInt, setSmoothColorChange, renderEmoji, handleMouseMove, getMousePosition, anime}
module.exports = getRandomInt, setSmoothColorChange, renderEmoji, handleMouseMove, getMousePosition, anime;
/* eslint-enable */