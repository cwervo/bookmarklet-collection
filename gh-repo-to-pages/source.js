// ==Bookmarklet==
// @name GH Repo → Pages
// @author Andres Cuervo
// ==/Bookmarklet==
let pathname=document.location.pathname.split("/"); window.location.href = `https://${pathname[1]}.github.io/${pathname[2]}/`
