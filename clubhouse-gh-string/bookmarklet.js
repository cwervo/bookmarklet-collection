// var clipEls = document.querySelectorAll('.clipboard'); clipEls[0].value = `[ch${clipEls[0].id.match(/\d+/)[0]}](${document.location.href})`
var clipEl = document.querySelector('[id^=story-id]'); clipEl.value=`[ch${clipEl.id.match(/\d+/)[0]}](${document.location.href})`

