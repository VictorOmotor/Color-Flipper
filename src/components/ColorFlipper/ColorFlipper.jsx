import React, {useState} from 'react'
import './colorFlipper.css';

const ColorFlipper = () => {
  const [activeTab, setActiveTab] = useState('simple')
  const [simpleColor, setSimpleColor] = useState('red')
  const [hexColor, setHexColor] = useState('#f1f5f3')
  const simplecolors = ['red', 'blue', 'green', 'indigo', 'orange', 'pink', 'yellow']
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

  const changeSimpleColor = () => {
    let randomNumber = Math.floor(Math.random() * simplecolors.length)
    setSimpleColor(simplecolors[randomNumber])
  }

  const changeHexColor = () => {
    let color = '#'
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * hex.length);
      color += hex[randomNumber]
    }
    setHexColor(color)
  }

  return (
    <div className="wrapper" style={{backgroundColor: `${activeTab === 'simple' ? simpleColor : hexColor}`}}>
          <nav>
              <div className="container">
                  <div className="flex justify-between align-items">
                    <h1>Color Flipper</h1>
                    <div className="tabs flex gap-3">
                      <h5 className={`cursor-pointer ${
                        activeTab === 'simple' ?
                        'activeTab' : ''
                      }`}
                      role="button" 
                      onClick={() => setActiveTab
                      ('simple')}
                      >
                        Simple
                      </h5>
                      <h5 className={`cursor-pointer ${
                        activeTab === 'simple' ?
                        '' : 'activeTab'
                      }`}
                      role="button" 
                      onClick={() => setActiveTab
                      ('hex')}
                      >
                        Hex
                      </h5>
                    </div>   
                  </div>
              </div>
          </nav>
          <main>
            <div className="container">
              {/* {activeTab === 'simple' && ( */}
                <div className="flex vh-80 items-center justify-center">
                <div>
                  <h2>
                    Background Color: {' '}
                    {activeTab === 'simple' ? simpleColor : hexColor}{' '}
                  </h2>
                  <div className="flex justify-center items-center mt-5">
                    { activeTab === 'simple' && (
                    <button className="change-btn cursor-pointer" onClick={changeSimpleColor}>
                      Change color
                    </button>
                    )}
                    { activeTab !== 'simple' && (
                    <button className="change-btn cursor-pointer" onClick={changeHexColor}>
                      Change color
                    </button>
                    )}
                    
                  </div>
                </div>
              </div>
              
            </div>
          </main>
    </div>
  )
}

export default ColorFlipper