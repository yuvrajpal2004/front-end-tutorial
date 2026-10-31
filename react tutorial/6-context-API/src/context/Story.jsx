import React from 'react'

export const story=React.createContext();

function Story({children}) {
    const storyName={
        name:" magarMach ki kahani",
        storyLine:" magarMach ki jandagi me bahot dukh hai kya kiya jaaye "
    }
    
  return (
    <div>
      <story.Provider value={storyName}>
        {children}
      </story.Provider>
    </div>
  )
}

export default Story
