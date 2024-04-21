'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const userSchema = z.object({
    name: z.string().min(3),
    number: z.string().min(5),
    email: z.string().email(),
    message: z.string()
});

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
    });

    const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>User Contact</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="Name" {...register("name")} />
                {errors.name && <span>name must contain 3 characters at least</span>}

                <input defaultValue={12345678} {...register("number")} />
                {errors.number && <span> number must contain 5 characters at least</span>}

                <input defaultValue="John@gmail.com" {...register("email")} />
                {errors.email && <span>Wrong email format</span>}

                <input defaultValue={"your message"} {...register("message")} />
                <input className="button" type="submit" />
            </form>
        </div>
    );
}
