/**
 *           _                   _____           _       _   
 *          | |                 / ____|         (_)     | |  
 *          | | __ ___   ____ _| (___   ___ _ __ _ _ __ | |_ 
 *      _   | |/ _` \ \ / / _` |\___ \ / __| '__| | '_ \| __|
 *     | |__| | (_| |\ V / (_| |____) | (__| |  | | |_) | |_ 
 *      \____/ \__,_| \_/ \__,_|_____/ \___|_|  |_| .__/ \__|
 *                                                | |        
 *                                                |_|        
 */

/*
    Charts and Graphs
      Chart.js - https://www.chartjs.org/docs/2.9.4
      Chart.js 3.x and newer are not compatible with the charting styles used.
*/

function interventionsPie() {
	const itx = document.getElementById("interventionsPie");
	const intPie = new Chart(itx, {
	type: "pie",
	data: {
		labels: ["To Be Sent", "Not Sent", "Suppressed", "Sent", "Pre-Loaded"],
		datasets: [
			{
				data: [50, 25, 12.5, 4.5, 8],
				borderWidth: 0,
				backgroundColor: [
					"rgb(65, 90, 132)",
					"rgb(166, 37, 58)",
					"rgb(221, 94, 14)",
					"rgb(17, 208, 164)",
					"rgb(229, 187, 45)"
				],
				hoverOffset: 4,
				url: ['intervention.html', 'intervention.html', 'intervention.html', 'intervention.html', 'intervention.html'],
			},
		],
	},
	options: {
		rotation: 1.57,
		tooltips: {
			enabled: false,
		},
		legend: {
			display: false,
			position: 'bottom',
			align: 'start',
			fullSize: false,
		},
	},
});

	let interventionsLegend = document.getElementById('interventionsLegend');
	legends = intPie.legend.legendItems;
	datas = intPie.data.datasets[0].data;

	for (var i=0; i < legends.length; i++) {
		interventionsLegend.innerHTML += "<div><div class='legend-item' style='background-color: "+legends[i]['fillStyle']+"'></div>" + legends[i]['text'] + " - <strong>" + datas[i] + "%</strong></div>";	
	}

	chartClicks(itx,intPie);

}

function conferencesPie() {
	const ctx = document.getElementById("conferencesPie");
	const conPie = new Chart(ctx, {
	type: "pie",
	data: {
		labels: ["To Be Scheduled", "In Progress", "Closed"],
		datasets: [
			{
				data: [744, 372, 372],
				borderWidth: 0,
				backgroundColor: [
					"rgb(221, 94, 14)",
					"rgb(65, 90, 132)",
					"rgb(17, 208, 164)",
					
				],
				hoverOffset: 4,
				url: ['conferences.html', 'conferences.html', 'conferences.html'],				
			},
		],
	},
	options: {
		rotation: 1.57,
		tooltips: {
			enabled: false,
		},
		legend: {
			display: false,
			position: 'bottom',
			align: 'start',
			fullSize: false,
		},
	},
});

	let conferencesLegend = document.getElementById('conferencesLegend');
	legends = conPie.legend.legendItems;
	datas = conPie.data.datasets[0].data;

	for (var i=0; i < legends.length; i++) {
		conferencesLegend.innerHTML += "<div><div class='legend-item' style='background-color: "+legends[i]['fillStyle']+"'></div>" + legends[i]['text'] + " - <strong>" + datas[i] + "</strong></div>";
	}
	chartClicks(ctx,conPie);
}

