import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'

function Counter() {
    const [count, SetCount] = useState(0)

    const addCount = () => {
        SetCount(count + 1);
    }

    const subCount = () => {
        if (count !== 0) {
            SetCount(count - 1);
        }
    };

    const clearCount = () => {
        SetCount(0);
    };


    return (

        <div className='centered-div'>

            <Card style={{ width: '30rem' }}>

                <Card.Body>
                    <Card.Title style={{ fontSize: '15rem' }}>{count}</Card.Title>

                    <div className='button-container'>
                        <Button onClick={clearCount} variant="secondary" style={{ fontSize: '1.5rem', width: '4rem', fontWeight: 'bold' }}>C</Button>
                        <Button onClick={subCount} variant="success" style={{ fontSize: '1.5rem', width: '4rem', fontWeight: 'bold' }} >-</Button>
                        <Button onClick={addCount} variant="success" style={{ fontSize: '1.5rem', width: '4rem', fontWeight: 'bold' }}>+</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}


export default Counter
