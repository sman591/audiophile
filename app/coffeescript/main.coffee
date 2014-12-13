$(document).ready ->
  $("#nav").localScroll 800
  $(".continue").localScroll 800

  #.parallax(xPosition, speedFactor, outerHeight) options:
  #xPosition - Horizontal position of the element
  #inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  #outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $("#intro").parallax "50%", 0.1
  $("#factors").parallax "50%", 0.1
  $(".bg").parallax "50%", 0.4
  $("#community").parallax "50%", 0.3

  Highcharts.getOptions().plotOptions.pie.colors = (->
    colors = []
    base = Highcharts.getOptions().colors[0]
    i = undefined
    i = 0
    while i < 10
      colors.push Highcharts.Color(base).brighten((i - 3) / 20).get()
      i += 1
    colors
  )()

  $ ->
    $("#chart1").highcharts
      chart:
        backgroundColor: 'rgba(0,0,0,0)'
        plotBorderWidth: null
      title: false
      tooltip:
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        shadow: false
      plotOptions:
        pie:
          allowPointSelect: true
          cursor: "pointer"
          shadow: false
          dataLabels:
            enabled: false
      series: [
        type: "pie"
        name: "Community Population"
        innerSize: '50%'
        data: [
          [
            "None"
            0.8
          ]
          [
            "High school or equivalent"
            18.6
          ]
          [
            "Postgraduate"
            37.1
          ]
          [
            "College or equivalent"
            43.5
          ]
        ]
      ]
    $("#chart2").highcharts
      chart:
        backgroundColor: 'rgba(0,0,0,0)'
        plotBorderWidth: null
      title: false
      tooltip:
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        shadow: false
      plotOptions:
        pie:
          allowPointSelect: true
          cursor: "pointer"
          shadow: false
          dataLabels:
            enabled: false
      series: [
        type: "pie"
        name: "Community Population"
        innerSize: '50%'
        data: [
          [
            "Unskilled Worker"
            1.1
          ]
          [
            "Foreman/woman, craftsman/woman"
            2.4
          ]
          [
            "Retired"
            4.2
          ]
          [
            "Full-time student"
            5.0
          ]
          [
            "Clerical, salesperson"
            5.6
          ]
          [
            "Musician, writer, artist, other"
            6.4
          ]
          [
            "Service worker, skilled worker"
            6.5
          ]
          [
            "Official, manager, or proprietor"
            11.6
          ]
          [
            "Professional, Technical"
            57.2
          ]
        ]
      ]

    return
