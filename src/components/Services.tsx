import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Services() {
  const services = [
    {
      category: "Культурный центр Амбар",
      icon: "Home",
      items: [
        "Лекции и семинары",
        "Мастер-классы",
        "Встречи клубов по интересам",
        "Концерты и выставки",
        "Спектакли и представления",
      ],
    },
    {
      category: "Кафе The Стекляшка",
      icon: "Coffee",
      items: [
        "Неаполитанская пицца",
        "Домашняя атмосфера",
        "Гостеприимный сервис",
        "Душевная обстановка",
        "Авторские напитки",
      ],
    },
    {
      category: "Лайф Парк",
      icon: "Trophy",
      items: [
        "Футбольное поле",
        "Баскетбольная площадка",
        "Теннисные корты",
        "Настольный теннис",
        "Дартс и игровые зоны",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="font-open-sans text-xl text-gray-600">
            Каждое пространство создано для вашего комфорта и удовольствия
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-green-600 mr-3"
                  />
                  <h3 className="font-montserrat font-semibold text-xl text-gray-900">
                    {service.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-3 mt-1 flex-shrink-0"
                      />
                      <span className="font-open-sans text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
