export default function Gallery() {
  const galleryItems = [
    {
      title: "Культурный центр Амбар",
      description: "Просторные залы для мероприятий",
      image: "/placeholder.svg",
    },
    {
      title: "Мастер-классы",
      description: "Творческие занятия для всех возрастов",
      image: "/placeholder.svg",
    },
    {
      title: "The Стекляшка",
      description: "Уютная атмосфера кафе",
      image: "/placeholder.svg",
    },
    {
      title: "Неаполитанская пицца",
      description: "Аутентичные рецепты из Италии",
      image: "/placeholder.svg",
    },
    {
      title: "Лайф Парк СОТЫ",
      description: "Современные спортивные площадки",
      image: "/placeholder.svg",
    },
    {
      title: "Активный отдых",
      description: "Разнообразные виды спорта",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
            Галерея
          </h2>
          <p className="font-open-sans text-xl text-gray-600">
            Взгляните на наши пространства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-montserrat font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="font-open-sans text-sm opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
