import React, { Component } from 'react';

interface PersonalData {
    pesel: string;
    height: number;
    eyesColor: string;
}

interface Props {
    name: string;
    age: number;
    isAbove18: boolean;
    subjects: string[];
    personalData: PersonalData;
    title?: string
}

const Foo = ({name, title, age, isAbove18, subjects, personalData}: Props) => {
        console.log(typeof name);
        console.log(typeof age);
        console.log(typeof isAbove18);

        const {pesel} = personalData;
        
        if(!isAbove18) return <h1>BŁĄD</h1>;

        return <>
            <h1>{title || 'Witaj!'}</h1>
            <p>{name}, lat {age}</p>
            <span>{pesel}</span>
            {subjects.map(subject => <p key={subject}>{subject}</p>)}
        </>
}

const App = () => {
    return <Foo 
        name="Lorem ipsum" 
        title="Cześć!" 
        age={18} 
        isAbove18={true} 
        subjects={['maths', 'english', 'geography']}
        personalData={{
            pesel: '123123123123',
            height: 180,
            eyesColor: 'brown'
        }}
    />
}

export default App;
