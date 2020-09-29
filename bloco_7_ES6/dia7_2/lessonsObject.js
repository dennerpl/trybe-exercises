const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addEntries = (Object, key, value) => {
      Object[key] = value
  }

  addEntries(lesson2, "turno", "manha")

  const consoleKeys = (object) => {
    console.log(Object.keys(object))
  }
  consoleKeys(lesson2)

  const consoleValues = (object) => {
    console.log(Object.values(object))
  }
  consoleValues(lesson2)

  const objectLength = (object) => {
    console.log(Object.entries(lesson1).length)
  }
  objectLength(lesson2)
  const allLessons = {lesson1, lesson2, lesson3}
  console.log(allLessons)

  const numberOfStudents = (allLessons) => {
      let total = 0;
       for (const key in allLessons) {
         let value = key["numeroEstudantes"]
         console.log(value)
       };
      console.log(total)
  }
  numberOfStudents(allLessons)
  console.log((allLessons.lesson1.numeroEstudantes)+(allLessons.lesson2.numeroEstudantes))


  
