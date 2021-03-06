var toggleFactor;

toggleFactor = function(factorID) {
  $('.factor-detail:visible').fadeOut(200);
  return $(factorID).delay(200).fadeIn(500);
};

$(document).ready(function() {
  var HighchartsDefaults;
  $("#nav").localScroll(800);
  $(".continue").localScroll(800);
  $("#intro").parallax("50%", 0.1);
  $("#factors").parallax("50%", 0.1);
  $(".bg").parallax("50%", 0.4);
  $("#community").parallax("50%", 0.3);
  $("#tryit").parallax("50%", 0.3);
  $('#size-notice button').on('click', function() {
    return $('#size-notice').slideUp(500);
  });
  $('.factor a').each(function() {
    return $(this).on('click', function() {
      toggleFactor($(this).attr('href'));
      return false;
    });
  });
  Highcharts.getOptions().plotOptions.pie.colors = (function() {
    var base, colors, i;
    colors = [];
    base = Highcharts.getOptions().colors[1];
    i = void 0;
    i = 0;
    while (i < 10) {
      colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
      i += 1;
    }
    return colors;
  })();
  HighchartsDefaults = {
    chart: {
      backgroundColor: 'rgba(0,0,0,0)',
      plotBorderWidth: null,
      style: {
        fontFamily: "Helvetica Neue, Helvetica, Arial, serif"
      }
    },
    title: {
      style: {
        fontFamily: "museo-sans, Avenir, Helvetica Neue, Helvetica, Arial, serif",
        color: "#fff"
      }
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      shadow: false,
      style: {
        textShadow: false
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        shadow: false,
        dataLabels: {
          enabled: false
        }
      }
    },
    credits: {
      enabled: false
    }
  };
  return $(function() {
    $("#chart1").highcharts($().extend(true, HighchartsDefaults, {
      title: {
        text: "Education"
      },
      series: [
        {
          type: "pie",
          name: "Community Population",
          data: [
            ["None", 0.8], ["High school or equivalent", 18.6], ["Postgraduate", 37.1], {
              name: "College or equivalent",
              y: 43.5,
              sliced: true,
              selected: true
            }
          ]
        }
      ]
    }));
    $("#chart2").highcharts($().extend(true, HighchartsDefaults, {
      title: {
        text: "Profession"
      },
      series: [
        {
          type: "pie",
          name: "Community Population",
          data: [
            ["Unskilled Worker", 1.1], ["Foreman/woman, craftsman/woman", 2.4], ["Retired", 4.2], ["Full-time student", 5.0], ["Clerical, salesperson", 5.6], ["Musician, writer, artist, other", 6.4], ["Service worker, skilled worker", 6.5], ["Official, manager, or proprietor", 11.6], {
              name: "Professional, Technical",
              y: 57.2,
              sliced: true,
              selected: true
            }
          ]
        }
      ]
    }));
  });
});
