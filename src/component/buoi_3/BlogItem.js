
const Thumbnail = () => {
  return <div style={{backgroundColor:"red",justifyContent:"center",alignItems:"center",borderRadius:"10px", width:100,height:100}}>
    <h1 style={{color:"#ffff",fontSize:"80px", fontWeight:500}}>{"H"}</h1>
  </div>;
};

const BlogItem = (props) => {
    const {title,description}=props.blog;
  return (
    <div style={{display:"flex"}}>
      <Thumbnail word={title?.[0]} bgColor="pink" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
