
    var i = 0;
    let txt = document.getElementById("type").innerText;
    document.getElementById("type").innerText = '';
    speed = 100;
    window.onload = typeWriter;

    
    function typeWriter() {
        if (i < txt.length) {
          document.getElementById("type").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
