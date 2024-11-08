'use client'
import { useForm } from "react-hook-form";
import TextInput from "../components/textInput/textInput";
import Button from "../components/button/button";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const TodoSchema = yup.object({
    ToDo: yup.string().required('Please enter a value')
  })

interface FormValues {
    ToDo: string;
}

const PracticeForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(TodoSchema)
  });

  const onSubmit = (data: FormValues) => {
    console.log(`submitted ${data.ToDo}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        register={register("ToDo")}
        name={"ToDo"}
        inputProps={{ placeholder: "enter to do here" }}
        type={"text"}
        label={'to do label'}
        errors={errors}
      />
     <Button type="submit">Submit</Button>
    </form>
  );
};

export default PracticeForm;
