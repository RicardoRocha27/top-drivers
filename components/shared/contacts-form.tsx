'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Loader } from 'lucide-react';

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
  const t = useTranslations('emailjs');
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, { message: t('name.error') }),
    email: z
      .string()
      .email({ message: t('email.error') })
      .min(1, { message: t('email.error') }),
    message: z
      .string()
      .min(1, { message: t('body.error') })
      .max(255, { message: t('body.error') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const formTemplate = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formTemplate,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(() => {
          toast.success(t('success'));
          form.reset();
        })
        .finally(() => setIsLoading(false));
    } catch {
      toast.error(t('error'));
    }
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
                    maxLength={255}
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
            {isLoading ? (
              <div className="animate-spin">
                <Loader />
              </div>
            ) : (
              buttonLabel
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
