import { useForm } from "react-hook-form";

const AddressForm = () => {
  const styles = 'block w-full border border-1 mb-3 border-gray-400 py-2 px-4 rounded-md';

  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div>
      <hr className="mt-5"/>
      <h3 className="text-xl my-5">Shipping Address</h3>
      <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className={styles} {...register("firstName")} placeholder="First Name" required/>

          <input type="text" className={styles} {...register("lastName")} placeholder="Last Name" required/>

          <input type="text" className={styles} {...register("address1")} placeholder="Address" required/>

          <input type="email" className={styles} {...register("email")} placeholder="Email" required/>

          <input type="text" className={styles} {...register("city")} placeholder="City"/>

          <input type="text" className={styles} {...register("zip")} placeholder="ZIP / Postal Code"/>

          <button type="submit" className="mt-2 bg-purple-900 text-white hover:bg-purple-800 py-2 px-5 rounded-md p-3">Next</button>
        </form>
    </div>
  )
}

export default AddressForm
