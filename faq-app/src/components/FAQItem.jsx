import {React,useRef} from 'react'

const FAQItem = ({id,question,answer,onClick,isOpen}) => {
  const answerRef = useRef(null)

  return (
    <div className='border-b border-gray-200 dark:border-gray-700 last:border-none
    transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent
    dark:hover:from-gray-800/50 dark:hover:to-transparent' id={`faq-item-${id}` }>
      <button className='w-full py-5 px-4 flex justify-between items-center
      text-left focus:outline-none rounfed-lg transition-all duration-300 cursor-pointer
       text-gray-900 dark:text-white hover:text-transparent dark:text-transparent hover:bg-clip-text
       hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
       dark:hover:from-indigo-400 dark:hover:to-purple-400' onClick={()=>{
        onClick(id)
        
       }}>
        <span className='text-lg font-medium pr-6'>{question}</span>
        <i className='bx bx-chevron-down text-xl transition-transform duration-300 transform rotate-0'>

        </i>

       </button>
       <div className='overflow-hidden' id={`faq-answer-${id}`} ref={answerRef} style={{maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : 0 }}
>
        <div className='py-4 px-4 text-gray-700 dark:text-gray-300 text-sm'>
          {answer}

        </div>
       </div>
    </div>
  )
}

export default FAQItem