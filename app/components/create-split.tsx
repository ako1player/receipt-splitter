"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFieldArray, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrashIcon } from "lucide-react";

const formSchema = z.object({
  items: z.array(
    z.object({
      title: z.string().min(1, "Title is required"),
      price: z.string().min(1, "Price is required"),
    })
  ),
});

export default function CreateSplit() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [
        {
          title: "",
          price: "",
        },
      ],
    },
  });

  const { control, handleSubmit } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create A New Split</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Split</DialogTitle>
          <DialogDescription>
            Create a list of items you want to add.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            {fields.map((field, index) => (
              <div key={field.id} className="flex space-x-4 items-end">
                {/* Title Field */}

                <FormField
                  control={control}
                  name={`items.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Title" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Price Field */}
                <FormField
                  control={control}
                  name={`items.${index}.price`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Price" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Remove Button */}
                <div>
                  <Button variant="outline">
                    <TrashIcon onClick={() => remove(index)} />
                  </Button>
                </div>
              </div>
            ))}

            {/* Add More Fields Button */}
            <Button
              type="button"
              variant="secondary"
              onClick={() => append({ title: "", price: "" })}
            >
              Add More Fields
            </Button>

            {/* Submit Button */}
            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
