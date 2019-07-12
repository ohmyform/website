  window.onload = function() {
    var crt = document.getElementById("CRT_BOX")
    var urlParams = new URLSearchParams(window.location.search)
    var cast = urlParams.get("cast") != null ? urlParams.get("cast") : "index"
    var speed = urlParams.get("speed") == null ? " speed=\"1\" " : " speed=\"" + urlParams.get("speed") + "\" "
    var bg = urlParams.get("bg")
    var autoplay = urlParams.get("autoplay") === "false" ? "" : " autoplay=\"true\" "
    var loop = urlParams.get("loop") === "false" ? "" : " loop=\"true\" "
    var preload = urlParams.get("preload") === "false" ? "" : " preload=\"true\" "
    var fontsize = urlParams.get("fontsize") == null ? " fontsize=\"small\" " : " fontsize=\"" + urlParams.get("fontsize") + "\" "

    crt.innerHTML = "<asciinema-player id=\"asciinema-player\" src=\"cast/" + cast + ".cast\"" + fontsize + autoplay + loop + preload + speed + "></asciinema-player>"

    var player = document.getElementsByTagName("asciinema-player")[0]

    var background = document.createElement("img")
    background.classList.add("bg_image")

    if (bg != null) {
      background.src = "img/" + bg
      document.body.append(background)
    }

    window.addEventListener('resize',  function() {
      var wrapper = document.getElementsByClassName("asciinema-player-wrapper")[0]
      if (wrapper != null) {
        var control_bar_offset = 23;
        var scale = (document.body.clientHeight / (wrapper.clientHeight + control_bar_offset));
        if (wrapper.clientWidth * scale < document.body.clientWidth) {
          crt.style.transform = "scale("+scale+") translate(-50%, 0%)";
          crt.classList.add("crt_wide")
          background.classList.remove("bg_raised")
        } else {
          scale = (document.body.clientWidth / (wrapper.clientWidth));
          crt.style.transform = "scale("+scale+")";
          crt.classList.remove("crt_wide")
          background.classList.add("bg_raised")
        }
      }
    });
    window.dispatchEvent(new Event('resize'));
    setInterval(function(){window.dispatchEvent(new Event('resize'));}, 1000)

    var playing = true;
    let drag = false;

    // Click anywhere to play/pause
    // Allow selecting/dragging text without affecting play/pause
    document.addEventListener('mousedown', () => drag = false);
    document.addEventListener('mousemove', () => drag = true);
    document.addEventListener('mouseup', function() {
      if(!drag){
        if (playing) {
          player.pause()
          playing = false
        } else {
          player.play()
          playing = true
        }
      }
    })
  }
