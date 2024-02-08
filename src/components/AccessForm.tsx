import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
};

export default function AccessForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-6 relative md:flex-row md:w-[95%] md:mx-auto'
    >
      <input
        placeholder='email@example.com'
        {...register('email', {
          required: true,
          pattern: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        })}
        className='text-black w-full px-4 py-3 rounded-full md:flex-grow md:px-10'
      />
      {errors.email?.type === 'pattern' && (
        <p
          role='alert'
          className='text-[--clr-red] font-bold md:absolute md:left-10 md:top-14 md:text-sm'
        >
          Please enter a valid email address
        </p>
      )}
      <button
        type='submit'
        className='bg-gradient-to-r from-[--clr-cyan] to-[--clr-blue-accent] px-4 py-3 w-full rounded-full hover:to-[--clr-cyan] hover:brightness-105 md:flex-shrink md:max-w-56'
      >
        Get Started For Free
      </button>
    </form>
  );
}
