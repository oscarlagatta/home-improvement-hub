import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert, AlertDescription,
  AlertTitle
} from '@home-improvement-hub/shadcn';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export function App() {
  return (
    <div className="container mx-auto px-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
