// Define the first semester courses data
const firstSemesterCourses = [
    { code: 'NSTP01', description: 'Civic Welfare Training Service 1', unit: "3.0", grade: '1.20', remarks: 'Passed', course: 'NSTP01', term: 'First Semester A.Y 2022-2023' },
    { code: 'SCITEC', description: 'Science, Technology and Society', unit: "3.0", grade: '1.20', remarks: 'Passed', course: 'SCITEC', term: 'First Semester A.Y 2022-2023' },
    { code: 'INTCOM', description: 'Introduction to Computing', unit: "3.0", grade: '1.50', remarks: 'Passed', course: 'INTCOM', term: 'First Semester A.Y 2022-2023' },
    { code: 'COPR01', description: 'Computer Programming 1', unit: "3.0", grade: '1.60', remarks: 'Passed', course: 'COPRO1', term: 'First Semester A.Y 2022-2023' },
    { code: 'COMPOP', description: 'Computer Operations: Office Productivity Software(MS Office)', unit: "3.0", grade: '1.70', remarks: 'Passed', course: 'COMPOP', term: 'First Semester A.Y 2022-2023' },
    { code: 'PEDUC1', description: 'Physical Activities Towards Health and Fitness 1', unit: "2.0", grade: '1.10', remarks: 'Passed', course: 'PEDUC1', term: 'First Semester A.Y 2022-2023' },
    { code: 'JIRZAL', description: 'Life, Works and Writings of Jose Rizal', unit: "3.0", grade: '1.10', remarks: 'Passed', course: 'JRIZAL', term: 'First Semester A.Y 2022-2023' }
];

// Define the second semester courses data
const secondSemesterCourses = [
    { code: 'OOPROG', description: 'Object-Oriented Programming', unit: "3.0", grade: '1.70', remarks: 'Passed', course: 'OOPROG', term: 'Second Semester A.Y 2022-2023' },
    { code: 'ARTAPP', description: 'Art Appreciation', unit: "3.0", grade: '1.20', remarks: 'Passed', course: 'ARTAPP', term: 'Second Semester A.Y 2022-2023' },
    { code: 'PURCOM', description: 'Purposive Communication', unit: "3.0", grade: '1.40', remarks: 'Passed', course: 'PURCOM', term: 'Second Semester A.Y 2022-2023' },
    { code: 'NSTP02', description: 'Civic Welfare Training Service 2', unit: "3.0", grade: '1.00', remarks: 'Passed', course: 'NSTP02', term: 'Second Semester A.Y 2022-2023' },
    { code: 'DSTRU1', description: 'Discrete Structures 1', unit: "3.0", grade: '1.90', remarks: 'Passed', course: 'DSTRU1', term: 'Second Semester A.Y 2022-2023' },
    { code: 'PEDUC2', description: 'Physical Activities Towards Health and Fitness 2', unit: "2.0", grade: '1.00', remarks: 'Passed', course: 'PEDUC2', term: 'Second Semester A.Y 2022-2023' },
    { code: 'COPRO2', description: 'Computer Programming 2', unit: "3.0", grade: '1.70', remarks: 'Passed', course: 'COPRO2', term: 'Second Semester A.Y 2022-2023' },
    { code: 'GEEL01', description: 'General Education Elective 1', unit: "3.0", grade: '1.30', remarks: 'Passed', course: 'GEEL01', term: 'First Semester A.Y 2023-2024' }
];

// Define the third semester courses data
const thirdSemesterCourses = [
    { code: 'ANIMUL', description: 'Animation and Multimedia', unit: "3.0", grade: '1.20', remarks: 'Passed', course: 'ANIMUL', term: 'First Semester A.Y 2023-2024' },
    { code: 'HUMCOM', description: 'Human Computer Interaction', unit: "3.0", grade: '1.80', remarks: 'Passed', course: 'HUMCOM', term: 'First Semester A.Y 2023-2024' },
    { code: 'MATMOD', description: 'Mathematics in the Modern World', unit: "3.0", grade: '1.20', remarks: 'Passed', course: 'MATMOD', term: 'Second Semester A.Y 2022-2023' },
    { code: 'DASTRU', description: 'Data Structures and Algorithms', unit: "3.0", grade: '1.70', remarks: 'Passed', course: 'DASTRU', term: 'First Semester A.Y 2023-2024' },
    { code: 'NETWRK', description: 'CCNA Exploration: Network Fundamentals', unit: "3.0", grade: '1.60', remarks: 'Passed', course: 'NETWRK', term: 'First Semester A.Y 2023-2024' },
    { code: 'PEDUC3', description: 'Physical Activities Towards Health and Fitness 3', unit: "2.0", grade: '1.10', remarks: 'Passed', course: 'PEDUC3', term: 'First Semester A.Y 2023-2024' },
    { code: 'GEEL02', description: 'General Education Elective 2', unit: "3.0", grade: '1.00', remarks: 'Passed', course: 'GEEL02', term: 'Second Semester A.Y 2023-2024' }
];