function attendancePie() {
	const att = document.getElementById("attendancePie");
	const attPie = new Chart(att, {
	type: "pie",
	data: {
		labels: ["Excellent", "Satisfactory", "Manageable", "Chronic", "Severe Chronic"],
		datasets: [
			{
				data: [744, 372, 372, 0, 0],
				borderWidth: 0,
				backgroundColor: [
					"rgb(65, 90, 132)",	
					"rgb(214, 220, 230)",
					"rgb(166, 37, 58)",
					"rgb(17, 208, 164)",
					"rgb(229, 187, 45)"
				],
				hoverOffset: 4,
				url: ['students.html', 'students.html', 'students.html', 'students.html', 'students.html'],
			},
		],
	},
	options: {
		rotation: 1.57,
		tooltips: {
			enabled: false,
		},
		legend: {
			display: false,
			position: 'bottom',
			align: 'start',
			fullSize: false,
			labels: {
				padding: 10
			}
		},
	},
});

	let attendanceLegend = document.getElementById('attendanceLegend');
	legends = attPie.legend.legendItems;
	datas = attPie.data.datasets[0].data;

	for (var i=0; i < legends.length; i++) {
		attendanceLegend.innerHTML += "<div><div class='legend-item' style='background-color: "+legends[i]['fillStyle']+"'></div>" + legends[i]['text'] + " - <strong>" + datas[i] + "</strong></div>";
	}
	chartClicks(att,attPie);
}

function chartClicks(chart, canvas) {
	chart.onclick = function clickHandler(evt) {
		let firstPoint = canvas.getElementAtEvent(evt)[0];
		if (firstPoint) {
			let chartData = firstPoint['_chart'].config.data;
			let idx = firstPoint['_index'];
			let label = chartData.datasets[0].url[idx];
			window.location.href = label;
		}
	}
}

function conferences_pie_chart() {
  /* Used in: index.html */
    const ctx = document.getElementById("conferencesPie");
        const conPie = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["To Be Scheduled", "To Be Conducted", "To Be Closed", "To Be Rescheduled", "Closed", "Removed From Conferencing"],
            datasets: [
              {
                data: [825, 537, 644, 153, 88, 64],
                              borderWidth: 0,
                backgroundColor: [
                	"rgb(221, 94, 14)",
                    "rgb(17, 187, 201)",
                    "rgb(229, 187, 45)",
                    "rgb(65, 90, 132)",
                  	"rgb(17, 208, 164)",
                    "rgb(214, 220, 230)",
                ],
                hoverOffset: 4,
				url: ['conferences.html', 'conferences.html', 'conferences.html', 'conferences.html', 'conferences.html', 'conferences.html'],
              },
            ],
          },
                  options: {
                      responsive: true,
					  rotation: 1,
					  tooltips: {
						enabled: false,
					},
                      legend: {
                          display: false,
                          align: 'center'
                      },
                  },
                  
        });
              let conferencesLegend = document.getElementById('conferencesLegend');
              legends = conPie.legend.legendItems;
			  datas = conPie.data.datasets[0].data;
  
              for (var i=0; i < legends.length; i++) {
                  conferencesLegend.innerHTML += "<li><div class='legend-item' style='background-color: "+legends[i]['fillStyle']+"'></div>" + legends[i]['text'] + " - <strong>" + datas[i] + "</strong></li>";
              }
			  chartClicks(ctx,conPie);
}

