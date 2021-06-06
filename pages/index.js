import Layout from "@/components/Layout";
import ContentContainer from "@/components/ContentContainer";
import Carousel from "@/components/Carousel";
import CarouselSlide from "@/components/CarouselSlide";

export default function Home() {
  return (
    <Layout>
      <main>
        <Carousel>
          <CarouselSlide
            heading='We Do It All'
            slogan='Residential and Commercial'
            image='/images/kitchen.jpeg'
            image_alt='Career_jpeg'
            link='/'
          />

          <CarouselSlide
            heading='Mamma Bear Cleaning'
            slogan='House Keeping Kept Simple'
            image='https://images.pexels.com/photos/5217897/pexels-photo-5217897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            image_alt='plumbing2'
            link='/'
          />
        </Carousel>

        <ContentContainer pageName='home'>
          <h1 className='text-center'>Mamma Bear Cleaning</h1>
          <p className='tag-line text-center'>A Gatlinburg Cleaning Company</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta a
            esse distinctio optio, numquam ducimus ipsum quia ratione alias
            sapiente asperiores mollitia suscipit earum, facilis laudantium
            incidunt eveniet quod explicabo?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta a
            esse distinctio optio, numquam ducimus ipsum quia ratione alias
            sapiente asperiores mollitia suscipit earum, facilis laudantium
            incidunt eveniet quod explicabo?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta a
            esse distinctio optio, numquam ducimus ipsum quia ratione alias
            sapiente asperiores mollitia suscipit earum, facilis laudantium
            incidunt eveniet quod explicabo?
          </p>
        </ContentContainer>
      </main>
    </Layout>
  );
}
