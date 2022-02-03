import Seo from "../../components/Seo";

const Detail = ({ params }) => {
  const [title, id] = params;

  return (
    <>
      <Seo title="Detail" />
      <h4>{title}</h4>
    </>
  );
};

export const getServerSideProps = ({ params: { params } }) => {
  return {
    props: {
      params,
    },
  };
};

export default Detail;
