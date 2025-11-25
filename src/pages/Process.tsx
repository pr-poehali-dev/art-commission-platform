import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши идеи и пожелания',
      details: 'Созваниваемся или встречаемся лично, чтобы понять вашу концепцию. Обсуждаем стиль, размер, цветовую гамму и место размещения картины.',
      icon: 'MessageCircle',
      color: 'from-orange-400 to-red-500'
    },
    {
      number: '02',
      title: 'Выбор художника',
      description: 'Подбираем мастера под ваш стиль',
      details: 'Исходя из техники и стиля, который вы выбрали, предлагаем художника с соответствующей специализацией и показываем его портфолио.',
      icon: 'Users',
      color: 'from-purple-400 to-pink-500'
    },
    {
      number: '03',
      title: 'Эскиз',
      description: 'Создаём предварительный набросок',
      details: 'Художник создает эскиз или цифровой макет будущей работы. Вы можете внести правки и уточнения до начала основной работы.',
      icon: 'PenTool',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      number: '04',
      title: 'Создание',
      description: 'Художник воплощает идею в жизнь',
      details: 'Начинается творческий процесс. В зависимости от техники и размера, работа может занять от 1 до 4 недель. Отправляем фото процесса.',
      icon: 'Brush',
      color: 'from-green-400 to-emerald-500'
    },
    {
      number: '05',
      title: 'Согласование',
      description: 'Показываем готовую работу',
      details: 'Отправляем детальные фотографии готовой картины. Если нужны небольшие правки — вносим их. Только после вашего одобрения переходим к доставке.',
      icon: 'CheckCircle',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      number: '06',
      title: 'Доставка',
      description: 'Привозим и помогаем разместить',
      details: 'Аккуратно упаковываем работу и доставляем по указанному адресу. При необходимости помогаем с размещением и оформлением в раму.',
      icon: 'Package',
      color: 'from-red-400 to-pink-500'
    }
  ];

  const techniques = [
    {
      name: 'Масляная живопись',
      description: 'Классическая техника с богатыми цветами',
      time: '2-4 недели',
      icon: 'Palette',
      features: [
        'Глубина и насыщенность цветов',
        'Возможность создания текстуры',
        'Долговечность работы',
        'Подходит для больших форматов',
        'Классический музейный вид'
      ]
    },
    {
      name: 'Акварель',
      description: 'Легкая и воздушная техника',
      time: '1-2 недели',
      icon: 'Droplets',
      features: [
        'Прозрачность и легкость',
        'Нежные переходы цветов',
        'Быстрое выполнение',
        'Отлично для цветов и пейзажей',
        'Изысканный, утонченный вид'
      ]
    },
    {
      name: 'Акриловая живопись',
      description: 'Современная техника с яркими цветами',
      time: '1-3 недели',
      icon: 'Brush',
      features: [
        'Яркие насыщенные цвета',
        'Быстрое высыхание',
        'Возможность слоев и эффектов',
        'Подходит для современных стилей',
        'Устойчивость к выцветанию'
      ]
    },
    {
      name: '3D картины',
      description: 'Объемные произведения искусства',
      time: '3-5 недель',
      icon: 'Box',
      features: [
        'Объемная текстура',
        'Использование глины и материалов',
        'Эффект живого рельефа',
        'Уникальность каждой работы',
        'Wow-эффект в интерьере'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Сколько времени занимает создание картины?',
      a: 'В среднем от 1 до 4 недель в зависимости от размера, техники и сложности работы. Акварель создается быстрее всего (1-2 недели), 3D-картины требуют больше времени (3-5 недель).'
    },
    {
      q: 'Могу ли я внести изменения в процессе работы?',
      a: 'Да! После согласования эскиза мы отправляем промежуточные фото. На этом этапе можно внести правки по цвету и композиции. После завершения работы доступны только минорные корректировки.'
    },
    {
      q: 'Что если мне не понравится готовая работа?',
      a: 'Мы работаем поэтапно именно для того, чтобы избежать разочарований. Сначала согласовываем эскиз, потом показываем промежуточные результаты. Только после вашего полного одобрения считаем работу завершенной.'
    },
    {
      q: 'Нужно ли оформлять картину в раму?',
      a: 'Это ваш выбор! Мы можем подобрать и установить раму, которая подчеркнет картину. Также можем доставить работу на подрамнике без рамы — это современный минималистичный вариант.'
    },
    {
      q: 'Работаете ли вы с коммерческими заказчиками?',
      a: 'Да, создаем картины для отелей, ресторанов, офисов и других коммерческих пространств. Предлагаем специальные условия при заказе серии работ.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Процесс создания
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От первой идеи до готовой картины в вашем доме — прозрачный и понятный процесс
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <Card
                  key={step.number}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-bold shrink-0`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name={step.icon as any} size={20} className="text-primary" />
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-center mb-4">Техники и особенности</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Каждая техника имеет свои преимущества и область применения
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {techniques.map((tech, index) => (
                <Card
                  key={tech.name}
                  className="hover:shadow-xl transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon name={tech.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{tech.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Icon name="Clock" size={14} />
                          {tech.time}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">Частые вопросы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Ответы на самые популярные вопросы о работе с нами
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
