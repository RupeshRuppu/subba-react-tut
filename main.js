class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}
}

class Male extends Person {
	constructor(name, age) {
		super(name, age);
		this.gender = 'M';
	}

	getGender() {
		return this.gender;
	}
}

const malePerson = new Male('rupesh', 22);
console.log(malePerson.getName());
console.log(malePerson.getGender());
