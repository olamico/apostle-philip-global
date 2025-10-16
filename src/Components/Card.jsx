const Card = ({ image, title, subtitle, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden w-full max-w-sm">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      {/* Text Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {subtitle && (
          <p className="text-sm text-red-600 font-medium">{subtitle}</p>
        )}
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
