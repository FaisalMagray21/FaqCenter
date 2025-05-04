import {React,useEffect,useState} from 'react'
import FAQList from './components/FAQList'
import './App.css'
const App = () => {
const[darkMode, setDarkMode] = useState(false);
useEffect(() => {
if(darkMode) {
document.documentElement.classList.add('dark');
}
else {
document.documentElement.classList.remove('dark');
}
},[darkMode]);
const toggleDarkMode = () => {
setDarkMode(!darkMode);

};

return ( 

<div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50
  dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-200">
  
  {/* Header Section - full width with padding */}
  <div className="w-full px-4 py-12">
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
        FAQ-Center
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
        Find Answers to the Most Common React JS Questions
      </p>
    </header>
  </div>

  {/* FAQ List */}
  <FAQList toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
</div>


)
}

export default App
