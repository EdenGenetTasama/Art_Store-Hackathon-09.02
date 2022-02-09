import "./firstSection.css"

const FirstSection = () => {
  return (<div>
        <h2>Products</h2>
    <div className="divOfImages">
      <img src="https://www.redbubble.com/explore/client/51b4fbf26de42e4c565139e257374b55.jpg" class="rounded float-left" alt="" className="imageClass" />
      <img src="https://www.redbubble.com/explore/client/1bfa7ff72e1aeb10c953d4f8a05295df.jpg" class="rounded float-right" alt="" className="imageClass" />
      <img src="https://www.redbubble.com/explore/client/cebc38f3527daa43d16da770d15141cf.jpg" class="rounded mx-auto d-block" alt="" className="imageClass" ></img>
    </div>
    </div>
  );
};

export default FirstSection;
