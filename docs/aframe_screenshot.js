if (!AFRAME) {
    alert("AFRAME not found on this page, whoops");
} else if (parseFloat(AFRAME.version.slice(0, 3)) < 0.4) {
    alert("360° screenshots not supported in version " + AFRAME.version);
} else if (AFRAME.scenes.length > 1) {
    alert("A-Frame screenshot script:\nThis script will only work with one scene on the page, there are " + AFRAME.scenes.length + " on this page.");
} else  {
    // Finally, we can take the screenshot
    if (AFRAME.scenes[0].components['screenshot']) {
        AFRAME.scenes[0].components['screenshot'].capture('equirectangular')
    } else {
        alert("'screenshot' component not found in this A-Frame scene")
    }
}

