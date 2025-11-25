import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { value: '14+', label: 'Лет на рынке', icon: 'Award' },
    { value: '2500+', label: 'Картин создано', icon: 'Image' },
    { value: '1200+', label: 'Довольных клиентов', icon: 'Users' },
    { value: '15', label: 'Мастеров в команде', icon: 'Star' }
  ];

  const values = [
    {
      icon: 'Heart',
      title: 'Страсть к искусству',
      description: 'Каждая работа создается с любовью и вниманием к деталям. Мы не просто рисуем — мы создаем эмоции на холсте.'
    },
    {
      icon: 'Sparkles',
      title: 'Уникальность',
      description: 'Никаких шаблонов и массового производства. Каждая картина — это эксклюзивное произведение, созданное специально для вас.'
    },
    {
      icon: 'Palette',
      title: 'Мастерство',
      description: 'Наши художники — профессионалы с многолетним опытом и академическим образованием. Владение всеми техниками живописи.'
    },
    {
      icon: 'Zap',
      title: 'Инновации',
      description: 'Сочетаем классические техники с современными подходами. 3D-картины, смешанные техники, экспериментальные материалы.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Основание студии',
      description: 'Небольшая мастерская с тремя художниками и большой мечтой',
      icon: 'Rocket'
    },
    {
      year: '2013',
      title: 'Первая выставка',
      description: 'Участие в городской выставке современного искусства',
      icon: 'Frame'
    },
    {
      year: '2016',
      title: 'Расширение команды',
      description: 'Присоединились мастера 3D-живописи и акварелисты',
      icon: 'Users'
    },
    {
      year: '2020',
      title: 'Онлайн-галерея',
      description: 'Запуск цифровой платформы для заказа картин',
      icon: 'Globe'
    },
    {
      year: '2024',
      title: 'Международное признание',
      description: 'Работы наших художников в коллекциях по всему миру',
      icon: 'Trophy'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              О нашей студии
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы создаем искусство, которое вдохновляет и преображает пространство. 
              С 2010 года помогаем людям наполнить свои дома красотой и смыслом.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name={stat.icon as any} size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-center mb-12">Наши ценности</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="hover:shadow-xl transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={value.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-center mb-4">Наша история</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Путь от маленькой мастерской до признанной студии искусства
            </p>
            <div className="max-w-3xl mx-auto">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className="flex gap-6 mb-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shrink-0">
                      <Icon name={event.icon as any} size={24} />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-primary/50 to-secondary/20 mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1 mb-6 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="text-sm text-primary font-bold mb-1">{event.year}</div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none animate-scale-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Присоединяйтесь к нашей истории</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Станьте частью нашей творческой семьи. Закажите уникальную картину 
                и добавьте частичку искусства в свою жизнь.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#order" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                  Заказать картину
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </a>
                <a href="/gallery" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                  Посмотреть работы
                  <Icon name="Images" className="ml-2" size={18} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
