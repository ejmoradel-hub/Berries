import { CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PickingStatus = "open" | "closed" | "ripening";

interface PickingStatusCardProps {
  status?: PickingStatus;
  message?: string;
  updatedAt?: string;
}

export function PickingStatusCard({ 
  status = "ripening", 
  message = "Berries are currently ripening. We expect our U-pick season to begin in late July. Check back soon!",
  updatedAt = "Today"
}: PickingStatusCardProps) {
  
  const statusConfig = {
    open: {
      color: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
      icon: <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />,
      label: "Open for Picking"
    },
    closed: {
      color: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
      icon: <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />,
      label: "Closed Today"
    },
    ripening: {
      color: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
      icon: <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      label: "Season Approaching"
    }
  };

  const config = statusConfig[status];

  return (
    <Card className="border-border shadow-sm overflow-hidden bg-card">
      <CardHeader className="pb-3 bg-muted/30">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-serif">Current Status</CardTitle>
          <Badge variant="outline" className={`${config.color} border px-2 py-1 flex items-center gap-1.5`}>
            {config.icon}
            <span className="font-medium">{config.label}</span>
          </Badge>
        </div>
        <CardDescription className="text-xs">Updated: {updatedAt}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-foreground/80 leading-relaxed">{message}</p>
      </CardContent>
    </Card>
  );
}