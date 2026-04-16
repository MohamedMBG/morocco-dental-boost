import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const FloatingCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 md:hidden">
      <Button
        className="h-12 w-full gap-2 font-heading font-bold shadow-cta"
        size="lg"
        asChild
      >
        <a
          href={clinicInfo.landlineHref}
          aria-label="Appeler le docteur maintenant"
          onClick={() =>
            trackButtonClick({
              buttonId: "floating-phone-cta",
              buttonText: "Appelez-nous",
              buttonLocation: "floating_cta",
              actionType: "phone_call",
              destination: clinicInfo.landlineHref,
            })
          }
        >
          <Phone className="h-4 w-4" />
          Appelez-nous
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
