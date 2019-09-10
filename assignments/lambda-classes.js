// CODE here for your Lambda Classes

class Person {
	constructor(personAttributes) {
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(instructorAttributes) {
		super(instructorAttributes);
		this.specialty = instructorAttributes.specialty;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}

	demo(subject) {
		return `Today we are learning about ${subject}`;
	}

	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}
}

class Student extends Person {
	constructor(studentAttributes) {
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
		this.grade = studentAttributes.grade;
	}

	listsSubjects() {
		return this.favSubjects;
	}

	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(managerAttributes) {
		super(managerAttributes);
		this.gradClassName = managerAttributes.gradClassName;
		this.favInstructor = managerAttributes.favInstructor;
	}

	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}

	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}

const ned = new Instructor({
	name: "Bill",
	age: 29,
	location: "Florida",
	specialty: "Front-end",
	favLanguage: "JavaScript",
	catchPhrase: `Yo`
});

const mary = new Instructor({
	name: "Mary",
	age: 38,
	location: "California",
	specialty: "Fullstack",
	favLanguage: "Ruby",
	catchPhrase: `Howdy do`
});

const ken = new Student({
	name: "Ken",
	age: 32,
	location: "Ohio",
	previousBackground: "Retail Sales",
	className: "Web23",
	favSubjects: ["Javascript", "React"]
});

const jen = new Student({
	name: "Jen",
	age: 28,
	location: "San Diego",
	previousBackground: "Sales",
	className: "iOS1",
	favSubjects: ["HTML", "CSS"]
});

const sara = new ProjectManager({
	name: "Sara",
	age: 58,
	location: "Michigan",
	gradClassName: "CS1",
	favInstructor: "Mary"
});

const beth = new ProjectManager({
	name: "Beth",
	age: 30,
	location: "New York",
	gradClassName: "CS2",
	favInstructor: "Bill"
});

const twoStudents = [...jen.listsSubjects(), ...ken.listsSubjects()];

console.log(ken.speak());
console.log(ned.demo("React"));
console.log(ned.grade(jen, "CSS"));
console.log(twoStudents);
console.log(ken.PRAssignment("HTML"));
console.log(jen.sprintChallenge("Javascript"));
console.log(sara.standUp("Web23"));
console.log(beth.debugsCode(jen, "Javascript"));
