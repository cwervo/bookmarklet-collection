// ==Bookmarklet==
// @name Clubhouse Github parse string bookmarklet
// @author Andres Cuervo
// ==/Bookmarklet==
var clipEl = document.querySelector('[id^=story-id]'); clipEl.value=`[:house: [ch${clipEl.id.match(/\d+/)[0]}]](${document.location.href})`
