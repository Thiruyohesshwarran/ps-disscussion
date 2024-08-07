import React,{useState} from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Startdiscussion = () => {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [level, setLevel] = useState('');//levels
    const [body, setBody] = useState('');
    // const [selectedSubject, setSelectedSubject] = useState('');
    //const [selectedLevel, setSelectedLevel] = useState('');
  
    const subjects = [
      { value: 'C', label: 'Programming C' },
      { value: 'Python', label: 'Programming Python' },
      { value: 'Java', label: 'Programming Java' },
      { value: 'UI|UX', label: 'UI/UX' },
    ];
  
    const levels = 
       [
        { value: 'Level1', label: 'Level 1' },
        { value: 'Level2', label: 'Level 2' },
        { value: 'Level3', label: 'Level 3' },
        { value: 'Level4', label: 'Level 4'},
        { value: 'Level5', label: 'Level 5' },
      ];
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', { title, subject, level, topic, body });
      setTitle('');
      setSubject('');
      setLevel('');
      setTopic('');
      setBody('');
    };

  return (
    <div>
        <Header/>   
        <div className='form-container'>
            <div>
                <h2>DISCUSSION FORM</h2>
                <br/>
            </div>
      
        <form className='form-group' onSubmit={handleSubmit}>
        
        <br />
        <h4>SKILL</h4>
        <select
          value={subject}
          onChange={(e) => {
              setSubject(e.target.value);
              // setSelectedSubject(e.target.value);
            }}>
          <option value="">Select Skill</option>
          {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
        <h4>LEVEL</h4>
        <select
          value={level}
          onChange={(e) => {
              setLevel(e.target.value);
              // setSelectedLevel(e.target.value);
            }}>
          <option value="">Select Level</option>
          {levels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
        </select>
        <h4>SUBJECT</h4>
        <input
          type="text"
          placeholder="Subject"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        <h4>CONTENT</h4>
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          />

        <h4>ATTACHMENTS</h4>

        <button type="submit" className='submit-btn'>SUBMIT</button>
        
        </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Startdiscussion