function conferences_bar_chart() {
  /* Used in admin.html */

  const schools = [
    {name: "School Site 4", confs: "63"},
    {name: "School Site 5", confs: "111"},
    {name: "School Site 12", confs: "30"},
    {name: "School Site 14", confs: "896"}
];

      const amyLabels = [schools[0]['name'],schools[1]['name'],schools[2]['name'],schools[3]['name']];

      const ctx = document.getElementById("conferencesBar");
			const conBar = new Chart(ctx, {
				type: "horizontalBar",
				data: {
                    
					datasets: [
						{
                            label: "To Be Scheduled",
                            data: [30,25,45,27],
                            backgroundColor: "rgb(221, 94, 14)",
                            barThickness: 35,
                            barPercentage: .1,
                            categoryPercentage: .1,
                            maxBarThickness: 35,
						},
                        {
                            label: "In Progress",
                            data: [30,30,25,8],
                            backgroundColor: "rgb(65, 90, 132)",
                            barThickness: 35,
                            barPercentage: .1,
                            categoryPercentage: .1,
                            maxBarThickness: 35,
						},
                        {
                            label: "Closed",
                            data: [40,45,30,65],
                            backgroundColor: "rgb(17, 208, 164)",
                            barThickness: 35,
                            barPercentage: .1,
                            categoryPercentage: .1,
                            maxBarThickness: 35,
						},
					],
				},
                options: {
                    legend: {
                        display: false,
                    },
                    tooltips: {
                      borderWidth: 1,
                      borderColor: "rgba(176, 185, 201, 1)",
                      backgroundColor: "rgba(242, 246, 250, 1)",
                      titleFontColor: "#000",
                      bodyFontColor: "#000",
                    },
                    layout: {
                        padding: {
                           left: 0,
                           right: 20,
                           top: 0,
                           bottom: 0, 
                        }
                    },
                    scales: {
                        xAxes: [{
                          gridLines: {
                            offsetGridLines: true,
                          },
                          stacked: true,
                          ticks: {
                                padding: 20,
                                sampleSize: 5,
                                autoSkip: true,
                                callback: function(value) {
                                  return value + '%';
                              }
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                              display: false,
                              offsetGridLines: true,
                            },
                            stacked: true,
                            type: 'category',
                            labels: amyLabels,
                            ticks: {
                              display: false,
                            }
                        }],
                        
                     }
                }
                
			});
            let conferencesLegend = document.getElementById('conferencesLegend');
            legends = conBar.legend.legendItems;
            for (var i=0; i < legends.length; i++) {
                conferencesLegend.innerHTML += "<span><div class='legend-item' style='background-color: "+legends[i]['fillStyle']+"'></div>" + legends[i]['text'] + "</span>";   
            }
            
      let schoolName = document.getElementById("conf-label"); 

      for (var i=0; i < schools.length; i++) {
          schoolName.innerHTML += "<div class='conf'><div class='col-12' id='school-name'><strong>" + schools[i]['name'] + "</strong></div><div class='col-12 conf-count' id='conf-count'>(" + schools[i]['confs'] + " Conferences)</div></div>";
      }

      console.log(conBar);
}

function conferences_bar_chart_modal() {
	/* Used in admin.html */

	const schools = [
	  {name: "School Site 4", confs: "63"}
  ];
  
		const amyLabels = [schools[0]['name']];
  
		const ctx = document.getElementById("conferencesModalBar");
		const ctL = document.getElementById("conferencesModalLegend");
		setTimeout(() => { 
		if (ctx !== null) {
			if (ctL.firstChild) {
				return;
			} else {
				const conBar = new Chart(ctx, {
					type: "horizontalBar",
					data: {
						
						datasets: [
							{
								label: "To Be Scheduled",
								data: [30],
								backgroundColor: "rgb(221, 94, 14)",
								barThickness: 35,
								maxBarThickness: 35,
							},
							{
								label: "In Progress",
								data: [30],
								backgroundColor: "rgb(65, 90, 132)",
								barThickness: 35,
								maxBarThickness: 35,
							},
							{
								label: "Closed",
								data: [40],
								backgroundColor: "rgb(17, 208, 164)",
								barThickness: 35,
								maxBarThickness: 35,
							},
						],
					},
					options: {
						legend: {
							display: false,
						},
						tooltips: {
						  borderWidth: 1,
						  borderColor: "rgba(176, 185, 201, 1)",
						  backgroundColor: "rgba(242, 246, 250, 1)",
						  titleFontColor: "#000",
						  bodyFontColor: "#000",
						},
						layout: {
							padding: {
							   left: 20,
							   right: 20,
							   top: 0,
							   bottom: 20, 
							}
						},
						scales: {
							xAxes: [{
							  gridLines: {
								offsetGridLines: true,
							  },
							  stacked: true,
							  ticks: {
									sampleSize: 5,
									autoSkip: true,
									callback: function(value) {
									  return value + '%';
								  }
								}
							}],
							yAxes: [{
								gridLines: {
								  display: false,
								  offsetGridLines: true,
								},
								stacked: true,
								type: 'category',
								labels: amyLabels,
								ticks: {
								  display: false,
								}
							}],
						 }
					}
				});
				let conferencesLegend = document.getElementById('conferencesModalLegend');
				legends = conBar.legend.legendItems;
				datas = conBar.data.datasets;
				console.log(datas);
				for (var i=0; i < legends.length; i++) {
					conferencesLegend.innerHTML += "<li><span><div class='legend-item' style='background-color: "+legends[i]['fillStyle']+"'></div>" + legends[i]['text'] + " - <strong>" + datas[i]['data'] + "%</strong></span></li>";   
				}
			}

		  } else {
			console.log(conBar);
		  }
		}, 500);

  }

