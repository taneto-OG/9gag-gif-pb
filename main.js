        winterval = window.setInterval(function(){
            let vidArr = document.getElementsByClassName('post-view video-post');
            let gifArr = document.getElementsByClassName('post-view gif-post');
            let objHandle;
            let durationHandle;
            let actHandle;
            let percent;
            let divHandle;
            let pbHandle;
            let lastHandle;
            let v = 0;
            let g = 0;
            const br = document.createElement('br');
                while (v < vidArr.length){
                    lastHandle = document.getElementById('absProgressBar_' + v);
                    if (lastHandle != null){
                        lastHandle.parentNode.removeChild(lastHandle);
                    }
                    objHandle = vidArr[v].children[0];
                    durationHandle = objHandle.duration;
                    actHandle = objHandle.currentTime;
                    percent = (actHandle * 100) / durationHandle;
                    divHandle = document.createElement("div");
                    divHandle.setAttribute('id', 'absProgressBar_' + v);
                    pbHandle = document.createElement("div");
                    
                    pbHandle.setAttribute('style', 'background-image:linear-gradient(to left, #000000, #404040);height:3px;width:' + percent + '%;');
                    vidArr[v].appendChild(divHandle);
                    document.getElementById('absProgressBar_' + v).appendChild(pbHandle);
                    document.getElementById('absProgressBar_' + v).appendChild(br);
                    v++;
                }
                while (g < gifArr.length){
                    lastHandle = document.getElementById('absProgressBar_' + g);
                    if (lastHandle != null){
                        lastHandle.parentNode.removeChild(lastHandle);
                    }
                    objHandle = gifArr[g].children[0];
                    durationHandle = objHandle.duration;
                    actHandle = objHandle.currentTime;
                    percent = (actHandle * 100) / durationHandle;
                    divHandle = document.createElement("div");
                    divHandle.setAttribute('id', 'absProgressBar_' + g);
                    pbHandle = document.createElement("div");
                    pbHandle.setAttribute('id', 'gifPB_' + g);
                    pbHandle.setAttribute('style', 'background-image:linear-gradient(to left, #000000, #404040);height:3px;width:' + percent + '%;');
                    gifArr[g].appendChild(divHandle);
                    document.getElementById('absProgressBar_' + g).appendChild(pbHandle);
                    document.getElementById('absProgressBar_' + g).appendChild(br);
                    g++;
                }
            }, 5);
