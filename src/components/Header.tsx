import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="relative z-20 py-8 text-center">
      <div className="flex items-center justify-center mb-4">
        <Icon
          name="Telescope"
          className="w-12 h-12 text-primary mr-4 animate-glow"
        />
        <h1 className="font-orbitron text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text">
          ПЛАНЕТАРИЙ
        </h1>
        <Icon
          name="Rocket"
          className="w-12 h-12 text-accent ml-4 animate-pulse-slow"
        />
      </div>

      <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
        Исследуйте космос через призму высоких технологий
      </p>

      <div className="mt-6 flex items-center justify-center space-x-8">
        <div className="flex items-center text-primary">
          <Icon name="Satellite" className="w-5 h-5 mr-2 animate-pulse" />
          <span className="text-sm font-medium">LIVE</span>
        </div>
        <div className="flex items-center text-accent">
          <Icon name="Globe" className="w-5 h-5 mr-2 animate-pulse" />
          <span className="text-sm font-medium">СВЯЗЬ УСТАНОВЛЕНА</span>
        </div>
        <div className="flex items-center text-secondary">
          <Icon name="Zap" className="w-5 h-5 mr-2 animate-pulse" />
          <span className="text-sm font-medium">ЭНЕРГИЯ 100%</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
