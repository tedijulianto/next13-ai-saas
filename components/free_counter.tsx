"use client";

import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { MAX_FREE_COUNTS } from "@/constants";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use_pro_modal";
import { Card, CardContent } from "@/components/ui/card";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const FreeCounter = ({ apiLimitCount = 0, isPro = false }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);

  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress className="h-3" value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button onClick={proModal.onOpen} className="w-full" variant="premium">
            Upgrade <Zap className="w-4 h-4 fill-white ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