function attendance_trends_line_chart() {
/* Found in: student.html */
	const trendLine = new Chart("attendance-trends", {
		type: "line",
		data: {
			labels: [
				"7/14/21 - 7/27/21",
				"7/28/21 - 8/10/21",
				"8/11/21 - 8/24/21",
				"8/25/21 - 9/7/21",
			],
			datasets: [
				{
					label: "2021 - 2022",
					data: [2, 1, 1, 2],
					pointRadius: 8,
					pointBackgroundColor: "rgba(166,37,58,1.0)",
					fill: false,
					lineTension: 0,
					borderColor: "rgba(166,37,58,1.0)",
					borderWidth: 2,
				},
			],
		},
		options: {
			responsive: true,
			legend: {
				display: false,
				position: "right",
				fullWidth: false,
			},
			scales: {
				yAxes: [{ ticks: { min: 0, max: 3 } }],
			},
		},
	});

	let trendsLegend = document.getElementById("trendsLegend");
	legends = trendLine.legend.legendItems;

	for (var i = 0; i < legends.length; i++) {
		trendsLegend.innerHTML +=
			"<div><div class='legend-item' style='background-color: " +
			legends[i]["fillStyle"] +
			"'></div>" +
			legends[i]["text"] +
			"</div>";
	}
}

function truant_pie_chart() {
/* Found in: student.html */
	const tpc = document.getElementById("truantPie");
	new Chart(tpc, {
		type: "pie",
		data: {
			labels: ["Cut (C)", "Unexcused (U)"],
			datasets: [
				{
					data: [4, 4],
					borderWidth: 0,
					backgroundColor: ["rgb(166, 37, 58)", "rgb(222, 136, 36)"],
					hoverBackgroundColor: ["rgba(166, 37, 58, 0.9)", "rgba(222, 136, 36, 0.9)"],
				},
			],
		},
		options: {
			animation: false,
			rotation: 1.57,
			legend: {
				display: false,
			},
			tooltips: {
				borderWidth: 1,
				borderColor: "rgba(176, 185, 201, 1)",
				backgroundColor: "rgba(242, 246, 250, 1)",
				titleFontColor: "#000",
				bodyFontColor: "#000",
			},
		},
	});
}

function excessive_pie_chart() {
/* Found in: student.html */
	const tpc = document.getElementById("excessivePie");
	new Chart(tpc, {
		type: "pie",
		data: {
			labels: ["Cut (C)", "Unexcused (U)"],
			datasets: [
				{
					data: [4, 12],
					borderWidth: 0,
					backgroundColor: ["rgb(166, 37, 58)", "rgb(222, 136, 36)"],
					hoverBackgroundColor: ["rgba(166, 37, 58, 0.9)", "rgba(222, 136, 36, 0.9)"],
				},
			],
		},
		options: {
			animation: false,
			rotation: 3.14,
			legend: {
				display: false,
			},
			tooltips: {
				borderWidth: 1,
				borderColor: "rgba(176, 185, 201, 1)",
				backgroundColor: "rgba(242, 246, 250, 1)",
				titleFontColor: "#000",
				bodyFontColor: "#000",
			},
		},
	});
}

