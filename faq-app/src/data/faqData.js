const faqData = [
    // Basic Questions
    {
      id: 1,
      question: 'What is React.js?',
      answer: 'React.js is a JavaScript library developed by Facebook for building user interfaces using reusable components, mainly for single-page applications.'
    },
    {
      id: 2,
      question: 'What are props in React?',
      answer: 'Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child.'
    },
    {
      id: 3,
      question: 'What is JSX?',
      answer: 'JSX stands for JavaScript XML. It is a syntax extension that allows writing HTML-like code in JavaScript, which is then transformed into React elements.'
  
    },
  
    // Advanced Questions
    {
      id: 4,
      question: 'How does React’s reconciliation process work?',
      answer: 'React’s reconciliation process compares the current Virtual DOM with the previous one to determine the minimum number of changes needed to update the real DOM efficiently.'
    },
    {
      id: 5,
      question: 'What is the role of useMemo and how is it different from useCallback?',
      answer: 'useMemo memoizes the result of a computation, while useCallback memoizes the function itself. Both are used to optimize performance by avoiding unnecessary recalculations or re-renders.'
    },
    {
      id: 6,
      question: 'How do you implement code splitting in a React application?',
      answer: 'Code splitting can be implemented using React.lazy and Suspense, allowing you to load components only when they’re needed, improving the app’s initial load time.'
    },
    {
      id: 7,
      question: 'How can you optimize large lists in React?',
      answer: 'Large lists can be optimized using windowing libraries like react-window or react-virtualized, which render only the visible items instead of the entire list.'
    }
  ];
  
  export default faqData;