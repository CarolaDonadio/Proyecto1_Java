
        //VIDEO
        let btn = document.querySelector('.btn');
        let clip = document.querySelector('.clip');
        let close = document.querySelector('.close');
        let video = document.querySelector('video');

        btn.onclick = function() {
            btn.classList.add('active');
            clip.classList.add('active');
            video.play()
            video.currentTime = 0;
        }

        close.onclick = function() {
            btn.classList.remove('active');
            clip.classList.remove('active');
            video.pause()
        }

        //BUTTON DISCORD
        let button_discord = document.getElementById('button_discord');

        button_discord.addEventListener('load', init, false);
        function mostrar() {
            let active_user_discord = document.getElementById('parrafo-flecha-icon');
            active_user_discord.style.visibility = 'hidden';
            let btnDiscord = document.getElementById('active-discord');
            btnDiscord.addEventListener('click', function (e) {
                if(active_user_discord.style.visibility === 'hidden'){
                    active_user_discord.style.visibility = 'visible';
                }else{
                    active_user_discord.style.visibility = 'hidden';
                }
            }, false);
        }

