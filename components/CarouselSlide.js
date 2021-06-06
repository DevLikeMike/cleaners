import Link from "next/link";

export default function CarouselSlide({
  heading,
  image,
  image_alt,
  link,
  slogan,
}) {
  return (
    <Link href={link}>
      <div className='item flex flex-center col'>
        <div className='item__heading flex flex-center col'>
          <h2>{heading}</h2>
          <h3>{slogan}</h3>
        </div>

        <img src={image} alt={image_alt} />
      </div>
    </Link>
  );
}
