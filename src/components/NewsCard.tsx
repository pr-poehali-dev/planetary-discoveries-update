import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  icon: string;
  gradient: string;
}

const NewsCard = ({
  title,
  description,
  category,
  date,
  icon,
  gradient,
}: NewsCardProps) => {
  return (
    <Card
      className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 cyber-border animate-float ${gradient}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-primary/20 text-primary border-primary/30 neon-glow">
            {category}
          </Badge>
          <Icon
            name={icon}
            className="w-6 h-6 text-accent animate-pulse-slow group-hover:animate-glow transition-all duration-300"
          />
        </div>

        <CardTitle className="font-orbitron text-xl group-hover:neon-text group-hover:text-primary transition-all duration-300">
          {title}
        </CardTitle>

        <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="flex items-center text-sm text-muted-foreground">
          <Icon name="Calendar" className="w-4 h-4 mr-2" />
          {date}
        </div>
      </CardContent>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default NewsCard;
