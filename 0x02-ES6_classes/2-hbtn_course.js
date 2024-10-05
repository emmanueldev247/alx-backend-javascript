export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('Students must be an array');
    students.forEach((student) => {
      if (typeof student !== 'string') throw new TypeError('Each student must be a string');
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('Name must be a string');
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set length(val) {
    if (typeof val !== 'number') throw new TypeError('Length must be a number');
    this._length = val;
  }

  get length() {
    return this._length;
  }

  set students(val) {
    if (!Array.isArray(val)) throw new TypeError('Students must be an array');
    val.forEach((student) => {
      if (typeof student !== 'string') throw new TypeError('Each student must be a string');
    });
    this._students = val;
  }

  get students() {
    return this._students;
  }
}
