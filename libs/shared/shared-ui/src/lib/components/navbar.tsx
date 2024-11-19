import { Button } from '@home-improvement-hub/shadcn';

export const Navbar = () => (
  <nav className="gb-blue-600 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Button className="text-xl font-bold">Home Improvement Hub</Button>
      <div className="flex space-x-4">
        <Button className="text-xl font-bold">Agents</Button>
        <Button className="text-xl font-bold">Services</Button>
      </div>
    </div>
  </nav>
);
