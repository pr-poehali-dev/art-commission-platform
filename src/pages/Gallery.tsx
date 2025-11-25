import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const artworks = [
    {
      id: 1,
      title: 'Закат над морем',
      artist: 'Анна Петрова',
      technique: 'Масло',
      size: '60x80 см',
      year: '2024',
      price: '45 000 ₽',
      image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/1d2bafe6-6925-4f82-b2b6-68feb107f647.jpg',
      description: 'Завораживающий закат, написанный в технике классической живописи. Богатые оттенки оранжевого и фиолетового создают атмосферу умиротворения.',
      category: 'oil'
    },
    {
      id: 2,
      title: 'Весенние цветы',
      artist: 'Дмитрий Соколов',
      technique: 'Акварель',
      size: '40x50 см',
      year: '2024',
      price: '25 000 ₽',
      image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/922e2053-35a0-484c-979e-6d60e7d7e1c9.jpg',
      description: 'Нежный букет весенних цветов, выполненный в воздушной акварельной технике. Каждый мазок передает легкость и свежесть весеннего утра.',
      category: 'watercolor'
    },
    {
      id: 3,
      title: 'Городской пейзаж',
      artist: 'Елена Волкова',
      technique: 'Акрил',
      size: '70x90 см',
      year: '2023',
      price: '55 000 ₽',
      image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/ea172904-6dfd-44e7-9554-6ddc3b690fae.jpg',
      description: 'Динамичная композиция современного города. Яркие акриловые краски передают энергию и ритм городской жизни.',
      category: 'acrylic'
    },
    {
      id: 4,
      title: 'Абстракция в движении',
      artist: 'Михаил Орлов',
      technique: '3D картина',
      size: '50x70 см',
      year: '2024',
      price: '70 000 ₽',
      image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/c0e101f6-ee3b-4e34-b890-a6a61ffe6d5a.jpg',
      description: 'Уникальная объемная работа с использованием глины и смешанных материалов. Игра света и тени создает постоянно меняющееся восприятие.',
      category: '3d'
    },
    {
      id: 5,
      title: 'Лавандовое поле',
      artist: 'Анна Петрова',
      technique: 'Масло',
      size: '80x100 см',
      year: '2024',
      price: '65 000 ₽',
      image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/cb6db077-7d74-49ec-934d-c3029ad63ac6.jpg',
      description: 'Бескрайние поля лаванды в Провансе. Импрессионистская техника создает ощущение движения и аромата цветов.',
      category: 'oil'
    },
    {
      id: 6,
      title: 'Неоновая абстракция',
      artist: 'Елена Волкова',
      technique: 'Акрил',
      size: '90x120 см',
      year: '2024',
      price: '85 000 ₽',
      image: 'https://cdn.poehali.dev/projects/0b12d4cd-2c3c-4b2c-bb7a-323664aa5852/files/f9705733-c3cc-4b74-81f4-822700fd6794.jpg',
      description: 'Смелая геометрическая композиция с яркими неоновыми цветами. Современное искусство для современных интерьеров.',
      category: 'acrylic'
    }
  ];

  const filters = [
    { id: 'all', label: 'Все работы', icon: 'LayoutGrid' },
    { id: 'oil', label: 'Масло', icon: 'Palette' },
    { id: 'watercolor', label: 'Акварель', icon: 'Droplets' },
    { id: 'acrylic', label: 'Акрил', icon: 'Brush' },
    { id: '3d', label: '3D', icon: 'Box' }
  ];

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Галерея работ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Коллекция уникальных произведений искусства от наших мастеров
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
            {filters.map(f => (
              <Button
                key={f.id}
                variant={filter === f.id ? "default" : "outline"}
                onClick={() => setFilter(f.id)}
                className="gap-2"
              >
                <Icon name={f.icon as any} size={18} />
                {f.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((work, index) => (
              <Card
                key={work.id}
                className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedWork(work)}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  {work.image ? (
                    <>
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Eye" size={16} />
                            <span>Посмотреть детали</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-8xl opacity-30">
                      🎨
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {work.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground mb-4">{work.artist}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Palette" size={14} />
                      {work.technique}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Maximize" size={14} />
                      {work.size}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedWork && (
            <>
              <DialogTitle className="text-3xl font-bold">{selectedWork.title}</DialogTitle>
              <DialogDescription className="sr-only">
                Детали картины {selectedWork.title}
              </DialogDescription>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                  {selectedWork.image ? (
                    <img
                      src={selectedWork.image}
                      alt={selectedWork.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-9xl opacity-30">
                      🎨
                    </div>
                  )}
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Описание</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedWork.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="User" size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Художник</p>
                        <p className="font-semibold">{selectedWork.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Palette" size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Техника</p>
                        <p className="font-semibold">{selectedWork.technique}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Maximize" size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Размер</p>
                        <p className="font-semibold">{selectedWork.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Год создания</p>
                        <p className="font-semibold">{selectedWork.year}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{selectedWork.price}</span>
                    </div>
                    <Button size="lg" className="w-full">
                      Заказать похожую
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;