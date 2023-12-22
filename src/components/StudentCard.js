// // StudentCard.js

// import React, { useEffect, useState } from 'react';
// import { firestore } from './firebase';

// const StudentCard = ({ student }) => {
//   const [progressColor, setProgressColor] = useState('');

//   // Define calculateAverageGrade within the component
//   const calculateAverageGrade = () => {
//     const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
//     return sum / student.grades.length;
//   };

//   useEffect(() => {
//     const determineProgressColor = () => {
//       const averageGrade = calculateAverageGrade();
//       if (averageGrade >= 75) {
//         return 'green';
//       } else if (averageGrade >= 50 && averageGrade < 75) {
//         return 'yellow';
//       } else {
//         return 'red';
//       }
//     };

//     setProgressColor(determineProgressColor());
//   }, [student]);

//   useEffect(() => {
//     // Update progress color in Firestore when it changes
//     const updateFirestore = async () => {
//       try {
//         await firestore.collection('students').doc(student.id).update({
//           progress_color: progressColor,
//         });
//       } catch (error) {
//         console.error('Error updating progress color in Firestore:', error);
//       }
//     };

//     updateFirestore();
//   }, [progressColor, student.id]);

//   return (
//     <div style={{ border: `2px solid ${progressColor}` }}>
//       <h2 style={{ color: progressColor }}>{student.name}</h2>
//       <p>Average Grade: {calculateAverageGrade()}</p>
//       <p>Attendance: {student.attendance}%</p>
//       {/* Add other information as needed */}
//     </div>
//   );
// };

// export default StudentCard;

// // StudentCard.js

// import React, { useEffect, useState } from 'react';
// import { firestore } from './firebase';

// const StudentCard = ({ student }) => {
//   const [progressColor, setProgressColor] = useState('');

//   const calculateAverageGrade = () => {
//     const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
//     return sum / student.grades.length;
//   };

//   const determineProgressColor = () => {
//     const averageGrade = calculateAverageGrade();
//     if (averageGrade >= 75) {
//       return 'green';
//     } else if (averageGrade >= 50 && averageGrade < 75) {
//       return 'yellow';
//     } else {
//       return 'red';
//     }
//   };

//   const determineProgressString = () => {
//     const averageGrade = calculateAverageGrade();
//     if (averageGrade >= 75) {
//       return 'High';
//     } else if (averageGrade >= 50 && averageGrade < 75) {
//       return 'Medium';
//     } else {
//       return 'Low';
//     }
//   };

//   useEffect(() => {
//     setProgressColor(determineProgressColor());
//   }, [student]);

//   useEffect(() => {
//     // Update progress color in Firestore when it changes
//     const updateFirestore = async () => {
//       try {
//         await firestore.collection('students').doc(student.id).update({
//           progress_color: progressColor,
//           progress_string: determineProgressString(),
//         });
//       } catch (error) {
//         console.error('Error updating progress color in Firestore:', error);
//       }
//     };

//     updateFirestore();
//   }, [progressColor, student.id]);

//   return (
//     <div style={{ border: `2px solid ${progressColor}` }}>
//       <h2 style={{ color: progressColor }}>{student.name}</h2>
//       <p>Average Grade: {calculateAverageGrade()}</p>
//       <p>Attendance: {student.attendance}%</p>
//       <p style={{ color: progressColor }}>Overall Progress: {determineProgressString()}</p>
//       {/* Add other information as needed */}
//     </div>
//   );
// };

// export default StudentCard;

// StudentCard.js

// // StudentCard.js

// import React, { useEffect, useState } from 'react';
// import { firestore } from './firebase';



// const StudentCard = ({ student }) => {
//   const [progressLevel, setProgressLevel] = useState(''); 

//   useEffect(() => {
//     const determineProgressLevel = () => {
//       const averageGrade = calculateAverageGrade();

//       // Adjust the color values and progress levels based on your desired thresholds
//       const highThreshold = 75;
//       const mediumThreshold = 50;

//       let progressColor = '';
//       let progress = '';
//       if (averageGrade >= highThreshold) {
//         progressColor = 'green';
//         progress = 'high';
//       } else if (averageGrade >= mediumThreshold) {
//         progressColor = 'yellow';
//         progress = 'medium';
//       } else {
//         progressColor = 'red';
//         progress = 'low';
//       }

//       // Update progress_color and progress in Firestore
//       updateFirestoreProgressColor(progressColor, progress);

//       return progressColor;
//     };

//     setProgressLevel(determineProgressLevel());
//   }, [student.grades, student.attendance]);

//   const calculateAverageGrade = () => {
//     const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
//     return sum / student.grades.length;
//   };

//   const updateFirestoreProgressColor = async (color, progress) => {
//     try {
//         console.log('Firestore:', firestore); // Log Firestore object
//         console.log('Student ID:', student.id); 
//       await firestore.collection('students').doc(student.id).update({
//         progress_color: color,
//         progress: progress,
//       });
//     } catch (error) {
//       console.error('Error updating progress color in Firestore:', error);
//       console.log("student Id want to update: "+student.id);
//       console.log('Firestore:', firestore); // Log Firestore object
//         console.log('Student ID:', student.id); 
//     }
//   };