// Define the fourth semester courses data
const fourthSemesterCourses = [
    { code: 'UNDSLF', description: 'Understanding the Self', unit: "3.0", grade: '1.10', remarks: 'Passed', course: 'UNDSLF', term: 'First Semester A.Y 2023-2024' },
    { code: 'INMANA', description: 'Information Management', unit: "3.0", grade: '1.40', remarks: 'Passed', course: 'INMANA', term: 'Second Semester A.Y 2023-2024' },
    { code: 'EVEDRI', description: 'Event Driven Programming', unit: "3.0", grade: '1.10', remarks: 'Passed', course: 'EVEDRI', term: 'Second Semester A.Y 2023-2024' },
    { code: 'PROEL1', description: 'Professional Elective 1', unit: "3.0", grade: '1.10', remarks: 'Passed', course: 'PROEL1', term: 'Second Semester A.Y 2023-2024' },
    { code: 'PEDUC4', description: 'Physical Activities Towards Health and Fitness 4', unit: "3.0", grade: '1.30', remarks: 'Passed', course: 'PEDUC4', term: 'Second Semester A.Y 2023-2024' },
    { code: 'TECHNO', description: 'Technopreneurship', unit: "3.0", grade: '2.00', remarks: 'Passed', course: 'TECHNO', term: 'Second Semester A.Y 2023-2024' },
    { code: 'GEEL03', description: 'General Education Elective 3', unit: "3.0", grade: '', remarks: '', course: '', term: '' }
];

// Define the fifth semester courses data
const fifthSemesterCourses = [
    { code: 'SOFENG', description: 'Software Engineering', unit: "3.0", grade: '', remarks: 'In progress', course: '', term: '' },
    { code: 'WEBTEC', description: 'Web Technology', unit: "3.0", grade: '', remarks: 'In progress', course: '', term: '' },
    { code: 'SYSTIN', description: 'System Integration and Architecture', unit: "3.0", grade: '', remarks: 'In progress', course: '', term: '' },
    { code: 'MOBAPP_', description: 'Mobile Application', unit: "3.0", grade: '', remarks: 'In progress', course: '', term: '' },
    { code: 'PROEL2', description: 'Professional Elective 2', unit: "3.0", grade: '', remarks: 'In progress', course: '', term: '' },
    { code: 'RESMET', description: 'Research Methods in IT', unit: "3.0", grade: '', remarks: 'In progress', course: '', term: '' }
];

// Define the sixth semester courses data
const sixthSemesterCourses = [
    { code: 'CPSTON1', description: 'Capstone Project 1', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'PROEL3', description: 'Professional Elective 3', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'PROEL4', description: 'Professional Elective 4', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'SYSTAD', description: 'System Administration and Maintenance', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'APPDEV', description: 'Application Development and Emerging Technologies', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'SOCPRO', description: 'Social and Professional Issues', unit: "3.0", grade: '', remarks: '', course: '', term: '' }
];

// Define the seventh semester courses data
const seventhSemesterCourses = [
    { code: 'CONWOR', description: 'The Contemporary World', unit: "3.0", grade: '1.30', remarks: 'Passed', course: 'CONWOR', term: 'Second Semester A.Y 2023-2024' },
    { code: 'OPESYS', description: 'Operating Systems', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'ITPRA1	', description: 'IT Practicum 1 (250 Hours)', unit: "5.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'CPSTON2', description: 'Capstone Project 2', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'INFASS', description: 'Information Assurance and Security', unit: "3.0", grade: '', remarks: '', course: '', term: '' }
];

// Define the eight semester courses data
const eighthSemesterCourses = [
    { code: 'PHIHIS', description: 'Readings in Philippine History', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'PLATEC', description: 'Platform Technologies', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'BUSANA	', description: 'Business Analytics', unit: "3.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'ITPRA2', description: 'IT Practicum 2 (250 Hours)', unit: "5.0", grade: '', remarks: '', course: '', term: '' },
    { code: 'ETHICS', description: 'Ethics', unit: "3.0", grade: '', remarks: '', course: '', term: '' }
];

// Create the header row for the first semester
const headerRow1 = `
    <tr>
        <th colspan="7" style="text-align: center;">First Year, First Semester</th>
    </tr>
`;

// Append header to the first table
document.querySelector('#courseTable1 thead').innerHTML = headerRow1;

// Create the table header for the first semester
const tableHeader1 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the first table
document.querySelector('#courseTable1 thead').innerHTML += tableHeader1;

// Populate the first table body with first semester course data
const tbody1 = document.querySelector('#courseTable1 tbody');

firstSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody1.appendChild(row);
});