function chronic_pie_chart() {
/* Found in: student.html */
	const tpc = document.getElementById("chronicPie");
	new Chart(tpc, {
		type: "pie",
		data: {
			labels: ["Suspension (S)", "Unexcused (U)", "Cut (C)"],
			datasets: [
				{
					data: [2, 3, 3],
					borderWidth: 0,
					backgroundColor: ["rgb(229, 187, 45)", "rgb(222, 136, 36)",	"rgb(166, 37, 58)"],
					hoverBackgroundColor: ["rgba(229, 187, 45, 0.9)", "rgba(222, 136, 36, 0.9)", "rgba(166, 37, 58, 0.9)"],
				},
			],
		},
		options: {
			animation: false,
			rotation: 4.71,
			legend: {
				display: false,
			},
			tooltips: {
				borderWidth: 1,
				borderColor: "rgba(176, 185, 201, 1)",
				backgroundColor: "rgba(242, 246, 250, 1)",
				titleFontColor: "#000",
				bodyFontColor: "#000",
			},
		},
	});
}

function other_pie_chart() {
/* Found in: student.html */
	const tpc = document.getElementById("otherPie");
	new Chart(tpc, {
		type: "pie",
		data: {
			labels: ["Suspension (S)", "Unexcused (U)"],
			datasets: [
				{
					data: [2, 6],
					borderWidth: 0,
					backgroundColor: ["rgb(229, 187, 45)", "rgb(222, 136, 36)"],
					hoverBackgroundColor: ["rgba(229, 187, 45, 0.9)", "rgba(222, 136, 36, 0.9)"],
				},
			],
		},
		options: {
			animation: false,
			rotation: 4.71,
			legend: {
				display: false,
			},
			tooltips: {
				borderWidth: 1,
				borderColor: "rgba(176, 185, 201, 1)",
				backgroundColor: "rgba(242, 246, 250, 1)",
				titleFontColor: "#000",
				bodyFontColor: "#000",
			},
		},
	});
}


