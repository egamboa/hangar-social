Template.happyBsNav.helpers({
	months: function(){
		return [
			{
				'id': 'jan',
				'name': 'Enero',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'feb',
				'name': 'Febrero',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'mar',
				'name': 'Marzo',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'apr',
				'name': 'Abril',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'may',
				'name': 'Mayo',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'jun',
				'name': 'Junio',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'jul',
				'name': 'Julio',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'aug',
				'name': 'Agosto',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'sep',
				'name': 'Setiembre',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'oct',
				'name': 'Octubre',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'nov',
				'name': 'Noviembre',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{
				'id': 'dic',
				'name': 'Diciembre',
				'ilustration': 'url',
				'nameImage': 'url'
			},
		];
	}
});

Template.happyBsNav.events({
	"click li": function (event) {
		$('li.active').attr('class', '')
		event.currentTarget.className = "active";
	}
});