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
          <input type="text" className={styles} {...register("firstName")} placeholder="First Name" />

          <input type="text" className={styles} {...register("lastName")} placeholder="Last Name"/>

          <input type="text" className={styles} {...register("address1")} placeholder="Address"/>

          <input type="email" className={styles} {...register("email")} placeholder="Email"/>

          <input type="text" className={styles} {...register("city")} placeholder="City"/>

          <input type="text" className={styles} {...register("zip")} placeholder="ZIP / Postal Code"/>

          <input type="submit" className="mt-2 bg-yellow-400 text-gray-900 hover:bg-yellow-400 py-2 px-5 rounded-md p-3" />
        </form>
    </div>
  )
}

export default AddressForm
