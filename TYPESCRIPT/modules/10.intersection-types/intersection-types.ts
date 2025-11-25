// intersection type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  employe: string;
  startDate: Date;
  eta:number;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const employe: ElevatedEmployee = {
  name: 'Max',
  employe: 'Technical Lead',
  privileges: ['Coordinator Team'],
  startDate: new Date(),
  eta: 25,
};

console.log(employe);

console.log("---------------------------")

const employe4: ElevatedEmployee = {
  name: 'Massimo',
  employe: 'CRO',
  privileges: ['Coordinator Team'],
  startDate: new Date(),
  eta:32,

};

console.log(employe4);





