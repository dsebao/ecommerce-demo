import { useForm } from "react-hook-form";

const CustomTextField = ({name, placeholder}) => {
  const { register } = useForm();
  return (
    <div className="mb-4">
      <input {...register({name})} />
    </div>
  )
}

export default CustomTextField
