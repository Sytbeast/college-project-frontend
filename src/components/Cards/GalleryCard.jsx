const GalleryCard = ({ image, title, category }) => {
  return (
    <div className="group overflow-hidden rounded-xl shadow-lg bg-white">
      
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-sm capitalize">{category}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GalleryCard;
