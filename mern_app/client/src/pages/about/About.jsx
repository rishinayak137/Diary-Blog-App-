import Sidebar from "../../components/sidebar/Sidebar";
import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="fontAbout">A living network of curious minds</h1>
        <img
          className="aboutImg"
          src="https://www.bkacontent.com/wp-content/uploads/2020/06/about-us.jpg"
          alt=""
        />
        <br />
        <h4 className="aboutSubhead">What we provide</h4>
        <p>
            Hello welcome to CrazyInk , this is the latest free blogging app that let's you share your thoughts
            across the members.We started the project to provide a free pltform for bloggers,share your views on current affairs, 
            teach the world how to make sushi, or just offer a peek into your day. After all, your blog isn't just a place you share, 
            it's a reflection of who you are and the impression you'd like to leave with your readers. 
        </p>
        <h4 className="aboutSubhead">Our Aim</h4>
        <p>
        We're creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to 
        the incentives of advertising. It's an environment that's open to everyone but promotes substance and authenticity. And it's where deeper connections forged between 
        readers and writers can lead to discovery and growth. Together with millions of collaborators, we're building a trusted and vibrant ecosystem
         fueled by important ideas and the people who think about them.
        </p>
    
      </div>
      <Sidebar />
    </div>
  );
};