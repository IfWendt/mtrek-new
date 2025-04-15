       tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'mtrek-lilac': '#FF00ED',
                        'mtrek-dark-purple': '#3D113A',
                        'mtrek-light-purple': '#FFECFE',
                        'mtrek-right': '#A32D9B',
                    },
                    fontFamily: {
                        'lato': ['Lato', 'sans-serif'],
                    },
                },
            },
        }

        (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
            w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
            m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://mautic.mtrek.com.br/mtc.js','mt');

        mt('send', 'pageview');
    