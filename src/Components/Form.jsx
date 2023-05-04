import Button from './Button'

export function Form () {
  return (
    <form className="w-full h-auto border p-4 rounded-lg flex flex-col gap-3 shadow-md" action="">
      <input type="text" placeholder="Name" className="formInput" />
      <input type="text" placeholder="Email" className="formInput" />
      <input type="number" placeholder="Number" className="formInput" />
      <textarea className="bg-formBox w-full h-40 placeholder:pl-2 pt-2 border" name="Messaje" placeholder="Messaje" ></textarea>
      <Button text='Send Message' style='w-40' />
    </form>
  )
}
