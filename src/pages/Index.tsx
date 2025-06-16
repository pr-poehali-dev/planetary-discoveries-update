import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import ParticleField from "@/components/ParticleField";

const Index = () => {
  const newsItems = [
    {
      title: "Обнаружена новая экзопланета",
      description:
        "Телескоп James Webb зафиксировал планету в обитаемой зоне звезды TOI-715",
      category: "ОТКРЫТИЕ",
      date: "16 июня 2025",
      icon: "Globe",
      gradient: "hover:shadow-primary/20",
    },
    {
      title: "Марсианская миссия Artemis",
      description:
        "NASA объявило о успешной посадке нового ровера на поверхность Марса",
      category: "МИССИЯ",
      date: "15 июня 2025",
      icon: "Rocket",
      gradient: "hover:shadow-secondary/20",
    },
    {
      title: "Солнечная активность",
      description:
        "Зафиксирована мощная вспышка класса X на поверхности Солнца",
      category: "СОБЫТИЕ",
      date: "14 июня 2025",
      icon: "Sun",
      gradient: "hover:shadow-accent/20",
    },
    {
      title: "Квантовый телескоп",
      description: "Представлен прототип квантового телескопа нового поколения",
      category: "ТЕХНОЛОГИИ",
      date: "13 июня 2025",
      icon: "Telescope",
      gradient: "hover:shadow-primary/20",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleField />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />

        <main className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              КОСМИЧЕСКИЕ НОВОСТИ
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {newsItems.map((item, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <NewsCard {...item} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 cyber-border">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Система мониторинга активна
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
