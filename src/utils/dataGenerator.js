import { faker } from '@faker-js/faker';

export const generateRandomData = () => {
  // Generate a past date for statement
  const statementDate = faker.date.past({ years: 0.5 });
  // Due date is typically 2-4 weeks after statement
  const dueDate = new Date(statementDate);
  dueDate.setDate(dueDate.getDate() + faker.number.int({ min: 14, max: 30 }));
  
  // Issue date typically current or very recent
  const issueDate = faker.date.recent({ days: 5 });
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  // Common Texas/US universities to choose from if desired, or just generic
  const university = "Hachimi University"; 

  // Course Data Pool based on Major
  const majors = [
    { name: "Computer Science", college: "College of Science and Engineering", program: "Bachelor of Science", prefix: "CS" },
    { name: "Business Administration", college: "McCoy College of Business", program: "Bachelor of Business Admin", prefix: "BA" },
    { name: "Psychology", college: "College of Liberal Arts", program: "Bachelor of Arts", prefix: "PSY" },
    { name: "Biology", college: "College of Science and Engineering", program: "Bachelor of Science", prefix: "BIO" },
    { name: "Marketing", college: "McCoy College of Business", program: "Bachelor of Business Admin", prefix: "MKT" },
  ];

  const selectedMajor = faker.helpers.arrayElement(majors);

  // Generate random courses logic
  const generateCourses = (majorPrefix, term) => {
    const commonCourses = [
        { code: "ENG 1310", name: "College Writing I", hours: 3 },
        { code: "ENG 1320", name: "College Writing II", hours: 3 },
        { code: "HIST 1310", name: "History of US to 1877", hours: 3 },
        { code: "POSI 2310", name: "Principles of American Govt", hours: 3 },
        { code: "COMM 1310", name: "Fund. of Human Communication", hours: 3 },
        { code: "PHIL 1305", name: "Philosophy & Critical Thinking", hours: 3 },
        { code: "ART 2313", name: "Introduction to Fine Arts", hours: 3 },
    ];

    const majorCoursesPool = {
        "CS": [
            { code: "CS 1428", name: "Foundations of Computer Science I", hours: 4 },
            { code: "CS 2308", name: "Foundations of Computer Science II", hours: 3 },
            { code: "CS 3358", name: "Data Structures", hours: 3 },
            { code: "MATH 2471", name: "Calculus I", hours: 4 },
            { code: "MATH 2358", name: "Discrete Mathematics I", hours: 3 },
        ],
        "BA": [
            { code: "MGT 3303", name: "Management of Organizations", hours: 3 },
            { code: "MKT 3343", name: "Principles of Marketing", hours: 3 },
            { code: "ACC 2361", name: "Intro to Financial Accounting", hours: 3 },
            { code: "ECO 2314", name: "Principles of Microeconomics", hours: 3 },
            { code: "FIN 3312", name: "Business Finance", hours: 3 },
        ],
        "PSY": [
            { code: "PSY 1300", name: "Introduction to Psychology", hours: 3 },
            { code: "PSY 3300", name: "Lifespan Development", hours: 3 },
            { code: "PSY 3322", name: "Brain and Behavior", hours: 3 },
            { code: "SOC 1310", name: "Introduction to Sociology", hours: 3 },
            { code: "PSY 3341", name: "Cognitive Processes", hours: 3 },
        ],
        "BIO": [
            { code: "BIO 1330", name: "Functional Biology", hours: 3 },
            { code: "BIO 1130", name: "Functional Biology Lab", hours: 1 },
            { code: "CHEM 1341", name: "General Chemistry I", hours: 3 },
            { code: "CHEM 1141", name: "General Chemistry I Lab", hours: 1 },
            { code: "BIO 2450", name: "Genetics", hours: 4 },
        ],
        "MKT": [
            { code: "MKT 3350", name: "Consumer Behavior", hours: 3 },
            { code: "MKT 3358", name: "Professional Selling", hours: 3 },
            { code: "MKT 4330", name: "Promotional Strategy", hours: 3 },
            { code: "BLAW 2361", name: "Legal Environment of Business", hours: 3 },
            { code: "QMST 2333", name: "Business Statistics", hours: 3 },
        ]
    };

    // Mix 2-3 major courses with 2-3 common courses for realism
    const numMajor = faker.number.int({ min: 2, max: 3 });
    const numCommon = 5 - numMajor;
    
    const myMajorCourses = faker.helpers.arrayElements(majorCoursesPool[majorPrefix], numMajor);
    const myCommonCourses = faker.helpers.arrayElements(commonCourses, numCommon);
    
    const combined = [...myMajorCourses, ...myCommonCourses];
    
    // Generate Grades and Quality Points
    return combined.map(c => {
        const gradePool = ['A', 'A', 'A', 'A', 'B', 'B']; // Heavily skew towards A and B to ensure passing and realistic "good student" GPA
        const grade = faker.helpers.arrayElement(gradePool);
        let pointsPerHour = 0;
        if(grade === 'A') pointsPerHour = 4;
        else if(grade === 'B') pointsPerHour = 3;
        else if(grade === 'C') pointsPerHour = 2;
        else if(grade === 'D') pointsPerHour = 1;
        
        return {
            ...c,
            grade: grade,
            qualityPoints: (c.hours * pointsPerHour).toFixed(2),
            hours: c.hours.toFixed(2)
        };
    });
  };

  const termCourses = generateCourses(selectedMajor.prefix, "Fall 2024");
  const springCourses = generateCourses(selectedMajor.prefix, "Spring 2025");

  // Calculate GPA logic
  const calculateTermStats = (courses) => {
    const attempted = courses.reduce((acc, c) => acc + parseFloat(c.hours), 0);
    const earned = attempted; // Assuming no Fs
    const qualityPoints = courses.reduce((acc, c) => acc + parseFloat(c.qualityPoints), 0);
    const gpa = (qualityPoints / attempted).toFixed(2);
    return { attempted, earned, qualityPoints, gpa };
  };

  const fallStats = calculateTermStats(termCourses);
  const springStats = calculateTermStats(springCourses);
  
  // Cumulative (mock previous data + current)
  const prevHours = faker.number.int({ min: 15, max: 60 });
  const prevGpa = faker.number.float({ min: 3.2, max: 4.0 }); // Ensure previous GPA is solid (above 3.2)
  const prevPoints = prevHours * prevGpa;
  
  const cumAttempted = prevHours + fallStats.attempted + springStats.attempted;
  const cumPoints = prevPoints + fallStats.qualityPoints + springStats.qualityPoints;
  const cumGpa = (cumPoints / cumAttempted).toFixed(2);

  // Tuition Data Logic
  // Base tuition around 9500, slightly random but rounded to whole number
  const baseTuition = faker.number.int({ min: 9400, max: 9800 });
  
  // Differential tuition depends on college (mock logic)
  let diffTuition = 0;
  if (selectedMajor.college.includes("Business")) diffTuition = 1100;
  else if (selectedMajor.college.includes("Science")) diffTuition = 975;
  else diffTuition = 850;
  
  const fees = {
      studentService: 340,
      computerService: 210,
      library: 150,
      medical: 95,
      other: 680,
      intlOps: 75,
      insurance: 1650
  };
  
  const totalFees = Object.values(fees).reduce((a, b) => a + b, 0) + diffTuition;
  const totalCharges = baseTuition + totalFees;

  // Admission date: 1-3 years ago (ensures student card remains valid)
  const yearsEnrolled = faker.number.int({ min: 1, max: 3 });
  const admissionDate = new Date();
  admissionDate.setFullYear(admissionDate.getFullYear() - yearsEnrolled);
  // Randomize to a semester start (Aug/Sep or Jan/Feb)
  admissionDate.setMonth(faker.helpers.arrayElement([0, 1, 7, 8]));
  admissionDate.setDate(faker.number.int({ min: 15, max: 28 }));

  // Student Card issued 1-4 weeks after admission
  const cardIssueDate = new Date(admissionDate);
  cardIssueDate.setDate(cardIssueDate.getDate() + faker.number.int({ min: 7, max: 28 }));
  
  // Valid for 4 years from issue
  const cardValidDate = new Date(cardIssueDate);
  cardValidDate.setFullYear(cardValidDate.getFullYear() + 4);

  return {
    universityName: university,
    universityLogo: '/university-logo.png',
    universityAddress: `${faker.number.int({min: 100, max: 9999})} University Blvd, ${faker.location.city()}, ${faker.location.state({ abbreviated: true })}, ${faker.location.zipCode()}`,
    studentName: `${lastName} ${firstName}`, 
    studentID: `${faker.string.numeric(6)}-${faker.string.numeric(4)}`,
    passportNumber: faker.string.alphanumeric(9).toUpperCase(), // Added passport
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}`,
    term: "Fall 2024", 
    major: selectedMajor.name, 
    program: selectedMajor.program,
    college: selectedMajor.college,
    statementDate: formatDate(statementDate),
    dueDate: formatDate(dueDate),
    issueDate: formatDate(issueDate),
    admissionDate: formatDate(admissionDate), // Added admission date
    officials: {
        dean: `${faker.person.lastName()}, ${faker.person.firstName()} (PhD)`,
        registrar: `${faker.person.lastName()}, ${faker.person.firstName()}`
    },
    tuition: {
        base: baseTuition.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        differential: diffTuition.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
        fees: fees,
        total: totalCharges.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    },
    courses: {
        current: termCourses,
        next: springCourses
    },
    stats: {
        current: fallStats,
        next: springStats,
        cumulative: {
            attempted: cumAttempted.toFixed(2),
            earned: cumAttempted.toFixed(2),
            qualityPoints: cumPoints.toFixed(2),
            gpa: cumGpa
        }
    },
    // Student Card specific
    cardSubtitle: 'INTERNATIONAL STUDENT ID CARD',
    cardIssueDate: formatDate(cardIssueDate),
    cardValidDate: formatDate(cardValidDate),
    cardNotice: 'This card is the property of the university and must be returned upon request. If found, please return to the nearest university office.',
    cardColor: faker.helpers.arrayElement(['#3b82f6', '#10b981', '#8b5cf6', '#ef4444', '#f59e0b', '#06b6d4', '#ec4899']),
    studentPhoto: null
  };
};

export const generateTeacherData = () => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const title = faker.helpers.arrayElement(['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Mrs.']);

  // University/Institution
  const universities = [
    { name: "California State University", city: "Los Angeles", state: "CA", abbr: "CSU" },
    { name: "University of Texas", city: "Austin", state: "TX", abbr: "UT" },
    { name: "Florida International University", city: "Miami", state: "FL", abbr: "FIU" },
    { name: "Arizona State University", city: "Tempe", state: "AZ", abbr: "ASU" },
    { name: "George Mason University", city: "Fairfax", state: "VA", abbr: "GMU" }
  ];
  const selectedUniversity = faker.helpers.arrayElement(universities);
  
  // Department and subjects
  const departments = [
    { 
      name: "Computer Science", 
      college: "College of Engineering and Computer Science", 
      subjects: ["Data Structures and Algorithms", "Software Engineering", "Database Management Systems", "Computer Networks"],
      positions: ["Assistant Professor", "Associate Professor", "Professor", "Lecturer"]
    },
    { 
      name: "Mathematics", 
      college: "College of Natural Sciences and Mathematics", 
      subjects: ["Calculus I & II", "Linear Algebra", "Statistical Methods", "Discrete Mathematics"],
      positions: ["Assistant Professor", "Associate Professor", "Professor"]
    },
    { 
      name: "Business Administration", 
      college: "School of Business", 
      subjects: ["Principles of Management", "Marketing Strategy", "Corporate Finance", "Macroeconomics"],
      positions: ["Assistant Professor", "Associate Professor", "Professor", "Clinical Professor"]
    },
    { 
      name: "Psychology", 
      college: "College of Liberal Arts and Social Sciences", 
      subjects: ["Introduction to Psychology", "Research Methods", "Cognitive Psychology", "Abnormal Psychology"],
      positions: ["Assistant Professor", "Associate Professor", "Professor"]
    },
    { 
      name: "English", 
      college: "College of Liberal Arts and Social Sciences", 
      subjects: ["Composition and Rhetoric", "American Literature", "Creative Writing", "Literary Analysis"],
      positions: ["Assistant Professor", "Associate Professor", "Professor", "Lecturer"]
    }
  ];

  const selectedDepartment = faker.helpers.arrayElement(departments);
  
  // Employment details
  const hireDate = faker.date.past({ years: faker.number.int({ min: 1, max: 12 }) });
  const employeeId = `${selectedUniversity.abbr}-${faker.string.numeric(6)}`;
  
  // Teacher ID Card dates
  const idIssueDate = new Date(hireDate);
  idIssueDate.setDate(idIssueDate.getDate() + faker.number.int({ min: 30, max: 90 }));
  const idValidDate = new Date(idIssueDate);
  idValidDate.setFullYear(idValidDate.getFullYear() + 4);

  // Teaching certificate
  const certificationDate = new Date(hireDate);
  certificationDate.setMonth(certificationDate.getMonth() - faker.number.int({ min: 6, max: 24 }));
  
  // Salary details (more realistic ranges by position)
  const position = faker.helpers.arrayElement(selectedDepartment.positions);
  let baseSalary;
  switch(position) {
    case "Lecturer":
      baseSalary = faker.number.int({ min: 45000, max: 65000 });
      break;
    case "Assistant Professor":
      baseSalary = faker.number.int({ min: 65000, max: 85000 });
      break;
    case "Associate Professor":
      baseSalary = faker.number.int({ min: 80000, max: 110000 });
      break;
    case "Professor":
      baseSalary = faker.number.int({ min: 100000, max: 140000 });
      break;
    case "Clinical Professor":
      baseSalary = faker.number.int({ min: 90000, max: 120000 });
      break;
    default:
      baseSalary = faker.number.int({ min: 65000, max: 95000 });
  }
  
  const payPeriodStart = faker.date.recent({ days: 30 });
  const payPeriodEnd = new Date(payPeriodStart);
  payPeriodEnd.setDate(payPeriodEnd.getDate() + 14);

  // Office and contact details
  const building = faker.helpers.arrayElement(['Science Building', 'Engineering Hall', 'Liberal Arts Center', 'Business Complex', 'Academic Center']);
  const officeNumber = `${faker.number.int({ min: 1, max: 5 })}${faker.string.numeric(2)}`;
  const phoneExt = faker.string.numeric(4);

  return {
    // Basic Info
    universityName: selectedUniversity.name,
    universityCity: selectedUniversity.city,
    universityState: selectedUniversity.state,
    universityAbbr: selectedUniversity.abbr,
    universityLogo: '/university-logo.png',
    universityAddress: `${faker.number.int({min: 100, max: 9999})} University Drive, ${selectedUniversity.city}, ${selectedUniversity.state} ${faker.location.zipCode()}`,
    teacherTitle: title,
    teacherName: `${lastName}, ${firstName}`,
    teacherFirstName: firstName,
    teacherLastName: lastName,
    teacherFullName: `${title} ${firstName} ${lastName}`,
    employeeID: employeeId,
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${selectedUniversity.state} ${faker.location.zipCode()}`,
    
    // Office Info
    office: `${building}, Room ${officeNumber}`,
    phone: `(${faker.string.numeric(3)}) ${faker.string.numeric(3)}-${faker.string.numeric(4)} ext. ${phoneExt}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${selectedUniversity.name.toLowerCase().replace(/\s+/g, '')}.edu`,
    
    // Academic Info
    department: selectedDepartment.name,
    college: selectedDepartment.college,
    position: position,
    subjects: selectedDepartment.subjects,
    
    // Dates
    hireDate: formatDate(hireDate),
    certificationDate: formatDate(certificationDate),
    payPeriodStart: formatDate(payPeriodStart),
    payPeriodEnd: formatDate(payPeriodEnd),
    
    // Teacher ID Card
    idIssueDate: formatDate(idIssueDate),
    idValidDate: formatDate(idValidDate),
    idCardSubtitle: 'FACULTY IDENTIFICATION CARD',
    idColor: faker.helpers.arrayElement(['#dc2626', '#059669', '#7c3aed', '#d97706', '#0891b2']),
    
    // Salary info
    baseSalary: baseSalary,
    salaryFormatted: baseSalary.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
    
    // Officials
    officials: {
      dean: `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`,
      hr: `${faker.person.firstName()} ${faker.person.lastName()}`,
      principal: `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`,
      provost: `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`
    },
    
    teacherPhoto: null
  };
};
