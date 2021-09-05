
(function (window) {
  var byeSpeaker = {
    speakWord: "Good Bye",
    speak: function (name) {
      console.log(this.speakWord + " " + name);
    }};
    
  window.byeSpeaker=byeSpeaker
})(window);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
