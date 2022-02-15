import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const initial = {uname: '', email: ''}
  const [formValues, setFormValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    console.log(errors)
    if(Object.keys(errors).length === 0 && submit){
      console.log(formValues)
    }
  }, [errors])

  const handleChange = (e) => {
    // console.log(e.target)
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(formValues))
    setSubmit(true)
  }

  const validate = values => {
    const errors = {}
    if(!values.uname){
      errors.uname = 'Username is required'
    }
    if(!values.email){
      errors.email = 'Email is required'
    }
    return errors
  }

  return (
    <div className="wrapper">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
     <form onSubmit={handleSubmit}>
       <h2>Login Form</h2>
       <div className='divider'></div>
       <div className='form'>
         <div className='input-field'>
           <label>First Name</label>
           <input type="text" 
           class="input"
           placeholder='First Name'
           name='uname'
            onChange={handleChange} 
            value={formValues.uname} />
          </div>
          <p>{errors.uname}</p>
         <div className='input-field'>
           <label>Last Name</label>
           <input type="text" class="input" />
          </div>
         <div className='input-field'>
           <label>Email</label>
           <input type="email" class="input" placeholder='Email'
           name='email'
           onChange={handleChange} 
           value={formValues.email}
           />
          </div>
          <p>{errors.email}</p>
         <div className='input-field'>
           <label>Password</label>
           <input type="password" class="input" />
          </div>
         <div className='input-field'>
           <label>Gender</label>
           <div className='custom-select'>
             <select>
               <option value="">Select</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
             </select>
            </div>
          </div>
         <div className='input-field'>
           <label>Phone Number</label>
           <input type="text" class="input" />
          </div>
         <div className='input-field'>
           <label>Address</label>
           <textarea type="text" class="textarea"></textarea>
          </div>
         <div className='input-field'>
           <label>Postal Code</label>
           <input type="text" class="input" />
          </div>

          <div className='input-field terms'>
            <label className='check'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <p>Agreed to terms and conditions</p>
          </div>

          <div className='input-field'>
            <input type='submit' value='Register' className='btn' />
            </div>

       </div>
     </form>
    </div>
  );
}

export default App;
