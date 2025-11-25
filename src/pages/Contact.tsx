import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
      description: 'Звоните с 10:00 до 20:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@art-canvas.ru',
      link: 'mailto:info@art-canvas.ru',
      description: 'Ответим в течение 24 часов'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Художников, 15',
      link: 'https://maps.google.com',
      description: 'Приходите на экскурсию'
    },
    {
      icon: 'Clock',
      title: 'Часы работы',
      value: 'Пн-Пт: 10:00 - 20:00',
      link: '',
      description: 'Сб-Вс: 11:00 - 18:00'
    }
  ];

  const socials = [
    { icon: 'Instagram', name: 'Instagram', link: '#', color: 'hover:text-pink-500' },
    { icon: 'Facebook', name: 'Facebook', link: '#', color: 'hover:text-blue-600' },
    { icon: 'Youtube', name: 'YouTube', link: '#', color: 'hover:text-red-600' },
    { icon: 'Send', name: 'Telegram', link: '#', color: 'hover:text-blue-500' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время."
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить вашу будущую картину? Мы всегда рады новым проектам и интересным идеям
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contacts.map((contact, index) => (
              <Card
                key={contact.title}
                className="hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={contact.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-lg font-semibold text-primary hover:underline"
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl">Напишите нам</CardTitle>
                <CardDescription className="text-base">
                  Заполните форму, и мы свяжемся с вами для обсуждения деталей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашей идее или задайте вопрос..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
                <CardHeader>
                  <CardTitle className="text-2xl">Посетите нашу студию</CardTitle>
                  <CardDescription className="text-base">
                    Приглашаем на экскурсию по мастерской
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Увидите процесс создания картин, пообщаетесь с художниками, 
                    посмотрите готовые работы и работы в процессе. Экскурсия бесплатная, 
                    но требуется предварительная запись.
                  </p>
                  <Button variant="outline" className="w-full">
                    Записаться на экскурсию
                    <Icon name="Calendar" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Мы в соцсетях</CardTitle>
                  <CardDescription className="text-base">
                    Подписывайтесь и следите за новыми работами
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        className={`flex items-center gap-3 p-4 rounded-lg border hover:shadow-md transition-all ${social.color}`}
                      >
                        <Icon name={social.icon as any} size={24} />
                        <span className="font-semibold">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-2xl shrink-0">
                      ⚡
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Срочный заказ?</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Можем выполнить работу в ускоренном режиме за дополнительную плату
                      </p>
                      <a href="tel:+79991234567" className="text-primary font-semibold hover:underline">
                        Позвонить прямо сейчас →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-none animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center text-4xl">
                💬
              </div>
              <h3 className="text-3xl font-bold mb-4">Есть вопросы?</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Не стесняйтесь! Мы с радостью ответим на все ваши вопросы 
                о процессе создания, техниках, ценах и сроках.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+79991234567">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
