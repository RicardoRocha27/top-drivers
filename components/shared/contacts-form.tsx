"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1).max(255),
});

type ContactsFormProps = {
  nameLabel: string;
  emailLabel: string;
  bodyLabel: string;
  buttonLabel: string;
};

export const ContactsForm = ({
  nameLabel,
  emailLabel,
  bodyLabel,
  buttonLabel,
}: ContactsFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const isLoading: boolean = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // TODO: add emailjs logic
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-between h-full"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder={nameLabel}
                    className="placeholder:text-foreground/80"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder={emailLabel}
                    className=" placeholder:text-foreground/80"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isLoading}
                    placeholder={bodyLabel}
                    className="resize-none h-32 placeholder:text-foreground/80"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-6 space-x-2 flex items-center  w-full">
          <Button
            disabled={isLoading}
            type="submit"
            variant="accent"
            className="w-full"
          >
            {buttonLabel}
          </Button>
        </div>
      </form>
    </Form>
  );
};
