"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "./actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function InputForm() {
  return (
    <div className="w-full h-screen flex items-center justify-center align-middle">
      <div className="flex items-center justify-center w-[50%]">
        <LoginForm />
      </div>
    </div>
  );
}

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({ defaultValues: { email: "", password: "" } });
  const {
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await login(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@provider.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormDescription>
                This is your email address used in registration.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="passcode" {...field} type="password" />
              </FormControl>
              <FormDescription>
                This is your registration's password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {" "}
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
}
