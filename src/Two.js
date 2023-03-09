import React from 'react'
import { DataState } from './DataContext'

function LevelTwo() {
    const { details, detailsTwo, setDetailsTwo,setDetailsThree } = DataState();

    const handleClick = (value)=>{
        setDetailsThree([]);
        setDetailsTwo(value);
    }

    return (
        <div className='col-md-3'>
            {details.length === 0 ? <div class="card">
                <div class="card-body">
                    Empty
                </div>
            </div>
                :
                <div class="list-group">
                    {
                        details.child.map((value, index) => {
                            return <button key={value.text} onClick={() => handleClick(value)} type="button"
                                class={`list-group-item list-group-item-action`}
                                style={{ backgroundColor: `${detailsTwo === value ? "blue" : ""}`, color: `${detailsTwo === value ? "white" : ""}` }} aria-current="true">
                                {value.text}
                            </button>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default LevelTwo