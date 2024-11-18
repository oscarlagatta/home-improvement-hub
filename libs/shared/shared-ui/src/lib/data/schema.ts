import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
  // id: z.string(),
  // title: z.string(),
  // status: z.string(),
  // label: z.string(),
  // priority: z.string(),

  userID: z.number(),
  fullName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  city: z.string(),
  stateOrProvince: z.string(),
  postalCode: z.string(),
  country: z.string(),
  jobTitle: z.string(),
  bio: z.string(),
  createdDate: z.string(),
  lastUpdatedDate: z.string(),
  // label: z.string(),
});

export type User = z.infer<typeof userSchema>;
