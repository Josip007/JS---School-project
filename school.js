class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at ${this._level} school level`);
  }
  static pickSubstituteTeacher(substituteTeacher) {
    let arrLength = substituteTeacher.length;
    let randomNumber = Math.floor(Math.random() * arrLength);
    return substituteTeacher[randomNumber];

  }

  set numberOfStudents(value) {
    if(typeOf(this._numberOfStudents) === 'number') {
      this._numberOfStudents = value;
    } else {
      console.log('Invalid input');
    }
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }
  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, 'high', numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    return this._sportsTeam;
  }
}
const loral = new PrimarySchool('loral', 514, 'UCITE DJECD');
loral.quickFacts();
const substitute = School.pickSubstituteTeacher(['ljerka', 'majer', 'belek', 'neki tamo', 'spajec']);
console.log(substitute);

const alSmith = new HighSchool('Al Bundy', 415, ['Chelsea', 'Barcelona', 'Arsenal', 'Liverpool']);

console.log(alSmith.sportsTeam);