/* Calendar
	FullCalendar - https://fullcalendar.io/docs
*/
function student_calendar() {

	const attendance = [
		{	// All day
			start: '2021-11-04',
			display: 'background', // creates all-day event
			classNames: ['all-day']
		},
		{	// All day
			start: '2021-11-05',
			display: 'background', // creates all-day event
			classNames: ['all-day']
		},
		{	// All day
			start: '2021-11-23',
			display: 'background', // creates all-day event
			classNames: ['all-day']
		},
		{	// All day
			start: '2021-11-24',
			display: 'background', // creates all-day event
			classNames: ['all-day']
		},
		{	// All day
			start: '2021-11-25',
			display: 'background', // creates all-day event
			classNames: ['all-day']
		},
		{	// Single class
			title: '[P.1]—ROP Auto Structural Repair & Refinishing',
			start: '2021-11-02',
			classNames: ['cut'], // attendance code linked to css for coloring
		},
		{
			title: '[P.2]—English 3 AP',
			start: '2021-11-02',
			classNames: ['cut'],
		},
		{
			title: '[P.3]—AP Calculus - BC',
			start: '2021-11-02',
			classNames: ['cut'],
		},
		{
			title: '[P.1]—MECHANICAL ENGINEERING PHYSICS',
			start: '2021-11-03',
			classNames: ['cut'],
		},
		{
			title: '[P.2]—Physical Education',
			start: '2021-11-03',
			classNames: ['suspension'],
		},
		{
			title: '[P.3]—Home Economics',
			start: '2021-11-03',
			classNames: ['suspension'],
		},
		{
			title: '[P.5]—Probability & Statistics',
			start: '2021-11-03',
			classNames: ['suspension'],
		},
		{
			title: '[P.7]—World History',
			start: '2021-11-03',
			classNames: ['suspension'],
		},
		{
			title: '[P.8]—CAHSEE English Learning',
			start: '2021-11-03',
			classNames: ['suspension'],
		},
		{
			title: '[P.3]—Art 1 Pre-AP',
			start: '2021-11-08',
			classNames: ['cut'],
		},
		{
			title: '[P.5]—Probability & Statistics',
			start: '2021-11-08',
			classNames: ['suspension'],
		},
		{
			title: '[P.7]—World History',
			start: '2021-11-08',
			classNames: ['unexcused'],
		},
		{
			title: '[P.9]—CAHSEE English Learning',
			start: '2021-11-08',
			classNames: ['unexcused'],
		},
		{
			title: '[P.1]—U.S. History AP',
			start: '2021-11-10',
			classNames: ['cut'],
		},
		{
			title: '[P.2]—ROP Auto Structural Repair & Refinishing',
			start: '2021-11-10',
			classNames: ['cut'],
		},
		{
			title: '[P.3]—English 3 AP',
			start: '2021-11-10',
			classNames: ['cut'],
		},
	];


		let calendarEl = document.getElementById('calendar');
	
		let calendar = new FullCalendar.Calendar(calendarEl, {
			fixedWeekCount: false,
			themeSystem: 'bootstrap5',
			initialDate: '2021-11-09',
			weekends: false,
			expandRows: true,
			slotMinTime: '08:00',
			slotMaxTime: '23:00',
			slotDuration: '00:60:00',
			slotLabelFormat: {
				hour: 'numeric',
			},
			buttonIcons: {
				prev: 'bi-caret-left-fill',
				next: 'bi-caret-right-fill',
			},
			headerToolbar: {
				left: 'prev,next',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay',
			},
			views: {
				dayGridMonth: { // name of view
				  dayHeaderFormat: {
					  weekday: 'long',
				  },
				  dayMaxEvents: 6,
				},
				timeGridWeek: {
					dayMaxEvents: 6,
				},
				timeGridDay: {
					dayMaxEvents: 6,
				},
			},
			initialView: 'dayGridMonth',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			selectable: true,
			nowIndicator: true,
			dayMaxEvents: true, // allow "more" link when too many events
			events: attendance,
		});
		calendar.render();
}


/* Scrollbars
    Simplebar -  https://grsmto.github.io/simplebar
*/

function scroll_dropdown() {
  $('.scrolling-dropdown .dropdown-menu').click(function(e) {
    e.stopPropagation();
  });
  
  $(".close-filter").click(function () {
    $(this).parent().toggleClass('has-filters');
  });
  
  $(".input-search .form-control").on('focus blur', function(){
     $(this).parent().toggleClass('search-active');
  });
}

function scroll_reports() {
	/* Used in: reports.html */
	scroll_dropdown();

	new SimpleBar(document.getElementById("checkBoxDropdown"));
	new SimpleBar(document.getElementById("searchTable"));
}

function scroll_students() {
	/* Used in: students.html */
  
  	scroll_dropdown();

	new SimpleBar(document.getElementById("checkBoxDropdown"));
	new SimpleBar(document.getElementById("searchTable"));
	new SimpleBar(document.getElementById("student-schedule-table"), {
		autoHide: false,
	});
	new SimpleBar(document.getElementById("calendar-controls-panel"), {
		autoHide: false,
	});
	new SimpleBar(document.getElementById("monthDropdown"), {
		autoHide: false,
	});
}

function scroll_admin() {
	/* Used in: admin.html */

	scroll_dropdown();

	new SimpleBar(document.getElementById('checkBoxDropdown'));
	new SimpleBar(document.getElementById('searchTable'));
	new SimpleBar(document.getElementById('table-data'));
	new SimpleBar(document.getElementById('school-grouping'));
	new SimpleBar(document.getElementById('modal-list-conf'));
	new SimpleBar(document.getElementById('modal-list-interv'));

}

