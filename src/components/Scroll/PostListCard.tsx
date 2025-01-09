import { IProduct } from 'models';


interface IPost {
  id: number,
  title: any,
  curPage: number;
  totalPage: number;
}
const Product = ({ post }: any) => {
  const {
    id,
    title,
    // price,
    // installments,
    // currencyId,
    // currencyFormat,
    // isFreeShipping,
  } = post;
}

const PostListCard = ({ post }: any) => {
  return (
    <>{post.id} &nbsp;&nbsp;&nbsp;&nbsp;
      {post.title}
    </>
    
  );
};

export default PostListCard;
