import Page from '@/component/template/tourDetails/Page';
import toursData from '../../../data/toursData.json';

export default function TourDetailsPage({ tour }) {
  return <Page tour={tour} />;
}


export async function getStaticPaths() {
  const paths = toursData.map(t => ({ params: { id: t.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const tour = toursData.find(t => t.id === params.id);

  if (!tour) {
    return { notFound: true };
  }

  return { props: { tour } };
}