// Create the header row for the second semester
const headerRow2 = `
    <tr>
        <th colspan="7" style="text-align: center;">First Year, Second Semester</th>
    </tr>
`;

// Append header to the second table
document.querySelector('#courseTable2 thead').innerHTML = headerRow2;

// Create the table header for the second semester
const tableHeader2 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the second table
document.querySelector('#courseTable2 thead').innerHTML += tableHeader2;

// Populate the second table body with second semester course data
const tbody2 = document.querySelector('#courseTable2 tbody');

secondSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody2.appendChild(row);
});
// Create the header row for the third semester
const headerRow3 = `
    <tr>
        <th colspan="7" style="text-align: center;">Second Year, First Semester</th>
    </tr>
`;

// Append header to the third table
document.querySelector('#courseTable3 thead').innerHTML = headerRow3;

// Create the table header for the third semester
const tableHeader3 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the third table
document.querySelector('#courseTable3 thead').innerHTML += tableHeader3;

// Populate the third table body with third semester course data
const tbody3 = document.querySelector('#courseTable3 tbody');

thirdSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody3.appendChild(row);
});

// Create the header row for the fourth semester
const headerRow4 = `
    <tr>
        <th colspan="7" style="text-align: center;">Second Year, Second Semester</th>
    </tr>
`;

// Append header to the fourth table
document.querySelector('#courseTable4 thead').innerHTML = headerRow4;

// Create the table header for the fourth semester
const tableHeader4 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the fourth table
document.querySelector('#courseTable4 thead').innerHTML += tableHeader4;

// Populate the fourth table body with fourth semester course data
const tbody4 = document.querySelector('#courseTable4 tbody');

fourthSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody4.appendChild(row);
});
// Create the header row for the fifth semester
const headerRow5 = `
    <tr>
        <th colspan="7" style="text-align: center;">Third Year, First Semester</th>
    </tr>
`;

// Append header to the fifth table
document.querySelector('#courseTable5 thead').innerHTML = headerRow5;

// Create the table header for the fifth semester
const tableHeader5 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the fifth table
document.querySelector('#courseTable5 thead').innerHTML += tableHeader5;

// Populate the fifth table body with fifth semester course data
const tbody5 = document.querySelector('#courseTable5 tbody');

fifthSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody5.appendChild(row);
});

// Create the header row for the sixth semester
const headerRow6 = `
    <tr>
        <th colspan="7" style="text-align: center;">Third Year, Second Semester</th>
    </tr>
`;

// Append header to the sixth table
document.querySelector('#courseTable6 thead').innerHTML = headerRow6;

// Create the table header for the sixth semester
const tableHeader6 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the sixth table
document.querySelector('#courseTable6 thead').innerHTML += tableHeader6;

// Populate the sixth table body with sixth semester course data
const tbody6 = document.querySelector('#courseTable6 tbody');

sixthSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody6.appendChild(row);
});

// Create the header row for the seventh semester
const headerRow7 = `
    <tr>
        <th colspan="7" style="text-align: center;">Fourth Year, First Semester</th>
    </tr>
`;

// Append header to the seventh table
document.querySelector('#courseTable7 thead').innerHTML = headerRow7;

// Create the table header for the seventh semester
const tableHeader7 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the seventh table
document.querySelector('#courseTable7 thead').innerHTML += tableHeader7;

// Populate the seventh table body with seventh semester course data
const tbody7 = document.querySelector('#courseTable7 tbody');

seventhSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody7.appendChild(row);
});

// Create the header row for the eighth semester
const headerRow8 = `
    <tr>
        <th colspan="7" style="text-align: center;">Fourth Year, Second Semester</th>
    </tr>
`;

// Append header to the eighth table
document.querySelector('#courseTable8 thead').innerHTML = headerRow8;

// Create the table header for the eighth semester
const tableHeader8 = `
    <tr>
        <th>Course</th>
        <th>Description</th>
        <th>Unit</th>
        <th>Grade</th>
        <th>Remarks</th>
        <th>Course</th>
        <th>Term</th>
    </tr>
`;

// Append the table header to the eighth table
document.querySelector('#courseTable8 thead').innerHTML += tableHeader8;

// Populate the eighth table body with eighth semester course data
const tbody8 = document.querySelector('#courseTable8 tbody');

eighthSemesterCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${course.code}</td>
        <td>${course.description}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
        <td>${course.remarks}</td>
        <td>${course.course}</td>
        <td>${course.term}</td>
    `;
    tbody8.appendChild(row);
});