function scroll_index() {
	/* Used in: index.html */

	scroll_dropdown();

	new SimpleBar(document.getElementById('checkBoxDropdown'));
	new SimpleBar(document.getElementById('searchTable'));
	new SimpleBar(document.getElementById('table-data'));
}

function scroll_intervention() {
	$('.scrolling-dropdown .dropdown-menu').click(function(e) {
		e.stopPropagation();
	});

	$(".input-search .form-control").on('focus blur', function(){
		 $(this).parent().toggleClass('search-active');
	});

	new SimpleBar(document.getElementById('checkBoxDropdown'));
	new SimpleBar(document.getElementById('yearDateDropdown'));
	new SimpleBar(document.getElementById('searchTable'));
}

function scroll_conferences() {
	$('.scrolling-dropdown .dropdown-menu').click(function(e) {
		e.stopPropagation();
	});

	$(".close-filter").click(function () {
		$(this).parent().toggleClass('has-filters');
	});

	$(".input-search .form-control").on('focus blur', function(){
		 $(this).parent().toggleClass('search-active');
	});

	new SimpleBar(document.getElementById('checkBoxDropdown'));
	new SimpleBar(document.getElementById('searchTable'));
}

function scroll_messages() {
	$(".scrolling-dropdown .dropdown-menu").click(function (e) {
		e.stopPropagation();
	});

	$(".close-filter").click(function () {
		$(this).parent().toggleClass("has-filters");
	});

	$(".input-search .form-control").on("focus blur", function () {
		$(this).parent().toggleClass("search-active");
	});

	/* Scrollbar mods */
	new SimpleBar(document.getElementById("thread"));
	new SimpleBar(document.getElementById("searchTable"));
	new SimpleBar(document.getElementById("convoTable"));
	new SimpleBar(document.getElementById("convo-list"));
	new SimpleBar(document.getElementById("options-details"));
}

function scroll_my_docs() {
	$('.scrolling-dropdown .dropdown-menu').click(function(e) {
		e.stopPropagation();
	});

	$(".close-filter").click(function () {
		$(this).parent().toggleClass('has-filters');
	});

	$(".input-search .form-control").on('focus blur', function(){
		 $(this).parent().toggleClass('search-active');
	});

	new SimpleBar(document.getElementById('checkBoxDropdown'));
	new SimpleBar(document.getElementById('searchTable'));
}


function scroll_schedule() {
	$('.scrolling-dropdown .dropdown-menu').click(function(e) {
		e.stopPropagation();
	});

	$(".input-search .form-control").on('focus blur', function(){
		 $(this).parent().toggleClass('search-active');
	});

	new SimpleBar(document.getElementById('searchTable'));
}

/** Custom event handling
*
*	The following functions provide a demonstration of the prototyped designs depicted in the Adobe XD file.
*
*/


function custom_event_handler() {

	// load and display Student Calendar data
	$("#view-calendar").click(function(){
		$("#student-calendar").show();
		$("#student-table").hide();

		// wait for #student-calendar to be added to DOM
		setTimeout(function() {
			student_calendar();
		}, 100);

	});

	// display Student Table data
	$("#view-table").click(function(){
		$("#student-table").show();
		$("#student-calendar").hide();
	});

	// Attendance Code Student Calendar Filter
	$("#cutCheck").click(function() {
		$('.cut').toggle();
	});

	$("#suspensionCheck").click(function() {
		$('.suspension').toggle();
	});

	$("#unexcusedCheck").click(function() {
		$('.unexcused').toggle();
	});

}

function remaining_count() {
				/* Textarea remaining character count */
				$("textarea").keyup(function () {
					var characterCount = 500 - $(this).val().length,
						remaining_count = $("#remaining_count");
					remaining_count.text(characterCount);
				});
}

	$(document).ready(function () {
		$(".menu-switch").click(function(){
			$("#sidebarMenu").toggleClass("sidebar-open");
		});
	});
