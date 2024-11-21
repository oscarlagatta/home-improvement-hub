import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@home-improvement-hub/shadcn';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@home-improvement-hub/shadcn';
import { Input } from '@home-improvement-hub/shadcn';
import { type PostUsersData, useUsers } from '@home-improvement-hub/data';
import { UserDto } from '@home-improvement-hub/data';
import type { Options } from '@hey-api/client-axios';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 10 characters.',
  }),
  email: z.string().min(2, {
    message: 'must be valid email address.',
  }),
  phoneNumber: z.string().min(2, {
    message: 'must be phone number.',
  }),
  address: z.string().min(2, {
    message: 'must be valid phone number.',
  }),
  city: z.string().min(2, {
    message: 'must be a city.',
  }),
  stateOrProvince: z.string().min(2, {
    message: 'must be a city.',
  }),
  postalCode: z.string().min(2, {
    message: 'must be a city.',
  }),
  jobTitle: z.string().min(2, {
    message: 'must be a city.',
  }),
  country: z.string().min(2, {
    message: 'must be a city.',
  }),
});


export function FeatureCreateUser() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const {fullName, email, phoneNumber, address, postalCode, city, stateOrProvince, country, jobTitle} = values;

    const {createUser} = useUsers();

    // const newUser : UserDto = {
    //   userID: 10,
    //   fullName,
    //   email,
    //   phoneNumber,
    //   address,
    //   city,
    //   stateOrProvince,
    //   postalCode,
    //   country,
    //   jobTitle,
    //   bio: "blah blah blah",
    //   createdDate: new Date().toString(),
    //   lastUpdatedDate: new Date().toString(),
    // };
    //
    // createUser(newUser);

    alert("".concat(fullName, ", ", email, ", ",phoneNumber, " ", country) );
    //console.log(values);
  }

  return (

    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex-1 flex-row">
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Enter full name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email address" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stateOrProvince"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State/Province</FormLabel>
              <FormControl>
                <Input placeholder="Enter State or Province" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter Postal code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <select {...field} >
                  <option>France</option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>UK</option>
                  <option selected={true}>USA</option>
                </select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter job title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>

  );
}

export default FeatureCreateUser;
