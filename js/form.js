    /** This section is only needed once per page if manually copying **/
    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://mautic.mtrek.com.br/media/js/mautic-form.js?v4422cfce';
        script.onload = function () {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://mautic.mtrek.com.br';
        var MauticLang = {
            'submittingMessage': "Por favor, aguarde..."
        }
    } else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }



    // Funções JavaScript para abrir e fechar o popup
    function openPopup() {
            document.getElementById('popup').classList.remove('hidden');
        }
        
        function closePopup() {
            document.getElementById('popup').classList.add('hidden');
        }


   
    (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
        w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
        m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://mautic.mtrek.com.br/mtc.js','mt');

    mt('send', 'pageview');
