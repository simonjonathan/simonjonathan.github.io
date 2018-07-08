$(document).ready(function(){

        var active, active_id, links = $(this).find('ul.tabs li');
		//Random Number between 0-1 -> round to 0 or 1
		var selectrandom = Math.round(Math.random());
		
		//Assign random Link to active and get Content ID
        active =  $(links[selectrandom]);
        active_id = active.attr('data-tab');

		//Make Tab and Content active
        active.addClass('active');
        $('#'+active_id).addClass('active');          
	
	//Tabs Module Click Function
	$('ul.tabs li').click(function(){
		//Get data-tab attribute from clicked Tab
		var tab_id = $(this).attr('data-tab');

		//Hide all Tabs
		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');

		//Show clicked Tab + Content
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

	//Collapsable News Tab Module (Tablet + Mobile only)
	$('.collapse-bar').click(function(){
		$('.module-container').toggle('slow');
	})
})