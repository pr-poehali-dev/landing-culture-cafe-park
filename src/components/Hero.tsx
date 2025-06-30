import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-gray-900 mb-6">
          Три уникальных пространства
        </h1>
        <p className="font-open-sans text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Культурный центр, кафе и парк развлечений в одном месте — для
          творчества, отдыха и активного времяпровождения
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-2xl p-8 h-64 flex flex-col justify-center items-center hover:bg-purple-50 transition-colors">
              <Icon name="Theater" size={48} className="text-purple-600 mb-4" />
              <h3 className="font-montserrat font-semibold text-2xl text-gray-900 mb-2">
                Амбар
              </h3>
              <p className="font-open-sans text-gray-600 text-center">
                Пространство для творчества и развития
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-2xl p-8 h-64 flex flex-col justify-center items-center hover:bg-purple-50 transition-colors">
              <Icon name="Coffee" size={48} className="text-purple-600 mb-4" />
              <h3 className="font-montserrat font-semibold text-2xl text-gray-900 mb-2">
                The Стекляшка
              </h3>
              <p className="font-open-sans text-gray-600 text-center">
                Вкуснейшая неаполитанская пицца
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-gray-50 rounded-2xl p-8 h-64 flex flex-col justify-center items-center hover:bg-purple-50 transition-colors">
              <Icon name="MapPin" size={48} className="text-purple-600 mb-4" />
              <h3 className="font-montserrat font-semibold text-2xl text-gray-900 mb-2">
                Лайф Парк
              </h3>
              <p className="font-open-sans text-gray-600 text-center">
                Активный отдых в поселке СОТЫ
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
}
