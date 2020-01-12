
        function prepareAnimation(){
            var cookieValues = document.cookie.split(";");
            var cookieAnimation = cookieValues.toString().split("=")[1];
            if(!cookieAnimation){
                document.getElementsByTagName("header")[0].setAttribute("style", "display: none");
                document.getElementsByTagName("main")[0].setAttribute("style", "display: none");
                document.getElementsByTagName("footer")[0].setAttribute("style", "display: none");
                document.getElementsByClassName("navWrapper")[0].setAttribute("style", "display: none");
                document.getElementsByTagName("body")[0].setAttribute("style", "width: 100vw; height: 100vh;");
                timeoutID = window.setTimeout(animationEnd, 4000);
            }
            else {
                document.getElementById("startAnimation").setAttribute("style", "display: none");
            }
            
        }

        function animationEnd() {
            document.getElementsByTagName("header")[0].removeAttribute("style");
            document.getElementsByTagName("main")[0].removeAttribute("style");
            document.getElementsByTagName("footer")[0].removeAttribute("style");
            document.getElementsByClassName("navWrapper")[0].removeAttribute("style");
            document.getElementsByTagName("body")[0].removeAttribute("style");
            document.getElementById("startAnimation").setAttribute("style", "display: none");

            var date = new Date();
            date.setTime(date.getTime() + 20*60*1000); // Cookie läuft nach 20 Minuten ab
            document.cookie = "animation=true;" + "expires=" + date.toUTCString() + ";";
            
        }