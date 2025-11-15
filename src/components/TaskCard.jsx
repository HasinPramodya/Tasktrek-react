import React from 'react'

import './TaskCard.css'
import deleteIcon from '../assets/delete.png'
import { Tag } from './Tag'

export const TaskCard = () => {
    
  return (
    <article className="task_card">
        <p className="task_text">This is Sample Text</p>
        <div className="task_card_bottom_line">
           <div className="task_card_tags">
               <Tag tagname="HTML"/>
               <Tag tagname="CSS"/>
           </div>
           <div className="task_card_delete">
             <img src={deleteIcon} alt="delete" className='delete_icon'/>
           </div>
        </div>
    </article>
  )
}
