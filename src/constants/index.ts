type questions = {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
};

export const questions = [
    // 2nd grade math questions
    {
      "question": "What is 10 + 5?",
      "answer1": "15",
      "answer2": "12",
      "answer3": "8",
      "answer4": "20"
    },
    {
      "question": "How many sides does a square have?",
      "answer1": "3",
      "answer2": "4",
      "answer3": "5",
      "answer4": "6"
    },
    {
      "question": "What is 6 x 3?",
      "answer1": "9",
      "answer2": "15",
      "answer3": "12",
      "answer4": "18"
    },
    {
      "question": "How many months are in a year?",
      "answer1": "10",
      "answer2": "12",
      "answer3": "6",
      "answer4": "8"
    },
    // 3rd grade math questions
    {
      "question": "What is 25 - 13?",
      "answer1": "16",
      "answer2": "12",
      "answer3": "15",
      "answer4": "8"
    },
    {
      "question": "How many minutes are in an hour?",
      "answer1": "60",
      "answer2": "30",
      "answer3": "45",
      "answer4": "90"
    },
    {
      "question": "What is 7 x 7?",
      "answer1": "14",
      "answer2": "36",
      "answer3": "56",
      "answer4": "49"
    },
    {
      "question": "How many continents are there?",
      "answer1": "2",
      "answer2": "5",
      "answer3": "7",
      "answer4": "4"
    },
    // 4th grade math questions
    {
      "question": "What is 345 + 189?",
      "answer1": "534",
      "answer2": "434",
      "answer3": "524",
      "answer4": "624"
    },
    {
      "question": "How many degrees are in a right angle?",
      "answer1": "45",
      "answer2": "180",
      "answer3": "90",
      "answer4": "360"
    },
    {
      "question": "What is the perimeter of a square with side length 5 units?",
      "answer1": "20",
      "answer2": "25",
      "answer3": "15",
      "answer4": "10"
    },
    {
      "question": "If a box contains 24 apples and you take out 6, how many are left?",
      "answer1": "30",
      "answer2": "18",
      "answer3": "20",
      "answer4": "22"
    },
    // 5th grade math questions
    {
      "question": "What is the result of 3 x (4 + 5)?",
      "answer1": "12",
      "answer2": "21",
      "answer3": "18",
      "answer4": "27"
    },
    {
      "question": "Simplify: 2/3 + 1/4",
      "answer1": "11/12",
      "answer2": "5/7",
      "answer3": "3/4",
      "answer4": "7/8"
    },
    {
      "question": "What is the square root of 144?",
      "answer1": "12",
      "answer2": "14",
      "answer3": "16",
      "answer4": "18"
    },
    {
      "question": "If a car travels at 60 mph, how far will it go in 3 hours?",
      "answer1": "190 miles",
      "answer2": "160 miles",
      "answer3": "180 miles",
      "answer4": "220 miles"
    },
    // 6th grade math questions
    {
      "question": "What is the result of 5^2?",
      "answer1": "35",
      "answer2": "20",
      "answer3": "30",
      "answer4": "25"
    },
    {
      "question": "Solve for x in the equation 2x + 3 = 15",
      "answer1": "7",
      "answer2": "8",
      "answer3": "6",
      "answer4": "10"
    },
    {
        "question": "What is the area of a triangle with base 6 units and height 8 units?",
        "answer1": "24 square units",
        "answer2": "30 square units",
        "answer3": "36 square units",
        "answer4": "40 square units"
    },
    {
        "question": "If a recipe calls for 2/3 cup of flour and you want to make 3 batches, how much flour do you need?",
        "answer1": "2 cups",
        "answer2": "1 cup",
        "answer3": "1.5 cups",
        "answer4": "3 cups"
    },
  ]

  export const correctAnswers: number[] = [
    // 2nd grade math questions
    0, // Question 1 (Index of "15" in the options array)
    1, // Question 2 (Index of "4" in the options array)
    3, // Question 3 (Index of "18" in the options array)
    1, // Question 4 (Index of "12" in the options array)
    // 3rd grade math questions
    1, // Question 5 (Index of "12" in the options array)
    0, // Question 6 (Index of "60" in the options array)
    3, // Question 7 (Index of "49" in the options array)
    2, // Question 8 (Index of "7" in the options array)
    // 4th grade math questions
    0, // Question 9 (Index of "534" in the options array)
    2, // Question 10 (Index of "90" in the options array)
    0, // Question 11 (Index of "20" in the options array)
    1, // Question 12 (Index of "18" in the options array)
    // 5th grade math questions
    3, // Question 13 (Index of "27" in the options array)
    0, // Question 14 (Index of "11/12" in the options array)
    0, // Question 15 (Index of "12" in the options array)
    2, // Question 16 (Index of "180 miles" in the options array)
    // 6th grade math questions
    3, // Question 17 (Index of "25" in the options array)
    2, // Question 18 (Index of "6" in the options array)
    0, // Question 19 (Index of "24 square units" in the options array)
    0  // Question 20 (Index of "2 cups" in the options array)
];
export const gradeLessons: { [key: number]: string[] } = {
  2: [
    "Addition and Subtraction",
    "Place Value",
    "Introduction to Multiplication and Division",
    "Measurement (Length, Weight, Capacity)",
    "Introduction to Geometry (Shapes and Patterns)"
  ],
  3: [
    "Multiplication and Division Mastery",
    "Fractions",
    "Measurement and Data",
    "Geometry",
    "Problem-Solving Strategies"
  ],
  4: [
    "Multiplication and Division Mastery",
    "Fractions and Decimals",
    "Geometry",
    "Measurement and Data",
    "Multiplication, Division, and Factors"
  ],
  5: [
    "Multiplication and Division",
    "Fractions, Decimals, and Percentages",
    "Geometry",
    "Ratio and Proportion",
    "Data Analysis and Probability"
  ],
  6: [
    "Number Sense and Operations",
    "Algebraic Concepts",
    "Geometry",
    "Ratio and Proportion",
    "Data Analysis and Probability"
  ]
};
