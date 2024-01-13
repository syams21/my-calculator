import './App.css'

function App() {
    return (
        <div className='main-wrapper p-3 rounded'>
            <h2 className='text-light mt-2'>Calculator</h2>
            <div className='display text-light text-end mb-4 mt-3 p-3'>
                329178 <br />
                932478
            </div>

            <div className='keypad d-flex flex-column gap-1'>
                <div className='col d-flex gap-1'>
                    <button className='clear-button'>C</button>
                    <button>{'<'}</button>
                    <button>%</button>
                    <button>/</button>
                </div>
                    
                <div className='col d-flex gap-1'>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>X</button>
                </div>

                <div className='col d-flex gap-1'>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                </div>

                <div className='col d-flex gap-1'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                </div>

                <div className='col d-flex gap-1'>
                    <button>.</button>
                    <button>0</button>
                    <button className='enter-button flex-grow-1'>=</button>
                </div>
                    
                    
                    
                    
            </div>
        </div>
    )
}

export default App
