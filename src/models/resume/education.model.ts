export interface School {
  id: string;
  name: string;
  degrees?: Degree[];
}

export interface Degree {
  schoolId: string;
  title: string;
  abbrev: string;
  subject: string;
  startDate: string;
  endDate: string;
  school?: School;
}

export interface Education {
  degrees: Degree[];
  focus: string;
  thesis: string;
  honors: string;
}

export const addSchoolToDegree = (degree: Degree, schools: School[]): Degree => ({
  ...degree,
  school: schools.find(school => school.id === degree.schoolId)
});

export const loadEducation = (education: Education, schools: School[]) => ({
  ...education,
  degrees: education.degrees.map(degree => addSchoolToDegree(degree, schools)) 
});


export interface DegreeDictionary {
  [id: string]: Degree[];
}

export interface SchoolDictionary {
  [id: string]: {
    school: School | undefined;
    degrees: Degree[];
  }
}

export const groupDegreesBySchool = (degrees: Degree[]): SchoolDictionary => {
  return degrees.reduce((dict: SchoolDictionary, degree: Degree) => {
    if (degree.schoolId in dict) {
      dict[degree.schoolId].degrees.push(degree);
    }
    else {
      dict[degree.schoolId] = {
        school: degree.school,
        degrees: [degree]
      };
    }
    return dict;
  }, {});
}