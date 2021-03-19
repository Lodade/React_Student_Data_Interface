async function pageFetch() {
  let response = await fetch('https://api.hatchways.io/assessment/students');
  let result = await response.json();
  return result;
}

async function averageFinder(grades) {
  let average = 0;

  for (let i = 0; i < grades.length; i++) {
    average += grades[i];
  }

  average = average / grades.length;
  return average;
}

async function studentFilter(nameFilter, tagFilter, students) {
  let result = [];
  let resultSpot = 0;
  let passedName = false;
  let passedTag = false;

  for (let i = 0; i < students.length; i++) {
    passedName = false;
    passedTag = false;

    if ((students[i].firstName + " " + students[i].lastName).toLowerCase().search(nameFilter.toLowerCase()) !== -1 || nameFilter === "") {
      passedName = true;
    }

    if (students[i].tags !== undefined) {
      for (let j = 0; j < students[i].tags.length; j++) {
        if (students[i].tags[j].toLowerCase().search(tagFilter.toLowerCase()) !== -1 || tagFilter === "") {
          passedTag = true;
        }
      }
    } else {
      students[i].tags = [];
    }

    if (nameFilter === "" && tagFilter === "" || passedName === true && tagFilter === "" || passedTag === true && nameFilter === "" || passedName === true && passedTag === true) {
      result[resultSpot] = students[i];
      resultSpot++;
    }
  }

  return result;
}

async function studentTagAdder(givenId, tagInfo, students) {
  let resultStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === givenId) {
      if (students[i].tags === undefined) {
        students[i].tags = [tagInfo];
      } else {
        students[i].tags[students[i].tags.length] = tagInfo;
      }
    }
  }

  resultStudents = students;
  return resultStudents;
}