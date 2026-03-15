// npm install react-hook-form
import { useForm } from 'react-hook-form'

function BookingFormRHF() {
  // 1. TODO: useForm gives you register, handleSubmit, and formState
  const {register, handleSubmit, formState: {errors}} = useForm();
  

  // 2. TODO: Write onSubmit — receives data object with all field values
  //    For now, just alert the name and tickets
  function onSubmit(data) {
    alert(`Hello ${data.name}, your ticket is ${data.tickets}.`);
  }

  return (
    <div>
      <h2>Book Tickets (React Hook Form)</h2>
      {/*TODO: Add handleSubmit and pass onSubmit to it  */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="name">Name</label><br />
        {/* 3. TODO: Register the name to form and add validation rules to this input */}
        <input id="name" {...register('name', {required: 'requires name'})}/>
        {/* 4. TODO: Show errors.name.message here if it exists */}
        {errors.name && <p>{errors.name.message}</p>}
        <br /><br />

        <label htmlFor="email">Email</label><br />
        {/* 3. TODO: Register email — required, and must contain '@' using pattern validation */}
        <input id="email" {...register('email', {required: 'requires email', includes: "@"})}/>
        {/* 4. TODO: Show errors.email.message here if it exists */}
        {errors.email && <p>{errors.email.message}</p>}
        <br /><br />

        <label htmlFor="tickets">Tickets</label><br />
        {/* 3. TODO: Register tickets — required */}
        <select id="tickets" {...register('tickets', {required: 'requires valid tickets'})}>
          <option value="">— select —</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {/* 4. TODO: Show errors.tickets.message here if it exists */}
        {errors.tickets && <p>{errors.tickets.message}</p>}
        <br /><br />

        <button type="submit">Book Now</button>
      </form>
    </div>
  )
}

export default BookingFormRHF
