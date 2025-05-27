
var cursor = document.querySelector(".cursor");
      var cursor2 = document.querySelector(".cursor2");
      document.addEventListener("mousemove",function(e){
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
      });

      var cursors = document.querySelector(".cursors");
      var cursors2 = document.querySelector(".cursors2");
      document.addEventListener("mousemove",function(e){
        cursors.style.cssText = cursors2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
      });


      const glightboxs = GLightboxs({
        selector: '.glightboxs'
      });

      const glightbox = GLightbox({
        selector: '.glightbox'
      });

    
    