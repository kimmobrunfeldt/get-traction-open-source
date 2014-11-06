function revealReady() {
    console.log('animate')
    var circle = new ProgressBar.Circle('#circle-progressbar', {
        color: '#222'
    });

    Reveal.addEventListener('progressbar-slide', function() {
        var header = document.querySelector('#progressbar-header');
        header.style.color = 'black';
        circle.set(0);

        setTimeout(function animateProgressBar() {


            circle.animate(1, {
                duration: 1000,
                easing: 'easeInOut',
                from: {color: '#222'},
                to: {color: '#359C4B'},
                step: function(state, bar) {
                    bar.path.setAttribute('stroke', state.color);
                    header.style.color = state.color;
                }
            });
        }, 1200);
    });

    google.load("visualization", "1.0", {packages:["corechart"], callback:drawChart});

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Channel', 'Traffic'],
          ['Direct',     51],
          ['Reddit',      9],

          ['Webappers',  7],
          ['DailyJS', 4],
          ['Freebiesbug',  3],
          ['jQuery-plugins',   3],
          ['Lafermeduweb',  2.5],
          ['Thechangelog',  2.5],
          ['Twitter',   2],
          ['Hacker News',   1.7],
          ['Other',   14.3]
        ]);

        var options = {
          title: 'Sources of traffic',
          fontSize: 24

        };

        var chart = new google.visualization.PieChart(document.getElementById('traffic-chart'));
        chart.draw(data, options);
    }

}

Reveal.addEventListener('ready', revealReady);
