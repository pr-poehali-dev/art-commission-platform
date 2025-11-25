import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    technique: '',
    size: '',
    description: ''
  });

  const techniques = [
    { id: 'oil', name: 'Масло', icon: 'Palette', description: 'Классическая техника с богатыми цветами' },
    { id: 'watercolor', name: 'Акварель', icon: 'Droplets', description: 'Легкая и воздушная техника' },
    { id: 'acrylic', name: 'Акрил', icon: 'Brush', description: 'Яркие цвета и быстрое высыхание' },
    { id: '3d', name: '3D картины', icon: 'Box', description: 'Объемные картины с использованием глины' }
  ];

  const portfolio = [
    { id: 1, title: 'Закат над морем', technique: 'Масло', size: '60x80 см', image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/1d2bafe6-6925-4f82-b2b6-68feb107f647.jpg' },
    { id: 2, title: 'Весенние цветы', technique: 'Акварель', size: '40x50 см', image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/922e2053-35a0-484c-979e-6d60e7d7e1c9.jpg' },
    { id: 3, title: 'Городской пейзаж', technique: 'Акрил', size: '70x90 см', image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/ea172904-6dfd-44e7-9554-6ddc3b690fae.jpg' },
    { id: 4, title: 'Абстракция', technique: '3D', size: '50x70 см', image: '' }
  ];

  const masters = [
    { id: 1, name: 'Анна Петрова', specialization: 'Масло, классика', experience: '15 лет' },
    { id: 2, name: 'Дмитрий Соколов', specialization: 'Акварель, пейзажи', experience: '12 лет' },
    { id: 3, name: 'Елена Волкова', specialization: 'Акрил, абстракция', experience: '10 лет' },
    { id: 4, name: 'Михаил Орлов', specialization: '3D картины', experience: '8 лет' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заказ отправлен!",
      description: "Мы свяжемся с вами в ближайшее время для обсуждения деталей."
    });
    setFormData({ name: '', email: '', phone: '', technique: '', size: '', description: '' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
            Искусство на холсте
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Создаём уникальные картины по вашим пожеланиям. Масло, акварель, акрил, 3D — любая техника для вашего интерьера
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать картину
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Техники рисования</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите технику, которая подходит именно вам
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((tech, index) => (
              <Card 
                key={tech.id} 
                className="hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={tech.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{tech.name}</CardTitle>
                  <CardDescription className="text-base">{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры наших работ в разных техниках
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((work, index) => (
              <Card 
                key={work.id} 
                className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 relative overflow-hidden">
                  {work.image ? (
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                      🎨
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{work.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Palette" size={16} className="text-primary" />
                      {work.technique}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Maximize" size={16} className="text-primary" />
                      {work.size}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Наши мастера</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Профессиональные художники с многолетним опытом
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {masters.map((master, index) => (
              <Card 
                key={master.id} 
                className="text-center hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-4xl text-white">
                    👨‍🎨
                  </div>
                  <CardTitle className="text-2xl">{master.name}</CardTitle>
                  <CardDescription>
                    <div className="mt-3 space-y-2 text-base">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Palette" size={16} className="text-primary" />
                        {master.specialization}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Award" size={16} className="text-primary" />
                        Опыт: {master.experience}
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl font-bold text-center mb-4">Заказать картину</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Заполните форму, и мы свяжемся с вами для обсуждения деталей
          </p>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="technique">Техника рисования *</Label>
                    <Select 
                      value={formData.technique}
                      onValueChange={(value) => setFormData({...formData, technique: value})}
                      required
                    >
                      <SelectTrigger id="technique">
                        <SelectValue placeholder="Выберите технику" />
                      </SelectTrigger>
                      <SelectContent>
                        {techniques.map(tech => (
                          <SelectItem key={tech.id} value={tech.id}>
                            {tech.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Размер</Label>
                    <Input 
                      id="size" 
                      placeholder="Например: 50x70 см"
                      value={formData.size}
                      onChange={(e) => setFormData({...formData, size: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание и пожелания *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Опишите, какую картину вы хотите заказать: сюжет, цветовая гамма, стиль..."
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заказ
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Искусство на холсте</h3>
          <p className="text-muted-foreground mb-6">
            Создаём уникальные картины с 2010 года
          </p>
          <div className="flex justify-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Phone" size={20} />
              +7 (999) 123-45-67
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Mail" size={20} />
              info@art-canvas.ru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;