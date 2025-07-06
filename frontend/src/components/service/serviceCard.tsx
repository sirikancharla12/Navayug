

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ id, title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-[#f6f6f6] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer h-[400px] relative overflow-hidden flex flex-col">
      <div className="text-sm text-[#6E6E73] font-text font-medium mb-2">
        {id}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-[var(--color-dark)] leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[var(--color-soft-gray)] font-text text-sm md:text-base lg:text-lg font-medium leading-snug tracking-tight">
          {description}
        </p>
      </div>

      <div className="mt-4 flex justify-center">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-[70%] md:w-[65%] lg:w-[60%] object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
