import { useServices } from '@home-improvement-hub/data';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@home-improvement-hub/shadcn';
export function FeatureServices() {
  const { services } = useServices();
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        {!services ? (
          <pre>{JSON.stringify(services, null, 2)}</pre>
        ) : (
          services.map((service, index) => (
            <>
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>
                  {service.serviceName?.substring(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {service.serviceName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
}

export default FeatureServices;
