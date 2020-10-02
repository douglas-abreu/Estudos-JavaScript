class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = firstname+" "+lastname;
		this.email = firstname.toLowerCase()+"."+lastname.toLowerCase()+"@company.com";
	}
}

const empregado = new Employee("Douglas", "Oliveira");
document.write("<p>Firstname: "+empregado.firstname+"</p>");
document.write("<p>Lastname: "+empregado.lastname+"</p>");
document.write("<p>Fullname: "+empregado.fullname+"</p>");
document.write("<p>E-mail: "+empregado.email+"</p>");