// //   return (
// //     <div style={{ border: `2px solid ${student.progress_color}` }}>
// //       <h2 style={{ color: student.progress_color }}>{student.name}</h2>
// //       <p>Average Grade: {calculateAverageGrade()}</p>
// //       <p>Attendance: {student.attendance}%</p>
// //       <p>Progress: {progressLevel}</p>
// //       {/* Add other information as needed */}
// //     </div>
// //   );
// return (
//     <div style={{ border: `2px solid ${student.progress_color}` }}>
//       <h2 style={{ color: student.progress_color }}>{student.name}</h2>
//       <p>Average Grade: {calculateAverageGrade()}</p>
//       <p>Attendance: {student.attendance}%</p>
//       <p>Progress: {progressLevel}</p>
//       {/* Add other information as needed */}
//     </div>
//   );
// };

// export default StudentCard;
// // StudentCard.js
// import React, { useEffect, useState } from 'react';
// //import { firestore } from './firebase';
// import { firestore, collection, getDocs } from './firebase';
// const StudentCard = ({ student }) => {
//   const [progressLevel, setProgressLevel] = useState('');
//   const [progressColor, setProgressColor] = useState(''); // Add this state variable

//   useEffect(() => {
//     const determineProgressLevel = () => {
//       const averageGrade = calculateAverageGrade();

//       const highThreshold = 75;
//       const mediumThreshold = 50;

//       let color = '';
//       let progress = '';
//       if (averageGrade >= highThreshold) {
//         color = 'green';
//         progress = 'high';
//       } else if (averageGrade >= mediumThreshold) {
//         color = 'yellow';
//         progress = 'medium';
//       } else {
//         color = 'red';
//         progress = 'low';
//       }

//       // Update progress_color and progress in Firestore
//       updateFirestoreProgressColor(color, progress);

//       // Set the color in the state
//       setProgressColor(color);

//       return progress;
//     };

//     setProgressLevel(determineProgressLevel());
//   }, [student.grades, student.attendance]);

//   const calculateAverageGrade = () => {
//     const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
//     return sum / student.grades.length;
//   };

//   const updateFirestoreProgressColor = async (color, progress) => {
//     try {
//       console.log('Firestore:', firestore);
//       console.log('Student ID:', student.id);
//       await firestore.collection('students').doc(student.id).update({
//         progress_color: color,
//         progress: progress,
//       });
//     } catch (error) {
//       console.error('Error updating progress color in Firestore:', error);
//       console.log('student Id want to update: ' + student.id);
//       console.log('Firestore:', firestore);
//       console.log('Student ID:', student.id);
//     }
//   };

//   return (
//     <div style={{ border: `2px solid ${progressColor}` }}>
//       <h2 style={{ color: progressColor }}>{student.name}</h2>
//       <p>Average Grade: {calculateAverageGrade()}</p>
//       <p>Attendance: {student.attendance}%</p>
//       <p>Progress: {progressLevel}</p>
//       {/* Add other information as needed */}
//     </div>
//   );
// };

// export default StudentCard;

// StudentCard.js
import React, { useEffect, useState } from 'react';
import { firestore, doc, updateDoc } from './firebase';

const StudentCard = ({ student }) => {
  const [progressLevel, setProgressLevel] = useState('');
  const [progressColor, setProgressColor] = useState('');

  useEffect(() => {
    const determineProgressLevel = () => {
      const averageGrade = calculateAverageGrade();

      const highThreshold = 75;
      const mediumThreshold = 50;

      let color = '';
      let progress = '';
      if (averageGrade >= highThreshold) {
        color = 'green';
        progress = 'high';
      } else if (averageGrade >= mediumThreshold) {
        color = 'yellow';
        progress = 'medium';
      } else {
        color = 'red';
        progress = 'low';
      }

      // Update progress_color and progress in Firestore
      updateFirestoreProgressColor(color, progress);

      // Set the color in the state
      setProgressColor(color);

      return progress;
    };

    setProgressLevel(determineProgressLevel());
  }, [student.grades, student.attendance]);

  const calculateAverageGrade = () => {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / student.grades.length;
  };

  const updateFirestoreProgressColor = async (color, progress) => {
    try {
        console.log(color);
        console.log(progress);
      const studentDocRef = doc(firestore, 'students', student.id);
      console.log("firestore ref "+studentDocRef);
      await updateDoc(studentDocRef, {
        progress_color: color,
        progress: progress,
      });
    } catch (error) {
      console.error('Error updating progress color in Firestore:', error);
      console.log('Student ID:', student.id);
    }
  };

  return (
    <div style={{ border: `2px solid ${progressColor}` }}>
      <h2 style={{ color: progressColor }}>{student.name}</h2>
      <p>Average Grade: {calculateAverageGrade()}</p>
      <p>Attendance: {student.attendance}%</p>
      <p>Progress: {progressLevel}</p>
      {/* Add other information as needed */}
    </div>
  );
};

export default StudentCard;


