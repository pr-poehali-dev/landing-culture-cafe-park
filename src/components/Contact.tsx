import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Contact() {
  const contacts = [
    {
      name: "Культурный центр Амбар",
      phone: "+7 (xxx) xxx-xx-xx",
      address: "Адрес центра",
      email: "ambar@example.com",
    },
    {
      name: "Кафе The Стекляшка",
      phone: "+7 (xxx) xxx-xx-xx",
      address: "Адрес кафе",
      email: "steklyashka@example.com",
    },
    {
      name: "Лайф Парк",
      phone: "+7 (xxx) xxx-xx-xx",
      address: "Поселок СОТЫ",
      email: "lifepark@example.com",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-4">
            Контакты
          </h2>
          <p className="font-open-sans text-xl text-gray-300">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <h3 className="font-montserrat font-semibold text-xl text-white mb-6">
                  {contact.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-center text-gray-300">
                    <Icon name="Phone" size={20} className="mr-3" />
                    <span className="font-open-sans">{contact.phone}</span>
                  </div>

                  <div className="flex items-center justify-center text-gray-300">
                    <Icon name="MapPin" size={20} className="mr-3" />
                    <span className="font-open-sans">{contact.address}</span>
                  </div>

                  <div className="flex items-center justify-center text-gray-300">
                    <Icon name="Mail" size={20} className="mr-3" />
                    <span className="font-open-sans">{contact.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-montserrat font-semibold text-2xl text-white mb-4">
            Есть вопросы?
          </h3>
          <p className="font-open-sans text-gray-300 mb-8">
            Напишите нам, и мы обязательно ответим
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
}
