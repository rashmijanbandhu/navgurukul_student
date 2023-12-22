// // StudentList.js

// import React, { useState, useEffect } from 'react';
// import StudentCard from './StudentCard';
// import { firestore, collection, getDocs } from './firebase';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const studentsCollection = await getDocs(collection(firestore, 'students'));
//       const studentData = studentsCollection.docs.map(doc => doc.data());
//       setStudents(studentData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {students.map(student => (
//         <StudentCard key={student.id} student={student} />
//       ))}
//     </div>
//   );
// };

// export default StudentList;

// StudentList.js

import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';
import { firestore, collection, getDocs } from './firebase';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterProgress, setFilterProgress] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const studentsCollection = await getDocs(collection(firestore, 'students'));
      const studentData = studentsCollection.docs.map(doc => doc.data());

      const sortedStudents = sortStudents(studentData, sortCriteria, sortOrder);
      const filteredStudents = filterStudents(sortedStudents, filterProgress);

      setStudents(filteredStudents);
    };

    fetchData();
  }, [sortCriteria, sortOrder, filterProgress]);

//   const sortStudents = (students, criteria, order) => {
//     if (criteria) {
//       return students.slice().sort((a, b) => {
//         const valueA = a[criteria];
//         const valueB = b[criteria];

//         if (order === 'asc') {
//           return valueA - valueB;
//         } else {
//           return valueB - valueA;
//         }
//       });
//     } else {
//       return students;
//     }
//   };
const sortStudents = (students, criteria, order) => {
    if (criteria) {
      return students.slice().sort((a, b) => {
        const valueA = criteria === 'averageGrade' ? calculateAverageGrade(a) : a[criteria];
        const valueB = criteria === 'averageGrade' ? calculateAverageGrade(b) : b[criteria];
  
        if (order === 'asc') {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
    } else {
      return students;
    }
  };
  const calculateAverageGrade = (student) => {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / student.grades.length;
  };
//   const filterStudents = (students, progressLevel) => {
//     if (progressLevel) {
//       return students.filter(student => student.progress_color === progressLevel.toLowerCase());
//     } else {
//       return students;
//     }
//   };
  
const filterStudents = (students, progressLevel) => {
  if (progressLevel) {
    const filteredStudents = students.filter((student) => {
      const averageGrade = calculateAverageGrade(student);

      switch (progressLevel.toLowerCase()) {
        case 'high':
          return averageGrade >= 75;
        case 'medium':
          return averageGrade >= 50 && averageGrade < 75;
        case 'low':
          return averageGrade < 50;
        default:
          return false;
      }
    });

    return filteredStudents;
  } else {
    return students;
  }
};
//   return (
//     <div>
//       <div>
//         <label>Sort By:</label>
//         <select onChange={(e) => setSortCriteria(e.target.value)}>
//           <option value="">Select</option>
//           <option value="averageGrade">Average Grade</option>
//           <option value="attendance">Attendance</option>
//         </select>
//         <select onChange={(e) => setSortOrder(e.target.value)}>
//           <option value="asc">Asc</option>
//           <option value="desc">Desc</option>
//         </select>
//       </div>
//       <div>
//         <label>Filter By Progress:</label>
//         <select onChange={(e) => setFilterProgress(e.target.value)}>
//           <option value="">Select</option>
//           <option value="High">High Progress</option>
//           <option value="Medium">Medium Progress</option>
//           <option value="Low">Low Progress</option>
//         </select>
//       </div>
//       {students.map(student => (
//         <StudentCard key={student.id} student={student} />
//       ))}
//     </div>
//   );
return (
    <div>
      <div>
        <label>Sort By:</label>
        <select onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="">Select</option>
          <option value="averageGrade">Average Grade</option>
          <option value="attendance">Attendance</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
      <div>
        <label>Filter By Progress:</label>
        <select onChange={(e) => setFilterProgress(e.target.value)}>
          <option value="">Select</option>
          <option value="High">High Progress</option>
          <option value="Medium">Medium Progress</option>
          <option value="Low">Low Progress</option>
        </select>
      </div>
      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;

