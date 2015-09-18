Template.happyBs.helpers({
	people: function(){
		return [
			{
				id: 2,
				img: "/hgrper/employee/avatar_image/2",
				name: "Jaime Alberto Escobar",
				email: "jaimee@thehangar.cr",
				lead: "Jaime Alberto Escobar",
				lead_id: 2,
				department: "Operations",
				position: "SVP General Manager",
				date: "2010-03-01T00:00:00+0000",
				happyb: "2011-06-14T00:00:00+0000",
				city: {
					class: "com.hangar.anadep.City",
					id: 5,
					description: "Non CM-Daggerwing"
				}
			},
		]
	},
	months: function(){
		return [
			{
				'name': 'Jan',
				'ilustration': 'url',
				'nameImage': 'url'
			},
			{'name': 'Feb'}
		];
	}
});

