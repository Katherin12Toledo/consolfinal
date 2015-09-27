(function(){


	var cat = {
		furColor: "orange",
		numberOfLegs: 4,
		hasTail: true,
		name: "Felix",
		age: 3
	},
	target = $( ".inner" );

	target.empty().append(' my cats name is ' + cat.age + "."+'His color is '+ cat.furColor + ".");






})();

