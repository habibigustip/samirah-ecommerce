"use client"

import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormSchema, onSubmit } from "./actions";

export default function Login() {
  const formLogin = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
  
  return (
    <Card className="w-[350px] h-fit">
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
        <CardDescription>Enter your e-mail and password</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...formLogin}>
        <form onSubmit={formLogin.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={formLogin.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formLogin.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" className="text-right">Submit</Button>
          </div>
        </form>
      </Form>
      </CardContent>
    </Card>
  )
}
