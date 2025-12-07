import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const services = [
    {
      icon: "Truck",
      title: "Легковые автомобили",
      description: "Эвакуация легковых авто любых марок и моделей"
    },
    {
      icon: "Construction",
      title: "Внедорожники и кроссоверы",
      description: "Транспортировка крупногабаритных автомобилей"
    },
    {
      icon: "Zap",
      title: "Срочная подача",
      description: "Приедем за 15-20 минут в любую точку города"
    },
    {
      icon: "Shield",
      title: "Страховка и безопасность",
      description: "Полное страхование груза и профессиональная бригада"
    }
  ];

  const zones = [
    { name: "Центральный район", time: "15 мин" },
    { name: "Северный район", time: "20 мин" },
    { name: "Южный район", time: "25 мин" },
    { name: "Восточный район", time: "20 мин" },
    { name: "Западный район", time: "25 мин" },
    { name: "МКАД и трассы", time: "30 мин" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Truck" size={32} className="text-primary" />
          <span className="text-2xl font-bold">ЭвакуаторПро</span>
        </div>
        <a href="tel:+79991234567" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Icon name="Phone" size={20} />
          <span className="font-semibold">+7 (999) 123-45-67</span>
        </a>
      </header>

      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Эвакуатор 24/7
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Быстрая подача по всему городу и трассам. Профессиональная эвакуация любых автомобилей
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white group">
            <Icon name="Phone" size={24} className="mr-2 group-hover:animate-pulse" />
            Вызвать эвакуатор
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-white">
            <Icon name="MessageCircle" size={24} className="mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="animate-scale-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Работаем круглосуточно</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="text-4xl font-bold text-secondary">15 мин</div>
            <div className="text-sm text-muted-foreground">Среднее время подачи</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="text-4xl font-bold text-primary">5000+</div>
            <div className="text-sm text-muted-foreground">Довольных клиентов</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="text-4xl font-bold text-secondary">100%</div>
            <div className="text-sm text-muted-foreground">Гарантия безопасности</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card border-border animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name={service.icon} size={32} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-muted/30 rounded-3xl my-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Зоны обслуживания</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {zones.map((zone, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-primary transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="font-semibold">{zone.name}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Icon name="Clock" size={18} />
                <span className="text-sm font-medium">{zone.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Icon name="MapPin" size={20} className="text-primary" />
            <span className="text-primary font-semibold">Выезжаем за МКАД до 100 км</span>
          </div>
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Связаться с нами</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ситуацию" 
                      className="bg-background border-border min-h-32"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 animate-slide-in-right">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-2">Телефон</h4>
                <a href="tel:+79991234567" className="text-primary hover:underline text-lg">+7 (999) 123-45-67</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold mb-2">WhatsApp / Telegram</h4>
                <a href="https://wa.me/79991234567" className="text-secondary hover:underline text-lg">+7 (999) 123-45-67</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <a href="mailto:info@evacuator.ru" className="text-primary hover:underline text-lg">info@evacuator.ru</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold mb-2">Режим работы</h4>
                <p className="text-lg">Круглосуточно, без выходных</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t border-border mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={24} className="text-primary" />
            <span className="font-bold">ЭвакуаторПро © 2024</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
